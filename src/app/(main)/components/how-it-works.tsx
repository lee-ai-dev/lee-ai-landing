import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  CreditCard,
  Rocket,
  Pen,
  PenIcon,
  PenTool,
  PenToolIcon,
  Recycle,
} from "lucide-react";
import Image from "next/image";
import lee_app_mobile from "@/app/assets/lee_app_mobile.svg";

function HowItWorks() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 max-w-[1200px] mx-auto">
      {/* Top Section */}
      <div className="flex flex-col items-center text-center mb-12 md:mb-16">
        {/* Badge */}
        <Badge variant="outline" className="mb-6 border-purple-300">
          <PenToolIcon />
          How it works
        </Badge>

        {/* Main Heading */}
        <p className="flex flex-col text-2xl md:text-3xl lg:text-4xl text-purple-900 mb-2">
          <span>From setup to service in minutes</span>
          <span> no tech skills needed.</span>
        </p>

        {/* Description */}
        <p className="md:flex flex-col text-purple-900 text-sm md:text-base leading-relaxed">
          <span>
            Create and customize an assistant handling messages, orders, and
          </span>
          <span>payments while you focus on your kitchen.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:gap-16 lg:gap-24">
        <div className="flex items-center justify-center md:justify-start sm:flex-row [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:text-center [&>div]:gap-2 [&>div]:mx-4 [&>div]:w-fit [&>div]:rounded-2xl sm:[&>div]:w-1/2 p-4 md:p-6 lg:p-8">
          <div>
            <span className="bg-purple-400 p-2 rounded-md text-white">
              <Recycle />
            </span>{" "}
            <p className="text-purple-900">Onboard</p>
          </div>
          <div>
            <span className="bg-purple-400 p-2 rounded-md text-white">
              <CreditCard />
            </span>{" "}
            <p className="text-purple-900">Customize</p>
          </div>
          <div>
            <span className="bg-purple-400 p-2 rounded-md text-white">
              <Rocket />
            </span>{" "}
            <p className="text-purple-900">Go live</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={lee_app_mobile}
            alt="Lee App Mobile"
            className="max-w-full h-auto"
            width={10000}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-12 md:mt-16 gap-2">
        <p className="flex flex-col items-center text-purple-900 text-2xl md:text-3xl lg:text-4xl text-center">
          <span>Never miss an order, even when you're away.</span>
        </p>
        <p className="flex flex-col text-purple-900 text-sm md:text-base text-center">
          Designed for restaurant owners on the go. Access everything right from
          your phone.
        </p>
      </div>
    </section>
  );
}

export default HowItWorks;
