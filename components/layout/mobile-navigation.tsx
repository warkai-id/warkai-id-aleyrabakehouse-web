"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { mainNavigation } from "@/content/navigation";

export function MobileNavigation({ isScrolled = true }: { isScrolled?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const openMenu = useCallback(() => setIsOpen(true), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  // Trap focus inside the drawer and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        triggerRef.current?.focus();
        return;
      }

      // Focus trap
      if (e.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0] as HTMLElement | undefined;
        const last = focusable[focusable.length - 1] as HTMLElement | undefined;

        if (!first || !last) return;

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent body scroll while menu is open
    document.body.style.overflow = "hidden";

    // Focus the close button when menu opens
    const closeButton = drawerRef.current?.querySelector<HTMLElement>("button");
    closeButton?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeMenu]);

  return (
    <div className="md:hidden">
      {/* Hamburger trigger */}
      <button
        ref={triggerRef}
        onClick={openMenu}
        className={`p-2 -mr-2 transition-colors duration-300 ${
          isScrolled ? "text-cocoa-brown" : "text-warm-white"
        }`}
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
      >
        <Menu size={22} strokeWidth={1.8} />
      </button>

      {/* Drawer sheet */}
      {isOpen && (
        <>
          {/* Light scrim — not a heavy dark overlay */}
          <div
            className="fixed inset-0 z-40 bg-deep-cocoa/15"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <div
            ref={drawerRef}
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed top-0 right-0 z-50 h-full w-[280px] max-w-[85vw] bg-butter-cream shadow-elevated flex flex-col"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between h-[72px] px-5 border-b border-light-taupe/30">
              <span className="font-heading text-base font-bold text-cocoa-brown">
                Menu
              </span>
              <button
                onClick={closeMenu}
                className="p-2 -mr-2 text-cocoa-brown"
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={1.8} />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 overflow-y-auto px-5 py-6" aria-label="Mobile navigation">
              <ul className="flex flex-col gap-1">
                {mainNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block py-3 text-base font-body font-medium text-cocoa-brown border-b border-light-taupe/20 hover:text-cherry-red transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/6280000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 btn-accent w-full text-center"
                onClick={closeMenu}
              >
                Order via WhatsApp
              </a>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}