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
  icons: {
    icon: "/favicon.ico",
  },
};

const site_data = {
  name: "Lee AI",
  url: "https://trylee.io",
  description:
    "Automate Orders Reservations and Replies, All in One Place - Lee AI handles every part of your customer experience. It saves you hours of manual work and ensures your restaurant never misses a moment to serve.",
  meta_image:
    "https://res.cloudinary.com/dvhhe516r/image/upload/v1765540447/lee-meta-image_auf26c.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Lee AI</title>
        <meta name="title" content="Lee AI" />
        <meta
          name="description"
          content="Automate Orders Reservations and Replies, All in One Place - Lee AI handles every part of your customer experience. It saves you hours of manual work and ensures your restaurant never misses a moment to serve."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={site_data.url} />
        <meta property="og:title" content={site_data.name} />
        <meta property="og:description" content={site_data.description} />
        <meta property="og:image" content={site_data.meta_image} />

        {/* <!-- X (Twitter) --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={site_data.url} />
        <meta property="twitter:title" content={site_data.name} />
        <meta property="twitter:description" content={site_data.description} />
        <meta property="twitter:image" content={site_data.meta_image} />
      </head>
      <body className={`${font.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
