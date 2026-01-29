
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";


export default function Testimonials() {
    
const testimonials = [
  {
    name: "Shikhar Kapoor",
    role: "Engineer @ PhonePe",
    message:
      "Thank you Stuti! It was a pleasure to have engaged with PropSoch. And we really enjoyed working with you as well. Hope to continue this relation beyond this. Thank you so much! And congratulations to you too. We must meet and celebrate.",
    avatar: "/favicon.ico",
  },
  {
    name: "Ananya Sharma",
    role: "Product Manager",
    message:
      "The guidance we received saved us months of confusion. The team was extremely professional and insightful.",
    avatar: "/favicon.ico",
  },
  {
    name: "Rohit Verma",
    role: "Startup Founder",
    message:
      "Hands down the best decision we made during our home buying journey.",
   avatar: "/favicon.ico",
  },
];

 return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          What our users say
        </h2>

        <Carousel className="relative">
  <CarouselContent>
    {testimonials.map((t, i) => (
      <CarouselItem key={i} className="basis-full lg:basis-1/3">
        <Card>
          <CardContent className="p-6 space-y-4">
            <p className="text-gray-700">“{t.message}”</p>

            <div className="flex items-center gap-3 pt-4">
              <Image
                src={t.avatar}
                alt={t.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-gray-500">
                  {t.role}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>

  
  <div className="flex justify-center gap-4 mt-6 lg:hidden">
    <CarouselPrevious className="static" />
    <CarouselNext className="static" />
  </div>

  
  <div className="hidden lg:block">
    <CarouselPrevious />
    <CarouselNext />
  </div>
</Carousel>

      </div>
    </section>
  );
}