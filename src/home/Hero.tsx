"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import heroImage from "./../../src/app/favicon.ico";

export default function Hero() {

  useEffect(() => {
    const text = document.getElementById("hero-title");
    if (!text) return;

    // Split into words
    const words = text.innerText.split(" ");
    text.innerHTML = words
      .map(word => `<span class="hero-word inline-block mr-2">${word}</span>`)
      .join("");

    const wordElements = document.querySelectorAll(".hero-word");

    // Animate on page load
    gsap.fromTo(
      wordElements,
      {
        y: 60,
        opacity: 0,
        rotation: -5,
      },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
      }
    );
  }, []);
  

  return (
    <section className="mt-22 lg:mt-0 lg:min-h-[80vh] flex items-center lg:pt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 items-center">

        {/* LEFT */}
        <div className="space-y-6 text-center lg:text-left">
          <h1
            id="hero-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            Stop wasting countless weekends on irrelevant visits
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto md:mx-0">
            Visit curated homes, negotiate smarter & buy intelligently.
            Get end-to-end guidance from property wizards who've helped
            intelligent homebuyers like you buy 200+ homes in the last year alone.
          </p>

          <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-center lg:justify-start">
            <Input placeholder="Select City" className="w-full sm:w-48" />
            <Button className="w-full sm:w-auto">
              Book An Appointment
            </Button>
          </div>

          <p className="text-sm text-gray-500">
            Already a member?{" "}
            <span className="text-black font-medium cursor-pointer">
              Login
            </span>
          </p>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex relative w-full h-100 items-center justify-center">
          <Image
            src={heroImage}
            alt="Hero"
            className="rounded-2xl object-cover"
            height={400}
            priority
          />
        </div>

      </div>
    </section>
  );
}
