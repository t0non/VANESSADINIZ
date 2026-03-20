
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero")?.imageUrl || "";

  return (
    <section className="relative min-h-[100vh] flex items-center pt-32 lg:pt-0 overflow-hidden bg-background">
      
      {/* Container de Conteúdo - Alinhamento e proporção ajustados para Desktop */}
      <div className="container-premium relative z-20 w-full">
        <div className="lg:w-[60%] flex flex-col justify-center">
          <FadeIn className="space-y-10">
            <div>
              <span className="inline-block text-accent lettering-wide text-[14px] font-bold mb-6">
                GERIATRIA E LONGEVIDADE PREMIUM
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-headline leading-[1.15] text-primary w-full max-w-[800px]">
                O privilégio de envelhecer<br />
                com saúde, autonomia<br />
                e propósito.
              </h1>
            </div>

            <p className="text-lg md:text-xl text-primary/80 font-normal leading-relaxed max-w-xl">
              Cuidado médico integral para quem busca viver a melhor versão da maturidade. Um acompanhamento sem pressa, focado na sua história e bem-estar.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button size="xl" variant="default" className="text-base lettering-wide font-bold gap-4 group px-16 h-20">
                <div className="relative w-8 h-8 transition-transform group-hover:scale-110">
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

      {/* Imagem da Médica - Desktop (Posicionamento Absoluto Refinado) */}
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
              className="object-contain object-bottom scale-[1.7] origin-bottom transition-transform duration-1000 hover:scale-[1.75]"
              data-ai-hint="professional doctor"
            />
          </div>
        </FadeIn>
      </div>

      {/* Imagem da Médica - Mobile (Mantida a estrutura original de fluxo) */}
      <div className="lg:hidden w-full h-[50vh] relative mt-12 flex items-end justify-center px-6 z-10 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
        <Image
          src={heroImage}
          alt="Dra. Vanessa Diniz"
          fill
          className="object-contain object-bottom scale-110 origin-bottom"
        />
      </div>

      {/* Sutil textura de fundo */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] z-0" />
    </section>
  );
}
