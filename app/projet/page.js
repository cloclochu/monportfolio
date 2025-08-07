import Footer from "@/components/component/Footer";
import Header from "@/components/component/Header";
import Projects from "@/components/component/Projects";

export default function ProjetPage() {
  return (
    <div className="flex flex-col px-6 md:px-12 lg:px-24 gap-20">
      <Header />
        <div className="h-10" /> {/* 空隙，高度可调 */}
      <Projects />
      <div className="h-10" />
      <Footer />
    </div>
  );
}