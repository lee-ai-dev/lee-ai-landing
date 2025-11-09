"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import textAnimationImage from "@/app/assets/text-animation-image.png";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const messages: Message[] = [
  {
    text: "Hi! Can I reserve a table for two tonight?",
    sender: "user",
  },
  {
    text: "Sure! A table for two is available at 7 PM. Shall I book it?",
    sender: "bot",
  },
  {
    text: "Yes please.",
    sender: "user",
  },
  {
    text: "Done! Reservation confirmed. See you tonight!",
    sender: "bot",
  },
];

export default function ReservationAnimation() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to detect when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
            setVisibleMessages(0); // Reset when out of view
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Animation loop
  useEffect(() => {
    if (!isVisible) return;

    // If all messages are visible, wait then reset
    if (visibleMessages >= messages.length) {
      const timeout = setTimeout(() => {
        setVisibleMessages(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    // Show next message after delay
    const timeout = setTimeout(() => {
      setVisibleMessages((prev) => prev + 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isVisible, visibleMessages]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto max-w-[450px] overflow-visible py-8"
    >
      {/* Base Image Container - with background card */}
      <div className="relative rounded-2xl shadow-2xl">
        <div className="overflow-hidden rounded-xl">
          <Image
            src={textAnimationImage}
            alt="Woman making reservation on phone"
            className="w-full"
          />
        </div>

        {/* Chat Messages Overlay - positioned to pop out */}
        {/* Message 1 - User (Top Right) - 35% on image, 65% pops out right */}
        <div
          className={cn(
            "absolute right-[-130px] top-12 w-fit transform rounded-lg bg-white px-3 py-2 shadow-xl transition-all duration-500 ease-out",
            visibleMessages >= 1
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          )}
        >
          <p className="text-xs text-gray-800">{messages[0].text}</p>
        </div>

        {/* Message 2 - Bot (Left) - 35% on image, 65% pops out left */}
        <div
          className={cn(
            "absolute left-[150px] top-22 w-[250px] transform rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 px-3 py-2 shadow-xl transition-all duration-500 ease-out",
            visibleMessages >= 2
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          )}
        >
          <p className="text-xs text-white">{messages[1].text}</p>
        </div>

        {/* Message 3 - User (Right) - 35% on image, 65% pops out right */}
        <div
          className={cn(
            "absolute right-[-100px] top-[150px] w-[180px] transform rounded-lg bg-white px-3 py-2 shadow-xl transition-all duration-500 ease-out",
            visibleMessages >= 3
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          )}
        >
          <p className="text-xs text-gray-800">{messages[2].text}</p>
        </div>

        {/* Message 4 - Bot (Left, bottom with checkmark) - 35% on image, 65% pops out left */}
        <div
          className={cn(
            "absolute bottom-15 left-[150px] flex w-[260px] transform items-start gap-1 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 px-3 py-2 shadow-xl transition-all duration-500 ease-out",
            visibleMessages >= 4
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          )}
        >
          <p className="text-xs text-white">{messages[3].text}</p>
        </div>
      </div>
    </div>
  );
}
