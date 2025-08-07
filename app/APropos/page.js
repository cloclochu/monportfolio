import { timeline } from "@/lib/data";
import Footer from "@/components/component/Footer";
import Header from "@/components/component/Header";
import Link from "next/link";

export default function APropos() {
  return (
    <section className="w-full px-10 py-24 bg-white text-[#4f4f4f]">
      <div className="max-w-7xl mx-auto space-y-32">
        <Header />
        <div className="w-full max-w-xl mx-auto text-left space-y-10 text-lg font-['Libre_Baskerville'] mt-20">
          <p>
            Designer UX/UI en reconversion, je m’appuie sur 10 ans d’expérience
            en marketing, business et communication interculturelle pour
            concevoir des interfaces utiles, sensibles et humaines.
          </p>
          <p>
            Mon parcours mêle l’art, la stratégie et le multiculturel — une
            richesse que je mets aujourd’hui au service du design.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative flex flex-col gap-24">
          {/* 中间竖线 */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-[#a37b73] -translate-x-1/2 z-0" />
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="font-['Libre_Baskerville'] relative flex flex-col md:flex-row items-center gap-8 z-10"
            >
              {/* 左侧 */}
              <div className="flex-1 flex justify-end">
                {item.side === "left" ? (
                  <div className="flex gap-4">
                    {item.images.map((img, i) => (
                      <img
                        key={i}
                        src={img.src}
                        alt=""
                        width={img.width}
                        height={img.height}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="max-w-xl text-right md:text-left">
                    <div className="mb-4 font-bold text-lg">
                      {item.year} – {item.title}
                    </div>
                    <p>{item.text}</p>
                  </div>
                )}
              </div>
              {/* 时间点 */}
              <div className="flex flex-col items-center justify-center w-12">
                <div className="w-6 h-6 rounded-full bg-[#a37b73] border-4 border-white shadow-lg z-10" />
              </div>
              {/* 右侧 */}
              <div className="flex-1 flex justify-start">
                {item.side === "right" ? (
                  <div className="flex gap-4">
                    {item.images.map((img, i) => (
                      <img
                        key={i}
                        src={img.src}
                        alt=""
                        width={img.width}
                        height={img.height}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="max-w-xl text-left">
                    <div className="mb-4 font-bold text-lg">
                      {item.year} – {item.title}
                    </div>
                    <p>{item.text}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full max-w-xl mx-auto text-left space-y-10 text-lg font-['Libre_Baskerville'] mt-20">
          <p>
            Aujourd’hui, je suis UX/UI designer en devenir, en reconversion
            réfléchie et engagée.
          </p>
          <p>
            J’aime concevoir des interfaces élégantes, accessibles, ancrées dans
            l’émotion et la clarté. Je crois au design comme lien entre l'humain
            et la technologie.
          </p>
        </div>
        <div className="flex justify-center gap-8 mt-8">
          <Link href="/projet">
            <button className="px-6 py-3 bg-[#a37b73] text-white rounded-full hover:bg-[#8a615a] transition">
              Voir mes projets
            </button>
          </Link>
          <Link href="/CV">
            <button className="px-6 py-3 bg-[#a37b73] text-white rounded-full hover:bg-[#8a615a] transition">
              Voir mon CV
            </button>
          </Link>
        </div>

        <Footer />
      </div>
    </section>
  );
}
