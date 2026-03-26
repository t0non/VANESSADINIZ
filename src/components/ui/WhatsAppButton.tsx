
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const TypingDots = () => (
  <div className="flex gap-1 items-center h-4 px-1">
    <div className="w-1 h-1 bg-primary/40 rounded-full animate-bounce [animation-duration:1s] [animation-delay:0ms]"></div>
    <div className="w-1 h-1 bg-primary/40 rounded-full animate-bounce [animation-duration:1s] [animation-delay:150ms]"></div>
    <div className="w-1 h-1 bg-primary/40 rounded-full animate-bounce [animation-duration:1s] [animation-delay:300ms]"></div>
  </div>
);

interface ChatBubbleProps {
  name: string;
  message: React.ReactNode;
  isVisible: boolean;
  className?: string;
}

const ChatBubble = ({ name, message, isVisible, className }: ChatBubbleProps) => (
  <div className={cn(
    "bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-2xl shadow-lg transition-all duration-500 flex flex-col items-start text-left gap-0.5 border border-primary/5",
    isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none",
    className
  )}>
    <span className="text-[8px] font-bold text-primary/40 uppercase tracking-wider">{name}</span>
    <div className="text-[11px] md:text-[12px] text-primary/70 leading-snug font-medium">
      {message}
    </div>
  </div>
);

export function WhatsAppButton() {
  const [stage, setStage] = useState(0); 
  const profileImage = PlaceHolderImages.find(img => img.id === "chat-profile")?.imageUrl || "";

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1200),
      setTimeout(() => setStage(2), 2500),
      setTimeout(() => setStage(3), 3500),
      setTimeout(() => setStage(4), 5500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 right-8 z-[60]">
      <Popover>
        <PopoverTrigger asChild>
          <button className="relative flex items-center group outline-none transition-transform hover:scale-105 active:scale-95">
            <div className="flex flex-col items-end gap-1.5 absolute bottom-[calc(100%+8px)] right-0 md:right-[calc(100%+16px)] md:bottom-2 pointer-events-none w-max max-w-[70vw]">
              <ChatBubble name="Vanessa" message={stage === 1 ? <TypingDots /> : "Olá! Tudo bem?"} isVisible={stage >= 1} />
              <ChatBubble name="Vanessa" message={stage === 3 ? <TypingDots /> : "Como podemos ajudar?"} isVisible={stage >= 3} />
            </div>
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full shadow-2xl overflow-hidden bg-secondary/20">
              <Image src={profileImage} alt="Dra. Vanessa Diniz" fill className="object-cover object-top" priority />
            </div>
            <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-[#25D366] rounded-full border-none shadow-sm" />
          </button>
        </PopoverTrigger>
        <PopoverContent side="top" align="end" sideOffset={16} className="w-[85vw] md:w-[320px] p-5 rounded-[24px] shadow-2xl border-none bg-[#FBFBF9]">
          <div className="mb-5">
            <h3 className="text-lg font-headline text-[#2A3F32] mb-0.5 italic">Atendimento</h3>
            <p className="text-[10px] text-[#4B5563] font-light">Selecione o assunto:</p>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {[
              { text: "Avaliação Geriátrica", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" },
              { text: "Prevenção de doenças", icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068" },
              { text: "Rastreamento de memória", icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189" },
            ].map((item, idx) => (
              <Link key={idx} href={`https://wa.me/553131576255?text=Olá,%20Dra.%20Vanessa.`} target="_blank" className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-full border border-gray-100 hover:shadow-md transition group">
                <svg className="w-3.5 h-3.5 text-[#2A3F32]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <span className="text-[12px] text-[#2A3F32] font-medium">{item.text}</span>
              </Link>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
