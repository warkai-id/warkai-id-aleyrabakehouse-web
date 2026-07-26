"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const AUDIO_SRC = "/audio/aleyra-jazz-ambience.mp3";
const DEFAULT_VOLUME = 0.18;
const MUTE_STORAGE_KEY = "aleyra-ambience-muted";

export interface AmbienceState {
  /** Whether playback has been requested and is active */
  isPlaying: boolean;
  /** Whether the audio is muted */
  isMuted: boolean;
  /** True after the user explicitly enabled music */
  hasUserEnabled: boolean;
  /** True if the audio file failed to load */
  audioUnavailable: boolean;
}

export interface AmbienceControls {
  /** Start playback (requires prior user gesture). Returns true on success. */
  play: () => Promise<boolean>;
  /** Pause playback */
  pause: () => void;
  /** Toggle between play and pause */
  togglePlayPause: () => void;
  /** Toggle mute/unmute */
  toggleMute: () => void;
  /** Stop playback and reset */
  stop: () => void;
}

export function useAmbiencePlayer(): [AmbienceState, AmbienceControls] {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const wasPlayingBeforeHidden = useRef(false);
  const srcAssigned = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasUserEnabled, setHasUserEnabled] = useState(false);
  const [audioUnavailable, setAudioUnavailable] = useState(false);

  // Initialise audio element once (client only) — no src yet
  useEffect(() => {
    // Read persisted mute preference
    try {
      const stored = localStorage.getItem(MUTE_STORAGE_KEY);
      if (stored === "true") setIsMuted(true);
    } catch {
      // localStorage may be blocked
    }

    const audio = new Audio();
    audio.preload = "none";
    audio.loop = true;
    audio.volume = DEFAULT_VOLUME;
    // Do NOT assign src — deferred to play()

    function handleAudioError() {
      setAudioUnavailable(true);
      setIsPlaying(false);
    }

    audio.addEventListener("error", handleAudioError);
    audioRef.current = audio;

    return () => {
      audio.removeEventListener("error", handleAudioError);
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
      audioRef.current = null;
    };
  }, []);

  // Sync muted state to audio element and localStorage
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
    try {
      localStorage.setItem(MUTE_STORAGE_KEY, String(isMuted));
    } catch {
      // Ignore storage errors
    }
  }, [isMuted]);

  // Tab visibility handling
  useEffect(() => {
    function handleVisibility() {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden) {
        wasPlayingBeforeHidden.current = !audio.paused;
        if (!audio.paused) {
          audio.pause();
          setIsPlaying(false);
        }
      } else {
        if (wasPlayingBeforeHidden.current && hasUserEnabled) {
          audio.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {
            // Browser may block resumed playback
          });
        }
      }
    }

    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, [hasUserEnabled]);

  const play = useCallback(async (): Promise<boolean> => {
    const audio = audioRef.current;
    if (!audio || audioUnavailable) return false;

    // Assign src only on the first play attempt — no eager network request
    if (!srcAssigned.current) {
      audio.src = AUDIO_SRC;
      srcAssigned.current = true;
    }

    setHasUserEnabled(true);

    try {
      await audio.play();
      setIsPlaying(true);
      return true;
    } catch {
      // play() rejected — browser policy, missing file, or decode error
      setIsPlaying(false);
      return false;
    }
  }, [audioUnavailable]);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  }, []);

  const togglePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || audioUnavailable) return;

    if (audio.paused) {
      void play();
    } else {
      pause();
    }
  }, [audioUnavailable, play, pause]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    setHasUserEnabled(false);
  }, []);

  const state: AmbienceState = {
    isPlaying,
    isMuted,
    hasUserEnabled,
    audioUnavailable,
  };

  const controls: AmbienceControls = {
    play,
    pause,
    togglePlayPause,
    toggleMute,
    stop,
  };

  return [state, controls];
}
