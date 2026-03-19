"use client";

import { FadeIn } from "@/components/animations/FadeIn";

export function Solution() {
  return (
    <section className="py-32 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-headline mb-8">
              Apresentamos <span className="text-accent italic">Apex Aura.</span>
            </h2>
            <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
              Mais do que um produto, uma curadoria de detalhes. Desenvolvemos o Apex Aura combinando tecnologia de ponta com um design focado no que realmente importa: você.
            </p>
            <div className="h-px w-24 bg-accent/50 mb-8"></div>
            <p className="text-white/50 text-sm italic font-light tracking-wide">
              "A sofisticação é a simplicidade levada ao seu nível máximo."
            </p>
          </FadeIn>
          
          <div className="relative">
            <FadeIn delay={200}>
              <div className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center p-12 overflow-hidden group">
                <div className="text-center">
                  <span className="text-6xl font-headline italic text-accent opacity-20 group-hover:opacity-40 transition-opacity duration-1000">AA</span>
                  <p className="mt-4 text-xs uppercase tracking-[0.5em] text-white/30">Minimalismo Funcional</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
