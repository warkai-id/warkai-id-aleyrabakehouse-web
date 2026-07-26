import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "../features/hero/hero-carousel";

export function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <HeroCarousel />

      {/* Content */}
      <div className="relative z-10 section-container text-center flex flex-col items-center mt-0 md:mt-12 px-5 md:px-6 pointer-events-none">
        <div className="relative mb-4 md:mb-6 flex justify-center w-[145px] sm:w-[165px] md:w-[220px]">
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

        <h1 className="hero-title text-[3.05rem] sm:text-[3.6rem] md:text-[4.875rem] lg:text-[5.85rem] font-semibold italic mb-6 leading-[1.06] md:leading-[1.04] tracking-[0.01em] max-w-[1100px] mx-auto">
          More than cheesecake.
          <br />
          A little moment of happiness.
        </h1>

        <p className="font-body text-base md:text-xl max-w-2xl mx-auto mb-6 md:mb-10 text-warm-white font-medium drop-shadow-md italic">
          &quot;Kami percaya kebahagiaan tidak selalu datang dari perayaan besar.
          Kadang, sepotong cheesecake hangat dengan tekstur lembut sudah cukup
          membuat hari terasa lebih baik.&quot;
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-12 w-full sm:w-auto max-w-md mx-auto sm:max-w-none pointer-events-auto">
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

        <p className="accent-script text-xl md:text-2xl text-butter-cream drop-shadow-sm">
          Freshly baked in limited batches &hearts;
        </p>
      </div>
    </section>
  );
}