export interface RoomCategory {
  id: string;
  name: string;
  tagline: string;
  sizeSqFt: number;
  bedConfig: string;
  maxGuests: string;
  indicativeTariff: string;
  description: string;
  amenities: string[];
  inquiryMessage: string;
}

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: "deluxe-double",
    name: "Deluxe Double Room",
    tagline: "Contemporary Comfort & Essential Elegance",
    sizeSqFt: 168,
    bedConfig: "1 Double Bed with Custom Linens",
    maxGuests: "2 Adults",
    indicativeTariff: "₹2,100 – ₹3,000 / night*",
    description:
      "A quiet, air-conditioned sanctuary designed for business travelers, couples, and visiting wedding guests. Features custom contemporary furnishings, work desk, and clean en-suite bath.",
    amenities: [
      "Individual Climate Control (AC)",
      "High-Speed Wi-Fi Access",
      "Flat-Screen Television with Cable",
      "Executive Work Desk & Ergonomic Chair",
      "Attached Private Bathroom with 24/7 Geyser",
      "Daily Housekeeping & Turndown",
      "24-Hour Room Service Menu",
      "Complimentary Mineral Water",
    ],
    inquiryMessage:
      "Hello, I would like to check availability and rates for the Deluxe Double Room at Hotel De Symphony.",
  },
  {
    id: "royal-deluxe",
    name: "Royal Deluxe Room",
    tagline: "Expanded Living Space with Upgraded Hospitality",
    sizeSqFt: 195,
    bedConfig: "1 Queen Bed with Plush Headboard",
    maxGuests: "Up to 3 Guests (Extra Bedding Available)",
    indicativeTariff: "₹2,800 – ₹4,000 / night*",
    description:
      "A spacious accommodation offering enhanced comfort with dedicated sitting lounge furniture, generous closet space, and upgraded bathroom amenities for families and VIP attendees.",
    amenities: [
      "Plush Seating Area with Tub / Sofa Chairs",
      "Individual Climate Control (AC)",
      "In-Room Tea & Coffee Maker Station",
      "Large Flat-Screen Smart Television",
      "Dedicated Work & Dressing Vanity",
      "Spacious Attached Bath with Premium Toiletries",
      "24-Hour Hot Water Supply",
      "Express In-Room Dining & Laundry Service",
    ],
    inquiryMessage:
      "Hello, I would like to check availability and rates for the Royal Deluxe Room at Hotel De Symphony.",
  },
];
