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
        isScrolled ? "bg-background/90 backdrop-blur-md py-4 border-b border-border/50" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-headline tracking-tight text-primary">
          DRA. LUÍSA <span className="text-accent italic">MENDES</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {[
            { name: "Filosofia", id: "filosofia" },
            { name: "Pilares", id: "pilares" },
            { name: "Sobre", id: "sobre" },
            { name: "FAQ", id: "faq" }
          ].map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="text-sm tracking-wide font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-primary text-white hover:bg-accent px-8 rounded-none">
            Agendar Consulta
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border p-8 flex flex-col items-center space-y-6 md:hidden">
          {["Filosofia", "Pilares", "Sobre", "FAQ"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-headline text-foreground"
            >
              {item}
            </Link>
          ))}
          <Button className="w-full bg-primary text-white rounded-none">Agendar Agora</Button>
        </div>
      )}
    </nav>
  );
}