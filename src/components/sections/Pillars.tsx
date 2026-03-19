"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.829 1.58-2.126a8.204 8.204 0 004.14-3.153M6.168 12.528a8.204 8.204 0 004.14 3.153c.922.297 1.58 1.143 1.58 2.126v.192M14.25 12.528A8.204 8.204 0 0118.39 9.375c.922-.297 1.58-1.143 1.58-2.126v-.192m-9.84-2.157A8.204 8.204 0 002.04 9.375C1.118 9.672.46 10.518.46 11.5v.192m13.79-2.157A8.204 8.204 0 0114.25 6v-.192c0-.983-.658-1.829-1.58-2.126M6.168 9.375A8.204 8.204 0 0010.31 6.222C11.232 5.925 11.89 5.079 11.89 4.096v-.192"/>
      </svg>
    ),
    title: "Avaliação Geriátrica",
    description: "Mapeamento completo da saúde física e cognitiva para um cuidado personalizado e profundo."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    title: "Prevenção e Longevidade",
    description: "Estratégias científicas para preservar a memória e garantir independência na maturidade."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Acolhimento Familiar",
    description: "Orientação clara e apoio constante aos familiares de quem cuidamos."
  }
];

export function Pillars() {
  return (
    <section id="pilares" className="relative w-full py-40 overflow-hidden bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop')" }}>
      
      {/* Overlay Verde Premium */}
      <div className="absolute inset-0 bg-[#2A3F32]/90 z-0"></div>

      <div className="relative z-20 container-premium">
        <div className="text-center mb-24">
          <FadeIn>
            <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Metodologia</span>
            <h2 className="text-3xl md:text-5xl font-headline text-[#FBFBF9] mb-6">
              Os Pilares do Nosso Cuidado
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-sm text-center hover:bg-white/10 transition duration-500 group h-full">
                <div className="flex justify-center mb-8 text-accent transition-transform duration-500 group-hover:scale-110">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-headline text-[#FBFBF9] mb-6 tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-[#FBFBF9]/70 font-light leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="flex justify-center">
          <FadeIn delay={600}>
            <Button variant="outline" size="lg" className="text-[10px] lettering-wide font-bold px-12 border-white/20 text-white hover:bg-white/10 hover:text-white gap-3 group">
              <div className="relative w-4 h-4 transition-transform group-hover:scale-110">
                <Image 
                  src="https://files.catbox.moe/pkq8i0.png" 
                  alt="WhatsApp" 
                  fill 
                  className="object-contain brightness-0 invert" 
                />
              </div>
              Saber mais sobre as consultas
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}