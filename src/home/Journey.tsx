"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import journeyImage from "./../../src/app/favicon.ico";

const testimonials = [
  {
    name: "Riya Malhotra",
    role: "Marketing Manager",
    message:
      "The team helped us avoid bad projects and shortlist only the best ones.",
  },
  {
    name: "Amit Verma",
    role: "Startup Founder",
    message:
      "Saved us weeks of research. The guidance was honest and data-driven.",
  },
  {
    name: "Neha Kapoor",
    role: "HR Lead",
    message:
      "We felt confident at every step. Truly a stress-free experience.",
  },
];

export default function JourneyWithTestimonials() {
  return (
    <section className="py-24 bg-white reveal-section">
      <div className="max-w-7xl mx-auto px-6">

       
        <div className="grid md:grid-cols-2 gap-12 items-center">
         
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              We're with you every step of the journey
            </h2>

            <p className="text-gray-600 max-w-md">
              Lost souls fall prey to FOMO, spam & deceit.
              Not you. Our experts will guide you home.
            </p>

            <Button size="lg">Book An Appointment</Button>
          </div>

         
          <div className="relative w-full h-62.5 hidden md:flex items-center justify-center">
            <Image
              src={journeyImage}
              alt="Journey"
              height={250}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

      
        <div className="mt-20 relative">

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem
                  key={i}
                  className="
                    basis-full 
                    md:basis-1/2 
                    lg:basis-1/3
                  "
                >
                  <Card className="h-full">
                    <CardContent className="p-8 text-center space-y-4">
                      <p className="text-gray-700 italic">
                        “{t.message}”
                      </p>
                      <div>
                        <div className="font-medium">{t.name}</div>
                        <div className="text-sm text-gray-500">
                          {t.role}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            
            <div className="hidden lg:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>

           
            <div className="flex justify-center gap-4 mt-6 lg:hidden">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>

      </div>
    </section>
  );
}
