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
