"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";

export function CTA() {
  return (
    <section className="py-24 md:py-40 bg-gradient-to-br from-primary via-primary to-[#1A2820] text-primary-foreground relative overflow-hidden px-6">
      <div className="container-premium relative z-10 text-center">
        <FadeIn>
          <h2 className="text-[32px] md:text-6xl font-headline mb-8 md:mb-10 max-w-4xl mx-auto leading-tight italic">
            Dê o primeiro passo para um envelhecimento com mais dignidade e autonomia.
          </h2>
          <p className="text-primary-foreground/60 text-base md:text-lg mb-12 md:mb-14 max-w-xl mx-auto font-light leading-relaxed tracking-wide">
            Estamos prontos para acolher você e sua família. Garanta um acompanhamento médico que prioriza a sua qualidade de vida.
          </p>
          <div className="flex justify-center items-center w-full max-w-md mx-auto">
            <Link href="https://wa.me/553131576255" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
              <Button 
                size="xl"
                variant="accent"
                className="w-full md:w-auto gap-5 text-sm md:text-lg lettering-wide font-bold px-10 md:px-16 h-20 md:h-24 group rounded-full"
              >
                <div className="relative w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:scale-110">
                  <Image 
                    src="https://files.catbox.moe/pkq8i0.png" 
                    alt="WhatsApp" 
                    fill 
                    className="object-contain brightness-0 invert" 
                  />
                </div>
                <span>Agendar via WhatsApp</span>
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
      
      {/* Subtle Textures */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
    </section>
  );
}
