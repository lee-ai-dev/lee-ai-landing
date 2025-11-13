import { AnimatedButton } from "@/components/animated/animated-button";
import SalesInsightAnimation from "@/components/animated/sales-insight-animation";
import { Badge } from "@/components/ui/badge";
import { MousePointer } from "lucide-react";
import Image from "next/image";
import React from "react";

import sales_insight from "@/app/assets/sales-insight-1.svg";

function InsightGuide() {
  return (
    <section className="flex flex-col-reverse md:flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 max-w-[1200px] mx-auto my-8 md:my-12 lg:my-16 p-4 md:p-6 lg:p-8">
      <div className="w-full lg:w-1/2">
        {/* <SalesInsightAnimation /> */}
        <Image
          src={sales_insight}
          alt="Sales Insight Dashboard View 2"
          className="w-full"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <Badge variant="outline">
          <MousePointer />
          <p>Insight Guide</p>
        </Badge>

        <div className="mt-6 md:mt-8 flex flex-col gap-4">
          <p className="md:flex flex-col text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-purple-900">
            <span>Smarter insights,</span> <span>faster decisions</span>
          </p>
          <p className="md:flex md:flex-col text-sm md:text-base text-purple-900/80">
            <span>Monitor your sales, reservations, and customer</span>
            <span className="mx-1 md:mx-0">
              habits in one view. Act fast with live data
            </span>
            <span>powers better decisions every day.</span>
          </p>

          <AnimatedButton className="w-fit">Get Started</AnimatedButton>
        </div>
      </div>
    </section>
  );
}

export default InsightGuide;
