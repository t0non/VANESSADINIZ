
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
    "bg-white px-4 py-2 md:px-5 md:py-3 rounded-[16px] md:rounded-[20px] shadow-[0_8px_30px_-10px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col items-start text-left gap-0.5 border border-primary/5",
    isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none",
    className
  )}>
    <span className="text-[8px] md:text-[10px] font-bold text-primary/40 uppercase tracking-wider">{name}</span>
    <div className="text-[12px] md:text-[14px] text-primary/70 leading-snug font-medium font-body">
      {message}
    </div>
  </div>
);

export function WhatsAppButton() {
  const [stage, setStage] = useState(0); 
  const profileImage = PlaceHolderImages.find(img => img.id === "chat-profile")?.imageUrl || "";

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1200),  // Começa a digitar 1
      setTimeout(() => setStage(2), 2500),  // Mostra msg 1
      setTimeout(() => setStage(3), 3500),  // Começa a digitar 2
      setTimeout(() => setStage(4), 5500),  // Mostra msg 2
    ];

    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 right-8 z-[60]">
      <Popover>
        <PopoverTrigger asChild>
          <button
            className="relative flex items-center group outline-none transition-transform hover:scale-105 active:scale-95"
            aria-label="Abrir atendimento"
          >
            {/* Pilha de Balões - Responsiva */}
            <div className="flex flex-col items-end gap-1.5 md:gap-2 absolute bottom-[calc(100%+8px)] right-0 md:right-[calc(100%+16px)] md:bottom-4 pointer-events-none w-max max-w-[70vw]">
              <ChatBubble 
                name="Vanessa"
                message={stage === 1 ? <TypingDots /> : "Olá! Tudo bem?"}
                isVisible={stage >= 1}
              />
              <ChatBubble 
                name="Vanessa"
                message={stage === 3 ? <TypingDots /> : "Como podemos te ajudar hoje?"}
                isVisible={stage >= 3}
              />
            </div>

            {/* Avatar Circular */}
            <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl overflow-hidden bg-secondary/20 border-none">
              <Image 
                src={profileImage} 
                alt="Dra. Vanessa Diniz" 
                fill 
                className="object-cover object-top" 
                priority
              />
            </div>

            {/* Indicador Online */}
            <div className="absolute bottom-0.5 right-0.5 w-3 h-3 md:w-3.5 md:h-3.5 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center border-none">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse"></div>
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent 
          side="top" 
          align="end" 
          sideOffset={16}
          className="w-[88vw] md:w-[360px] p-6 rounded-[24px] md:rounded-[30px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] border-none bg-[#FBFBF9] animate-in fade-in zoom-in slide-in-from-bottom-10 duration-500"
        >
          <div className="mb-6">
            <h3 className="text-xl font-headline text-[#2A3F32] mb-1 italic">Atendimento</h3>
            <p className="text-xs text-[#4B5563] font-light">Selecione o assunto para iniciar:</p>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {[
              { text: "Avaliação Geriátrica Ampla", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" },
              { text: "Prevenção de doenças", icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" },
              { text: "Longevidade e bem estar", icon: "M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3m0 0l3.75 3.75M12 3L8.25 6.75" },
              { text: "Controle de doenças crônicas", icon: "M21 7.5V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V7.5m0-3h18a2.25 2.25 0 012.25 2.25v.75m-20.25-.75V6m11.25 10.5h3.75m-3.75 0V13.5m-6 0h6m-6 0V10.5" },
              { text: "Rastreamento de memória", icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.829 1.58-2.126a8.204 8.204 0 004.14-3.153M6.168 12.528a8.204 8.204 0 004.14 3.153c.922.297 1.58 1.143 1.58 2.126v.192" },
            ].map((item, idx) => (
              <Link 
                key={idx}
                href={`https://wa.me/5511987654321?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(item.text)}.`}
                target="_blank"
                className="flex items-center gap-3 bg-white px-4 py-3 rounded-full shadow-sm border border-gray-100 transition duration-300 hover:shadow-md hover:border-[#C5A880]/20 group"
              >
                <div className="flex-shrink-0 text-[#2A3F32] group-hover:text-[#C5A880] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <span className="font-sans text-[13px] text-[#2A3F32] font-medium leading-tight">{item.text}</span>
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-primary/5 flex items-center justify-between">
            <p className="text-[9px] uppercase tracking-widest text-[#2A3F32]/40 font-bold">Dra. Vanessa Diniz</p>
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-[#25D366] animate-pulse"></div>
              <span className="text-[9px] text-[#25D366] font-bold uppercase tracking-widest">Online</span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
