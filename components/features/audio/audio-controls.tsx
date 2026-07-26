"use client";

import type { AmbienceState, AmbienceControls } from "./ambience-player";

// --- SVG Icon components (inline to avoid external deps) ---

function PlayIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  );
}

function VolumeOnIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function VolumeMutedIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function StopIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="6" y="6" width="12" height="12" rx="1" />
    </svg>
  );
}

// --- AudioControls component ---

interface AudioControlsProps {
  state: AmbienceState;
  controls: AmbienceControls;
}

export function AudioControls({ state, controls }: AudioControlsProps) {
  // Don't render anything if music was never started or audio is broken
  if (!state.hasUserEnabled || state.audioUnavailable) {
    return null;
  }

  return (
    <div
      className="audio-controls-bar"
      role="toolbar"
      aria-label="Background music controls"
    >
      <button
        type="button"
        onClick={controls.togglePlayPause}
        className="audio-btn"
        aria-label={state.isPlaying ? "Pause music" : "Play music"}
        title={state.isPlaying ? "Pause" : "Play"}
      >
        {state.isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>

      <button
        type="button"
        onClick={controls.toggleMute}
        className="audio-btn"
        aria-label={state.isMuted ? "Unmute music" : "Mute music"}
        title={state.isMuted ? "Unmute" : "Mute"}
      >
        {state.isMuted ? <VolumeMutedIcon /> : <VolumeOnIcon />}
      </button>

      <button
        type="button"
        onClick={controls.stop}
        className="audio-btn"
        aria-label="Stop music"
        title="Stop"
      >
        <StopIcon />
      </button>
    </div>
  );
}
