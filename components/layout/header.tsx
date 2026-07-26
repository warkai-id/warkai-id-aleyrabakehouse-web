"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainNavigation } from "@/content/navigation";
import { MobileNavigation } from "./mobile-navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger scroll state after scrolling down a bit (e.g., 50px)
      setIsScrolled(window.scrollY > 50);
    };

    // Check on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ease-in-out ${isScrolled
        ? "bg-butter-cream border-b border-light-taupe shadow-none"
        : "bg-transparent border-transparent"
        }`}
    >
      <div className="section-container flex h-[88px] items-center justify-between">

        {/* Logo — fades in and becomes interactive only when scrolled */}
        <div
          className={`transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
          <Link
            href="/"
            className="relative shrink-0 flex items-center"
            aria-label="Aleyra Bakehouse — Home"
            tabIndex={isScrolled ? 0 : -1}
          >
            {/* Desktop Logo */}
            <div className="relative hidden md:block h-[72px] lg:h-[76px] w-[220px] lg:w-[235px]">
              <Image
                src="/images/brand/logo-header-desktop.webp"
                alt="Aleyra Bakehouse"
                fill
                sizes="(min-width: 1024px) 235px, 220px"
                className="object-contain select-none scale-[1.14]"
                priority
                draggable={false}
              />
            </div>
            {/* Mobile Logo */}
            <Image
              src="/images/brand/logo-transparent.webp"
              alt="Aleyra Bakehouse"
              width={160}
              height={59}
              className="md:hidden w-[110px] h-auto object-contain select-none"
              priority
              draggable={false}
            />
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main navigation"
        >
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-label transition-colors duration-300 ${isScrolled
                ? "" // Uses standard cocoa-brown hover colors from globals.css
                : "!text-warm-white hover:!text-warm-white/80" // Overrides to white in transparent state
                }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Order Now CTA — fades in when scrolled */}
          <div
            className={`transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
          >
            <a
              href="https://wa.me/6280000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent btn-sm"
              tabIndex={isScrolled ? 0 : -1}
            >
              Order Now
            </a>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <MobileNavigation isScrolled={isScrolled} />
      </div>
    </header>
  );
}
