"use client";

import { useState } from "react";
import Image from "next/image";
import salesInsight1 from "@/app/assets/sales-insight-1.svg";
import salesInsight2 from "@/app/assets/sales-insight-2.svg";

export default function SalesInsightAnimation() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image 1 - Default state */}
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={salesInsight1}
          alt="Sales Insight Dashboard View 1"
          className="w-full"
        />
      </div>

      {/* Image 2 - Hovered state */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={salesInsight2}
          alt="Sales Insight Dashboard View 2"
          className="w-full"
        />
      </div>
    </div>
  );
}
