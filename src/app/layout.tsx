import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import { ProgressBar } from "@/components/ui/progress-bar";
import "./globals.css";

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
      <body className={`${font.variable} antialiased`}>{children}</body>
    </html>
  );
}
