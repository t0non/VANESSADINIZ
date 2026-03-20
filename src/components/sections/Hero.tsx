
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero")?.imageUrl || "";

  return (
    <section className="relative h-screen lg:min-h-screen flex flex-col lg:flex-row lg:items-center overflow-hidden bg-background">
      
      {/* Container de Conteúdo */}
      <div className="container-premium relative z-20 w-full flex flex-col pt-24 lg:pt-0 lg:justify-center">
        <div className="lg:w-[60%] flex flex-col justify-center text-center lg:text-left">
          <FadeIn className="space-y-4 md:space-y-10">
            <div>
              <span className="inline-block text-accent lettering-wide text-[11px] md:text-[14px] font-bold mb-2 md:mb-6">
                GERIATRIA E LONGEVIDADE PREMIUM
              </span>
              
              <h1 className="text-3xl md:text-5xl lg:text-[64px] font-headline leading-[1.15] text-primary w-full max-w-[800px] mx-auto lg:mx-0">
                O privilégio de envelhecer<br className="hidden md:block" />
                com saúde, autonomia<br className="hidden md:block" />
                e propósito.
              </h1>
            </div>

            <p className="text-sm md:text-xl text-primary/80 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 px-4 lg:px-0">
              Cuidado médico integral para quem busca viver a melhor versão da maturidade. Um acompanhamento sem pressa, focado na sua história e bem-estar.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-6 pt-4">
              <Button size="xl" variant="default" className="text-xs md:text-base lettering-wide font-bold gap-4 group px-10 md:px-16 h-14 md:h-20 w-[85%] sm:w-fit mx-auto lg:mx-0">
                <div className="relative w-5 h-5 md:w-8 md:h-8 transition-transform group-hover:scale-110">
                  <Image 
                    src="https://files.catbox.moe/pkq8i0.png" 
                    alt="WhatsApp" 
                    fill 
                    className="object-contain brightness-0 invert" 
                  />
                </div>
                Agendar Avaliação
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Imagem da Médica - Desktop (Posicionamento Absoluto) */}
      <div className="hidden lg:flex absolute bottom-0 right-0 w-[50%] h-[90vh] items-end justify-center pointer-events-none z-10">
        <FadeIn 
          delay={300} 
          className="w-full h-full relative flex items-end [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
        >
          <div className="relative w-full h-full flex items-end">
            <Image
              src={heroImage}
              alt="Dra. Vanessa Diniz"
              fill
              priority
              className="object-contain object-bottom scale-[1.3] origin-bottom transition-transform duration-1000 hover:scale-[1.35]"
              data-ai-hint="professional doctor"
            />
          </div>
        </FadeIn>
      </div>

      {/* Imagem da Médica - Mobile (Fixa na base da tela e ampliada) */}
      <div className="lg:hidden mt-auto w-full h-[50vh] relative flex items-end justify-center z-10">
        <div className="relative w-full h-full flex items-end [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]">
          <Image
            src={heroImage}
            alt="Dra. Vanessa Diniz"
            fill
            className="object-contain object-bottom scale-[1.5] origin-bottom"
            priority
          />
        </div>
      </div>

      {/* Sutil textura de fundo */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] z-0" />
    </section>
  );
}
