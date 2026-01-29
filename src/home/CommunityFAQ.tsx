"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsList } from "@radix-ui/react-tabs";
import { TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";


export default function CommunityFAQ() {
  return (
     <>
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            99% of your queries should get answered here, for others,
            you can always talk to us
          </p>
        </div>

        {/* TABS */}
        <Tabs defaultValue="service" className="max-w-4xl mx-auto">
<TabsList className="flex overflow-x-auto gap-2 mb-8 md:grid md:grid-cols-4">
  <TabsTrigger value="service" className="whitespace-nowrap">
    About the Service
  </TabsTrigger>
  <TabsTrigger value="fees" className="whitespace-nowrap">
    Fees
  </TabsTrigger>
  <TabsTrigger value="why" className="whitespace-nowrap">
    Why Work With Us
  </TabsTrigger>
  <TabsTrigger value="trust" className="whitespace-nowrap">
    Trust
  </TabsTrigger>
</TabsList>


          {/* TAB 1 */}
          <TabsContent value="service">
            <Accordion type="single" collapsible>

              <AccordionItem value="1">
                <AccordionTrigger>
                  What is Guided Home Buying? How does it work?
                </AccordionTrigger>
                <AccordionContent>
                  Guided Home Buying is a personalised advisory service where
                  experts help you shortlist, evaluate and negotiate properties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="2">
                <AccordionTrigger>
                  Will you assist with negotiations?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we negotiate with builders to ensure you get the best
                  possible price and terms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="3">
                <AccordionTrigger>
                  I am confused looking at various options, how can this service help?
                </AccordionTrigger>
                <AccordionContent>
                  We curate options based on your budget, preferences and goals
                  so you only see what truly fits.
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </TabsContent>

          {/* TAB 2 */}
          <TabsContent value="fees">
            <Accordion type="single" collapsible>

              <AccordionItem value="1">
                <AccordionTrigger>
                  What is Guided Home Buying? How does it work?
                </AccordionTrigger>
                <AccordionContent>
                  Guided Home Buying is a personalised advisory service where
                  experts help you shortlist, evaluate and negotiate properties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="2">
                <AccordionTrigger>
                  Will you assist with negotiations?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we negotiate with builders to ensure you get the best
                  possible price and terms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="3">
                <AccordionTrigger>
                  I am confused looking at various options, how can this service help?
                </AccordionTrigger>
                <AccordionContent>
                  We curate options based on your budget, preferences and goals
                  so you only see what truly fits.
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </TabsContent>

          {/* TAB 3 */}
          <TabsContent value="why">
            <Accordion type="single" collapsible>

              <AccordionItem value="1">
                <AccordionTrigger>
                  What is Guided Home Buying? How does it work?
                </AccordionTrigger>
                <AccordionContent>
                  Guided Home Buying is a personalised advisory service where
                  experts help you shortlist, evaluate and negotiate properties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="2">
                <AccordionTrigger>
                  Will you assist with negotiations?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we negotiate with builders to ensure you get the best
                  possible price and terms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="3">
                <AccordionTrigger>
                  I am confused looking at various options, how can this service help?
                </AccordionTrigger>
                <AccordionContent>
                  We curate options based on your budget, preferences and goals
                  so you only see what truly fits.
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </TabsContent>

          {/* TAB 4 */}
          <TabsContent value="trust">
            <Accordion type="single" collapsible>

              <AccordionItem value="1">
                <AccordionTrigger>
                  What is Guided Home Buying? How does it work?
                </AccordionTrigger>
                <AccordionContent>
                  Guided Home Buying is a personalised advisory service where
                  experts help you shortlist, evaluate and negotiate properties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="2">
                <AccordionTrigger>
                  Will you assist with negotiations?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we negotiate with builders to ensure you get the best
                  possible price and terms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="3">
                <AccordionTrigger>
                  I am confused looking at various options, how can this service help?
                </AccordionTrigger>
                <AccordionContent>
                  We curate options based on your budget, preferences and goals
                  so you only see what truly fits.
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </TabsContent>

        </Tabs>

        {/* SUPPORT CTA */}
        <div className="text-center mt-10 space-y-4">
          <h3 className="text-2xl font-semibold">
            Still have questions?
          </h3>
          <p className="text-gray-600">
            Can't find the answer you are looking for? More details about Bangalore & Mumbai real estate from{" "}
    <a
      href="https://www.propsoch.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 font-medium hover:underline"
    >
      Propsoch
    </a>
          </p>
          <Button size="lg">Book Free Appointment</Button>
        </div>

      </div>
    </section>
   </>
  );
}
