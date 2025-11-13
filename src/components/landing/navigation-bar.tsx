"use client";

import React, { useState } from "react";
import _lee_logo from "@/app/assets/lee_logo.png";
import Image from "next/image";
import { AnimatedCtaButton } from "@/components/animated/animated-cta-button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

function NavigationBar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#" },
    { label: "How it works", href: "#" },
    { label: "Testimonials", href: "#" },
  ];

  return (
    <nav className="my-4 md:my-8 flex items-center justify-between w-[90%] md:w-[80%] max-w-[1000px] mx-auto px-4 md:px-0">
      {/* Logo */}
      <div className="flex items-center gap-1">
        <Image src={_lee_logo} alt="lee_logo" width={30} height={30} />
        <p className="font-semibold">Lee AI</p>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex [&>li]:list-none gap-8 [&>li]:hover:text-purple-600 transition-colors">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:block border-2 p-1 rounded-full">
        <AnimatedCtaButton>Start for free</AnimatedCtaButton>
      </div>

      {/* Mobile Menu */}
      {/* <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="md:hidden">
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent className="p-4">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-1">
              <Image src={_lee_logo} alt="lee_logo" width={24} height={24} />
              Lee AI
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg hover:text-purple-600 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="border-2 p-1 rounded-full mt-4">
              <AnimatedCtaButton>Start for free</AnimatedCtaButton>
            </div>
          </div>
        </SheetContent>
      </Sheet> */}
    </nav>
  );
}

export default NavigationBar;
