import { AnimatedButton } from "@/components/animated/animated-button";
import SalesInsightAnimation from "@/components/animated/sales-insight-animation";
import { Badge } from "@/components/ui/badge";
import { MousePointer } from "lucide-react";
import React from "react";

function InsightGuide() {
  return (
    <section className="flex gap-20 max-w-[1200px] w- mx-auto my-16 p-8">
      <div>
        <SalesInsightAnimation />
      </div>
      <div>
        <Badge variant="outline" className="flex gap-2">
          <MousePointer className="text-purple-700" />
          <p className="text-purple-600">Insight Guide</p>
        </Badge>

        <div className="mt-8 flex flex-col gap-4">
          <p className="flex flex-col text-4xl font-medium leading-tight text-purple-900">
            <span>Smarter insights,</span> <span>faster decisions</span>
          </p>
          <p className="flex flex-col text-purple-900/80">
            <span>Monitor your sales, reservations, and customer</span>
            <span>habits in one view. Act fast with live data</span>{" "}
            <span>powers better decisions every day.</span>
          </p>

          <AnimatedButton className="w-fit">Get Started</AnimatedButton>
        </div>
      </div>
    </section>
  );
}

export default InsightGuide;
