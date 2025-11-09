import React from "react";
import { Badge } from "@/components/ui/badge";
import { AnimatedButton } from "@/components/animated/animated-button";
import {
  Code,
  ShoppingCart,
  Calendar,
  CreditCard,
  ClipboardList,
  MessageSquare,
  BarChart3,
} from "lucide-react";

const apiCards = [
  { icon: ShoppingCart, label: "Orders API" },
  { icon: Calendar, label: "Bookings API" },
  { icon: CreditCard, label: "Payments API" },
  { icon: ClipboardList, label: "Menu Management API" },
  { icon: MessageSquare, label: "Chat Logs API" },
  { icon: BarChart3, label: "Analytics API" },
];

function ForDevelopers() {
  return (
    <>
      <section className="relative w-full overflow-hidden py-20 px-4 max-w-[1000px] mx-auto">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="flex flex-col">
              {/* Badge */}
              <Badge
                variant="outline"
                className="mb-6 w-fit border-purple-300 bg-white/50 text-purple-700"
              >
                <Code className="h-3 w-3" />
                For developers & integrators
              </Badge>

              {/* Heading */}
              <p className="mb-4 text-4xl  text-purple-900 md:text-5xl">
                Want to embed Lee AI in your project?
              </p>

              {/* Description */}
              <p className="mb-8 w-[80%] leading-relaxed text-purple-900 opacity-70">
                We've got you covered with powerful APIs and SDKs. Integrate Lee
                AI into any digital experience with just a few lines of code.
              </p>

              {/* CTA Button */}
              <div>
                <AnimatedButton>See All Integrations</AnimatedButton>
              </div>
            </div>

            {/* Right Column - API Cards Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {apiCards.map((api) => {
                const Icon = api.icon;
                return (
                  <div
                    key={api.label}
                    className="group flex flex-col items-center justify-center gap-2 bg-white/80 py-6 px-2"
                  >
                    {/* Icon Container */}
                    <div className="flex h-12 w-12 items-center justify-center  bg-purple-100 rounded-lg">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>

                    {/* Label */}
                    <p className="text-center text-sm font-medium text-gray-700">
                      {api.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4 mx-auto my-44 w-full max-w-[1000px] text-center text-purple-900 px-4">
        <p className="text-5xl">A partner your business can trust.</p>
        <p className="opacity-70">
          Build for resturants, secure by design, and easy for anyone to use in
          any language.
        </p>
      </section>
    </>
  );
}

export default ForDevelopers;
