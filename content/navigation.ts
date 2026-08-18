export type NavItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/#menu" }, // Linking to section for MVP homepage foundation
  { label: "Our Story", href: "/#our-story" },
  { label: "Events", href: "/#events" },
  { label: "Visit Us", href: "/#visit-us" },
];

/** Bottom navigation items for mobile — subset of main navigation + Order CTA */
export const mobileBottomNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/#menu" },
  { label: "Our Story", href: "/#our-story" },
  { label: "Order", href: "https://wa.me/6280000000000" },
];
