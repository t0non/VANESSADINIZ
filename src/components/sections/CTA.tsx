"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container-premium relative z-10 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-headline mb-10 max-w-3xl mx-auto leading-tight italic">
            Dê o primeiro passo para um futuro com mais vitalidade.
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-14 max-w-xl mx-auto font-light leading-relaxed tracking-wide">
            Estamos prontos para acolher você e sua família. Junte-se a um grupo exclusivo que prioriza a longevidade com dignidade.
          </p>
          <div className="flex justify-center items-center">
            <Button 
              size="xl"
              variant="accent"
              className="gap-3 text-[10px] lettering-wide font-bold"
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
