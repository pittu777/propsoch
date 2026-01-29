"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const blogs = [
  {
    title: "2025 Bangalore Real Estate",
    desc: "Explore micro-markets, price trends & upcoming hotspots.",
    image: "/favicon.ico",
  },
  {
    title: "Home Buying Hacks",
    desc: "Guides, mistakes & expert tips.",
    image: "/favicon.ico",
  },
  {
    title: "Investment Zones",
    desc: "Where smart money is going.",
    image: "/favicon.ico",
  },
];

export default function BlogMarquee() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".blog-card", {
        x: "-=600",
        duration: 10,
        repeat: -1,
        ease: "linear",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Join an exclusive club of empowered homebuyers
        </h2>
        <p className="text-gray-600">
          Empower yourself with our guides, hacks & resources
        </p>
      </div>

      <div
        ref={container}
        className="flex gap-8 px-6"
        onMouseEnter={() => gsap.globalTimeline.pause()}
        onMouseLeave={() => gsap.globalTimeline.resume()}
      >
        {[...blogs, ...blogs].map((b, i) => (
          <div
            key={i}
            className="blog-card min-w-75 bg-white rounded-xl shadow p-4"
          >
            <Image
              src={b.image}
              alt={b.title}
              width={300}
              height={180}
              className="rounded-lg object-cover"
            />
            <h3 className="font-semibold mt-4">{b.title}</h3>
            <p className="text-sm text-gray-600">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
