"use client";

import {
  Chrome,
  Github,
  Slack,
  Twitter,
  Figma,
  Dribbble,
  Trello,
  Linkedin,
} from "lucide-react";
import { cn } from "@/lib/utils";

const companies = [
  { icon: Chrome, name: "Chrome" },
  { icon: Github, name: "Github" },
  { icon: Slack, name: "Slack" },
  { icon: Twitter, name: "Twitter" },
  { icon: Figma, name: "Figma" },
  { icon: Dribbble, name: "Dribbble" },
  { icon: Trello, name: "Trello" },
  { icon: Linkedin, name: "Linkedin" },
];

interface CompanyMarqueeProps {
  className?: string;
}

export function CompanyMarquee({ className }: CompanyMarqueeProps) {
  return (
    <div className={cn("w-full overflow-hidden py-12", className)}>
      {/* Left fade overlay */}
      {/* <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" /> */}

      {/* Right fade overlay */}
      {/* <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" /> */}

      {/* Top fade overlay */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-16 w-full bg-gradient-to-b from-white to-transparent" />

      {/* Bottom fade overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-16 w-full bg-gradient-to-t from-white to-transparent" />

      {/* Marquee container */}
      <div className="relative flex">
        {/* First set of logos */}
        <div className="flex animate-marquee items-center gap-16">
          {companies.map((company, index) => (
            <div
              key={`${company.name}-1-${index}`}
              className="flex flex-shrink-0 items-center justify-center opacity-60 transition-opacity hover:opacity-100"
            >
              <company.icon className="h-12 w-12 text-gray-600" />
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div
          className="flex animate-marquee items-center gap-16"
          aria-hidden="true"
        >
          {companies.map((company, index) => (
            <div
              key={`${company.name}-2-${index}`}
              className="flex flex-shrink-0 items-center justify-center opacity-60 transition-opacity hover:opacity-100"
            >
              <company.icon className="h-12 w-12 text-gray-600" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
