"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function Comparison() {
    const data = [
  {
    label: "Information Depth",
    ours: "80+ data points",
    portals: "20–40 data points",
  },
  {
    label: "Transparency",
    ours: "Detailed pros & cons",
    portals: "Only pros highlighted",
  },
  {
    label: "Data Accuracy",
    ours: "Verified by architects",
    portals: "Loose verification",
  },
  {
    label: "Service Validity",
    ours: "Till you find your home",
    portals: "Based on no. of contacts",
  },
  {
    label: "Data Sources",
    ours: "RERA, GMaps, CDP etc.",
    portals: "Added by developer & broker",
  },
];

  return (
    <section className="py-10 bg-gray-50 reveal-section">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What makes us different?
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Our homebuyers say we're refreshing, intelligent and supportive.
            Here's why.
          </p>
        </div>

        {/* Toggle buttons (static for now) */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10 max-w-md mx-auto">

         <Button className="w-full sm:w-auto">Our Service</Button>
<Button variant="outline" className="w-full sm:w-auto">
  Online Portals
</Button>
<Button variant="outline" className="w-full sm:w-auto">
  Local Brokers
</Button>

        </div>

        {/* Table */}
     {/* DESKTOP TABLE */}
<div className="bg-white rounded-xl shadow border">
  <Table>
    <TableHeader>
      <TableRow className="border-b bg-gray-50">
        <TableHead className="border-r font-semibold">
          What you care about
        </TableHead>
        <TableHead className="border-r font-semibold text-center">
          Our Service
        </TableHead>
        <TableHead className="font-semibold text-center">
          Online portals
          <div className="text-xs text-gray-500">
            (Housing / 99Acres / Magicbricks)
          </div>
        </TableHead>
      </TableRow>
    </TableHeader>

    <TableBody>
      {data.map((row:any, i:any) => (
        <TableRow key={i} className="border-b last:border-b-0">
          <TableCell className="border-r font-medium">
            {row.label}
          </TableCell>
          <TableCell className="border-r text-center">
            {row.ours}
          </TableCell>
          <TableCell className="text-center">
            {row.portals}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>


      </div>
    </section>
  );
}
