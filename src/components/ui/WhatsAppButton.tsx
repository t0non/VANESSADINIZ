
"use client";

import Image from "next/image";
import Link from "next/link";

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5511987654321"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-[60] flex items-center gap-3 group"
      aria-label="Falar no WhatsApp"
    >
      <div className="bg-white text-primary text-[10px] md:text-[12px] uppercase tracking-widest font-bold px-6 py-3 rounded-full shadow-xl border border-border/50 transition-all duration-500 opacity-90 group-hover:opacity-100">
        Quer saber mais?
      </div>
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-500 flex items-center justify-center">
        <div className="relative w-7 h-7">
          <Image 
            src="https://files.catbox.moe/pkq8i0.png" 
            alt="WhatsApp" 
            fill 
            className="object-contain brightness-0 invert" 
          />
        </div>
      </div>
    </Link>
  );
}
