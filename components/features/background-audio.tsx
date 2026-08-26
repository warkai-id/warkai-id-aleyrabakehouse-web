"use client";

import { useEffect, useRef, useState } from "react";

const AUDIO_SRC = "/audio/aleyra-ambient.mp3";
const DEFAULT_VOLUME = 0.22;
const STORAGE_KEY = "aleyra-music-enabled";

function VolumeOnIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function VolumeOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

export function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnabled, setIsEnabled] = useState<boolean | null>(null);

  useEffect(() => {
    let savedPref = true; // Default to true if no preference
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "false") {
        savedPref = false;
      }
    } catch {
      // Ignore storage errors
    }

    setIsEnabled(savedPref);

    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.volume = DEFAULT_VOLUME;
    audioRef.current = audio;

    let cleanupListeners = () => { };

    const attemptPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        // Autoplay blocked by browser. Wait for interaction.
        const onInteract = async () => {
          try {
            await audio.play();
            setIsPlaying(true);
          } catch {
            // Still blocked
          } finally {
            cleanupListeners();
          }
        };

        cleanupListeners = () => {
          document.removeEventListener("click", onInteract);
          document.removeEventListener("keydown", onInteract);
          document.removeEventListener("touchstart", onInteract);
        };

        document.addEventListener("click", onInteract, { once: true });
        document.addEventListener("keydown", onInteract, { once: true });
        document.addEventListener("touchstart", onInteract, { once: true });
      }
    };

    if (savedPref) {
      attemptPlay();
    }

    // --- External pause/resume via custom events (video popup) ---
    // These do NOT change localStorage — they are temporary.
    let wasPlayingBeforePause = false;

    const handleExternalPause = () => {
      if (audio && !audio.paused) {
        wasPlayingBeforePause = true;
        audio.pause();
        setIsPlaying(false);
      } else {
        wasPlayingBeforePause = false;
      }
    };

    const handleExternalResume = () => {
      if (wasPlayingBeforePause && audio) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Resume blocked — ignore silently
        });
      }
      wasPlayingBeforePause = false;
    };

    document.addEventListener("aleyra-audio-pause", handleExternalPause);
    document.addEventListener("aleyra-audio-resume", handleExternalResume);

    return () => {
      cleanupListeners();
      document.removeEventListener("aleyra-audio-pause", handleExternalPause);
      document.removeEventListener("aleyra-audio-resume", handleExternalResume);
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
      audioRef.current = null;
    };
  }, []);

  // Avoid rendering until client-side hydration sets isEnabled
  if (isEnabled === null) return null;

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setIsEnabled(false);
      try { localStorage.setItem(STORAGE_KEY, "false"); } catch { }
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
        setIsEnabled(true);
        try { localStorage.setItem(STORAGE_KEY, "true"); } catch { }
      }).catch(() => {
        // Handle play failure if needed
      });
    }
  };

  return (
    <button
      type="button"
      onClick={toggleMute}
      className="fixed z-50 bottom-[calc(env(safe-area-inset-bottom)+5.5rem)] right-4 md:bottom-8 md:right-8 flex items-center justify-center w-[44px] h-[44px] bg-warm-white border border-cocoa-brown/15 text-cocoa-brown rounded-full shadow-sm hover:shadow hover:bg-warm-white transition-all duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cherry-red focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      aria-label={isPlaying ? "Mute background music" : "Play background music"}
      title={isPlaying ? "Mute" : "Play"}
    >
      {isPlaying ? <VolumeOnIcon /> : <VolumeOffIcon />}
    </button>
  );
}
