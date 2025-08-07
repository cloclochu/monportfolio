import Footer from "@/components/component/Footer";
import Header from "@/components/component/Header";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { Button } from "@/components/ui/button";
import { accordionData } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RoyalAuffrevillePage() {
  const projectDetails = [
    { label: "Client:", value: "Royal Auffreville" },
    { label: "Durée:", value: "5 mois" },
    { label: "Rôle:", value: "Designer UX/UI" },
  ];

  return (
    <div className="flex flex-col px-6 md:px-12 lg:px-24 gap-20 bg-white min-h-screen">
      <Header />
      <div className="h-40" />
      <Card className="relative h-[400px] w-full rounded-[32px] overflow-hidden border-none shadow-md bg-transparent">
        {/* 背景图片 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/royalAuffreville.JPG')`, 
          }}
        />

        {/* 半透明遮罩 */}
        <div className="absolute inset-0 bg-[#5e4c5c]/70" />

        {/* 文本内容 */}
        <CardContent className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-6 gap-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Royal Auffreville
          </h1>
          <p className="max-w-2xl text-lg md:text-xl font-['Times_New_Roman'] tracking-wide leading-relaxed">
            Réinvention d'une expérience de réservation haut de gamme pour une
            résidence de campagne
          </p>
        </CardContent>
      </Card>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[222px] p-6 font-['Times_New_Roman']">
        {/* Left section - Project overview */}
        <div className="flex flex-col items-start gap-[30px] py-[22px]">
          <div className="px-1 py-[7px]">
            <h1 className="font-bold text-black text-xl md:text-2xl tracking-tight leading-snug font-serif">
              Aperçu du Projet
            </h1>
          </div>
          <div className="flex flex-col items-start justify-center">
            {projectDetails.map((detail, index) => (
              <div key={index} className="flex items-center gap-3 w-full">
                <span className="font-normal text-black text-xl tracking-wide leading-relaxed">
                  {detail.label}
                </span>
                <span className="font-normal text-[#5e4c5ccc] text-xl tracking-wide leading-relaxed">
                  {detail.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right section - Project description */}
        <Card className="w-full md:w-[596px] bg-transparent border-none shadow-none">
          <CardContent className="px-[19px] py-[61px]">
            <p className="font-normal text-black text-xl leading-relaxed tracking-wide">
              Une refonte complète de l&apos;expérience de réservation pour
              mettre en lumière la richesse historique et architecturale de la
              résidence, via une interface élégante, moderne et indépendante des
              plateformes tierces.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Accordion Section */}
      <div className="w-full max-w-4xl mx-auto bg-[#a37b7380] rounded-[48px] px-12 py-8 font-['Libre_Baskerville'] border border-none ">
        <Accordion type="single" collapsible className="w-full">
          {accordionData.map(item => (
            <AccordionItem key={item.value} value={item.value} className="border-b bg-transparent">
              <AccordionTrigger className="text-2xl font-bold tracking-widest text-[#2D2323]">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="font-['Libre_Baskerville'] text-xl text-[#2D2323] bg-transparent">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-6 flex justify-center">
          <a
            href="https://www.figma.com/..."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#4f4f4f] text-white text-xs rounded-md"
          >
            Voir sur Figma
          </a>
        </div>
      </div>
          <div className="self-stretch h-36 px-16 py-11 inline-flex flex-col justify-center items-center gap-12 overflow-hidden">
      <Link
        href="/ElodieLaurent"
        className="inline-flex justify-center items-center gap-6 group text-base font-[Times_New_Roman] transition-colors group-hover:text-[#a37b7380]"
      >
        <div>
          Voir le projet suivant
        </div>
        <Button
          className="p-2 rounded-full bg-white hover:bg-[#a37b7380] transition-colors"
          aria-label="Voir le projet suivant"
        >
          <ArrowRight className="w-5 h-5 text-[#5e4c5c] group-hover:text-[#a37b7380] transition-colors" />
        </Button>
      </Link>
    </div>
      <div className="h-10" />
      <Footer />
    </div>
  );
}
