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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    contact: "",
    message: "",
  });

  // 校验函数
  const validateName = (name) => {
    if (!name) return "";
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/.test(name)) {
      return "Le nom ne doit contenir que des lettres.";
    }
    return "";
  };

  const validateContact = (contact) => {
    if (!contact) return "";
    const emailRegex = /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+?[\d\s\-\(\)\.]{7,15}$/;
    if (!emailRegex.test(contact) && !phoneRegex.test(contact)) {
      return "Veuillez entrer un e-mail ou un numéro de téléphone valide.";
    }
    return "";
  };

  const validateMessage = (message) => {
    if (!message) return "";
    if (message.length > 1200) {
      return "Le message ne doit pas dépasser 1200 caractères.";
    }
    return "";
  };

  const isFormValid = () => {
    return form.name && form.contact && form.message && 
           !errors.name && !errors.contact && !errors.message;
  };

  const isFilled = form.name && form.contact && form.message;
  const isAiFilled = aiQuestion.trim().length > 0; // 判断AI输入是否有内容

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      setSubmitMessage("Veuillez corriger les erreurs ci-dessus.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage("Merci pour votre message ! Je vous répondrai dans les plus brefs délais.");
        setForm({ name: "", contact: "", message: "" });
      } else {
        setSubmitMessage("Erreur lors de l'envoi du message. Veuillez réessayer.");
      }
    } catch (error) {
      setSubmitMessage("Erreur lors de l'envoi du message. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Nom */}
              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-['Libre_Baskerville'] text-slate-900 leading-tight tracking-tight">
                  Nom*
                </Label>
                <Input
                  type="text"
                  placeholder="Nom et/ou prénom"
                  className="bg-[#a37b7360] text-xs placeholder:text-slate-900/50 font-['Libre_Baskerville']"
                  value={form.name}
                  onChange={e => {
                    const value = e.target.value;
                    setForm(f => ({ ...f, name: value }));
                    setErrors(prev => ({ ...prev, name: validateName(value) }));
                  }}
                  maxLength={50}
                />
                {errors.name && (
                  <span className="text-xs text-red-600 font-['Libre_Baskerville']">
                    {errors.name}
                  </span>
                )}
              </div>
              {/* Coordonnée */}
              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-['Libre_Baskerville'] text-slate-900 leading-tight tracking-tight">
                  Coordonnée*
                </Label>
                <Input
                  type="text"
                  placeholder="E-mail ou téléphone"
                  className="bg-[#a37b7360] text-xs placeholder:text-slate-900/50 font-['Libre_Baskerville']"
                  value={form.contact}
                  onChange={e => {
                    const value = e.target.value;
                    setForm(f => ({ ...f, contact: value }));
                    setErrors(prev => ({ ...prev, contact: validateContact(value) }));
                  }}
                  maxLength={50}
                />
                {errors.contact && (
                  <span className="text-xs text-red-600 font-['Libre_Baskerville']">
                    {errors.contact}
                  </span>
                )}
              </div>
              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-['Libre_Baskerville'] text-slate-900 leading-tight">
                  Message* ({form.message.length}/1200)
                </Label>
                <Textarea
                  placeholder="Écrivez votre message ici ou envoyez-moi un e-mail indiqué dans le footer."
                  className="min-h-24 bg-[#a37b7360] text-xs placeholder:text-zinc-600/60 font-['Libre_Baskerville']"
                  value={form.message}
                  onChange={e => {
                    const value = e.target.value;
                    if (value.length <= 1200) {
                      setForm(f => ({ ...f, message: value }));
                      setErrors(prev => ({ ...prev, message: validateMessage(value) }));
                    }
                  }}
                  maxLength={1200}
                />
                {errors.message && (
                  <span className="text-xs text-red-600 font-['Libre_Baskerville']">
                    {errors.message}
                  </span>
                )}
              </div>
              {/* Submit message */}
              {submitMessage && (
                <div className={`text-sm font-['Libre_Baskerville'] text-center p-3 rounded ${
                  submitMessage.includes('Merci') ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
                }`}>
                  {submitMessage}
                </div>
              )}
              {/* Submit button */}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className={`w-24 h-9 text-xs font-['Libre_Baskerville'] text-white rounded-md transition
                  ${isFormValid() && !isSubmitting ? "bg-[#5e4c5c] hover:bg-[#4a3b48]" : "bg-zinc-600/50 cursor-not-allowed"}`}
                >
                  {isSubmitting ? "Envoi..." : "Envoyer"}
                </Button>
              </div>
            </form>
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
                  className="w-full min-h-[120px] px-4 py-2 bg-[#a37b7360] text-black placeholder:text-white-400 rounded-md border border-transparent-300 text-base shadow-md font-['Libre_Baskerville']"
                  value={aiQuestion}
                  onChange={e => setAiQuestion(e.target.value)}
                />
                <Button
                  type="submit"
                  disabled={!isAiFilled}
                  className={`bg-[#5e4c5c] text-white rounded-md px-6 py-2 text-sm font-['Libre_Baskerville'] transition
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
