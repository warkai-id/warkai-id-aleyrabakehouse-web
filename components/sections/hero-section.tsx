import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "../features/hero/hero-carousel";
import { HeroContentMotion } from "../features/hero/hero-content-motion";

export function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <HeroCarousel />

      {/* Subtle radial gradient for typography readability */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 45%, rgba(62, 35, 20, 0.18) 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 section-container text-center flex flex-col items-center -mt-4 md:-mt-10 px-5 md:px-6 pointer-events-none">
        {/* Logo — centered inside hero section */}
        <div className="relative mb-8 md:mb-10 flex justify-center w-[110px] sm:w-[130px] md:w-[160px]">
          <div className="absolute inset-0 bg-warm-white/60 blur-[32px] rounded-full" />

          <Image
            src="/images/brand/logo-transparent.webp"
            alt="Aleyra Bakehouse"
            width={220}
            height={81}
            className="relative w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Headline — Staggered Entrance (Delay 0s), 68px mobile / 120px tablet / 170px desktop */}
        <HeroContentMotion delay={0}>
          {/* Variant A: hero-title-variant-a | Variant B: hero-title-variant-b */}
          <h1 className="hero-title hero-title-variant-a text-[3.5rem] sm:text-[4.25rem] md:text-[7.5rem] lg:text-[10.625rem] mb-5 md:mb-[28px] leading-[0.82] tracking-[0.005em] max-w-[1400px] mx-auto">
            More than cheesecake.
            <br />
            A little moment of happiness.
          </h1>
        </HeroContentMotion>

        {/* Subtagline — Staggered Entrance (Delay 200ms), 20px gap from headline, 36px gap to CTA */}
        <HeroContentMotion delay={0.2}>
          <p className="hero-description text-[14px] md:text-[18px] max-w-md mx-auto mb-[36px] md:mb-10">
            Dibuat dengan hati, dipanggang dalam batch kecil untuk momen yang layak dirayakan.
          </p>
        </HeroContentMotion>

        {/* CTA — Staggered Entrance (Delay 400ms) */}
        <HeroContentMotion delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-5 md:mb-8 w-full sm:w-auto max-w-md mx-auto sm:max-w-none pointer-events-auto">
            <a
              href="https://wa.me/6280000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-cocoa-brown text-warm-white hover:bg-deep-cocoa shadow-md shadow-cocoa-brown/20"
            >
              Order Fresh Today
            </a>

            <Link
              href="/#menu"
              className="btn-secondary bg-butter-cream/85 border border-cocoa-brown/40 text-cocoa-brown hover:bg-butter-cream"
            >
              Explore the Menu
            </Link>
          </div>

          <p className="font-hero-display italic text-xs md:text-sm text-butter-cream/80 drop-shadow-sm tracking-wide">
            Freshly baked in limited batches &hearts;
          </p>
        </HeroContentMotion>
      </div>
    </section>
  );
}