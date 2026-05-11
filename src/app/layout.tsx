import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";
import { site } from "./lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Aura Robotics | Humanoid AGI Robot for Next-Generation Embodied Intelligence",
  description: site.description,
  applicationName: `${site.name}`,
  keywords: [
    "Aura Robotics",
    "humanoid AGI robot",
    "robotics landing page",
    "nextjs",
    "tailwindcss",
    "motion react",
    "bento design",
    "ai challenge",
    "ai landing page",
    "generative ai",
    "web design",
    "mockup",
  ],
  authors: [{ name: site.company }],
  creator: site.company,
  publisher: site.company,
  openGraph: {
    title: "Aura Robotics | Humanoid AGI Robot for Next-Generation Embodied Intelligence",
    description: "A conceptual humanoid AGI robot landing page for Day 10/30 of the AI-Generated Landing Page Challenge.",
    url: site.url,
    siteName: `${site.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${site.name} - Humanoid AGI`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Robotics | Humanoid AGI Robot for Next-Generation Embodied Intelligence",
    description: "A conceptual humanoid AGI robot landing page for Day 10/30 of the AI-Generated Landing Page Challenge.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
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
      className={`${inter.variable} ${orbitron.variable} dark antialiased`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
