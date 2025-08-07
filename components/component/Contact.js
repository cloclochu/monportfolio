"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [question, setQuestion] = useState("");
  const isFilled = question.trim().length > 0;

  return (
    <section className="flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-16 w-full gap-6 bg-white">
      {/* Section Header */}
      <div className="text-center">
        <p className="mt-2 text-base md:text-lg text-[#4f4f4f] font-['Times_New_Roman']">
          Question ? Demandez à Cléo, mon assistant AI
        </p>
      </div>

      {/* Input & Button */}
      <div className="flex flex-col items-center justify-center w-full max-w-xl gap-4 mt-6">
        <Textarea
          placeholder="Demandez ce que vous voulez sur moi"
          className="w-full min-h-[120px] px-4 py-2 bg-[#a37b7360] text-black placeholder:text-white-400 rounded-md border border-transparent-300 text-base shadow-md"
          value={question}
          onChange={e => setQuestion(e.target.value)}
        />
        <Button
          type="submit"
          disabled={!isFilled}
          className={`px-6 py-2 text-sm font-['Times_New_Roman'] rounded-md transition
            ${isFilled
              ? "bg-[#5e4c5c] text-white hover:bg-[#4a3b48]"
              : "bg-zinc-600/50 text-white cursor-not-allowed"
            }`}
        >
          Envoyer
        </Button>
      </div>
    </section>
  );
}
