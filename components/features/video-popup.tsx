"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const VIDEO_IDS = ["sG9IVCvTKzo", "sR3GJ8wYIcw", "Jvg2YQgMPCw"];

interface YTPlayerInstance {
  playVideo: () => void;
  pauseVideo: () => void;
  destroy: () => void;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: {
      Player: new (elementId: string, config: Record<string, unknown>) => YTPlayerInstance;
      PlayerState: {
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
        BUFFERING: number;
        CUED: number;
      };
    };
  }
}

interface VideoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoPopup({ isOpen, onClose }: VideoPopupProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<Element | null>(null);
  const [apiReady, setApiReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const playersRef = useRef<(YTPlayerInstance | null)[]>([null, null, null]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window !== "undefined" && !window.YT) {
      if (!document.getElementById("youtube-iframe-api")) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      }

      window.onYouTubeIframeAPIReady = () => {
        setApiReady(true);
      };
    } else if (typeof window !== "undefined" && window.YT) {
      setApiReady(true);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement;
      document.dispatchEvent(new CustomEvent("aleyra-audio-pause"));
      document.body.style.overflow = "hidden";
      setActiveIndex(0);
    } else {
      document.dispatchEvent(new CustomEvent("aleyra-audio-resume"));
      document.body.style.overflow = "";
      if (triggerRef.current instanceof HTMLElement) {
        triggerRef.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && apiReady) {
      VIDEO_IDS.forEach((id, index) => {
        if (!playersRef.current[index]) {
          playersRef.current[index] = new window.YT.Player(`yt-player-${index}`, {
            videoId: id,
            playerVars: {
              autoplay: index === 0 ? 1 : 0,
              mute: 1,
              playsinline: 1,
              rel: 0,
              modestbranding: 1,
            },
            events: {
              onStateChange: (event: { data: number }) => {
                if (event.data === window.YT.PlayerState.ENDED) {
                  setActiveIndex((prev) => {
                    const next = (prev + 1) % VIDEO_IDS.length;
                    playersRef.current[next]?.playVideo();
                    return next;
                  });
                }
              },
            },
          });
        }
      });
    }

    return () => {
      if (!isOpen) {
        playersRef.current.forEach((player) => {
          if (player && typeof player.destroy === "function") {
            player.destroy();
          }
        });
        playersRef.current = [null, null, null];
      }
    };
  }, [isOpen, apiReady]);

  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      const timer = setTimeout(() => closeButtonRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

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
      if (!firstEl || !lastEl) return;
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

  const goToSlide = (index: number) => {
    if (index === activeIndex) return;
    playersRef.current[activeIndex]?.pauseVideo();
    setActiveIndex(index);
    playersRef.current[index]?.playVideo();
  };

  const goToNext = () => goToSlide((activeIndex + 1) % VIDEO_IDS.length);
  const goToPrev = () => goToSlide((activeIndex - 1 + VIDEO_IDS.length) % VIDEO_IDS.length);

  if (!isOpen) return null;

  const transition = reducedMotion
    ? { duration: 0 }
    : ({ type: "spring", stiffness: 300, damping: 30 } as const);

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
        aria-label="Meet Aleyra with Chezer video carousel"
        className="relative w-full max-w-[340px] md:max-w-[380px] bg-warm-white rounded-2xl overflow-hidden animate-[scaleIn_200ms_ease_both] motion-reduce:animate-none"
        style={{ boxShadow: "0 4px 20px rgba(93, 58, 41, 0.10)" }}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 z-30 flex items-center justify-center w-[36px] h-[36px] rounded-full bg-warm-white/85 text-deep-cocoa hover:bg-warm-beige transition-colors duration-150 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cherry-red focus-visible:ring-offset-2 backdrop-blur-sm"
          aria-label="Close video"
        >
          <X size={18} strokeWidth={2} aria-hidden="true" />
        </button>

        <div className="relative w-full overflow-hidden bg-black" style={{ aspectRatio: "9 / 16" }}>
          <motion.div
            className="flex w-full h-full"
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={transition}
          >
            {VIDEO_IDS.map((id, index) => (
              <div key={id} className="w-full h-full flex-shrink-0 relative bg-black">
                <div id={`yt-player-${index}`} className="absolute inset-0 w-full h-full border-none" />
              </div>
            ))}
          </motion.div>

          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/40 text-white/90 hover:bg-black/70 hover:text-white transition-all backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Previous video"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/40 text-white/90 hover:bg-black/70 hover:text-white transition-all backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Next video"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
            {VIDEO_IDS.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={activeIndex === i}
                className={`w-2 h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-black ${
                  activeIndex === i ? "bg-white scale-110" : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
