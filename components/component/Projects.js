"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects">
      {/* Project Cards */}
      <div className="w-full px-6 md:px-24 py-12 flex flex-col items-center gap-y-12">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={`flex flex-col lg:flex-row gap-6 p-4 md:p-8 rounded-[32px] shadow-md min-h-[450px] ${project.bgClass}`}
          >
            {/* Text Column */}
              <CardContent className="w-full flex flex-col gap-10 items-center pl-6 justify-center">
              <h3 className="text-lg md:text-2xl font-serif text-[#4f4f4f] text-center">
                {project.title}
              </h3>
              <p className="text-[#4f4f4f] leading-relaxed font-['Times_New_Roman'] text-sm md:text-base text-center">
                {project.description}
              </p>
              <Button
                asChild
                className={`w-24 h-8 px-4 py-2 rounded-md text-lg font-['Times_New_Roman'] ${project.buttonClass}`}
              >
                <Link href={project.link}>{project.buttonText}</Link>
              </Button>
            </CardContent>

            {/* Image Column */}
            <CardContent className="w-full flex justify-center items-center">
              <div
                className={`relative ${
                  index === 0
                    ? "w-full max-w-[320px] h-[200px] md:max-w-[480px] md:h-[340px]"
                    : "w-full max-w-[220px] h-[320px] md:max-w-[320px] md:h-[520px]"
                } bg-cover bg-center flex items-center justify-center`}
                style={
                  index === 0
                    ? { backgroundImage: "url('/apple-macbook-pro-15-space-grey.png')" }
                    : {}
                }
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
