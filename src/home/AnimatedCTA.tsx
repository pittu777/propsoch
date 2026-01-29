"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

export default function AnimatedCTA() {
  const line1 = useRef(null);
  const line2 = useRef(null);

  useEffect(() => {
    gsap.from([line1.current, line2.current], {
      width: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="py-10 bg-white text-center">
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Experience delightful home buying{" "}
          <span className="relative inline-block">
            dream home
            <span
              ref={line1}
              className="absolute left-0 bottom-0 h-1 bg-orange-400 w-full"
            />
          </span>{" "}
          so your loved ones{" "}
          <span className="relative inline-block">
            happy family
            <span
              ref={line2}
              className="absolute left-0 bottom-0 h-1 bg-orange-400 w-full"
            />
          </span>{" "}
          can say home sweet home.
        </h2>

        <Button size="lg">Book An Appointment</Button>
      </div>
    </section>
  );
}
