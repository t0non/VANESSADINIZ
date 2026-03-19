"use client";

import { FadeIn } from "@/components/animations/FadeIn";

export function Connection() {
  return (
    <section id="filosofia" className="py-32 bg-secondary/30">
      <div className="container-premium">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">Filosofia de Cuidado</span>
            <h2 className="text-3xl md:text-5xl font-headline mb-10 leading-tight text-primary">
              Mais do que tratar sintomas. <span className="italic font-normal">Cuidar de histórias.</span>
            </h2>
            <div className="space-y-8 text-lg text-foreground/80 font-light leading-relaxed">
              <p>
                Sabemos que o seu tempo é o seu ativo mais valioso. Você procura resultados extraordinários, mas não quer abrir mão da leveza no processo.
              </p>
              <p>
                O nosso foco não é apenas prolongar anos à vida, mas adicionar independência e dignidade a cada ano que passa. Uma medicina feita com escuta ativa, baseada em ciência e entregue com o toque de exclusividade que você merece.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}