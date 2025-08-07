export default function Hero() {
  return (
    <section id="hero" className="pt-40 pb-20 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20 w-full">
        {/* Left - Images and Title */}
        <div className="grid w-[650px] h-[474px] p-8 grid-cols-[173px_283px_150px] grid-rows-[1fr_183px] gap-0 relative">
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

        {/* Right - Description */}
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-6 text-justify text-base tracking-wide leading-relaxed text-[#4f4f4f] font-['Times_New_Roman']">
            <p>
              Je suis UX/UI Designer, spécialisée dans une{" "}
              <span className="text-[#a37b73]">esthétique minimaliste</span> et
              une approche stratégique.
            </p>
            <p>
              Je conçois des interfaces sobres, élégantes, pensées pour les
              marques haut de gamme.
            </p>
            <p>
              Ancienne consultante en marketing luxe, j&apos;allie sens du
              détail et vision centrée utilisateur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
