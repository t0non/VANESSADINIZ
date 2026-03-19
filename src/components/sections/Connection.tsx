"use client";

import { FadeIn } from "@/components/animations/FadeIn";

export function Connection() {
  return (
    <section className="py-32 bg-background border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="text-accent text-xs uppercase tracking-[0.4em] font-semibold mb-8 block">
              Conexão & Empatia
            </span>
            <h2 className="text-3xl md:text-5xl font-headline mb-12 leading-tight">
              Onde o tempo encontra a <span className="italic">sua elevação.</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              <p>
                Sabemos que o seu tempo é o seu ativo mais valioso. Você procura resultados extraordinários, mas não quer abrir mão da leveza no processo.
              </p>
              <p>
                Até agora, o mercado oferecia o básico. Mas você não se contenta com o básico. Você busca a ressonância entre o que faz e quem você é.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
