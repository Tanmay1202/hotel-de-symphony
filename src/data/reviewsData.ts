export interface GuestReview {
  id: string;
  author: string;
  stayType: string;
  rating: number;
  date: string;
  comment: string;
}

export const GUEST_REVIEWS: GuestReview[] = [
  {
    id: "rev-1",
    author: "Harminder S.",
    stayType: "Wedding Reception Host",
    rating: 5,
    date: "Recent Event",
    comment:
      "The Grand Banquet Hall is genuinely impressive for family celebrations. The lighting, stage backdrop, and central air conditioning were flawless, and the multi-course food served at the buffet received compliments from all our guests.",
  },
  {
    id: "rev-2",
    author: "Rajesh K.",
    stayType: "Corporate Business Stay",
    rating: 5,
    date: "Verified Guest",
    comment:
      "Spotless and spacious rooms, attentive staff, and convenient parking right in front. Best place to stay in Nawanshahr for business trips. The private dining room was perfect for our executive dinner.",
  },
  {
    id: "rev-3",
    author: "Simranpreet B.",
    stayType: "Family Leisure Stay",
    rating: 5,
    date: "Family Traveler",
    comment:
      "The restaurant food is fresh, authentic, and reasonably priced. Having a safe indoor game zone with arcade machines for the children made our family stay completely stress-free. Highly recommended!",
  },
];
