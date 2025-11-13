import React from "react";
import Marquee from "react-fast-marquee";

import calendly from "@/app/assets/social-icons/calendly.png";
import stripe from "@/app/assets/social-icons/stripe.png";
import square from "@/app/assets/social-icons/square.png";
import wa from "@/app/assets/social-icons/wa.png";
import twitter from "@/app/assets/social-icons/twitter.png";
import ms_outlook from "@/app/assets/social-icons/ms_outlook.png";
import gcalendar from "@/app/assets/social-icons/gcalendar.png";
import paystack from "@/app/assets/social-icons/paystack.png";
import fb from "@/app/assets/social-icons/fb.png";
import instagram from "@/app/assets/social-icons/instagram.png";
import paypal from "@/app/assets/social-icons/paypal.png";
import lee_logo from "@/app/assets/lee_logo.png";
import Image from "next/image";

const integrations = [
  { name: "Calendly", icon: calendly },
  { name: "Stripe", icon: stripe },
  { name: "Square", icon: square },
  { name: "WhatsApp", icon: wa },
  { name: "Twitter", icon: twitter },
  { name: "Outlook", icon: ms_outlook },
  { name: "Google Calendar", icon: gcalendar },
  { name: "Paystack", icon: paystack },
  { name: "Facebook", icon: fb },
  { name: "Instagram", icon: instagram },
  { name: "PayPal", icon: paypal },
];

function IntegrationIcon({ icon, name }: { icon: any; name: string }) {
  return (
    <div className="flex items-center justify-center bg-white/90 backdrop-blur-sm p-2 rounded-lg mx-1">
      <Image
        src={icon}
        alt={name}
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
        quality={100}
      />
    </div>
  );
}

function LeeIntegrations() {
  return (
    <div className="relative w-full h-[200px] md:h-[250px] lg:h-[300px] flex items-center justify-center overflow-hidden">
      {/* Purple blur background */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[250px] h-[150px] md:w-[350px] md:h-[200px] lg:w-[400px] lg:h-[250px] bg-linear-to-br from-purple-400/40 to-purple-500/40 rounded-full blur-3xl" />
      </div>

      {/* Brand icons with blurry edges - 3 rows */}
      <div
        className="absolute inset-0 z-10 flex flex-col justify-center gap-2 md:gap-3 lg:gap-4"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, white 60%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, white 60%, transparent)",
        }}
      >
        {/* Row 1 - Left to Right */}
        <Marquee speed={30} gradient={false} pauseOnHover>
          {integrations.map((integration, index) => (
            <IntegrationIcon
              key={`row1-${index}`}
              icon={integration.icon}
              name={integration.name}
            />
          ))}
        </Marquee>

        {/* Row 2 - Right to Left */}
        <Marquee speed={30} gradient={false} direction="right" pauseOnHover>
          {integrations.map((integration, index) => (
            <IntegrationIcon
              key={`row2-${index}`}
              icon={integration.icon}
              name={integration.name}
            />
          ))}
        </Marquee>

        {/* Row 3 - Left to Right */}
        <Marquee speed={30} gradient={false} pauseOnHover>
          {integrations.map((integration, index) => (
            <IntegrationIcon
              key={`row3-${index}`}
              icon={integration.icon}
              name={integration.name}
            />
          ))}
        </Marquee>
      </div>

      {/* Lee AI Logo in the center - front most */}
      <div className="absolute z-20 flex items-center justify-center">
        <div className="bg-white/95 backdrop-blur-md rounded-md -rotate-12 p-1 shadow-2xl">
          <Image
            src={lee_logo}
            alt="Lee AI Logo"
            width={100}
            height={100}
            className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
            quality={100}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default LeeIntegrations;
