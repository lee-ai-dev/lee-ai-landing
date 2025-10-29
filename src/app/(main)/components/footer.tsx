import { Card, CardContent } from "@/components/ui/card";
import { div } from "framer-motion/client";
import React from "react";

function Footer() {
  const footer_sections = [
    {
      title: "Company",
      links: [
        "Home",
        "Features",
        "How it works",
        "Lee Developers & Integrators",
        "Testimonials",
      ],
    },
    {
      title: "Integrations",
      links: [
        "Stripe",
        "Twilio",
        "Google Calendar",
        "Meta Messenger",
        "WhatsApp Business",
        "SendGrid",
      ],
    },
    {
      title: "Support",
      links: ["support@leeai.io", "www.leeai.io", "+44 0000 000 000"],
    },
  ];
  return (
    <Card className="shadow-none border-none bg-[#271F36] text-white mb-8 p-8 max-w-[1000px] mx-auto">
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          {footer_sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <p className="font-bold text-purple-400">{section.title}</p>
              <ul className="flex flex-col gap-2 cursor-pointer">
                {section.links.map((link) => (
                  <li
                    key={link}
                    className="text-sm text-white my-0.5 hover:text-purple-300"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <p className="text-end text-white text-sm my-6">
            &copy; {new Date().getFullYear()} Lee AI. All rights reserved.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default Footer;
