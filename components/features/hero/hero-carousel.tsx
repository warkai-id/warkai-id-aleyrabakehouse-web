"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type HeroSlide = {
  id: number;
  src: string;
  alt: string;
  imageClassName: string;
};

const slides = [
  {
    id: 1,
    src: "/images/hero/hero-slide-01.webp",
    alt: "Aleyra Bakehouse whole cheesecake",
    imageClassName: "object-cover object-[center_60%] md:object-center",
  },
  {
    id: 2,
    src: "/images/hero/hero-slide-02.webp",
    alt: "Aleyra Bakehouse product lifestyle",
    imageClassName: "object-cover object-center",
  },
  {
    id: 3,
    src: "/images/hero/hero-slide-03.webp",
    alt: "Aleyra Bakehouse burnt cheesecake slice",
    imageClassName: "object-cover object-[center_70%] md:object-[center_55%]",
  },
] as const satisfies readonly [
  HeroSlide,
  ...HeroSlide[],
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [isDocumentHidden, setIsDocumentHidden] = useState(false);
  const [isPointerHovering, setIsPointerHovering] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  
  const shouldReduceMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isPaused = isDocumentHidden || isPointerHovering || isFocusWithin;

  const currentSlide = slides[currentIndex] ?? slides[0];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    if (!isPaused) {
      timerRef.current = setTimeout(nextSlide, 6000);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, isPaused, nextSlide]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsDocumentHidden(document.hidden);
    };
    // Set initial state
    setIsDocumentHidden(document.hidden);
    
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const target = e.target as HTMLElement;
    // Do not interfere if the event originated from an interactive button 
    // trying to activate itself via Enter or Space
    if (target.tagName === "BUTTON" && (e.key === "Enter" || e.key === " ")) {
      return;
    }

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        prevSlide();
        break;
      case "ArrowRight":
        e.preventDefault();
        nextSlide();
        break;
      case "Home":
        e.preventDefault();
        goToSlide(0);
        break;
      case "End":
        e.preventDefault();
        goToSlide(slides.length - 1);
        break;
    }
  };

  return (
    <div 
      className="absolute inset-0 z-0 bg-deep-cocoa group outline-none focus-visible:ring-2 focus-visible:ring-cherry-red focus-visible:ring-inset"
      onMouseEnter={() => setIsPointerHovering(true)}
      onMouseLeave={() => setIsPointerHovering(false)}
      onFocusCapture={() => setIsFocusWithin(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsFocusWithin(false);
        }
      }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Aleyra Bakehouse hero gallery"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: shouldReduceMotion ? 1 : 1.02 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: shouldReduceMotion ? 0.1 : 0.9, ease: "easeInOut" },
            scale: { duration: 6, ease: "linear" }
          }}
          drag={shouldReduceMotion ? false : "x"}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset }) => {
            const swipe = offset.x;
            if (swipe < -50) {
              nextSlide();
            } else if (swipe > 50) {
              prevSlide();
            }
          }}
        >
          <Image
            src={currentSlide.src}
            alt={currentSlide.alt}
            fill
            priority={currentIndex === 0}
            draggable={false}
            className={`pointer-events-none select-none ${currentSlide.imageClassName}`}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(61, 36, 24, 0.08) 0%, rgba(61, 36, 24, 0.16) 50%, rgba(61, 36, 24, 0.44) 100%)"
        }}
      />

      <div className="absolute bottom-3 md:bottom-6 left-0 right-0 z-20 flex justify-center gap-1">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className="group/dot flex items-center justify-center w-11 h-11 focus:outline-none"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentIndex === index ? "true" : undefined}
          >
            <span 
              className={`w-3 h-3 rounded-full transition-colors duration-300 group-focus-visible/dot:ring-2 group-focus-visible/dot:ring-cherry-red group-focus-visible/dot:ring-offset-2 group-focus-visible/dot:ring-offset-deep-cocoa ${
                currentIndex === index ? "bg-warm-white" : "bg-warm-white/40 group-hover/dot:bg-warm-white/60"
              }`} 
            />
          </button>
        ))}
      </div>
      
      <button 
        type="button"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center bg-deep-cocoa/20 text-warm-white hover:bg-deep-cocoa/40 transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cherry-red"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <span aria-hidden="true" className="text-xl">&lsaquo;</span>
      </button>

      <button 
        type="button"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center bg-deep-cocoa/20 text-warm-white hover:bg-deep-cocoa/40 transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cherry-red"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <span aria-hidden="true" className="text-xl">&rsaquo;</span>
      </button>
    </div>
  );
}
