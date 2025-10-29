"use client";

import { Badge } from "@/components/ui/badge";
import { AnimatedButton } from "@/components/animated/animated-button";
import { Info, Check, DollarSign, CircleDollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import { section } from "framer-motion/client";

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    highlighted: true,
    features: [
      "100 messages/month",
      "Cancel anytime",
      "Free onboarding",
      "24/7 customer support",
      "menu + basic booking",
    ],
    hasButton: false,
  },
  {
    name: "Growth",
    price: "$29/month",
    highlighted: false,
    features: [
      "Unlimited chats",
      "All starter functions",
      "payments",
      "WhatsApp + Instagram integration",
      "24/7 customer support",
    ],
    hasButton: true,
  },
  {
    name: "Pro",
    price: "$79/month",
    highlighted: false,
    features: [
      "All starter and growth functions",
      "Multi-location",
      "analytics",
      "API access",
      "multilingual support",
    ],
    hasButton: true,
  },
];

export default function Plans() {
  return <section></section>;
}
