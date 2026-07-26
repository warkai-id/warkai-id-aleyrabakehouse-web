"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { AmbienceControls } from "@/components/features/audio/ambience-player";

const SESSION_KEY = "aleyra-welcome-dismissed";
const SCROLL_THRESHOLD = 80;

interface WelcomePopupProps {
  /** Ambience controls injected from the parent so popup can trigger playback */
  ambienceControls: AmbienceControls;
  /** Whether the audio asset is unavailable (hides music button) */
  audioUnavailable: boolean;
}

export function WelcomePopup({
  ambienceControls,
  audioUnavailable,
}: WelcomePopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [playFailed, setPlayFailed] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const hasBeenDismissed = useRef(false);

  // Open the popup once on mount if not previously dismissed this session
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "true") return;
    } catch {
      // sessionStorage unavailable, show popup
    }
    // Small delay to avoid flash before hydration completes
    const timer = setTimeout(() => setIsOpen(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // --- Lock body scroll while popup is open ---
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // --- Dismiss helper ---
  const dismiss = useCallback(() => {
    if (hasBeenDismissed.current) return;
    hasBeenDismissed.current = true;
    setIsOpen(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      // Ignore storage errors
    }
    // Restore focus to the element that had focus before the popup opened
    if (triggerRef.current) {
      triggerRef.current.focus();
      triggerRef.current = null;
    }
  }, []);

  // --- Primary action: Enter & Play Music ---
  const handlePlayMusic = useCallback(async () => {
    const success = await ambienceControls.play();
    if (success) {
      dismiss();
    } else {
      setPlayFailed(true);
    }
  }, [ambienceControls, dismiss]);

  // --- Secondary action: Continue Without Music ---
  const handleSkipMusic = useCallback(() => {
    dismiss();
  }, [dismiss]);

  // --- Focus trap ---
  useEffect(() => {
    if (!isOpen) return;

    // Save the currently focused element
    triggerRef.current = document.activeElement as HTMLElement;

    const dialog = dialogRef.current;
    if (!dialog) return;

    // Focus the dialog itself
    dialog.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        dismiss();
        return;
      }

      if (e.key === "Tab" && dialog) {
        const focusable = dialog.querySelectorAll<HTMLElement>(
          'button:not(:disabled), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0]!;
        const last = focusable[focusable.length - 1]!;

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, dismiss]);

  // --- Swipe / wheel dismissal (80px threshold) ---
  // Body scroll is locked so window.scrollY won't change.
  // Instead detect intent via wheel delta accumulation and touch delta.
  useEffect(() => {
    if (!isOpen) return;

    let wheelAccumulator = 0;
    let touchStartY: number | null = null;

    function handleWheel(e: WheelEvent) {
      wheelAccumulator += Math.abs(e.deltaY);
      if (wheelAccumulator >= SCROLL_THRESHOLD) {
        dismiss();
      }
    }

    function handleTouchStart(e: TouchEvent) {
      const touch = e.touches[0];
      if (touch) {
        touchStartY = touch.clientY;
      }
    }

    function handleTouchMove(e: TouchEvent) {
      if (touchStartY === null) return;
      const touch = e.touches[0];
      if (!touch) return;
      const delta = Math.abs(touch.clientY - touchStartY);
      if (delta >= SCROLL_THRESHOLD) {
        dismiss();
      }
    }

    function handleTouchEnd() {
      touchStartY = null;
    }

    document.addEventListener("wheel", handleWheel, { passive: true });
    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isOpen, dismiss]);

  if (!isOpen) return null;

  const showPlayButton = !audioUnavailable && !playFailed;

  return (
    <div
      className="welcome-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Aleyra Bakehouse"
      onClick={(e) => {
        // Close when clicking the backdrop (outside the dialog content)
        if (e.target === e.currentTarget) {
          dismiss();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="welcome-dialog"
        tabIndex={-1}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={handleSkipMusic}
          className="welcome-close-btn"
          aria-label="Close welcome popup"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Popup image */}
        <div className="welcome-image-wrapper">
          <Image
            src="/images/brand/popup-first-view.webp"
            alt="Aleyra Bakehouse — Handmade with love, soft burnt cheesecake"
            width={800}
            height={533}
            className="welcome-image"
            priority
            sizes="(max-width: 480px) 90vw, (max-width: 768px) 80vw, 520px"
          />
        </div>

        {/* Action buttons */}
        <div className="welcome-actions">
          {showPlayButton && (
            <button
              type="button"
              onClick={handlePlayMusic}
              className="btn-primary welcome-btn-primary"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="shrink-0"
              >
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
              Enter Aleyra &amp; Play Music
            </button>
          )}

          {playFailed && (
            <p
              className="text-sm text-cocoa-brown/70 text-center py-1"
              role="alert"
            >
              Music is not available yet. You can continue without music.
            </p>
          )}

          <button
            type="button"
            onClick={handleSkipMusic}
            className="btn-secondary welcome-btn-secondary"
          >
            Continue Without Music
          </button>
        </div>
      </div>
    </div>
  );
}
