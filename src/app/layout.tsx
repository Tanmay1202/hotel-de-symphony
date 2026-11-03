import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hoteldesymphony.com"),
  title: "Hotel De Symphony by Topaz | Luxury Hotel & Grand Banquets in Nawanshahr",
  description:
    "Experience luxury hospitality, grand wedding banquets, multi-cuisine fine dining, and modern accommodations at Hotel De Symphony by Topaz, Nawanshahr, Punjab.",
  keywords: [
    "Hotel De Symphony",
    "Hotel Symphony Nawanshahr",
    "Hotel De Symphony by Topaz",
    "Banquet Hall Nawanshahr",
    "Wedding Venue Nawanshahr",
    "Luxury Hotel Punjab",
    "Hotels in SBS Nagar",
    "Shaheed Bhagat Singh Nagar Hotel",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Hotel De Symphony by Topaz | Nawanshahr, Punjab",
    description:
      "Premier boutique hospitality, grand celebration banquets, and authentic dining on Barnala Kalan Road, Nawanshahr.",
    url: "https://hoteldesymphony.com",
    siteName: "Hotel De Symphony by Topaz",
    images: [
      {
        url: "/photos/IMG_2888.JPG.jpeg",
        width: 1920,
        height: 1080,
        alt: "Hotel De Symphony Facade at Dusk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#11141A] text-[#F8FAFC]">
        {children}
      </body>
    </html>
  );
}
