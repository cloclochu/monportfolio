"use client";

import Header from "@/components/component/Header";
import Footer from "@/components/component/Footer";
import { workExperience, education, volunteerExperience } from "@/lib/data";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const aboutTabs = [
	{
		id: "experience",
		label: "Experience Pro",
		content: (
			<div className="space-y-6 text-sm md:text-base font-['Times_New_Roman'] leading-relaxed">
				{workExperience.map((job, index) => (
					<div key={index}>
						<p>
							<strong className="text-[#a37b73] font-bold">
								{job.title}
							</strong>{" "}
							– {job.company}
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
			<div className="space-y-6 text-sm md:text-base font-['Times_New_Roman'] leading-relaxed">
				{education.map((edu, index) => (
					<div key={index}>
						<p>
							<strong className="text-[#a37b73] font-bold">
								{edu.title}
							</strong>{" "}
							– {edu.school}
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
			<div className="space-y-6 text-sm md:text-base font-['Times_New_Roman'] leading-relaxed">
				{volunteerExperience.map((exp, index) => (
					<div key={index}>
						<p>
							<strong className="text-[#a37b73] font-bold">
								{exp.title}
							</strong>{" "}
							– {exp.organization}
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

export default function CVPage() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-1 w-full">
				<section className="flex flex-col gap-24 px-6 md:px-12 lg:px-24 py-12 w-full max-w-4xl mx-auto mt-40 mb-40">
					<Tabs defaultValue="experience" className="w-full">
						<TabsList className="w-full gap-2 md:gap-4 bg-transparent px-0">
							{aboutTabs.map((tab) => (
								<TabsTrigger
									key={tab.id}
									value={tab.id}
									className="px-3 py-2 flex justify-center items-center md:justify-center text-sm md:text-base font-['Times_New_Roman']
    hover:text-[#a37b73] hover:underline
    data-[state=active]:text-[#a37b73] data-[state=active]:font-bold"
								>
									{tab.label}
								</TabsTrigger>
							))}
						</TabsList>
						<Separator className="my-4" />
						{aboutTabs.map((tab) => (
							<TabsContent key={tab.id} value={tab.id}>
								{tab.content}
							</TabsContent>
						))}
					</Tabs>
					<div className="w-full max-w-4xl mx-auto text-left space-y-10 text-base font-['Libre_Baskerville'] mt-20">
						<p>
							Après plusieurs années à explorer différents chemins
							professionnels — du développement commercial au marketing
							digital — j&apos;ai finalement trouvé ma voie : l&apos;UX/UI
							design. C&apos;est un métier à la croisée de la créativité,
							de l&apos;empathie et de la logique.
						</p>
						<p>
							Grâce à un parcours riche et polyvalent, j&apos;ai développé
							des compétences solides en esthétique visuelle, en
							compréhension des besoins utilisateurs et en développement
							front-end. Aujourd&apos;hui, je conçois des expériences
							numériques à la fois intuitives, élégantes et techniquement
							maîtrisées.
						</p>
						<div className="w-[60%] max-w-4xl mx-auto h-11 inline-flex justify-between items-center overflow-hidden">
							<img
								className="w-6 h-6 rounded-md"
								src="/FIGMA.png"
							/>
							<img className="w-6 h-6" src="/PS.png" />
							<img className="w-6 h-6" src="/AI.svg" />
							<img
								className="w-6 h-6 rounded-md"
								src="/ID.png"
							/>
							<img className="w-6 h-6" src="/JS.png" />
							<img className="w-6 h-6" src="/NEXT.svg" />
							<img className="w-6 h-6" src="/REACT.png" />
							<img className="w-6 h-6" src="/CSS.png" />
						</div>
					</div>
					<div className="flex justify-center mt-12">
						<a
							href="/CVChloeChu.pdf"
							download
							className="px-6 py-3 bg-[#a37b73] text-white rounded-full hover:bg-[#8a615a] transition font-['Libre_Baskerville']"
						>
							Télécharger mon CV
						</a>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
