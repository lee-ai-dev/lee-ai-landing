import { AnimatedButton } from "@/components/animated/animated-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, ShieldCheckIcon, Verified } from "lucide-react";
import Image from "next/image";
import React from "react";

function TrustedByInnovators() {
  return (
    <section id="hero" className="my-16 mx-auto py-32">
      <div className="flex flex-col items-center justify-center text-center text-purple-900">
        <Badge variant="outline" className="px-2 py-1 bg-white border-none">
          <Verified className="mr-1 text-purple-600" />
          <p className="text-purple-600">Trusted By Innovators Worldwide</p>
        </Badge>
        <div className="mt-4 flex flex-col gap-4 items-center justify-center text-center">
          <p className="text-5xl">Ready to run a smart business?</p>
          <p>
            {" "}
            Let Lee Ai handle your customers, so you can focus on creating food
            they'll love
          </p>
        </div>
      </div>

      <div className="mt-10 gap-2 flex items-center justify-center">
        <Button variant="ghost" className=" bg-white">
          Request Demo
        </Button>
        <AnimatedButton>Get Started for Free</AnimatedButton>
      </div>
      <div className="mt-2 flex justify-center text-muted-foreground gap-2"></div>
    </section>
  );
}

export default TrustedByInnovators;
