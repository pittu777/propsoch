"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Home Loan Offers",
    avatar: "/favicon.ico",
  },
  {
    title: "Legal Due Diligence",
    avatar: "/favicon.ico",
  },
  {
    title: "Tax Planning",
    avatar: "/favicon.ico",
  },
  {
    title: "Quality Inspection",
     avatar: "/favicon.ico",
  },
  {
    title: "Vastu Advisors",
     avatar: "/favicon.ico",
  },
  {
    title: "Interior Designers",
     avatar: "/favicon.ico",
  },
];

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

       
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            All this & lot more, for your peace of mind
          </h2>

          <p className="text-gray-300">
            Insights you won't find anywhere else on locations, builders & projects
          </p>

          <div className="flex justify-center gap-4">
            <Button variant="secondary">See Sample Report</Button>
            <Button>Book An Appointment</Button>
          </div>
        </div>

        
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold">
            That’s not all, we’re really with you every step of the way
          </h3>
          <p className="text-gray-400 mt-2">
            From home loans, legal, taxes, interiors to printing housewarming invites, we’ve got you covered
          </p>
        </div>

       
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                <Image
                  src={service.avatar}
                  alt={service.title}
                  width={28}
                  height={28}
                />
              </div>
              <div className="font-medium">{service.title}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
