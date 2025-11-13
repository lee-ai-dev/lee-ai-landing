"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import image_1 from "@/app/assets/carousel/1.png";
import image_2 from "@/app/assets/carousel/2.png";
import image_3 from "@/app/assets/carousel/3.png";
import _logo_ipsum from "@/app/assets/logos/logoipsum.png";
import { section } from "framer-motion/client";
import { Badge } from "../ui/badge";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  attribution: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Lee AI handles 90% of our messages. We're saving hours daily and orders have gone up by 40%.",
    attribution: "Marco, Owner, Trattoria Firenze",
    image: image_1.src,
  },
  {
    id: 2,
    quote:
      "It's like having a receptionist who never gets tired. Customers love how responsive we are now.",
    attribution: "Sarah, Café du Soleil",
    image: image_2.src,
  },
  {
    id: 3,
    quote:
      "Our WhatsApp bookings doubled in a month. Lee AI paid for itself in weeks.",
    attribution: "Osei, The Grill Room",
    image: image_3.src,
  },
];

export function ReviewCarousel() {
  return (
    <section className="max-w-[1000px] mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-4">
      <div className="text-center">
        <Badge className="mx-auto" variant="outline">
          <Star />
          Trusted by Innovators Worldwide
        </Badge>
      </div>

      <div className="text-center">
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          What our users are saying
        </p>
        <p className="my-1 text-sm md:text-base">
          Hear from businesses who've transformed their workflows with our
          solutions
        </p>
      </div>

      <Carousel className="mx-auto mt-8 md:mt-12 w-full">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-6 lg:gap-8">
                <div className="text-base md:text-lg lg:text-xl xl:text-2xl order-2 lg:order-1">
                  {/* logo ipsum */}
                  <Image
                    src={_logo_ipsum}
                    alt={testimonial.attribution}
                    width={120}
                    height={160}
                    className="pb-2"
                  />
                  <p className="font-medium">{testimonial.quote}</p>
                  <footer className="text-muted-foreground text-sm pt-6 md:pt-8 lg:pt-12">
                    {testimonial.attribution}
                  </footer>
                </div>
                <div className="order-1 lg:order-2">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.attribution}
                    width={300}
                    height={100}
                    className="mx-auto max-w-full h-auto"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* buttons */}
        <CarouselPrevious className="hidden md:flex right-24 lg:right-28 bottom-0 top-auto -translate-y-1/2 left-auto rounded-md" />
        <CarouselNext className="hidden md:flex right-12 lg:right-16 bottom-0 top-auto -translate-y-1/2 rounded-md" />{" "}
      </Carousel>
    </section>
  );
}
