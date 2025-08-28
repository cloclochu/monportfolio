"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState(['', '', '']);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const paragraphs = [
    "Je suis UX/UI Designer, spécialisée dans une esthétique minimaliste et une approche stratégique.",
    "Je conçois des interfaces sobres, élégantes, pensées pour les marques haut de gamme.",
    "Ancienne consultante en marketing luxe, j'allie sens du détail et vision centrée utilisateur."
  ];

  useEffect(() => {
    if (currentParagraph < paragraphs.length) {
      const currentText = paragraphs[currentParagraph];
      
      if (currentCharIndex < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayedText(prev => {
            const newText = [...prev];
            newText[currentParagraph] = currentText.slice(0, currentCharIndex + 1);
            return newText;
          });
          setCurrentCharIndex(prev => prev + 1);
        }, 50); // 打字速度：每50ms一个字符

        return () => clearTimeout(timer);
      } else {
        // 当前段落完成，等待500ms后开始下一段
        const timer = setTimeout(() => {
          setCurrentParagraph(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 500);

        return () => clearTimeout(timer);
      }
    }
  }, [currentParagraph, currentCharIndex, paragraphs]);

  return (
    <section id="hero" className="pt-40 pb-20 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20 w-full">
        {/* Left - Images and Title */}
        
        {/* Desktop layout (lg and up) */}
        <div className="hidden lg:grid w-[650px] h-[474px] p-8 grid-cols-[173px_283px_150px] grid-rows-[1fr_183px] gap-0 relative">
          {/* Chloe */}
          <div className="col-start-1 row-start-1 self-start text-[48px] md:text-[64px] font-bold bg-gradient-to-b from-[#5e4c5c] to-[#c49ec0] bg-clip-text text-transparent font-cormorant">
            Chloe
          </div>

          {/* 图片（两张叠加） - between */}
          <div className="col-start-2 row-start-1 row-span-2 relative flex justify-center items-center">
            {/* 背景图 */}
            <img
              className="absolute w-[243px] h-[323px] object-cover rounded-[48px] z-10 left-4 top-4"
              alt="backgroundProfil"
              src="https://images.unsplash.com/photo-1611197072011-736d9b407c8b?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            {/* 前景人物图 */}
            <img
              className="relative w-[251px] h-[340px] object-cover z-20"
              alt="photoChloe"
              src="/chloeHero.png"
            />
          </div>

          {/* CHU */}
          <div className="col-start-3 row-start-2 self-end text-[48px] md:text-[64px] font-bold bg-gradient-to-b from-[#bb7a92] to-[#553742] bg-clip-text text-transparent font-cormorant">
            CHU
          </div>
        </div>
        
        {/* Mobile/Tablet layout (below lg) */}
        <div className="lg:hidden flex flex-col items-center gap-8">
          {/* Combined h1 title */}
          <h1 className="text-[40px] md:text-[56px] font-bold font-cormorant text-center">
            <span className="bg-gradient-to-b from-[#5e4c5c] to-[#c49ec0] bg-clip-text text-transparent">
              Chloe
            </span>
            <span className="mx-2 text-[#4f4f4f]">·</span>
            <span className="bg-gradient-to-b from-[#bb7a92] to-[#553742] bg-clip-text text-transparent">
              CHU
            </span>
          </h1>

          {/* Images */}
          <div className="relative flex justify-center items-center">
            {/* 背景图 */}
            <img
              className="absolute w-[200px] h-[266px] object-cover rounded-[32px] z-10 left-3 top-3"
              alt="backgroundProfil"
              src="https://images.unsplash.com/photo-1611197072011-736d9b407c8b?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            {/* 前景人物图 */}
            <img
              className="relative w-[208px] h-[280px] object-cover z-20"
              alt="photoChloe"
              src="/chloeHero.png"
            />
          </div>
        </div>

        {/* Right - Description */}
        <div className="w-full max-w-md min-w-[300px] lg:min-w-[400px]">
          <div className="flex flex-col gap-6 text-justify text-xl tracking-wide leading-relaxed text-[#4f4f4f] font-['Times_New_Roman']">
            <p>
              {displayedText[0]}
              {displayedText[0].includes('esthétique minimaliste') && (
                <span className="text-[#a37b73]">esthétique minimaliste</span>
              )}
              {currentParagraph === 0 && currentCharIndex < paragraphs[0].length && (
                <span className="animate-pulse">|</span>
              )}
            </p>
            {displayedText[1] && (
              <p>
                {displayedText[1]}
                {currentParagraph === 1 && currentCharIndex < paragraphs[1].length && (
                  <span className="animate-pulse">|</span>
                )}
              </p>
            )}
            {displayedText[2] && (
              <p>
                {displayedText[2]}
                {currentParagraph === 2 && currentCharIndex < paragraphs[2].length && (
                  <span className="animate-pulse">|</span>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
