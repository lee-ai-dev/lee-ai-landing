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
      }}
      className="bg-[#271F36]"
    >
      <section className="relative mx-auto max-w-[1200px] px-4 py-20">
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-6 border-none bg-purple- text-sm text-purple-500"
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
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col p-8 ${
                plan.highlighted
                  ? "rounded-3xl border-2 border-purple-400/50 bg-white/10"
                  : "rounded-3xl bg-white/5 mx-2"
              }`}
            >
              {/* Header */}
              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {plan.name}
                </h3>
                <p className="text-xl text-white/90">{plan.price}</p>
              </div>

              {/* Features */}
              <div className="flex-1 space-y-6">
                {plan.features.map((feature, featureIndex) => (
                  <p
                    key={featureIndex}
                    className="text-center text-sm text-white/80"
                  >
                    {feature}
                  </p>
                ))}
              </div>

              {/* CTA Button or Empty Space */}
              <div className="mt-8 flex justify-center">
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
