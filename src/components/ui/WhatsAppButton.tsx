"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5511987654321"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-[60] bg-primary text-white p-5 rounded-full shadow-2xl hover:bg-accent transition-all duration-500 group"
      aria-label="Falar no WhatsApp"
    >
      <div className="relative">
        <MessageCircle size={28} className="group-hover:scale-110 transition-transform duration-500" />
        <span className="absolute -top-12 -left-32 bg-white text-primary text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none whitespace-nowrap border border-border/50">
          Agendar pelo WhatsApp
        </span>
      </div>
    </Link>
  );
}