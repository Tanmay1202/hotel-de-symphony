export interface Attraction {
  name: string;
  category: "Memorial" | "Historical Town" | "Spiritual Heritage" | "Connectivity";
  distanceTime: string;
  description: string;
}

export const REGIONAL_ATTRACTIONS: Attraction[] = [
  {
    name: "Shaheed Bhagat Singh Memorial & Ancestral House",
    category: "Memorial",
    distanceTime: "approx. 15 mins drive (Khatkar Kalan)",
    description:
      "A renowned national heritage complex honoring the revolutionary freedom fighter Shaheed Bhagat Singh, featuring the preserved ancestral homestead, landscaped memorial gardens, and modern historical museum.",
  },
  {
    name: "Ancient Historic Town of Rahon",
    category: "Historical Town",
    distanceTime: "approx. 12 mins drive",
    description:
      "An ancient pre-Mughal township known for its centuries-old brick havelis, historical masonry, and the sacred Suraj Kund reservoir.",
  },
  {
    name: "Kirpal Sagar Interfaith Complex",
    category: "Spiritual Heritage",
    distanceTime: "approx. 20 mins drive",
    description:
      "An expansive, serene interfaith spiritual sanctuary designed around universal harmony, featuring symbolic architecture dedicated to all world faiths alongside humanitarian facilities.",
  },
  {
    name: "Historic Regional Gurdwaras (Charan Kanwal & Tahli Sahib)",
    category: "Spiritual Heritage",
    distanceTime: "approx. 10–18 mins drive",
    description:
      "Deeply revered Sikh historical shrines in the Doaba region, including Gurudwara Charan Kanwal Sahib at Banga associated with Guru Hargobind Ji.",
  },
  {
    name: "Nawanshahr Doaba Railway Station & Highway Hub",
    category: "Connectivity",
    distanceTime: "5–7 mins drive",
    description:
      "Direct transit connectivity to regional rail networks, linking quickly to Phagwara, Jalandhar, Chandigarh, and Delhi National Highway arteries.",
  },
];
