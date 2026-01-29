"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function SmartSave() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

      
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Choose the smart way to save
          </h2>

          <h3 className="text-2xl font-semibold text-green-400">
            ~₹4.78 L & 3 months of your life.
          </h3>

          <p className="text-gray-300">
            You're about to make the biggest purchase of your life.
            We make sure you do it intelligently.
          </p>

          <ul className="space-y-2 text-gray-200 list-disc pl-5">
            <li>Work with trained architects</li>
            <li>Check builders, areas & projects</li>
            <li>See pros & cons exhaustively</li>
            <li>Assess livability & financial risks</li>
            <li>Lowest price negotiations</li>
            <li>Get rewarded handsomely</li>
          </ul>

          <p className="text-sm text-gray-400 pt-4">
            Guided Home Buying · 9 in 10 homebuyers have bought a home via us
            within 25 days. Trusted by 1000+ buyers from Google, Amazon, Peak XV etc.
          </p>
        </div>

       
        <Card className="bg-white text-black">
          <CardContent className="p-8 space-y-6 text-center">
            <div className="text-sm text-gray-500">
              Save
            </div>

            <div className="text-4xl font-bold text-green-600">
              ₹4,78,125/-
            </div>

            <p className="text-gray-600">
              Experience truly unbiased advisory & get total peace of mind
            </p>

            <div className="flex flex-col gap-3">
              <Button size="lg">Book An Appointment</Button>
              <Button variant="outline">
                See How You Will Save
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
