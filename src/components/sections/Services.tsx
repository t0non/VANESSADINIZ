"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Heart, ShieldCheck, Leaf } from "lucide-react";

const pillars = [
  {
    icon: <Leaf className="w-12 h-12 stroke-[1px]" />,
    title: "Prevenção e Longevidade",
    description: "Rastreio e mapeamento de saúde para garantir um envelhecimento ativo e independente."
  },
  {
    icon: <Heart className="w-12 h-12 stroke-[1px]" />,
    title: "Gestão de Condições Crônicas",
    description: "Controle rigoroso, evitando o excesso de medicação e focando no que é essencial para o seu bem-estar."
  },
  {
    icon: <ShieldCheck className="w-12 h-12 stroke-[1px]" />,
    title: "Apoio Familiar",
    description: "Orientação clara e acolhimento para os familiares, trazendo segurança para quem também cuida."
  }
];

export function Services() {
  return (
    <section id="pilares" className="py-32 bg-background">
      <div className="container-premium">
        <div className="text-center mb-24">
          <FadeIn>
            <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block opacity-80">Metodologia</span>
            <h2 className="text-4xl md:text-5xl font-headline text-primary">
              Os Pilares do Atendimento
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
          {pillars.map((pillar, index) => (
            <FadeIn key={index} delay={index * 200} className="flex flex-col items-center text-center">
              <div className="mb-10 text-accent transition-transform duration-500 hover:scale-110">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-headline mb-6 text-primary">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed text-base max-w-xs">
                {pillar.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}