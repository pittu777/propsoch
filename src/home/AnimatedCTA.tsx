"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const line1 = useRef<HTMLSpanElement>(null);
  const line2 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.fromTo(
      [line1.current, line2.current],
      {
        scaleX: 0,
        transformOrigin: "center",
      },
      {
        scaleX: 1,
        duration: 1.2,
        stagger: 0.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",  
          once: true,        
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white text-center">
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Experience delightful home buying{" "}
          <span className="relative inline-block px-1">
            dream home
            <span
              ref={line1}
              className="absolute left-0 bottom-0 h-[6px] w-full bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-full blur-[0.5px]"
            />
          </span>{" "}
          so your loved ones{" "}
          <span className="relative inline-block px-1">
            happy family
            <span
              ref={line2}
              className="absolute left-0 bottom-0 h-[6px] w-full bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-full blur-[0.5px]"
            />
          </span>{" "}
          can say home sweet home.
        </h2>

        <Button size="lg" className="px-10 py-6 text-lg">
          Book An Appointment
        </Button>
      </div>
    </section>
  );
}
