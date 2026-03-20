
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Heart, ShieldPlus, User, CheckCheck } from "lucide-react";

const specialties = [
  {
    icon: <Heart className="w-5 h-5" strokeWidth={1} />,
    text: "Prevenção e rastreamento de doenças",
  },
  {
    icon: <ShieldPlus className="w-5 h-5" strokeWidth={1} />,
    text: "Construção do envelhecimento bem sucedido",
  },
  {
    icon: <User className="w-5 h-5" strokeWidth={1} />,
    text: "Saúde da mulher pós menopausa",
  },
  {
    icon: <CheckCheck className="w-5 h-5" strokeWidth={1} />,
    text: "Manejo e controle de doenças crônicas",
  },
];

export function Narrative() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FBFBF9] py-24 lg:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left: Image Container Refined with Mask and Scale */}
        <div className="relative h-[60vh] lg:h-screen flex items-end justify-center overflow-visible">
          <div className="relative w-full h-full flex items-end [mask-image:linear-gradient(to_bottom,black_75%,rgba(0,0,0,0.8)_85%,transparent_100%)]">
            <Image
              src="https://files.catbox.moe/cmawq4.png"
              alt="Dra. Vanessa Diniz"
              fill
              className="object-contain object-bottom scale-[1.1] origin-bottom transition-transform duration-1000 hover:scale-[1.15]"
              priority
            />
          </div>
        </div>

        {/* Right: Content Container */}
        <div className="p-8 md:p-16 lg:p-24 xl:p-32 flex flex-col justify-center bg-[#FBFBF9]">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline leading-tight mb-10 text-[#2A3F32]">
              Vamos mudar a narrativa sobre o envelhecimento?
            </h2>
            
            <div className="space-y-6 text-[#4B5563] font-body font-light text-base md:text-lg leading-[1.8] mb-16 max-w-2xl">
              <p>
                Não somos capazes de parar o tempo, mas podemos repensar os estigmas que foram construídos sobre este processo e assim desfrutar uma vida ativa, dinâmica e feliz.
              </p>
              <p>
                Com cuidado geriátrico especializado, baseado em ciência, é SIM possível envelhecer com saúde, preservar a independência e a autonomia.
              </p>
            </div>

            <h3 className="text-2xl font-headline mb-8 text-[#2A3F32] italic">Minhas especialidades</h3>
            
            <div className="flex flex-col mb-16">
              {specialties.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-6 py-5 border-b border-gray-100 group transition-all duration-300"
                >
                  <div className="shrink-0 text-[#C1A68D] transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="font-body font-medium text-[#2A3F32] text-sm md:text-base tracking-wide uppercase text-[10px] md:text-[12px]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <Button 
              size="xl" 
              variant="default"
              className="bg-[#2A3F32] hover:bg-[#1A2820] text-white rounded-full px-16 h-20 flex items-center gap-4 w-fit shadow-xl group transition-all duration-500 hover:scale-105"
            >
              <div className="relative w-6 h-6 transition-transform group-hover:scale-110">
                <Image 
                  src="https://files.catbox.moe/pkq8i0.png" 
                  alt="WhatsApp" 
                  fill 
                  className="object-contain brightness-0 invert" 
                />
              </div>
              <span className="text-[12px] uppercase tracking-[0.2em] font-bold">Agendar consulta</span>
            </Button>
          </FadeIn>
        </div>
      </div>
      
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] z-0" />
    </section>
  );
}
