"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Diamond, ShieldCheck, Crown, Zap } from "lucide-react";

const pillars = [
  {
    icon: <Diamond className="w-8 h-8 stroke-[1px]" />,
    title: "Design Único",
    description: "Cada detalhe foi desenhado para se adaptar ao seu estilo de vida com exclusividade absoluta."
  },
  {
    icon: <Zap className="w-8 h-8 stroke-[1px]" />,
    title: "Performance Silenciosa",
    description: "Resultados visíveis sem atrito. A fluidez que o seu dia a dia exige para manter a sua leveza."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 stroke-[1px]" />,
    title: "Confiança Absoluta",
    description: "Sinta a segurança de estar sempre um passo à frente com uma estrutura de suporte impecável."
  },
  {
    icon: <Crown className="w-8 h-8 stroke-[1px]" />,
    title: "Status & Legado",
    description: "Uma presença que comunica sem gritar. O reconhecimento de quem entende o valor do detalhe."
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-headline mb-8 text-primary">
              Os Pilares da sua <span className="italic">Elevação</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              O racional por trás do emocional. Entregamos o extraordinário através de fundamentos sólidos de design e eficiência.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {pillars.map((pillar, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="group p-8 border border-transparent hover:border-accent/10 transition-all duration-500">
                <div className="mb-8 text-accent group-hover:scale-110 transition-transform duration-500">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-headline mb-4 group-hover:text-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">
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
