export default function Footer() {
  return (
    <footer className="w-full py-10 px-6 md:px-16 lg:px-40 bg-transparent flex items-center justify-center font-['Libre_Baskerville']">
      <div className="text-center text-base leading-relaxed text-black font-['Times_New_Roman'] max-w-3xl">
        <span className="tracking-wide">
          © 2025 par Chloe Chu. Droits partagés.{" "}
        </span>
        <span className="font-bold text-[#a37b73] hover:underline cursor-pointer">
          Cliquez ici
        </span>
        <span className="tracking-wide"> pour copier le code de mon site.</span>
      </div>
    </footer>
  );
}
