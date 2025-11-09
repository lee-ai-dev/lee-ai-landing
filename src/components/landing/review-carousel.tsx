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
    <section className="max-w-[1000px] mx-auto p-8 flex flex-col gap-4">
      <div className="text-center">
        <Badge className="mx-auto" variant="outline">
          <Star className="mr-1 h-4 w-4 text-yellow-500" />
          Trusted by Innovators Worldwide
        </Badge>
      </div>

      <div className="text-center">
        <p className="text-5xl">What our users are saying</p>
        <p className="my-1">
          Hear from businesses who've transformed their workflows with our
          solutions
        </p>
      </div>

      <Carousel className="mx-auto mt-12 w-full">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="flex items-center">
              <div className="grid grid-cols-2 items-center justify-between">
                <div className="text-2xl">
                  {/* logo ipsum */}
                  <Image
                    src={_logo_ipsum}
                    alt={testimonial.attribution}
                    width={150}
                    height={200}
                    className="pb-2"
                  />
                  <p className="font-medium">{testimonial.quote}</p>
                  <footer className="text-muted-foreground text-sm pt-12">
                    {testimonial.attribution}
                  </footer>
                </div>
                <div className="">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.attribution}
                    width={300}
                    height={100}
                    className="mx-auto"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* buttons */}
        <CarouselPrevious className="right-112 bottom-0 top-auto -translate-y-1/2 left-auto rounded-md" />
        <CarouselNext className="right-100 bottom-0 top-auto -translate-y-1/2 rounded-md" />{" "}
      </Carousel>
    </section>
  );
}
