
"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "Dra. Vanessa foi a primeira médica a realmente ouvir a história do meu pai antes de prescrever qualquer coisa. A mudança na qualidade de vida dele foi nítida.",
    author: "Filha da D. Maria"
  },
  {
    content: "Encontrar uma profissional que entende as fragilidades e as forças de quem envelhece foi um alívio para nossa família. O cuidado é impecável.",
    author: "R.S., paciente há 2 anos"
  },
  {
    content: "As consultas domiciliares trouxeram uma tranquilidade que não tínhamos. Atendimento humano, científico e extremamente ético.",
    author: "Filho do Sr. Joaquim"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-secondary/5">
      <div className="container-premium">
        <div className="text-center mb-24">
          <FadeIn>
            <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Depoimentos</span>
            <h2 className="text-3xl md:text-5xl font-headline text-primary">Mudando histórias de vida</h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <FadeIn key={index} delay={index * 200} className="bg-background p-12 border border-primary/5 shadow-sm relative group">
              <Quote className="absolute top-8 right-8 w-8 h-8 text-accent/10 transition-colors group-hover:text-accent/30" />
              <p className="text-primary/70 font-light italic leading-relaxed mb-10 text-lg">
                "{t.content}"
              </p>
              <p className="text-[10px] lettering-wide font-bold text-accent uppercase">
                {t.author}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
