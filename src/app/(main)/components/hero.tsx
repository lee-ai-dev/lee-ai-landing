import { AnimatedButton } from "@/components/animated/animated-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, ShieldCheckIcon, Verified } from "lucide-react";
import Image from "next/image";
import React from "react";

import hero_image from "@/app/assets/hero_image.png";
import _lee_logo from "@/app/assets/lee_logo.png";

function Hero() {
  return (
    <section id="hero" className="mt-16">
      <div className="flex justify-center text-center text-purple-900 text-5xl font-semibold tracking-wide">
        <p className="flex flex-col">
          <span className="flex mb-2">
            Automate Orders{" "}
            <Image
              src={_lee_logo}
              alt="lee_logo"
              width={50}
              className="border mx-4 -rotate-15 rounded-lg shadow-md"
            />
            Reservations,
          </span>
          {"  "}
          <span>and Replies, All in One Place.</span>
        </p>
      </div>
      <div>
        <p className="text-center flex flex-col mt-6 text-purple-900 opacity-80">
          <span>
            Lee AI handles every part of your customer experience. It saves you
            hours of manual{" "}
          </span>{" "}
          <span>
            work and ensures your restaurant never misses a moment to serve.
          </span>
        </p>
      </div>
      <div className="mt-10 gap-2 flex items-center justify-center">
        <Button variant="ghost" className="bg-white ">
          Request Demo
        </Button>
        <AnimatedButton>Get Started for Free</AnimatedButton>
      </div>
      <div className="mt-2 flex justify-center text-muted-foreground gap-2">
        <Badge variant="outline" className="px-2 py-1 border-none">
          <Verified className="mr-1 text-gray-500" />
          <p>Quick Setup</p>
        </Badge>
        <Badge variant="outline" className="px-2 py-1 border-none">
          <Lock className="mr-1 text-gray-500" />
          <p>GDPR-Compliant</p>
        </Badge>
        <Badge variant="outline" className="px-2 py-1 border-none">
          <ShieldCheckIcon className="mr-1 text-gray-500" />
          <p>Secure Payments</p>
        </Badge>
      </div>

      <div className="mt-20 max-w-[800px] mx-auto mb-20 px-4 bg-linear-to-b from-transparent to-white">
        <div className="w-full overflow-hidden rounded-t-2xl bg-linear-to-b from-purple-200 to-purple-50 p-5">
          <Image
            src={hero_image}
            alt="Hero Image"
            objectFit="cover"
            className="rounded-t-md"
          />
        </div>
      </div>
      {/* <CompanyMarquee /> */}
    </section>
  );
}

export default Hero;
