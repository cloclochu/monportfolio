"use client";
import { useState } from "react";
import Header from "@/components/component/Header";
import Footer from "@/components/component/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [aiQuestion, setAiQuestion] = useState(""); // 新增AI输入内容

  const isFilled = form.name && form.contact && form.message;
  const isAiFilled = aiQuestion.trim().length > 0; // 判断AI输入是否有内容

  return (
    <>
     <Header />
      <div className="w-full max-w-2xl mx-auto mt-40 mb-40 p-6 flex flex-col gap-6 bg-transparent">
        <Tabs defaultValue="ecrivez" className="w-full">
          <TabsList className="w-full gap-2 bg-transparent px-0 mb-4">
            <TabsTrigger
              value="ecrivez"
              className="px-3 py-2 text-sm font-['Libre_Baskerville'] data-[state=active]:text-[#a37b73] data-[state=active]:font-bold hover:text-[#a37b73] hover:underline"
            >
              Écrivez-moi
            </TabsTrigger>
            <TabsTrigger
              value="ai"
              className="px-3 py-2 text-sm font-['Libre_Baskerville'] data-[state=active]:text-[#a37b73] data-[state=active]:font-bold hover:text-[#a37b73] hover:underline"
            >
              Demandez mon assistant AI
            </TabsTrigger>
          </TabsList>
          <TabsContent value="ecrivez">
            <div className="flex flex-col gap-6">
              {/* Nom */}
              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-['Libre_Baskerville'] text-slate-900 leading-tight tracking-tight">
                  Nom*
                </Label>
                <Input
                  type="text"
                  placeholder="Nom et/ou prénom"
                  className="bg-[#a37b7360] text-xs placeholder:text-slate-900/50 font-['Lato']"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                />
              </div>
              {/* Coordonnée */}
              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-['Libre_Baskerville'] text-slate-900 leading-tight tracking-tight">
                  Coordonnée*
                </Label>
                <Input
                  type="text"
                  placeholder="E-mail ou téléphone"
                  className="bg-[#a37b7360] text-xs placeholder:text-slate-900/50 font-['Lato']"
                  value={form.contact}
                  onChange={e => setForm(f => ({ ...f, contact: e.target.value }))}
                />
              </div>
              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-['Libre_Baskerville'] text-slate-900 leading-tight">
                  Message*
                </Label>
                <Textarea
                  placeholder="Type your message here"
                  className="min-h-24 bg-[#a37b7360] text-xs placeholder:text-zinc-600/60 font-['Lato']"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                />
              </div>
              {/* Submit button */}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={!isFilled}
                  className={`w-24 h-9 text-xs font-serif text-white rounded-md transition
                  ${isFilled ? "bg-[#5e4c5c] hover:bg-[#4a3b48]" : "bg-zinc-600/50 cursor-not-allowed"}`}
                >
                  Envoyer
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="ai">
            <div className="text-sm font-['Libre_Baskerville'] text-slate-900 space-y-8">
              <p className="mt-8">
                Ici, vous pouvez demander à mon assistant AI de répondre à vos
                questions ou de vous aider sur un sujet précis.
              </p>
              <div className="flex flex-col items-center justify-center w-full max-w-xl gap-10 mt-10">
                <Textarea
                  placeholder="Demandez ce que vous voulez sur moi"
                  className="w-full min-h-[120px] px-4 py-2 bg-[#a37b7360] text-black placeholder:text-white-400 rounded-md border border-transparent-300 text-base shadow-md"
                  value={aiQuestion}
                  onChange={e => setAiQuestion(e.target.value)}
                />
                <Button
                  type="submit"
                  disabled={!isAiFilled}
                  className={`bg-[#5e4c5c] text-white rounded-md px-6 py-2 text-sm font-['Times_New_Roman'] transition
                  ${!isAiFilled ? "bg-zinc-600/50 cursor-not-allowed" : "hover:bg-[#4a3b48]"}`}
                >
                  Envoyer
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </>
  );
}
