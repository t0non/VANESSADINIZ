"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Heart, ShieldCheck, Leaf } from "lucide-react";

const pillars = [
  {
    icon: <Leaf className="w-10 h-10 stroke-[1px]" />,
    title: "Prevenção e Longevidade",
    description: "Rastreio e mapeamento de saúde para garantir um envelhecimento ativo e independente."
  },
  {
    icon: <Heart className="w-10 h-10 stroke-[1px]" />,
    title: "Gestão de Condições Crônicas",
    description: "Controle rigoroso e integrado de múltiplas condições, evitando a polifarmácia (excesso de remédios)."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 stroke-[1px]" />,
    title: "Apoio Familiar",
    description: "Orientação clara e acolhimento para os familiares, trazendo segurança para quem também cuida."
  }
];

export function Services() {
  return (
    <section id="pilares" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <FadeIn>
            <span className="text-accent text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">Abordagem</span>
            <h2 className="text-4xl md:text-5xl font-headline text-primary">
              Os Pilares do Atendimento
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-12 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <FadeIn key={index} delay={index * 150} className="text-center">
              <div className="group px-6 py-10 hover:bg-secondary/20 transition-all duration-500 rounded-lg">
                <div className="mb-8 text-accent flex justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-headline mb-6 text-primary">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed text-base">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}