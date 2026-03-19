"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Check } from "lucide-react";

const steps = [
  "Consulta estendida e sem pressa.",
  "Avaliação Geriátrica Ampla (física, cognitiva e emocional).",
  "Plano de cuidado personalizado e prático.",
  "Ambiente acolhedor, acessível e pensado para o seu conforto."
];

export function Testimonials() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-headline text-primary mb-6">O que esperar do seu atendimento</h2>
            <p className="text-muted-foreground font-light tracking-wide italic">A experiência da consulta premium.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn delay={200} className="bg-secondary/10 p-12 flex flex-col justify-center border border-border/30">
              <ul className="space-y-8">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1 bg-accent/20 p-1">
                      <Check className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-lg font-light text-muted-foreground">{step}</p>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <div className="flex flex-col justify-center space-y-8">
              <FadeIn delay={400}>
                <h3 className="text-2xl font-headline text-primary">Cuidado com propósito</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Cada etapa do atendimento foi desenhada para reduzir a ansiedade do paciente e da família, garantindo que todas as dúvidas sejam respondidas e que o plano de tratamento seja sustentável.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}