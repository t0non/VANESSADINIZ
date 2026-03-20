
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero")?.imageUrl || "";

  return (
    <section className="relative min-h-screen flex flex-col bg-background overflow-hidden">
      
      {/* Container de Conteúdo */}
      <div className="container-premium relative z-20 w-full flex flex-col pt-32 lg:pt-0 lg:justify-center px-6">
        <div className="lg:w-[60%] flex flex-col justify-center text-center lg:text-left">
          <FadeIn className="flex flex-col items-center lg:items-start">
            {/* Subtítulo Superior (Kicker) */}
            <span className="text-accent text-[13px] font-bold uppercase tracking-[2px] mb-3 block">
              GERIATRIA E LONGEVIDADE PREMIUM
            </span>
            
            {/* Título Principal (H1) */}
            <h1 className="text-[30px] md:text-5xl lg:text-[64px] font-headline leading-[1.2] text-primary mb-5 max-w-[800px]">
              O privilégio de envelhecer com saúde, autonomia e propósito.
            </h1>

            {/* Texto de Apoio (Corpo) */}
            <p className="text-[16px] md:text-xl text-[#666] font-body leading-[1.6] max-w-sm lg:max-w-xl mb-10">
              Cuidado médico integral para quem busca viver a melhor versão da maturidade. Um acompanhamento sem pressa, focado na sua história.
            </p>

            {/* Call to Action (Botão) */}
            <div className="flex justify-center lg:justify-start w-full mb-12">
              <Button 
                size="xl" 
                className="bg-[#2D4035] hover:bg-[#1A2820] text-white text-[14px] font-bold uppercase py-[18px] px-[32px] h-auto rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-xl group"
              >
                <div className="relative w-5 h-5 transition-transform group-hover:scale-110">
                  <Image 
                    src="https://files.catbox.moe/pkq8i0.png" 
                    alt="WhatsApp" 
                    fill 
                    className="object-contain brightness-0 invert" 
                  />
                </div>
                AGENDAR AVALIAÇÃO
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Composição da Imagem - Desktop (Posicionamento Absoluto) */}
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

      {/* Composição da Imagem - Mobile (Abaixo do conteúdo, com fade out) */}
      <div className="lg:hidden w-full h-[55vh] relative flex items-end justify-center z-10 mt-auto">
        <div className="relative w-full h-full flex items-end [mask-image:linear-gradient(to_bottom,black_65%,rgba(0,0,0,0.8)_85%,transparent_100%)]">
          <Image
            src={heroImage}
            alt="Dra. Vanessa Diniz"
            fill
            className="object-contain object-bottom scale-[2.2] origin-bottom"
            priority
          />
        </div>
      </div>

      {/* Sutil textura de fundo */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] z-0" />
    </section>
  );
}
