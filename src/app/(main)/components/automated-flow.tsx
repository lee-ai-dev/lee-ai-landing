import { AnimatedButton } from "@/components/animated/animated-button";
import ReservationAnimation from "@/components/animated/reservation-animation";
import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";
import React from "react";

function AutomatedFlow() {
  return (
    <section className="items-center gap-8 md:gap-12 lg:gap-20 grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] mx-auto my-8 md:my-12 lg:my-16 p-4 md:p-6 lg:p-8">
      <div id="left" className="">
        <Badge variant="outline">
          <Rocket />
          Automated Flow
        </Badge>

        <div className="mt-6 md:mt-8">
          <p className="text-purple-900 text-2xl md:text-3xl lg:text-4xl">
            Take orders automatically
          </p>
          <p className="md:flex md:flex-col mt-4 text-purple-900 opacity-70 text-sm md:text-base">
            <span>
              Lee AI runs your front desk, manages your orders animated
            </span>
            <span className="mx-1 md:mx-0">
              bookings in chat, syncing with your POS and calender
            </span>
            <span>so you never double-book or miss a sale.</span>
          </p>
        </div>
        <AnimatedButton className="mt-6 w-fit">
          Get Started For Free
        </AnimatedButton>
      </div>
      <div id="right" className="mt-8 lg:mt-0">
        <ReservationAnimation />
      </div>
    </section>
  );
}

export default AutomatedFlow;
