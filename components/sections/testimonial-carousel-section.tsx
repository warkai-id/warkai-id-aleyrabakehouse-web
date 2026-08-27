"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/* ------------------------------------------------
   Data
   ------------------------------------------------ */
const TESTIMONIALS = [
  { src: `/images/testimonials/TESTIMONI (1).webp`, alt: `Customer testimonial for Aleyra Bakehouse 1`, width: 1080, height: 620 },
  { src: `/images/testimonials/TESTIMONI (2).webp`, alt: `Customer testimonial for Aleyra Bakehouse 2`, width: 1080, height: 273 },
  { src: `/images/testimonials/TESTIMONI (3).webp`, alt: `Customer testimonial for Aleyra Bakehouse 3`, width: 1080, height: 265 },
  { src: `/images/testimonials/TESTIMONI (4).webp`, alt: `Customer testimonial for Aleyra Bakehouse 4`, width: 1080, height: 158 },
  { src: `/images/testimonials/TESTIMONI (5).webp`, alt: `Customer testimonial for Aleyra Bakehouse 5`, width: 1080, height: 624 },
  { src: `/images/testimonials/TESTIMONI (6).webp`, alt: `Customer testimonial for Aleyra Bakehouse 6`, width: 1080, height: 308 },
  { src: `/images/testimonials/TESTIMONI (7).webp`, alt: `Customer testimonial for Aleyra Bakehouse 7`, width: 1080, height: 258 },
  { src: `/images/testimonials/TESTIMONI (8).webp`, alt: `Customer testimonial for Aleyra Bakehouse 8`, width: 1080, height: 292 },
  { src: `/images/testimonials/TESTIMONI (9).webp`, alt: `Customer testimonial for Aleyra Bakehouse 9`, width: 1080, height: 2340 },
  { src: `/images/testimonials/TESTIMONI (10).webp`, alt: `Customer testimonial for Aleyra Bakehouse 10`, width: 1080, height: 2340 },
  { src: `/images/testimonials/TESTIMONI (11).webp`, alt: `Customer testimonial for Aleyra Bakehouse 11`, width: 1080, height: 2340 },
  { src: `/images/testimonials/TESTIMONI (12).webp`, alt: `Customer testimonial for Aleyra Bakehouse 12`, width: 1080, height: 2115 },
  { src: `/images/testimonials/TESTIMONI (13).webp`, alt: `Customer testimonial for Aleyra Bakehouse 13`, width: 1080, height: 2129 },
  { src: `/images/testimonials/TESTIMONI (14).webp`, alt: `Customer testimonial for Aleyra Bakehouse 14`, width: 1080, height: 2130 },
  { src: `/images/testimonials/TESTIMONI (15).webp`, alt: `Customer testimonial for Aleyra Bakehouse 15`, width: 1080, height: 2130 },
  { src: `/images/testimonials/TESTIMONI (16).webp`, alt: `Customer testimonial for Aleyra Bakehouse 16`, width: 1080, height: 1709 },
  { src: `/images/testimonials/TESTIMONI (17).webp`, alt: `Customer testimonial for Aleyra Bakehouse 17`, width: 1080, height: 1749 },
  { src: `/images/testimonials/TESTIMONI (18).webp`, alt: `Customer testimonial for Aleyra Bakehouse 18`, width: 1080, height: 251 },
  { src: `/images/testimonials/TESTIMONI (19).webp`, alt: `Customer testimonial for Aleyra Bakehouse 19`, width: 1080, height: 404 },
];

const TOTAL = TESTIMONIALS.length;
const AUTOPLAY_INTERVAL = 4000;

/* ------------------------------------------------
   Helpers — wrapping offset for seamless loop
   ------------------------------------------------ */
function wrapOffset(index: number, active: number, total: number): number {
  let diff = index - active;
  // Wrap to shortest path: e.g. for 14 items, offset of 8 becomes -6
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

/* ------------------------------------------------
   Per-panel style calculation
   ------------------------------------------------ */
const MAX_VISIBLE = 2; // Show center ±2 panels on desktop

function getPanelStyle(offset: number, isMobile: boolean) {
  const maxVisible = isMobile ? 1 : MAX_VISIBLE;
  const absOffset = Math.abs(offset);

  // Hide panels beyond visible range
  if (absOffset > maxVisible) {
    return {
      x: offset > 0 ? 400 : -400,
      scale: 0.6,
      rotateY: offset > 0 ? -45 : 45,
      opacity: 0,
      zIndex: 0,
      filter: "brightness(0.6)",
    };
  }

  if (absOffset === 0) {
    // Center panel — full size, no rotation
    return {
      x: 0,
      scale: 1,
      rotateY: 0,
      opacity: 1,
      zIndex: 10,
      filter: "brightness(1)",
    };
  }

  // Side panels
  const direction = offset > 0 ? 1 : -1;
  const xStep = isMobile ? 140 : 180;
  const scaleStep = isMobile ? 0.18 : 0.15;
  const rotateStep = 30;

  return {
    x: direction * absOffset * xStep,
    scale: 1 - absOffset * scaleStep,
    rotateY: -direction * absOffset * rotateStep,
    opacity: absOffset === 1 ? 0.75 : 0.5,
    zIndex: 10 - absOffset,
    filter: absOffset === 1 ? "brightness(0.88)" : "brightness(0.75)",
  };
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
export function TestimonialCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchResumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reducedMotion = useReducedMotion();

  // Responsive detection
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(max-width: 767px)");
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Navigate
  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % TOTAL) + TOTAL) % TOTAL);
  }, []);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TOTAL);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(next, AUTOPLAY_INTERVAL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused, next]);

  // Cleanup touch resume timeout
  useEffect(() => {
    return () => {
      if (touchResumeRef.current) clearTimeout(touchResumeRef.current);
    };
  }, []);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = () => {
    if (touchResumeRef.current) clearTimeout(touchResumeRef.current);
    setIsPaused(true);
  };
  const handleTouchEnd = () => {
    touchResumeRef.current = setTimeout(() => setIsPaused(false), 2000);
  };

  // Click on side panel brings it to center
  const handlePanelClick = (index: number) => {
    if (index !== activeIndex) {
      goTo(index);
    }
  };

  /* ------------------------------------------------
     Transition config
     ------------------------------------------------ */
  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  return (
    <section className="bg-warm-beige py-16 md:py-24 border-t border-light-taupe/30 overflow-hidden">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
          <p className="eyebrow mb-3">Cerita Mereka</p>
          <h2 className="section-heading text-2xl md:text-3xl lg:text-4xl">
            Yang Mereka Rasakan Tentang Aleyra
          </h2>
        </div>

        {/* 3D Coverflow Carousel */}
        <div
          className="relative mx-auto"
          style={{ maxWidth: "900px" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimoni pelanggan"
        >
          {/* Perspective wrapper */}
          <div
            className="relative flex items-center justify-center"
            style={{
              perspective: "1200px",
              height: isMobile ? "420px" : "520px",
            }}
          >
            {TESTIMONIALS.map((testimonial, index) => {
              const offset = wrapOffset(index, activeIndex, TOTAL);
              const style = getPanelStyle(offset, isMobile);
              const isCenter = offset === 0;
              const maxVisible = isMobile ? 1 : MAX_VISIBLE;
              const isVisible = Math.abs(offset) <= maxVisible;

              return (
                <motion.div
                  key={testimonial.src}
                  className="absolute"
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    width: isMobile ? "260px" : "300px",
                    cursor: isCenter ? "default" : "pointer",
                  }}
                  animate={{
                    x: style.x,
                    scale: style.scale,
                    rotateY: style.rotateY,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                    filter: style.filter,
                  }}
                  transition={transition}
                  onClick={() => handlePanelClick(index)}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Slide ${index + 1} of ${TOTAL}`}
                  aria-hidden={!isVisible}
                  tabIndex={isCenter ? 0 : -1}
                >
                  {/* Glass Panel */}
                  <div
                    className="relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, rgba(255, 251, 245, 0.42) 0%, rgba(255, 243, 214, 0.24) 48%, rgba(220, 200, 176, 0.16) 100%)`,
                      backdropFilter: "blur(10px) saturate(115%)",
                      WebkitBackdropFilter: "blur(10px) saturate(115%)",
                      border: "1px solid rgba(255, 251, 245, 0.52)",
                      borderRadius: "20px",
                      boxShadow: isCenter
                        ? "inset 0 1px 0 rgba(255, 251, 245, 0.42), 0 8px 24px rgba(61, 36, 24, 0.10)"
                        : "inset 0 1px 0 rgba(255, 251, 245, 0.30), 0 4px 12px rgba(61, 36, 24, 0.06)",
                    }}
                  >
                    {/* Gloss highlight — decorative only */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        backgroundImage:
                          "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 22%, transparent 46%)",
                        pointerEvents: "none",
                        zIndex: 0,
                      }}
                    />

                    {/* Image container — fixed height, object-contain, above glass */}
                    <div
                      className="relative flex items-center justify-center p-2"
                      style={{
                        height: isMobile ? "400px" : "500px",
                        zIndex: 1,
                      }}
                    >
                      <Image
                        src={testimonial.src}
                        alt={testimonial.alt}
                        width={testimonial.width}
                        height={testimonial.height}
                        className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
                        style={{ opacity: 1, filter: "none" }}
                        sizes={isMobile ? "260px" : "300px"}
                        priority={index <= 2}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dot indicators */}
          <div
            className="flex items-center justify-center gap-1.5 mt-6 md:mt-8 flex-wrap"
            role="tablist"
            aria-label="Pilih slide testimoni"
          >
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                className={`rounded-full transition-all duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cherry-red focus-visible:ring-offset-1 ${
                  index === activeIndex
                    ? "w-2.5 h-2.5 bg-cocoa-brown"
                    : "w-2 h-2 bg-light-taupe/70 hover:bg-cocoa-brown/40"
                }`}
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
