"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-md py-4 border-b border-border/40" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="container-premium flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-headline tracking-tighter text-primary font-medium">
          DRA. LUÍSA <span className="text-accent italic font-normal">MENDES</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {[
            { name: "Filosofia", id: "filosofia" },
            { name: "Pilares", id: "pilares" },
            { name: "Sobre", id: "sobre" },
            { name: "Experiência", id: "experiencia" }
          ].map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="text-[10px] uppercase tracking-[0.3em] font-medium text-foreground/70 hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-primary text-primary-foreground hover:bg-accent hover:text-white px-8 rounded-none h-11 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 shadow-sm">
            Agendar Consulta
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border p-12 flex flex-col items-center space-y-8 md:hidden animate-in slide-in-from-top duration-500">
          {["Filosofia", "Pilares", "Sobre", "Experiência"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-headline text-primary hover:text-accent transition-colors"
            >
              {item}
            </Link>
          ))}
          <Button className="w-full bg-primary text-primary-foreground rounded-none h-14 text-xs uppercase tracking-widest font-bold">Agendar Agora</Button>
        </div>
      )}
    </nav>
  );
}