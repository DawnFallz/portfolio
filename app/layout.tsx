import type { Metadata } from "next";
import { 
  Montenegrin_Gothic_One,
  Geist_Pixel,
  Roboto_Slab, 
  Lora
} from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

import DevTools from "@/components/dev/DevTools";
import AosProvider from "@/providers/AosProvider";

/* Fonts */
const montenegrinGothicOne = Montenegrin_Gothic_One({
  variable: "--font-mont",
  weight: "400",
  subsets: ["latin"],
  adjustFontFallback: false,
});

const geistPixel = Geist_Pixel({
  variable: "--font-pixel",
  subsets: ["latin"],
  adjustFontFallback: false,
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

/* Metadata */
export const metadata: Metadata = {
  metadataBase: new URL("https://dawnfallz.vercel.app"),

  title: {
    default: "DawnFallz Portfolio",
    template: "%s | DawnFallz Portfolio",
  },

  description: "A full-stack developer passionate about web development, backend systems, and modern technologies.",

  applicationName: "DawnFallz Portfolio",

  icons: {
    icon: [
      { url: "/favicons/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicons/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/favicon-192x192.png", sizes: "192x192" },
    ],
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "DawnFallz Portfolio",
  },

  formatDetection: {
    telephone: false,
  },

  openGraph: {
    title: "DawnFallz Portfolio",
    description: "A full-stack developer passionate about web development, backend systems, and modern technologies.",
    url: "https://dawnfallz.vercel.app",
    siteName: "DawnFallz Portfolio",
    type: "website",
    images: [
      {
        url: "/favicons/favicon.png",
        width: 1200,
        height: 630,
        alt: "DawnFallz Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DawnFallz Portfolio",
    description: "A full-stack developer passionate about web development, backend systems, and modern technologies.",
    images: ["/favicons/favicon.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`
        ${montenegrinGothicOne.variable} 
        ${geistPixel.variable} 
        ${robotoSlab.variable} 
        ${lora.variable} 
        h-full antialiased 
        motion-safe:scroll-smooth
        scroll-pt-10 sidebar-scroll
      `}
    >
      <body 
        className="
          flex flex-col
          bg-background text-foreground 
          min-h-full
        "
      >
        <DevTools />

        <AosProvider>
          {children}
        </AosProvider>

        <Analytics />
      </body>
    </html>
  );
}
