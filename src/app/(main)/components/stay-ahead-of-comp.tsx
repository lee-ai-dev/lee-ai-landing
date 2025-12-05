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
        fifth: "",
        sixth: "",
      }}
      className="bg-[#271F36]"
    >
      <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1000px]">
          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <Badge variant="outline" className="border-none text-xs md:text-sm">
              <Sparkles className="w-4 h-4" />
              Stay ahead of competitors
            </Badge>
          </div>

          {/* Heading */}
          <p className="flex flex-col mb-12 md:mb-16 text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white">
            <span>Why Restaurant Owners Like</span>{" "}
            <span> You Love Lee AI</span>
          </p>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex flex-col rounded-2xl border border-white/20 bg-white/5 p-6 md:p-8 backdrop-blur-sm"
                >
                  {/* Icon Container */}
                  <div className="mb-4 md:mb-6 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-[#9988FD]">
                    <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>

                  {/* Title */}
                  <p className="mb-3 text-lg md:text-xl lg:text-2xl font-semibold text-white">
                    {feature.title}
                  </p>

                  {/* Description */}
                  <p className="text-sm md:text-base leading-relaxed text-white/70">
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
