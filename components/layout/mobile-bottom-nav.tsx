"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Home, UtensilsCrossed, BookHeart, ShoppingBag } from "lucide-react";
import type { ReactNode } from "react";
import { generateInquiryUrl } from "@/lib/whatsapp/generate-url";

/** Section IDs that map to bottom nav items for active-state detection */
const SECTION_IDS = ["menu", "our-story"] as const;

type BottomNavItem = {
  label: string;
  href: string;
  icon: ReactNode;
  isExternal?: boolean;
  isAccent?: boolean;
};

const NAV_ITEMS: BottomNavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: <Home size={20} strokeWidth={1.6} />,
  },
  {
    label: "Menu",
    href: "/#menu",
    icon: <UtensilsCrossed size={20} strokeWidth={1.6} />,
  },
  {
    label: "Our Story",
    href: "/#our-story",
    icon: <BookHeart size={20} strokeWidth={1.6} />,
  },
  {
    label: "Order",
    href: generateInquiryUrl(),
    icon: <ShoppingBag size={20} strokeWidth={1.6} />,
    isExternal: true,
    isAccent: true,
  },
];

/**
 * Fixed bottom navigation bar for mobile viewports.
 * Appears only below `md` breakpoint (< 768px).
 * Uses IntersectionObserver to highlight the active section.
 */
export function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState<string>("home");

  // Detect which section is currently in view
  useEffect(() => {
    // Only run observer on the client and if IntersectionObserver is available
    if (typeof IntersectionObserver === "undefined") return;

    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          // Trigger when 30% of the section is visible
          threshold: 0.3,
          rootMargin: "-10% 0px -50% 0px",
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    // Detect when user is at the top of the page (Home)
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observers.forEach((obs) => obs.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getActiveKey = useCallback(
    (item: BottomNavItem): boolean => {
      if (item.isAccent) return false; // Order never shows "active" state
      if (item.href === "/") return activeSection === "home";
      // Extract section ID from href like "/#menu" -> "menu"
      const sectionId = item.href.replace("/#", "");
      return activeSection === sectionId;
    },
    [activeSection]
  );

  return (
    <nav
      className="mobile-bottom-nav fixed bottom-0 left-0 right-0 z-50 md:hidden"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around bg-warm-white border-t border-light-taupe/30 shadow-[0_-1px_8px_rgba(93,58,41,0.06)]">
        {NAV_ITEMS.map((item) => {
          const isActive = getActiveKey(item);

          // Order is an external link
          if (item.isExternal) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-0.5 py-2 px-3 min-w-[64px] text-cherry-red transition-colors duration-200"
                aria-label={item.label}
              >
                <span className="flex items-center justify-center">
                  {item.icon}
                </span>
                <span className="font-body text-[10px] font-semibold leading-tight">
                  {item.label}
                </span>
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-0.5 py-2 px-3 min-w-[64px] transition-colors duration-200 ${
                isActive
                  ? "text-cherry-red"
                  : "text-cocoa-brown/60 hover:text-cocoa-brown"
              }`}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="flex items-center justify-center">
                {item.icon}
              </span>
              <span
                className={`font-body text-[10px] leading-tight ${
                  isActive ? "font-semibold" : "font-medium"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
