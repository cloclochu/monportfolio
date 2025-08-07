"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function HeaderPerple() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "Projets", href: "/projet" },
    { label: "À propos", href: "/about" },
    { label: "CV", href: "/CVChloeChu.pdf", download: true },
    { label: "Contact", href: "/contact"},
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 py-2 md:px-6 md:py-2 bg-[#5e4c5c80] backdrop-blur border-b border-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 font-cormorant tracking-tight"
        >
          Chloe YC CHU
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item, idx) =>
            item.isButton ? (
              <Button asChild key={idx}>
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ) : item.download ? (
              <a
                key={idx}
                href={item.href}
                download
                className="text-lg text-black font-[\'Libre_Baskerville\'] hover:underline"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={idx}
                href={item.href}
                className="text-lg text-black font-[\'Libre_Baskerville\'] hover:underline"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 w-full shadow-md">
          <div className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item, idx) =>
              item.isButton ? (
                <Button asChild key={idx}>
                  <Link href={item.href} onClick={toggleMenu}>{item.label}</Link>
                </Button>
              ) : item.download ? (
                <a
                  key={idx}
                  href={item.href}
                  download
                  onClick={toggleMenu}
                  className="text-lg text-black font-libre"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={toggleMenu}
                  className="text-lg text-black font-libre"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
