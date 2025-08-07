"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Copy, Download } from "lucide-react";
import { workExperience, education, volunteerExperience } from "@/lib/data";
import { useState } from "react";


const aboutTabs = [
  {
    id: "experience",
    label: "Experience Pro",
    content: (
      <div className="space-y-4 text-sm md:text-base font-['Times_New_Roman'] leading-relaxed">
        {workExperience.map((job, index) => (
          <div key={index}>
            <p>
              <strong className="text-[#a37b73] font-bold">{job.title}</strong> – {job.company}
            </p>
            <p className="text-gray-600">
              {job.location} | {job.period}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "education",
    label: "Education",
    content: (
      <div className="space-y-4 text-sm md:text-base font-['Times_New_Roman'] leading-relaxed">
        {education.map((edu, index) => (
          <div key={index}>
            <p>
              <strong className="text-[#a37b73] font-bold">{edu.title}</strong> – {edu.school}
            </p>
            <p className="text-gray-600">
              {edu.location} | {edu.period}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "social",
    label: "Experience Social",
    content: (
      <div className="space-y-4 text-sm md:text-base font-['Times_New_Roman'] leading-relaxed">
        {volunteerExperience.map((exp, index) => (
          <div key={index}>
            <p>
              <strong className="text-[#a37b73] font-bold">{exp.title}</strong> – {exp.organization}
            </p>
            <p className="text-gray-600">
              {exp.location} | {exp.period}
            </p>
          </div>
        ))}
      </div>
    ),
  },
];

export default function About() {
  const [copied, setCopied] = useState(false);

  const copyText = `Après plusieurs années à explorer différents chemins professionnels
— du développement commercial au marketing digital — j'ai
finalement trouvé ma voie : l'UX/UI design. C'est un
métier à la croisée de la créativité, de l'empathie et de la
logique.
Grâce à un parcours riche et polyvalent, j'ai développé des
compétences solides en esthétique visuelle, en compréhension des
besoins utilisateurs et en développement front-end.
Aujourd'hui, je conçois des expériences numériques à la fois
intuitives, élégantes et techniquement maîtrisées.`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2秒后恢复
    } catch (err) {
      // 可以加错误提示
    }
  };

  return (
    <section className="flex flex-col gap-36 px-6 md:px-12 lg:px-24 py-12 w-full">
      {/* Tabs */}
      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="w-full gap-2 md:gap-4 bg-transparent px-0">
          {aboutTabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="px-3 py-2 flex justify-center items-center md:justify-center text-sm md:text-base font-['Times_New_Roman'] 
    data-[state=active]:text-[#a37b73] data-[state=active]:font-bold"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <Separator className="my-4" />
        {/* 每个标签的内容要写在这里 */}
        {aboutTabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-24 min-h-[500px]">
        {/* Left - Text and Buttons */}
        <div className="flex flex-col gap-8 flex-1 h-full">
          <p className="text-sm md:text-base leading-relaxed text-justify font-['Times_New_Roman']">
            Après plusieurs années à explorer différents chemins professionnels
            — du développement commercial au marketing digital — j&apos;ai
            finalement trouvé ma voie : l&apos;UX/UI design. C&apos;est un
            métier à la croisée de la créativité, de l&apos;empathie et de la
            logique.
            <br />
            Grâce à un parcours riche et polyvalent, j&apos;ai développé des
            compétences solides en esthétique visuelle, en compréhension des
            besoins utilisateurs et en développement front-end.
            Aujourd&apos;hui, je conçois des expériences numériques à la fois
            intuitives, élégantes et techniquement maîtrisées.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-between">
            <Button
              variant="ghost"
              className="flex items-center gap-2 w-full sm:w-auto"
              onClick={handleCopy}
            >
              <Copy className="w-5 h-5" />
              <span className="text-sm md:text-base font-['Times_New_Roman']">
                {copied ? "Copié !" : "Copier"}
              </span>
            </Button>

            <Button
              variant="ghost"
              className="flex items-center gap-2 w-full sm:w-auto"
              asChild
            >
              <a href="/CVChloeChu.pdf" download>
                <Download className="w-5 h-5" />
                <span className="text-sm md:text-base font-['Times_New_Roman']">
                  Télécharger CV
                </span>
              </a>
            </Button>
          </div>

          <div className="self-stretch h-11 inline-flex justify-between items-center overflow-hidden">
            <img className="w-6 h-6 rounded-md" src="/FIGMA.png " />
            <img className="w-6 h-6" src="/PS.png" />
            <img className="w-6 h-6" src="/AI.svg" />
            <img className="w-6 h-6 rounded-md" src="/ID.png" />
            <img className="w-6 h-6" src="/JS.png" />
            <img className="w-6 h-6" src="/NEXT.svg" />
            <img className="w-6 h-6" src="/REACT.png" />
            <img className="w-6 h-6" src="/CSS.png" />
          </div>
        </div>
        {/* Right - Image Section */}
        <div className="w-full lg:w-[50%] h-[300px] md:h-[400px] lg:h-[482px] bg-[url(/chloeTravail.png)] bg-cover bg-center rounded-xl" />
      </div>
    </section>
  );
}
