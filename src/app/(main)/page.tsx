import NavigationBar from "@/components/landing/navigation-bar";
import Image from "next/image";
import React from "react";
import _lee_logo from "@/app/assets/lee_logo.png";

function LandingPage() {
  return (
    <main>
      <NavigationBar />

      <section id="hero" className="mt-16">
        <div className="flex justify-center text-center text-purple-900 text-5xl font-semibold tracking-wide">
          <p className="flex flex-col">
            <span className="flex mb-2">
              Automate Orders{" "}
              <Image
                src={_lee_logo}
                alt="lee_logo"
                width={"100%"}
                height={45}
                className="bg-white border mx-2 -rotate-15 rounded-lg shadow-md"
              />
              Reservations,
            </span>{" "}
            <span>and Replies, All in One Place.</span>
          </p>
        </div>
        <p className="text-center flex flex-col mt-6 text-purple-900 opacity-80">
          <span>
            Lee AI handles every part of your customer experience. It saves you
            hours of manual{" "}
          </span>{" "}
          <span>
            work and ensures your restaurant never misses a moment to serve.
          </span>
        </p>
      </section>
    </main>
  );
}

export default LandingPage;
