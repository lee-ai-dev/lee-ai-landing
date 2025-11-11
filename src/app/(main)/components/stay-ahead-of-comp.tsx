import React from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, Settings, CreditCard } from "lucide-react";
import { BubbleBackground } from "@/components/ui/shadcn-io/bubble-background";

const features = [
  {
    icon: Clock,
    title: "Available 24/7",
    description:
      "Lee AI stays online 24/7, ready to serve your customers anytime, anywhere via your channels.",
  },
  {
    icon: Settings,
    title: "Smarter Operations",
    description:
      "Lee AI instantly syncs updates, keeping every channel and order up to date without extra work.",
  },
  {
    icon: CreditCard,
    title: "Instant Payment",
    description:
      "Quick, secure, and effortless. Payment that instantly reflects in your dashboard.",
  },
];

function StayAheadOfCompetition() {
  return (
    <BubbleBackground
      interactive={true}
      colors={{
        second: "153, 136, 253",
        first: "39, 31, 54",
        third: "60, 70, 80",
        fourth: "90, 100, 110",
        // fifth: "120, 130, 140",
        // sixth: "150, 160, 170",
      }}
      className="bg-[#271F36]"
    >
      <section className="relative w-full overflow-hidden py-30 px-4">
        <div className="mx-auto max-w-[1000px]">
          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <Badge variant="outline" className="border-none">
              <Sparkles />
              Stay ahead of competitors
            </Badge>
          </div>

          {/* Heading */}
          <p className="flex flex-col mb-16 text-center text-4xl text-white md:text-5xl lg:text-6xl">
            <span>Why Restaurant Owners Like</span>{" "}
            <span> You Love Lee AI</span>
          </p>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex flex-col rounded-2xl border border-white/20 bg-white/5 p-8 backdrop-blur-sm"
                >
                  {/* Icon Container */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#9988FD]">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Title */}
                  <p className="mb-3 text-2xl font-semibold text-white">
                    {feature.title}
                  </p>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-white/70">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </BubbleBackground>
  );
}

export default StayAheadOfCompetition;
