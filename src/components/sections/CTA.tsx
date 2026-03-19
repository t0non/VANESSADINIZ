"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";

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
              className="gap-5 text-base md:text-lg lettering-wide font-bold px-16 h-24 group rounded-full"
            >
              <div className="relative w-8 h-8 transition-transform group-hover:scale-110">
                <Image 
                  src="https://files.catbox.moe/pkq8i0.png" 
                  alt="WhatsApp" 
                  fill 
                  className="object-contain brightness-0 invert" 
                />
              </div>
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
