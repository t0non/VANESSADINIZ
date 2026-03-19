"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";

export function CTA() {
  return (
    <section className="py-40 bg-primary text-white relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="text-[20rem] font-headline font-bold uppercase tracking-tighter">AURA</span>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-headline mb-12 max-w-4xl mx-auto leading-tight">
            Pronto para dar o <span className="italic text-accent">próximo passo?</span>
          </h2>
          <p className="text-white/60 text-lg mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Junte-se a um grupo exclusivo de visionários que já vivem a experiência da elevação silenciosa. A excelência espera por você.
          </p>
          <div className="flex justify-center items-center">
            <Button 
              variant="outline"
              className="group relative overflow-hidden bg-transparent border-accent h-16 px-16 text-xs uppercase tracking-[0.4em] text-white hover:text-primary transition-colors duration-500"
            >
              <span className="relative z-10">Solicitar Acesso</span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
