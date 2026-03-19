"use client";

import { FadeIn } from "@/components/animations/FadeIn";

export function Connection() {
  return (
    <section id="filosofia" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-headline mb-12 leading-tight text-primary">
              Mais do que tratar sintomas. <span className="italic">Cuidar de histórias.</span>
            </h2>
            <div className="space-y-8 text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
              <p>
                Sabemos que a maturidade traz novos desafios, tanto para quem os vive quanto para a família que acompanha.
              </p>
              <p>
                O nosso foco não é apenas prolongar anos à vida, mas adicionar vida, independência e dignidade a cada ano que passa. Uma medicina feita com escuta ativa, baseada em ciência e entregue com afeto.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}