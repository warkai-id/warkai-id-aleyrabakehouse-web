"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const YOUTUBE_VIDEO_ID = "s2vG44nAI6Y";

function getEmbedUrl(): string {
  return `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;
}

interface VideoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoPopup({ isOpen, onClose }: VideoPopupProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<Element | null>(null);
  const [iframeSrc, setIframeSrc] = useState<string | null>(null);

  // When opening: save trigger, set iframe src, pause background music
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement;
      setIframeSrc(getEmbedUrl());
      document.dispatchEvent(new CustomEvent("aleyra-audio-pause"));
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    } else {
      // Clear iframe to stop video
      setIframeSrc(null);
      // Resume background music
      document.dispatchEvent(new CustomEvent("aleyra-audio-resume"));
      // Restore body scroll
      document.body.style.overflow = "";
      // Restore focus to trigger element
      if (triggerRef.current instanceof HTMLElement) {
        triggerRef.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus the close button when dialog opens
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      // Small delay to let the dialog render
      const timer = setTimeout(() => closeButtonRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !dialogRef.current) return;

    const dialog = dialogRef.current;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const focusableEls = dialog.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableEls.length === 0) return;

      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-[fadeIn_200ms_ease_both] motion-reduce:animate-none"
      style={{ backgroundColor: "rgba(61, 36, 24, 0.6)" }}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Meet Aleyra with Chezer video"
        className="relative w-full max-w-[340px] md:max-w-[380px] bg-warm-white rounded-2xl overflow-hidden animate-[scaleIn_200ms_ease_both] motion-reduce:animate-none"
        style={{ boxShadow: "0 4px 20px rgba(93, 58, 41, 0.10)" }}
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 z-10 flex items-center justify-center w-[36px] h-[36px] rounded-full bg-warm-white/85 text-deep-cocoa hover:bg-warm-beige transition-colors duration-150 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cherry-red focus-visible:ring-offset-2"
          aria-label="Close video"
        >
          <X size={18} strokeWidth={2} aria-hidden="true" />
        </button>

        {/* Video container — 9:16 aspect ratio for YouTube Shorts */}
        <div className="relative w-full" style={{ aspectRatio: "9 / 16" }}>
          {iframeSrc && (
            <iframe
              src={iframeSrc}
              title="Meet Aleyra with Chezer"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              style={{ border: "none" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
