
"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="py-40 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container-premium relative z-10 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-headline mb-10 max-w-4xl mx-auto leading-tight italic">
            Dê o primeiro passo para um envelhecimento com mais dignidade e autonomia.
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-14 max-w-xl mx-auto font-light leading-relaxed tracking-wide">
            Estamos prontos para acolher você e sua família. Garanta um acompanhamento médico que prioriza a sua qualidade de vida.
          </p>
          <div className="flex justify-center items-center">
            <Button 
              size="xl"
              variant="accent"
              className="gap-4 text-[12px] lettering-wide font-bold px-16 h-20"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Agendar via WhatsApp</span>
            </Button>
          </div>
        </FadeIn>
      </div>
      
      {/* Subtle Textures */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
    </section>
  );
}
