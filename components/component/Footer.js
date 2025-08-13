export default function Footer() {
  return (
    <footer className="w-full py-10 px-6 md:px-16 lg:px-40 bg-transparent flex items-center justify-between font-['Libre_Baskerville']">
      {/* 左侧文字 */}
      <div className="text-sm leading-relaxed text-black font-['Times_New_Roman'] max-w-3xl">
        <span className="tracking-wide">
          © 2025 par Chloe Chu. Droits partagés.{" "}
        </span>
        <a
          href="https://github.com/cloclochu/monportfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[#a37b73] hover:underline hover:text-[#5e4c5c] cursor-pointer transition-colors"
        >
          Cliquez ici
        </a>
        <span className="tracking-wide"> pour copier le code de mon site.</span>
      </div>
      {/* 右侧icon */}
      <div className="flex items-center gap-4">
        {/* Email */}
        <a
          href="mailto:chloe.yiching.chu@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="hover:text-[#a37b73] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail">
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
            <rect x="2" y="4" width="20" height="16" rx="2"/>
          </svg>
        </a>
        {/* Phone */}
        <a
          href="tel:+33755554488"
          aria-label="Téléphone"
          className="hover:text-[#a37b73] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-icon lucide-phone">
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
          </svg>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/chloechuuiux"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-[#a37b73] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect width="4" height="12" x="2" y="9"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}
