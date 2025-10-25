import React from "react";
import _lee_logo from "@/app/assets/lee_logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function NavigationBar() {
  return (
    <nav className="my-8 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <Image src={_lee_logo} alt="lee_logo" width={30} height={30} />
        <p className="font-semibold">Lee AI</p>
      </div>
      <div className="flex [&>li]:list-none gap-8">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">How it works</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
      </div>
      <div className="border-2 p-1 rounded-full ">
        <Button variant="ghost" className="border rounded-full">
          Start for free
        </Button>
      </div>
    </nav>
  );
}

export default NavigationBar;
