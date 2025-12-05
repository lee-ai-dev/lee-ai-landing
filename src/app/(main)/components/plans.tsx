"use client";

import { Badge } from "@/components/ui/badge";
import { AnimatedButton } from "@/components/animated/animated-button";
import { CircleDollarSign } from "lucide-react";
import { BubbleBackground } from "@/components/ui/shadcn-io/bubble-background";

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    features: [
      "100 Messages/Month",
      "Cancel Anytime",
      "Free Onboarding",
      "24/7 Customer Support",
      "Menu + Basic Booking",
    ],
    hasButton: false,
    highlighted: true,
  },
  {
    name: "Growth",
    price: "$29/month",
    features: [
      "Unlimited Chats",
      "All Starter Functions",
      "Payments",
      "WhatsApp + Instagram Integration",
      "24/7 Customer Support",
    ],
    hasButton: true,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$79/month",
    features: [
      "All Starter and Growth Functions",
      "Multi-location",
      "Analytics",
      "API Access",
      "Multilingual Support",
    ],
    hasButton: true,
    highlighted: false,
  },
];

export default function Plans() {
  return (
    <BubbleBackground
      interactive={true}
      colors={{
        second: "153, 136, 253",
        first: "39, 31, 54",
        third: "60, 70, 80",
        fourth: "90, 100, 110",
        fifth: "",
        sixth: "",
      }}
      className="bg-[#271F36]"
    >
      <section className="relative mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-6 border-none text-xs md:text-sm"
          >
            <CircleDollarSign className="w-4 h-4" />
            Transparent Pricing
          </Badge>

          <p className="mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white">
            Flexible Plans for All
          </p>

          <p className="text-sm md:text-base lg:text-lg text-white/70">
            Choose a plan that fits your goals and scale as you grow
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:gap-0 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col p-6 md:p-8 ${
                plan.highlighted
                  ? "rounded-3xl border-2 border-purple-400/50 bg-white/10"
                  : "rounded-3xl bg-white/5 md:mx-2"
              }`}
            >
              {/* Header */}
              <div className="mb-6 md:mb-8 text-center">
                <h3 className="mb-2 text-xl md:text-2xl font-bold text-white">
                  {plan.name}
                </h3>
                <p className="text-lg md:text-xl text-white/90">{plan.price}</p>
              </div>

              {/* Features */}
              <div className="flex-1 space-y-4 md:space-y-6">
                {plan.features.map((feature, featureIndex) => (
                  <p
                    key={featureIndex}
                    className="text-center text-xs md:text-sm text-white/80"
                  >
                    {feature}
                  </p>
                ))}
              </div>

              {/* CTA Button or Empty Space */}
              <div className="mt-6 md:mt-8 flex justify-center">
                {plan.hasButton ? (
                  <AnimatedButton className="w-fit">Get Started</AnimatedButton>
                ) : (
                  <div className="h-12"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </BubbleBackground>
  );
}
