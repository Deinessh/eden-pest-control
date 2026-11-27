import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { ScrollAnimationProvider } from "@/components/ScrollAnimationProvider";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Specialist Termite & Pest Control in Chennai`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Eden Pest Control Services in Thirumullaivoyal, Chennai offers Specialist Termite Control with 5+ Years Guarantee, 15+ Years Experience, and safe residential & commercial pest management.",
  icons: {
    icon: [
      { url: "/images/eden-emblem.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/eden-emblem.png",
    apple: "/images/eden-emblem.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <ScrollAnimationProvider />
      </body>
    </html>
  );
}
