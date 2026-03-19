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

  const logoImage = PlaceHolderImages.find(img => img.id === "logo")?.imageUrl || "https://files.catbox.moe/ulpl82.png";

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
          ? "bg-background/95 backdrop-blur-md py-4 border-b border-border/40" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="container-premium flex justify-between items-center">
        <Link href="/" className="relative h-24 w-80 md:w-96 transition-transform hover:scale-105 duration-300">
          <Image
            src={logoImage}
            alt="Dra. Luísa Mendes Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {[
            { name: "Filosofia", id: "filosofia" },
            { name: "Pilares", id: "pilares" },
            { name: "Sobre", id: "sobre" },
            { name: "FAQ", id: "faq" }
          ].map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="text-[10px] lettering-wide font-medium text-primary/70 hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-primary text-primary-foreground hover:bg-accent hover:text-white px-8 rounded-none h-11 text-[10px] lettering-wide font-semibold transition-all duration-500 shadow-sm">
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
          {["Filosofia", "Pilares", "Sobre", "FAQ"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-headline italic text-primary hover:text-accent transition-colors"
            >
              {item}
            </Link>
          ))}
          <Button className="w-full bg-primary text-primary-foreground rounded-none h-14 text-[10px] lettering-wide font-bold">Agendar Agora</Button>
        </div>
      )}
    </nav>
  );
}
