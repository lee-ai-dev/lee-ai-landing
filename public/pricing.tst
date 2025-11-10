"use client";

import { Badge } from "@/components/ui/badge";
import { AnimatedButton } from "@/components/animated/animated-button";
import { CircleDollarSign } from "lucide-react";
import { BubbleBackground } from "@/components/ui/shadcn-io/bubble-background";

export default function Plans() {
  return (
    <BubbleBackground
      interactive={true}
      colors={{
        second: "153, 136, 253",
        first: "39, 31, 54",
        third: "60, 70, 80",
        fourth: "90, 100, 110",
      }}
      className="bg-[#271F36]"
    >
      <section className="relative mx-auto max-w-[1200px] px-4 py-20">
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-6 border-none text-sm text-purple-500"
          >
            <CircleDollarSign className="h-3 w-3" />
            Transparent Pricing
          </Badge>

          <p className="mb-4 text-4xl text-white md:text-5xl lg:text-6xl">
            Flexible Plans for All
          </p>

          <p className="text-lg text-white/70">
            Choose a plan that fits your goals and scale as you grow
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-0 md:grid-cols-3">
          {/* Starter Plan */}
          <div className="flex flex-col rounded-3xl border-2 border-purple-400/50 bg-white/10 p-8">
            {/* Header */}
            <div className="mb-8 text-center">
              <h3 className="mb-2 text-2xl font-bold text-white">Starter</h3>
              <p className="text-xl text-white/90">Free</p>
            </div>

            {/* Features */}
            <div className="flex-1 space-y-6">
              <p className="text-center text-sm text-white/80">
                100 messages/month
              </p>
              <p className="text-center text-sm text-white/80">
                Cancel anytime
              </p>
              <p className="text-center text-sm text-white/80">
                Free onboarding
              </p>
              <p className="text-center text-sm text-white/80">
                24/7 customer support
              </p>
              <p className="text-center text-sm text-white/80">
                menu + basic booking
              </p>
            </div>

            {/* Empty space for button alignment */}
            <div className="mt-8 h-12"></div>
          </div>

          {/* Growth Plan */}
          <div className="flex flex-col bg-white/5 p-8 rounded-3xl mx-2">
            {/* Header */}
            <div className="mb-8 text-center">
              <h3 className="mb-2 text-2xl font-bold text-white">Growth</h3>
              <p className="text-xl text-white/90">$29/month</p>
            </div>

            {/* Features */}
            <div className="flex-1 space-y-6">
              <p className="text-center text-sm text-white/80">
                Unlimited chats
              </p>
              <p className="text-center text-sm text-white/80">
                All starter functions
              </p>
              <p className="text-center text-sm text-white/80">payments</p>
              <p className="text-center text-sm text-white/80">
                WhatsApp + Instagram integration
              </p>
              <p className="text-center text-sm text-white/80">
                24/7 customer support
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex justify-center">
              <AnimatedButton className="w-fit">Get Started</AnimatedButton>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="flex flex-col bg-white/5 p-8 rounded-3xl mx-2">
            {/* Header */}
            <div className="mb-8 text-center">
              <h3 className="mb-2 text-2xl font-bold text-white">Pro</h3>
              <p className="text-xl text-white/90">$79/month</p>
            </div>

            {/* Features */}
            <div className="flex-1 space-y-6">
              <p className="text-center text-sm text-white/80">
                All starter and growth functions
              </p>
              <p className="text-center text-sm text-white/80">
                Multi-location
              </p>
              <p className="text-center text-sm text-white/80">analytics</p>
              <p className="text-center text-sm text-white/80">API access</p>
              <p className="text-center text-sm text-white/80">
                multilingual support
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex justify-center">
              <AnimatedButton className="w-fit">Get Started</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </BubbleBackground>
  );
}
