"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Helena Soares",
    role: "Diretora de Design",
    text: "A atenção aos detalhes e a sofisticação do atendimento transformaram completamente a minha visão. Impecável em todos os sentidos.",
    initials: "HS"
  },
  {
    name: "Ricardo Mendes",
    role: "Investidor",
    text: "Encontrei aqui a fluidez que faltava na minha rotina. É o luxo que não precisa ser barulhento para ser notado. Uma experiência sublime.",
    initials: "RM"
  },
  {
    name: "Ana Clara Silva",
    role: "Arquiteta",
    text: "O minimalismo funcional do Apex Aura é um estudo sobre como a tecnologia pode servir ao bem-estar sem sobrecarregar os sentidos.",
    initials: "AS"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-headline mb-6">Quem já elevou o seu padrão</h2>
            <p className="text-muted-foreground font-light tracking-wide italic">Recomendações de um círculo exclusivo.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((item, index) => (
            <FadeIn key={index} delay={index * 200} className="bg-background p-10 shadow-sm border border-border/50">
              <p className="text-muted-foreground font-light leading-relaxed mb-8 italic">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="grayscale border border-border/50">
                  <AvatarFallback className="bg-primary text-white text-xs">{item.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-sm font-semibold tracking-wide">{item.name}</h4>
                  <p className="text-xs text-accent uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
