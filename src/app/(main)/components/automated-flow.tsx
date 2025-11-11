import { AnimatedButton } from "@/components/animated/animated-button";
import ReservationAnimation from "@/components/animated/reservation-animation";
import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";
import React from "react";

function AutomatedFlow() {
  return (
    <section className="items-center gap-20 grid grid-cols-2 max-w-[1200px] mx-auto my-16 p-8">
      <div id="left" className="">
        <Badge variant="outline">
          <Rocket />
          Automated Flow
        </Badge>

        <div className="mt-8">
          <p className="text-purple-900 text-4xl">Take orders automatically</p>
          <p className="flex flex-col mt-4 text-purple-900 opacity-70">
            <span>
              Lee AI runs your front desk, manages your orders animated
            </span>
            <span>bookings in chat, syncing with your POS and calender</span>
            <span>so you never double-book or miss a sale</span>
          </p>
        </div>
        <AnimatedButton className="mt-6">Get Started For Free</AnimatedButton>
      </div>
      <div id="right" className="">
        <ReservationAnimation />
      </div>
    </section>
  );
}

export default AutomatedFlow;
