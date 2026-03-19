"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoImage = PlaceHolderImages.find(img => img.id === "logo")?.imageUrl || "";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Filosofia", id: "filosofia" },
    { name: "Especialidades", id: "pilares" },
    { name: "Sobre", id: "sobre" },
    { name: "FAQ", id: "faq" }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md py-4 border-b border-primary/5" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="container-premium flex justify-between items-center">
        <Link href="/" className="relative h-16 w-60 md:w-80 transition-transform hover:scale-105 duration-300">
          <Image
            src={logoImage}
            alt="Dra. Vanessa Diniz Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="text-[10px] lettering-wide font-bold text-primary/70 hover:text-accent transition-colors uppercase tracking-widest"
            >
              {item.name}
            </Link>
          ))}
          <Button variant="default" className="px-10 h-12 text-[10px] lettering-wide font-bold uppercase tracking-widest gap-2 group">
            <div className="relative w-4 h-4 transition-transform group-hover:scale-110">
              <Image 
                src="https://files.catbox.moe/pkq8i0.png" 
                alt="WhatsApp" 
                fill 
                className="object-contain brightness-0 invert" 
              />
            </div>
            Agendar Consulta
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-primary p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-primary/5 p-12 flex flex-col items-center space-y-8 lg:hidden animate-in slide-in-from-top duration-500 shadow-2xl">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-headline italic text-primary hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button variant="default" className="w-full h-16 text-[10px] lettering-wide font-bold uppercase tracking-widest gap-3 group">
            <div className="relative w-5 h-5">
              <Image 
                src="https://files.catbox.moe/pkq8i0.png" 
                alt="WhatsApp" 
                fill 
                className="object-contain brightness-0 invert" 
              />
            </div>
            Agendar Agora
          </Button>
        </div>
      )}
    </nav>
  );
}
