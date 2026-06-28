import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Musk Missed — The Elon Musk Prediction Hall of Shame",
    template: "%s — Musk Missed",
  },
  description:
    "An interactive tracker of every major prediction Elon Musk made that did not come true — from million-car robotaxis to Mars colonies and Hyperloops. Researched, dated, and open for you to add the next miss.",
  applicationName: "Musk Missed",
  keywords: [
    "Elon Musk",
    "Elon Musk predictions",
    "Elon Musk broken promises",
    "Tesla",
    "Full Self-Driving",
    "SpaceX",
    "Mars",
    "Hyperloop",
    "robotaxi",
    "Elon Time",
    "failed predictions",
  ],
  authors: [{ name: "Musk Missed" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Musk Missed — The Elon Musk Prediction Hall of Shame",
    description:
      "Every bold prediction Elon Musk made that did not come true. Researched, dated, and open for you to add the next miss.",
    siteName: "Musk Missed",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Musk Missed — The Elon Musk Prediction Hall of Shame",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Musk Missed — The Elon Musk Prediction Hall of Shame",
    description:
      "Every prediction Elon Musk made that did not come true. Researched, dated, open to add the next one.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-black text-zinc-100 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
