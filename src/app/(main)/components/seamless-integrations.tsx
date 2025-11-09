import { AnimatedButton } from "@/components/animated/animated-button";
import LeeIntegrations from "@/components/animated/lee-integrations";
import { Badge } from "@/components/ui/badge";
import { Link } from "lucide-react";
import React from "react";

function SeamlessIntegration() {
  return (
    <section className="items-center gap-20 grid grid-cols-2 max-w-[1200px] mx-auto my-16 p-8">
      <div className="flex flex-col  items-start justify-center">
        <Badge variant="outline" className="flex items-center gap-2">
          <Link className="w-4 h-4 text-blue-500 animate-pulse" />
          <p>Seamless Integration</p>
        </Badge>

        <div className="flex flex-col gap-4 mt-5 text-purple-900 leading-tight">
          <p className="flex flex-col text-4xl font-medium">
            <span>Connect all your</span> <span>tools in one place</span>
          </p>
          <p className="flex flex-col">
            <span>Integrate Lee AI with your existing tools </span>{" "}
            <span>to sync menus, payments and reservations </span>
            <span> automatically ensuring seamless operation.</span>
          </p>

          <AnimatedButton className="w-fit">
            Get Started for Free
          </AnimatedButton>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <LeeIntegrations />
      </div>
    </section>
  );
}

export default SeamlessIntegration;
