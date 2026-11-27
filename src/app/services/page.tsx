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
    <div className="bg-white min-h-screen">
      <PageHeader
        breadcrumb="Services"
        title="Our Pest Control Services"
        tamilSubtitle="கரையான் • கரப்பான் • எலி • கொசு • பல்லி • எறும்பு • முழுமையான கட்டுப்பாடு"
        description="We deliver specialist termite control, odorless herbal cockroach treatments, rodent management, bed bug elimination, and outdoor mosquito fogging with certified 5+ years guarantee across Chennai."
      />

      {/* Grid of services matching Image 3 with white background */}
      <CuratorServicesGrid />
    </div>
  );
}
