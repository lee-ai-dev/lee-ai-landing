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
      <section className="relative mx-auto max-w-[1000px] px-4 py-20">
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

        {/* Pricing Table */}
        <div className="mx-auto max-w-5xl">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                {/* Starter Header */}
                <th className="rounded-tl-3xl border-l-2 border-t-2 border-purple-400/50 bg-white/10 p-8 text-center shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                  <h3 className="mb-2 text-2xl font-bold text-white">Starter</h3>
                  <p className="text-xl font-normal text-white/90">Free</p>
                </th>

                {/* Growth Header */}
                <th className="bg-white/5 p-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-white">Growth</h3>
                  <p className="text-xl font-normal text-white/90">$29/month</p>
                </th>

                {/* Pro Header */}
                <th className="rounded-tr-3xl bg-white/5 p-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-white">Pro</h3>
                  <p className="text-xl font-normal text-white/90">$79/month</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="border-b border-white/10">
                {/* Starter Column */}
                <td className="border-l-2 border-r-2 border-purple-400/50 bg-white/10 p-6 text-center">
                  <p className="text-sm text-white/80">100 messages/month</p>
                </td>

                {/* Growth Column */}
                <td className="bg-white/5 p-6 text-center">
                  <p className="text-sm text-white/80">Unlimited chats</p>
                </td>

                {/* Pro Column */}
                <td className="bg-white/5 p-6 text-center">
                  <p className="text-sm text-white/80">All starter and growth functions</p>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="border-b border-white/10">
                {/* Starter Column */}
                <td className="border-l-2 border-r-2 border-purple-400/50 bg-white/10 p-6 text-center">
                  <p className="text-sm text-white/80">Cancel anytime</p>
                </td>

                {/* Growth Column */}
                <td className="bg-white/5 p-6 text-center">
                  <p className="text-sm text-white/80">All starter functions</p>
                </td>

                {/* Pro Column */}
                <td className="bg-white/5 p-6 text-center">
                  <p className="text-sm text-white/80">Multi-location</p>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="border-b border-white/10">
                {/* Starter Column */}
                <td className="border-l-2 border-r-2 border-purple-400/50 bg-white/10 p-6 text-center">
                  <p className="text-sm text-white/80">Free onboarding</p>
                </td>

                {/* Growth Column */}
                <td className="bg-white/5 p-6 text-center">
                  <p className="text-sm text-white/80">payments</p>
                </td>

                {/* Pro Column */}
                <td className="bg-white/5 p-6 text-center">
                  <p className="text-sm text-white/80">analytics</p>
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="border-b border-white/10">
                {/* Starter Column */}
                <td className="border-l-2 border-r-2 border-purple-400/50 bg-white/10 p-6 text-center">
                  <p className="text-sm text-white/80">24/7 customer support</p>
                </td>

                {/* Growth Column */}
                <td className="bg-white/5 p-6 text-center">
                  <p className="text-sm text-white/80">WhatsApp + Instagram integration</p>
                </td>

                {/* Pro Column */}
                <td className="bg-white/5 p-6 text-center">
                  <p className="text-sm text-white/80">API access</p>
                </td>
              </tr>

              {/* Row 5 - Last Row */}
              <tr>
                {/* Starter Column */}
                <td className="rounded-bl-3xl border-b-2 border-l-2 border-r-2 border-purple-400/50 bg-white/10 p-6 text-center">
                  <p className="text-sm text-white/80">menu + basic booking</p>
                </td>

                {/* Growth Column */}
                <td className="bg-white/5 p-6 text-center">
                  <p className="text-sm text-white/80">24/7 customer support</p>
                </td>

                {/* Pro Column */}
                <td className="rounded-br-3xl bg-white/5 p-6 text-center">
                  <p className="text-sm text-white/80">multilingual support</p>
                </td>
              </tr>
            </tbody>
          </table>

          {/* CTA Buttons Row */}
          <div className="mt-8 grid grid-cols-3">
            {/* Starter - No button */}
            <div></div>

            {/* Growth Button */}
            <div className="flex justify-center">
              <AnimatedButton className="bg-gradient-to-r from-purple-600 to-purple-500">
                Get Started
              </AnimatedButton>
            </div>

            {/* Pro Button */}
            <div className="flex justify-center">
              <AnimatedButton className="bg-gradient-to-r from-purple-600 to-purple-500">
                Get Started
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </BubbleBackground>
  );
}
