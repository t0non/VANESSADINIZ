"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container-premium relative z-10 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-headline mb-10 max-w-3xl mx-auto leading-tight">
            Dê o primeiro passo para um futuro com <span className="italic font-normal text-accent">mais vitalidade.</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-14 max-w-xl mx-auto font-light leading-relaxed">
            Estamos prontos para acolher você e sua família. Junte-se a um grupo exclusivo que prioriza a longevidade com dignidade.
          </p>
          <div className="flex justify-center items-center">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-white hover:text-primary h-16 px-12 rounded-none transition-all duration-500 gap-3 text-[10px] uppercase tracking-[0.3em] font-bold shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Solicitar Acesso</span>
            </Button>
          </div>
        </FadeIn>
      </div>
      
      {/* Subtle Textures */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
    </section>
  );
}