"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Heart, ShieldPlus, User, CheckCheck } from "lucide-react";

const specialties = [
  {
    icon: <Heart className="w-5 h-5 text-slate-400" />,
    text: "Prevenção e rastreamento de doenças",
  },
  {
    icon: <ShieldPlus className="w-5 h-5 text-slate-400" />,
    text: "Construção do envelhecimento bem sucedido",
  },
  {
    icon: <User className="w-5 h-5 text-slate-400" />,
    text: "Saúde da mulher pós menopausa",
  },
  {
    icon: <CheckCheck className="w-5 h-5 text-slate-400" />,
    text: "Manejo e controle de doenças crônicas",
  },
];

export function Narrative() {
  return (
    <section className="relative w-full overflow-hidden bg-[#8CA4B0]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Image Container */}
        <div className="relative h-[60vh] lg:h-auto min-h-[500px]">
          <Image
            src="https://files.catbox.moe/objayu.png"
            alt="Envelhecimento Ativo"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right: Content Container */}
        <div className="p-12 md:p-24 flex flex-col justify-center text-white">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-headline leading-tight mb-8">
              Vamos mudar a narrativa sobre o envelhecimento?
            </h2>
            <div className="space-y-6 text-sm md:text-base font-light opacity-90 mb-12 max-w-xl">
              <p>
                Não somos capazes de parar o tempo, mas podemos repensar os estigmas que foram construídos sobre este processo e assim desfrutar uma vida ativa, dinâmica e feliz.
              </p>
              <p>
                Com cuidado geriátrico especializado, baseado em ciência, é SIM possível envelhecer com saúde, preservar a independência e a autonomia.
              </p>
            </div>

            <h3 className="text-3xl font-headline mb-8">Minhas especialidades</h3>
            
            <div className="space-y-4 mb-12">
              {specialties.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-full py-4 px-8 flex items-center gap-4 text-slate-600 shadow-sm transition-transform hover:scale-[1.02]"
                >
                  <div className="shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-medium tracking-tight text-sm md:text-base">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <Button 
              size="xl" 
              className="bg-[#2D4F60] hover:bg-[#1A303B] text-white rounded-full px-12 h-16 flex items-center gap-4 w-fit"
            >
              <div className="relative w-7 h-7">
                <Image 
                  src="https://files.catbox.moe/pkq8i0.png" 
                  alt="WhatsApp" 
                  fill 
                  className="object-contain brightness-0 invert" 
                />
              </div>
              <span className="text-sm uppercase tracking-widest font-bold">Agendar consulta</span>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
