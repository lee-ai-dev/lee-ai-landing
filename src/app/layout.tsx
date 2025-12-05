import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const font = localFont({
  src: [
    {
      path: "./fonts/Figtree-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Figtree-Bold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lee AI",
  description: "Automate Orders, Reservations and Replies, All in One Place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Lee AI</title>
        <meta name="title" content="Lee AI" />
        <meta
          name="description"
          content="Automate Orders Reservations and Replies, All in One Place - Lee AI handles every part of your customer experience. It saves you hours of manual work and ensures your restaurant never misses a moment to serve."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://leeai.io" />
        <meta property="og:title" content="Lee AI" />
        <meta
          property="og:description"
          content="Automate Orders Reservations and Replies, All in One Place - Lee AI handles every part of your customer experience. It saves you hours of manual work and ensures your restaurant never misses a moment to serve."
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        {/* <!-- X (Twitter) --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://leeai.io" />
        <meta property="twitter:title" content="Lee AI" />
        <meta
          property="twitter:description"
          content="Automate Orders Reservations and Replies, All in One Place - Lee AI handles every part of your customer experience. It saves you hours of manual work and ensures your restaurant never misses a moment to serve."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
      </head>
      <body className={`${font.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
