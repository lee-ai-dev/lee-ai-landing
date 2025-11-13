import { AnimatedButton } from "@/components/animated/animated-button";
import LeeIntegrations from "@/components/animated/lee-integrations";
import { Badge } from "@/components/ui/badge";
import { Link } from "lucide-react";
import React from "react";

function SeamlessIntegration() {
  return (
    <section className="items-center gap-8 md:gap-12 lg:gap-20 grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] mx-auto my-8 md:my-12 lg:my-16 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col items-start justify-center">
        <Badge variant="outline">
          <Link className="animate-pulse" />
          <p>Seamless Integration</p>
        </Badge>

        <div className="flex flex-col gap-4 mt-5 text-purple-900 leading-tight">
          <p className="md:flex md:flex-col text-2xl md:text-3xl lg:text-4xl font-medium">
            <span>Connect all your</span> <span>tools in one place</span>
          </p>
          <p className="md:flex md:flex-col text-sm md:text-base">
            <span>Integrate Lee AI with your existing tools </span>{" "}
            <span>to sync menus, payments and reservations </span>
            <span> automatically ensuring seamless operation.</span>
          </p>

          <AnimatedButton className="w-fit">
            Get Started for Free
          </AnimatedButton>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8 lg:mt-0">
        <LeeIntegrations />
      </div>
    </section>
  );
}

export default SeamlessIntegration;
