import Header from "@/components/component/Header";
import Hero from "@/components/component/Hero";
import Projects from "@/components/component/Projects";
import About from "@/components/component/About";
import Contact from "@/components/component/Contact";
import Footer from "@/components/component/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Download } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function HomePage() {
  // Navigation items
  const navItems = [
    { label: "Projets", href: "/projet" },
    { label: "A Propos", href: "/APropos" },
    { label: "CV", href: "/CV", download: true },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="px-6 md:px-12 lg:px-24">
      <Header />
      <Hero />

      {/* Sticky Title */}
      <div className="sticky top-[60px] z-30 bg-white py-3 flex items-center gap-4 px-6 md:px-12 lg:px-24 mb-4">
        <span className="text-sm font-cormorant">01</span>
        <span className="text-2xl md:text-3xl font-bold font-cormorant tracking-tight">
          Projet
        </span>
      </div>
      <Projects />

      <div className="sticky top-[60px] z-30 bg-white py-2 flex items-center gap-4 px-6 md:px-12 lg:px-24 mb-4 mt-16">
        <span className="text-sm font-cormorant">02</span>
        <span className="text-2xl md:text-3xl font-bold font-cormorant tracking-tight">
          A Propos
        </span>
      </div>
      <div className="my-32" />
      <About />

      <div className="sticky top-[60px] z-30 bg-white py-2 flex items-center gap-4 px-6 md:px-12 lg:px-24 mb-4 mt-16">
        <span className="text-sm font-cormorant">03</span>
        <span className="text-2xl md:text-3xl font-bold font-cormorant tracking-tight">
          Contact
        </span>
      </div>
      <div className="my-32" />
      <Contact />
      <div className="my-32" /> {/* 专业且灵活的空隙，数值可调 */}
      <Footer />

      {/* Google Fonts - Optional */}
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
