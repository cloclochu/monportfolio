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

export default function HomePage() {
    // Navigation items
    const navItems = [
        { label: "Profolio", href: "#" },
        { label: "A Propos", href: "#" },
        { label: "CV", href: "#" },
        { label: "Contact", href: "#" },
    ];

    // Project data
    const projects = [
        {
            title: "Royal Auffreville | SiteWeb responsive",
            description:
                "Luxe et confort au cœur de la campagne francilienne.\nRoyal Auffreville offre un cadre élégant et apaisant, avec des équipements haut de gamme pour des séjours inoubliables en famille, entre amis ou en groupe.",
            buttonText: "Détails",
            buttonClass: "bg-[#4f4f4f] text-white",
            bgClass: "bg-[#a37b7380]",
            image: "/capture-d-cran-2025-06-30-150957-1.png",
            imageContainer:
                "bg-[url(/apple-macbook-pro-15-space-grey.png)] bg-cover bg-[50%_50%]",
        },
        {
            title: "Élodie Laurent | Application iOS",
            description:
                "Hypnothérapeute spécialisée dans l'accompagnement émotionnel et les retraites bien-être.\nElle aide ses clients à retrouver équilibre et sérénité à travers l'hypnose, la respiration consciente et des expériences immersives en pleine nature.",
            buttonText: "Détails",
            buttonClass: "bg-[#e0e0e0] text-[#5e4c5c]",
            bgClass: "bg-[#5e4c5c80]",
            image: "/capture-d-cran-2025-06-30-154412-1.png",
            imageContainer: "overflow-hidden",
        },
    ];

    // About tabs
    const aboutTabs = [
        { id: "experience", label: "Experience Pro" },
        { id: "education", label: "Education" },
        { id: "social", label: "Experience Social" },
    ];

    return (
        <div className="flex flex-col items-center gap-[106px] px-0 py-12 relative bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
            <header className="flex h-24 items-center justify-between px-48 py-6 relative self-stretch w-full bg-transparent">
                <div className="flex h-12 items-center relative flex-1 grow">
                    <div className="relative w-fit [font-family:'Cormorant_Garamond-Bold',Helvetica] font-bold text-[#1a1a1a] text-2xl tracking-[-0.24px] leading-[26.4px] whitespace-nowrap">
                        Chloe YC CHU
                    </div>
                </div>

                <NavigationMenu>
                    <NavigationMenuList className="inline-flex h-12 items-center justify-center gap-10 px-[23px] py-2.5 relative flex-[0_0_auto]">
                        {navItems.map((item, index) => (
                            <NavigationMenuItem key={index}>
                                <div className="inline-flex items-center justify-center gap-2.5 px-2 py-0.5 relative flex-[0_0_auto] mt-[-1.50px] mb-[-1.50px]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Libre_Baskerville-Regular',Helvetica] font-normal text-black text-lg tracking-[-0.09px] leading-[27px] whitespace-nowrap">
                                        {item.label}
                                    </div>
                                </div>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </header>

            <div className="flex flex-col items-start gap-24 p-24 relative self-stretch w-full flex-[0_0_auto] overflow-hidden">
                {/* Hero Section */}
                <div className="flex items-center justify-center gap-8 p-24 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[670px] h-[480px] ml-[-55.50px]">
                        <div className="absolute w-[408px] h-[366px] top-9 left-[72px]">
                            <img
                                className="absolute w-[243px] h-[323px] top-0 left-[166px] object-cover"
                                alt="Rectangle"
                                src="/rectangle-1.svg"
                            />

                            <img
                                className="absolute w-[251px] h-[340px] top-[26px] left-[126px] object-cover"
                                alt="Photochloe"
                                src="/photochloe-1.png"
                            />

                            <div className="absolute w-[155px] top-[75px] left-0 bg-[linear-gradient(180deg,rgba(94,76,92,1)_0%,rgba(196,158,192,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Cormorant_Garamond-Bold',Helvetica] font-bold text-transparent text-[64px] tracking-[-0.64px] leading-[70.4px] whitespace-nowrap">
                                Chloe
                            </div>
                        </div>

                        <div className="absolute w-[138px] top-[215px] left-[490px] bg-[linear-gradient(180deg,rgba(187,122,146,1)_0%,rgba(85,55,66,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Cormorant_Garamond-Bold',Helvetica] font-bold text-transparent text-[64px] tracking-[-0.64px] leading-[70.4px] whitespace-nowrap">
                            CHU
                        </div>
                    </div>

                    <div className="flex w-[465px] items-center justify-center gap-2.5 relative mr-[-55.50px]">
                        <div className="flex flex-col h-[462px] items-start gap-6">
                            <div className="relative self-stretch [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-transparent text-base text-justify tracking-[1.44px] leading-[20.8px]">
                                <span className="text-[#4f4f4f] tracking-[0.23px]">
                                    Je suis UX/UI Designer, spécialisée dans une{" "}
                                </span>

                                <span className="text-[#a37b73] tracking-[0.23px]">
                                    esthétique minimaliste
                                </span>

                                <span className="text-[#4f4f4f] tracking-[0.23px]">
                                    {" "}
                                    et une approche stratégique.
                                    <br />
                                </span>
                            </div>

                            <div className="relative self-stretch [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-transparent text-base text-justify tracking-[1.44px] leading-[20.8px]">
                                <span className="text-[#4f4f4f] tracking-[0.23px]">
                                    {" "}
                                    Je conçois des interfaces sobres, élégantes, pensées pour les
                                    marques haut de gamme.
                                    <br />
                                </span>
                            </div>

                            <div className="relative self-stretch [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-transparent text-base text-justify tracking-[1.44px] leading-[20.8px]">
                                <span className="text-[#4f4f4f] tracking-[0.23px]">
                                    {" "}
                                    Ancienne consultante en marketing luxe, j&apos;allie sens du
                                    détail et vision centrée utilisateur.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects Section */}
                <div className="gap-12 flex flex-col items-start justify-center px-24 py-12 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center gap-16 px-12 py-3 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-black text-[40px] tracking-[2.40px] leading-[48.0px] whitespace-nowrap">
                                Projet
                            </div>
                        </div>

                        <div className="absolute w-6 h-6 top-0 left-7">
                            <div className="absolute w-6 -top-px left-0 [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-black text-base tracking-[0.96px] leading-[19.2px]">
                                01
                            </div>
                        </div>
                    </div>

                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className={`flex h-[479px] items-center justify-center gap-24 p-12 relative self-stretch w-full ${project.bgClass} rounded-[48px] overflow-hidden shadow-[0px_4px_4px_#00000040] border-none`}
                        >
                            <CardContent className="flex flex-col w-[443px] items-center justify-center gap-6 p-6 relative">
                                <div className="flex w-[443px] items-start gap-2.5 relative flex-[0_0_auto] ml-[-24.00px] mr-[-24.00px] overflow-hidden">
                                    <div className="relative w-[474px] mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#4f4f4f] text-[28px] tracking-[0] leading-[39.2px]">
                                        {project.title}
                                    </div>
                                </div>

                                <div className="relative self-stretch w-full h-[126px]">
                                    <div className="absolute w-[390px] top-[11px] left-0 [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#4f4f4f] text-base tracking-[0] leading-[22.4px]">
                                        {project.description}
                                    </div>
                                </div>

                                <Button
                                    className={`w-[74px] h-7 px-4 py-2 rounded-md ${project.buttonClass}`}
                                >
                                    <span className="mt-[-3.00px] mb-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-xs tracking-[0] leading-[15.6px] whitespace-nowrap">
                                        {project.buttonText}
                                    </span>
                                </Button>
                            </CardContent>

                            <CardContent
                                className={`flex flex-col w-[399px] items-center justify-center gap-2.5 p-8 relative ${project.imageContainer}`}
                            >
                                {index === 0 ? (
                                    <div className="flex flex-col h-[245px] items-center justify-center gap-2.5 p-20 relative self-stretch w-full bg-[url(/apple-macbook-pro-15-space-grey.png)] bg-cover bg-[50%_50%]">
                                        <img
                                            className="relative w-[265px] h-[183px] mt-[-49.00px] mb-[-49.00px] ml-[-45.00px] mr-[-45.00px] object-cover"
                                            alt="Capture d'écran"
                                            src={project.image}
                                        />
                                    </div>
                                ) : (
                                    <div className="inline-flex items-center justify-center gap-2.5 p-5 relative flex-[0_0_auto] mt-[-29.00px] mb-[-29.00px]">
                                        <img
                                            className="relative w-[158px] h-[315px] object-cover"
                                            alt="Capture d'écran"
                                            src={project.image}
                                        />
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* About Section */}
                <div className="gap-16 flex flex-col items-start justify-center px-24 py-12 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center gap-16 px-12 py-3 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-black text-[40px] tracking-[2.40px] leading-[48.0px] whitespace-nowrap">
                                A Propos
                            </div>
                        </div>

                        <div className="absolute w-6 h-6 top-0 left-7">
                            <div className="absolute w-6 -top-px left-0 [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-black text-base tracking-[0.96px] leading-[19.2px]">
                                02
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-24 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex items-start justify-center gap-16 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="inline-flex flex-col items-start justify-center gap-6 relative flex-[0_0_auto]">
                                <Tabs defaultValue="experience" className="w-[958px]">
                                    <TabsList className="flex w-[958px] items-start justify-between relative flex-[0_0_auto] bg-transparent">
                                        {aboutTabs.map((tab) => (
                                            <TabsTrigger
                                                key={tab.id}
                                                value={tab.id}
                                                className="inline-flex flex-col items-start justify-center p-3 relative flex-[0_0_auto] data-[state=active]:shadow-none data-[state=active]:bg-transparent"
                                            >
                                                <div className="w-fit relative h-[22px]">
                                                    <div className="absolute -top-px left-0 [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-black text-lg tracking-[1.08px] leading-[21.6px] whitespace-nowrap">
                                                        {tab.label}
                                                    </div>
                                                </div>
                                            </TabsTrigger>
                                        ))}
                                    </TabsList>
                                    <Separator className="my-4" />
                                </Tabs>
                            </div>
                        </div>

                        <div className="flex items-center gap-16 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex flex-col items-center justify-center gap-12 p-6 relative flex-1 grow">
                                <div className="relative self-stretch mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-black text-base text-justify tracking-[0.96px] leading-[19.2px]">
                                    Après plusieurs années à explorer différents chemins
                                    profession nels — du développement commercial au marketing
                                    digital — j&apos;ai finalement trouvé ma voie : l&apos;UX/UI
                                    design. C&apos;est un métier à la croisée de la créativité, de
                                    l&apos;empathie et de la logique.
                                    <br />
                                    Grâce à un parcours riche et polyvalent, j&apos;ai développé
                                    des compétences solides en esthétique visuelle, en
                                    compréhension des besoins utilisateurs et en développement
                                    front-end. Aujourd&apos;hui, je conçois des expériences
                                    numériques à la fois intuitives, élégantes et techniquement
                                    maîtrisées.
                                </div>

                                <div className="flex items-start justify-between px-[15px] py-[7px] relative self-stretch w-full flex-[0_0_auto]">
                                    <Button
                                        variant="ghost"
                                        className="flex w-[91px] items-center justify-center gap-2.5 px-3 py-[3px] relative h-auto"
                                    >
                                        <Copy className="w-6 h-6 ml-[-11.00px]" />
                                        <span className="relative w-fit mr-[-11.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-black text-lg text-justify tracking-[1.08px] leading-[21.6px] whitespace-nowrap">
                                            Copier
                                        </span>
                                    </Button>

                                    <Button
                                        variant="ghost"
                                        className="flex w-[177px] items-center justify-center gap-2.5 px-3 py-[3px] relative h-auto"
                                    >
                                        <Download className="w-6 h-6 ml-[-5.50px]" />
                                        <span className="relative w-fit mr-[-5.50px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-black text-lg text-justify tracking-[1.08px] leading-[21.6px] whitespace-nowrap">
                                            Télécharger CV
                                        </span>
                                    </Button>
                                </div>

                                <img
                                    className="relative self-stretch w-full h-[43px]"
                                    alt="Frame"
                                    src="/frame-12.svg"
                                />
                            </div>

                            <div className="relative flex-1 grow h-[482px] bg-[url(/frame-41.png)] bg-cover bg-[50%_50%]" />
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <img
                    className="relative self-stretch w-full flex-[0_0_auto]"
                    alt="Contact"
                    src="/contact.png"
                />

                {/* Footer */}
                <footer className="flex items-center justify-center gap-2.5 px-[158px] py-20 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-transparent text-lg tracking-[1.08px] leading-[21.6px] whitespace-nowrap">
                        <span className="text-black tracking-[0.19px]">
                            © 2025 par Chloe Chu. Droits partagés.{" "}
                        </span>

                        <span className="[font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-[#a37b73] tracking-[0.19px]">
                            Cliquez ici
                        </span>

                        <span className="text-black tracking-[0.19px]">
                            {" "}
                            pour copier le code de mon site.{" "}
                        </span>
                    </div>
                </footer>

                {/* Contact Form Button */}
                <div className="flex w-[165px] h-10 items-center gap-2.5 absolute top-[3668px] left-[1282px] bg-[#a37b7380] rounded-[48px_0px_0px_48px] overflow-hidden">
                    <div className="relative flex-1 mt-[-3.00px] mb-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#4f4f4f] text-lg text-center tracking-[1.08px] leading-[21.6px]">
                        Rempliez la formulaire
                    </div>
                </div>
            </div>
        </div>
    );
}
