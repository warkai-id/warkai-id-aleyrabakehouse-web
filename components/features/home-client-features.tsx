"use client";

import { useAmbiencePlayer } from "@/components/features/audio/ambience-player";
import { AudioControls } from "@/components/features/audio/audio-controls";
import { WelcomePopup } from "@/components/features/welcome/welcome-popup";

/**
 * Client-side wrapper that mounts the welcome popup and audio controls.
 * Placed inside the homepage so the popup appears only on the main page.
 */
export function HomeClientFeatures() {
  const [ambienceState, ambienceControls] = useAmbiencePlayer();

  return (
    <>
      <WelcomePopup
        ambienceControls={ambienceControls}
        audioUnavailable={ambienceState.audioUnavailable}
      />
      <AudioControls
        state={ambienceState}
        controls={ambienceControls}
      />
    </>
  );
}
