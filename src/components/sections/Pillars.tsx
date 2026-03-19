
"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Activity, Brain, Heart, Home } from "lucide-react";

const pillars = [
  {
    icon: <Brain className="w-10 h-10 stroke-[1px]" />,
    title: "Avaliação Geriátrica Ampla (AGA)",
    description: "Mapeamento completo da saúde física, cognitiva e emocional para um diagnóstico preciso."
  },
  {
    icon: <Activity className="w-10 h-10 stroke-[1px]" />,
    title: "Prevenção e Longevidade Ativa",
    description: "Foco em manter a autonomia, massa muscular e vitalidade em todas as fases da vida."
  },
  {
    icon: <Heart className="w-10 h-10 stroke-[1px]" />,
    title: "Tratamento de Demências",
    description: "Suporte especializado para Alzheimer e outras condições, com foco no paciente e na família."
  },
  {
    icon: <Home className="w-10 h-10 stroke-[1px]" />,
    title: "Pós-Internamento",
    description: "Transição de cuidados segura para pacientes frágeis que retornam ao ambiente domiciliar."
  }
];

export function Pillars() {
  return (
    <section id="pilares" className="py-32 bg-background">
      <div className="container-premium">
        <div className="text-center mb-24">
          <FadeIn>
            <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Especialidades</span>
            <h2 className="text-3xl md:text-5xl font-headline text-primary mb-6">
              Os Pilares do Atendimento
            </h2>
            <p className="text-primary/60 font-light max-w-2xl mx-auto">
              Cada serviço é desenhado para oferecer a máxima segurança e clareza no processo de envelhecimento.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {pillars.map((pillar, index) => (
            <FadeIn key={index} delay={index * 150} className="flex flex-col items-center text-center">
              <div className="mb-8 text-accent/80 transition-all duration-700 hover:text-accent hover:scale-110">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-headline mb-4 text-primary leading-tight">
                {pillar.title}
              </h3>
              <p className="text-primary/60 font-light leading-relaxed text-sm">
                {pillar.description}
              </p>
            </FadeIn>
          ))}
        </div>

        <div className="flex justify-center">
          <FadeIn delay={600}>
            <Button variant="outline" size="lg" className="text-[10px] lettering-wide font-bold px-12">
              Saber mais sobre as consultas
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
