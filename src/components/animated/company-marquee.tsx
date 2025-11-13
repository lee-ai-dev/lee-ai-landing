"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

import logo1 from "@/app/assets/logos/logo_.png";
import logo2 from "@/app/assets/logos/logoipsum.png";
import logo3 from "@/app/assets/logos/logoipsum_.png";
import logo4 from "@/app/assets/logos/logoipsumcirc.png";
import logo5 from "@/app/assets/logos/logoipsumst.png";
import Marquee from "react-fast-marquee";

const companies = [
  { src: logo1, name: "Logo 1", alt: "Company Logo 1" },
  { src: logo2, name: "Logoipsum", alt: "Logoipsum" },
  { src: logo3, name: "Logoipsum Alt", alt: "Logoipsum Alternative" },
  { src: logo4, name: "Logoipsum Circle", alt: "Logoipsum Circle" },
  { src: logo5, name: "Logoipsum Star", alt: "Logoipsum Star" },
];

export function CompanyMarquee() {
  return (
    <Marquee className="w-full">
      {companies.map((company, index) => (
        <div
          key={`${company.name}-1-${index}`}
          className="flex items-center justify-center opacity-80 transition-opacity hover:opacity-100"
        >
          <Image
            src={company.src}
            alt={company.alt}
            height={1000}
            width={1000}
            className="h-12 md:h-16 lg:h-20 xl:h-24 w-auto mx-8 md:mx-12 lg:mx-16 xl:mx-20"
          />
        </div>
      ))}
    </Marquee>
  );
}
