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
    <section className="mx-auto py-16 md:py-24">
      <div className="container w-[1000px] w-max-[1000px] mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="relative rounded-3xl bg-white p-8 shadow-sm md:p-12">
                    {/* Main Content Container */}
                    <div className="flex flex-col items-center md:flex-row md:gap-8">
                      <div>
                        {/* Logo */}
                        <div className="mb-2">
                          <Image
                            src={_logo_ipsum}
                            alt="Logoipsum"
                            width={120}
                            height={32}
                            className="h-8 w-auto"
                          />
                        </div>

                        {/* Quote and Attribution */}
                        <div className="flex-1">
                          {/* Quote */}
                          <blockquote className="mb-6 leading-tight text-purple-900 text-2xl">
                            {testimonial.quote}
                          </blockquote>

                          {/* Attribution */}
                          <p className="mb-8 text-sm text-purple-900/70 md:mb-12 md:text-base">
                            {testimonial.attribution}
                          </p>

                          {/* Navigation Arrows */}
                          <div className="flex items-end justify-end gap-2">
                            <CarouselPrevious className="static size-8 translate-x-0 translate-y-0 rounded-md border-purple-200 bg-white text-[#1E1B4B] hover:bg-purple-50 hover:text-[#1E1B4B]" />
                            <CarouselNext className="static size-8 translate-x-0 translate-y-0 rounded-md border-purple-200 bg-white text-[#1E1B4B] hover:bg-purple-50 hover:text-[#1E1B4B]" />
                          </div>
                        </div>
                      </div>

                      {/* Profile Image */}
                      <div className="mt-8 shrink-0 md:mt-0 h-full">
                        <div className="relative h-64 w-full overflow-hidden rounded-2xl md:h-80 md:w-80 lg:h-96 lg:w-96">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.attribution}
                            fill
                            className="object-cover w-full"
                            sizes="(max-width: 768px)"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
