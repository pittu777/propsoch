"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PlatformAccordion() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-6">

       
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet India’s most advanced real estate platform
          </h2>
          <p className="text-gray-600 mt-3">
            We deliver deeply researched insights for every house till you call it your home
          </p>
        </div>

      
        <Accordion type="single" collapsible className="w-full">

          <AccordionItem value="item-1">
            <AccordionTrigger>
              1. Floor Plan Analysis
            </AccordionTrigger>
            <AccordionContent>
              See every floor plan’s design, privacy, efficiency & compare with peer projects.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              2. Lighting & Ventilation
            </AccordionTrigger>
            <AccordionContent>
              Understand natural light flow, cross-ventilation and energy efficiency.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              3. Flood & Air Quality Risk
            </AccordionTrigger>
            <AccordionContent>
              Get risk assessment based on flood zones, pollution levels and environmental data.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              4. Future Development
            </AccordionTrigger>
            <AccordionContent>
              Learn about upcoming infrastructure projects and area growth potential.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              5. Investment Potential
            </AccordionTrigger>
            <AccordionContent>
              Evaluate ROI, rental yield and resale prospects.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              6. Cost Sheet Breakdown
            </AccordionTrigger>
            <AccordionContent>
              Transparent pricing with hidden charges and total cost comparison.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  );
}
