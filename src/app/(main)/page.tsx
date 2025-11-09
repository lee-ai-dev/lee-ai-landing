import NavigationBar from "@/components/landing/navigation-bar";
import Image from "next/image";
import React from "react";
import _lee_logo from "@/app/assets/lee_logo.png";
import { AnimatedButton } from "@/components/animated/animated-button";
import { Button } from "@/components/ui/button";
import { Lock, ShieldCheckIcon, Verified } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CompanyMarquee } from "@/components/animated/company-marquee";

import hero_image from "@/app/assets/hero_image.png";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Plans from "./components/plans";
import TrustedByInnovators from "./components/trusted-by-innovators";
import AutomatedFlow from "./components/automated-flow";
import InsightGuide from "./components/insight-guide";
import StayAheadOfCompetition from "./components/stay-ahead-of-comp";
import ForDevelopers from "./components/for-developers";
import HowItWorks from "./components/how-it-works";
import { ReviewCarousel } from "@/components/landing/review-carousel";
import SeamlessIntegration from "./components/seamless-integrations";

function LandingPage() {
  return (
    <main className="mx-auto pb-20">
      <NavigationBar />

      <Hero />
      <CompanyMarquee />
      <AutomatedFlow />
      {/* <InsightGuide /> */}
      <SeamlessIntegration />
      <StayAheadOfCompetition />
      <HowItWorks />
      <ForDevelopers />
      <ReviewCarousel />
      {/* <Plans /> */}
      <Plans />
      <TrustedByInnovators />

      <Footer />
    </main>
  );
}

export default LandingPage;
