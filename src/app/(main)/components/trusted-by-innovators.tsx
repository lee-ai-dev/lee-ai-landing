import { AnimatedButton } from "@/components/animated/animated-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, ShieldCheckIcon, Verified } from "lucide-react";
import Image from "next/image";
import React from "react";

function TrustedByInnovators() {
  return (
    <section id="hero" className="my-12 md:my-16 mx-auto px-4">
      <div className="flex flex-col items-center justify-center text-center text-purple-900">
        <Badge
          variant="outline"
          className="bg-white border-none text-xs md:text-sm"
        >
          <Verified className="w-4 h-4" />
          <p>Trusted By Innovators Worldwide</p>
        </Badge>
        <div className="mt-4 flex flex-col gap-4 items-center justify-center text-center max-w-3xl">
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Ready to run a smart business?
          </p>
          <p className="text-sm md:text-base">
            {" "}
            Let Lee Ai handle your customers, so you can focus on creating food
            they'll love
          </p>
        </div>
      </div>

      <div className="w-fit mx-auto mt-6 md:mt-10 gap-2 flex flex-col sm:flex-row items-center justify-center px-4">
        <Button variant="ghost" className="bg-white w-full md:w-fit">
          Request Demo
        </Button>
        <AnimatedButton className="w-fit">Get Started for Free</AnimatedButton>
      </div>
      <div className="mt-2 flex justify-center text-muted-foreground gap-2"></div>
    </section>
  );
}

export default TrustedByInnovators;
