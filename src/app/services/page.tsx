import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CuratorServicesGrid } from "@/components/CuratorServicesGrid";

export const metadata: Metadata = {
  title: "Pest Control Services & Treatments",
  description:
    "Explore our specialized pest control treatments in Chennai: Termite Control, Cockroach Gel Baiting, Rodent Trapping, Mosquito Fogging, and Bed Bug Eradication.",
};

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        breadcrumb="Services"
        title="Our Pest Control Services"
        tamilSubtitle="கரையான் • கரப்பான் • எலி • கொசு • பல்லி • எறும்பு • முழுமையான கட்டுப்பாடு"
      />

      {/* Grid of services with centered overlapping badges matching Image 3 */}
      <CuratorServicesGrid />
    </div>
  );
}
