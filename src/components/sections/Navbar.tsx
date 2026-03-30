
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone, Clock } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

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
    { name: "HOME", id: "home", href: "#" },
    { name: "SERVIÇOS", id: "servicos", href: "#pilares" },
    { name: "VANESSA DINIZ", id: "sobre", href: "#sobre" },
    { name: "FORMAS DE ATENDIMENTO", id: "atendimento", href: "#atendimento" },
    { name: "DEPOIMENTOS", id: "depoimentos", href: "#depoimentos" },
    { name: "LOCALIZAÇÃO", id: "localizacao", href: "https://maps.google.com/?q=Rua+Jaceguai+208+Prado+Belo+Horizonte", isExternal: true },
  ];

  return (
    <>
      {/* Barra de Endereço Superior - Fixa */}
      <div className="fixed top-0 left-0 w-full bg-primary text-primary-foreground py-2 px-4 z-50 hidden md:flex items-center justify-center gap-10 text-[10px] font-medium tracking-widest uppercase">
        <span className="flex items-center gap-2 opacity-70">
          <MapPin size={11} />
          Rua Jaceguai, 208 – Sala 1408 – Instituto Hiraki – Bairro Prado, BH
        </span>
        <span className="flex items-center gap-2 opacity-70">
          <Clock size={11} />
          Seg. a Sex. · 08h às 18h
        </span>
        <a href="tel:+553131576255" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <Phone size={11} />
          (31) 3157-6255
        </a>
      </div>

      <nav className="fixed top-0 md:top-[36px] w-full z-40 py-4 md:py-6 px-4 md:px-8 transition-all duration-500 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div
            className={cn(
              "w-full flex justify-center lg:justify-start items-center px-6 md:px-10 py-3 rounded-full transition-all duration-500 pointer-events-auto relative",
              isScrolled
                ? "bg-white/40 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]"
                : "bg-transparent py-4"
            )}
          >
            {/* Logo */}
            <Link
              href="/"
              className={cn(
                "relative h-[60px] w-40 md:w-56 transition-transform hover:scale-105 duration-300 z-10 mx-auto lg:mx-0 lg:ml-0"
              )}
            >
              <Image
                src={logoImage}
                alt="Dra. Vanessa Diniz Logo"
                fill
                className="object-contain object-center lg:object-left"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-6 absolute right-10">
              {navLinks.map((item) =>
                item.isExternal ? (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] lettering-wide font-bold text-primary/70 hover:text-accent transition-colors uppercase tracking-[0.15em]"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="text-[9px] lettering-wide font-bold text-primary/70 hover:text-accent transition-colors uppercase tracking-[0.15em]"
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Link href="https://wa.me/553131576255" target="_blank" rel="noopener noreferrer">
                <Button variant="default" className="bg-[#2D4035] hover:bg-[#1A2820] px-8 h-10 text-[9px] lettering-wide font-bold uppercase tracking-widest gap-2 group rounded-full text-white border-none">
                  <div className="relative w-5 h-5 transition-transform group-hover:scale-110">
                    <Image
                      src="https://files.catbox.moe/pkq8i0.png"
                      alt="WhatsApp"
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  Agendar
                </Button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-primary p-2 absolute right-4 md:right-8 pointer-events-auto"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-4 right-4 mt-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-3xl p-10 flex flex-col items-center space-y-6 lg:hidden animate-in fade-in slide-in-from-top-4 duration-500 shadow-2xl pointer-events-auto">
            {/* Endereço mobile */}
            <div className="text-center text-[10px] text-primary/50 uppercase tracking-widest font-medium border-b border-primary/10 w-full pb-4">
              <p>Rua Jaceguai, 208 – Sala 1408 – Instituto Hiraki</p>
              <p className="mt-1">Seg.–Sex. · 08h–18h · (31) 3157-6255</p>
            </div>
            {navLinks.map((item) =>
              item.isExternal ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-headline text-primary hover:text-accent transition-colors uppercase tracking-wider"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-headline text-primary hover:text-accent transition-colors uppercase tracking-wider"
                >
                  {item.name}
                </Link>
              )
            )}
            <Link href="https://wa.me/553131576255" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="bg-[#2D4035] hover:bg-[#1A2820] w-full h-14 text-[10px] lettering-wide font-bold uppercase tracking-widest gap-3 group rounded-full text-white border-none">
                <div className="relative w-5 h-5 mr-1">
                  <Image
                    src="https://files.catbox.moe/pkq8i0.png"
                    alt="WhatsApp"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
                Agendar Agora
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
