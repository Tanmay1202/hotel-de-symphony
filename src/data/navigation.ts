export interface NavItem {
  label: string;
  href: string;
  number?: string;
  isExternal?: boolean;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Stay", href: "#rooms" },
  { label: "Banquets", href: "#banquets" },
  { label: "Dining", href: "#dining" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export const DRAWER_NAV_ITEMS: NavItem[] = [
  { label: "Overview & Story", href: "#overview", number: "01" },
  { label: "Stay & Rooms", href: "#rooms", number: "02" },
  { label: "The Grand Banquet Hall", href: "#banquets", number: "03" },
  { label: "Dining & Catering", href: "#dining", number: "04" },
  { label: "Lounge & Family Arcade", href: "#amenities", number: "05" },
  { label: "Curated Photo Gallery", href: "#gallery", number: "06" },
  { label: "Location & Directions", href: "#location", number: "07" },
];

export const FOOTER_QUICK_LINKS: NavItem[] = [
  { label: "Overview & Philosophy", href: "#overview" },
  { label: "Rooms & Living Spaces", href: "#rooms" },
  { label: "The Grand Banquet Hall", href: "#banquets" },
  { label: "Dining & Catering", href: "#dining" },
  { label: "Family Arcade & Lounge", href: "#amenities" },
  { label: "Photo Gallery", href: "#gallery" },
  { label: "Guest Reviews", href: "#reviews" },
  { label: "Location & Directions", href: "#location" },
];
