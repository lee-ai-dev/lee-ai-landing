"use client";
import { AnimatedButton } from "@/components/animated/animated-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, ShieldCheckIcon, Verified } from "lucide-react";
import Image from "next/image";
import hero_image from "@/app/assets/hero_image.png";
import _lee_logo from "@/app/assets/lee_logo.png";

function Hero() {
  return (
    <section id="hero" className="mt-8 md:mt-12 lg:mt-16 px-4">
      <div className="w-[80%] md:w-fit mx-auto flex justify-center text-center text-purple-900 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide">
        <p className="flex flex-col max-w-4xl">
          <span className="md:flex md:flex-wrap items-center justify-center mb-0 md:mb-2 gap-2 md:gap-4">
            <span className="flex justify-center md:flex-none">
              Automate Orders
            </span>
            <Image
              src={_lee_logo}
              alt="lee_logo"
              width={40}
              height={40}
              className="hidden md:block border -rotate-15 rounded-lg shadow-md w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
            />
            <span className="mx-2 md:0">Reservations</span>
          </span>
          <span>and Replies, All in One Place.</span>
        </p>
      </div>
      <div>
        <p className="text-center md:flex md:flex-col mt-4 md:mt-6 text-purple-900 opacity-80 text-sm md:text-base px-4">
          <span>
            Lee AI handles every part of your customer experience. It saves you
            hours of manual{" "}
          </span>{" "}
          <span>
            work and ensures your restaurant never misses a moment to serve.
          </span>
        </p>
      </div>
      <div className="w-fit mx-auto mt-6 md:mt-10 gap-2 flex flex-col sm:flex-row items-center justify-center px-4">
        <Button variant="ghost" className="bg-white w-full md:w-fit">
          Request Demo
        </Button>
        <AnimatedButton className="w-fit">Get Started for Free</AnimatedButton>
      </div>
      <div className="mt-4 flex flex-wrap justify-center text-muted-foreground gap-2 px-4">
        <Badge variant="outline" className="border-none text-xs md:text-sm">
          <Verified className="w-4 h-4" />
          <p>Quick Setup</p>
        </Badge>
        <Badge variant="outline" className="border-none text-xs md:text-sm">
          <Lock className="w-4 h-4" />
          <p>GDPR-Compliant</p>
        </Badge>
        <Badge variant="outline" className="border-none text-xs md:text-sm">
          <ShieldCheckIcon className="w-4 h-4" />
          <p>Secure Payments</p>
        </Badge>
      </div>

      <div className="mt-12 md:mt-16 lg:mt-20 max-w-[800px] mx-auto mb-12 md:mb-16 lg:mb-20 px-4">
        <div className="w-full overflow-hidden rounded-t-2xl bg-linear-to-b from-purple-200 to-purple-50 p-3 md:p-5">
          <div className="">
            <Image src={hero_image} alt="Hero Image" className="rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
