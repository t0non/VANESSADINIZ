
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero")?.imageUrl || "";

  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col bg-background">
      
      {/* Container de Conteúdo */}
      <div className="container-premium relative z-20 w-full flex flex-col pt-36 lg:pt-52 pb-0 lg:pb-20 px-6 md:px-12">
        <div className="lg:w-[60%] flex flex-col text-center lg:text-left">
          <FadeIn className="flex flex-col items-center lg:items-start">
            {/* Subtítulo Superior (Kicker) */}
            <span className="text-accent text-[11px] md:text-[13px] font-bold uppercase tracking-[0.3em] mb-4 block opacity-80">
              Geriatria e Longevidade Premium
            </span>
            
            {/* Título Principal (H1) - Monumental e Elegante */}
            <h1 className="text-[46px] md:text-5xl lg:text-[72px] font-headline leading-[1.25] text-primary mb-8 max-w-[850px]">
              O privilégio de envelhecer com <span className="italic font-normal">saúde, autonomia e propósito.</span>
            </h1>

            {/* Texto de Apoio (Subheadline) - Reduzido para elegância e hierarquia */}
            <p className="text-sm md:text-xl text-primary/60 font-body leading-[1.6] max-w-[320px] lg:max-w-xl mb-10">
              Cuidado médico integral para quem busca viver a melhor versão da maturidade. Um acompanhamento sem pressa, focado na sua história.
            </p>

            {/* CTA Principal */}
            <div className="flex justify-center lg:justify-start w-full">
              <Button 
                size="xl" 
                variant="default"
                className="bg-primary hover:bg-[#1A2820] text-white rounded-full flex items-center justify-center gap-4 transition-all duration-500 shadow-2xl group hover:scale-105 border-none"
              >
                <div className="relative w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110">
                  <Image 
                    src="https://files.catbox.moe/pkq8i0.png" 
                    alt="WhatsApp" 
                    fill 
                    className="object-contain brightness-0 invert" 
                  />
                </div>
                <span className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.2em]">Agendar Avaliação</span>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Imagem Mobile - Posicionada um pouco mais para baixo com escala 1.6 */}
      <div className="lg:hidden w-full overflow-visible -mt-32 mb-16">
        <div className="relative w-full aspect-[4/5] flex items-end justify-center overflow-visible">
          <Image
            src={heroImage}
            alt="Dra. Vanessa Diniz"
            fill
            className="object-contain object-bottom scale-[1.6] origin-bottom"
            style={{ 
              maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
            }}
            priority
          />
        </div>
      </div>

      {/* Imagem Desktop - Reposicionada para baixo */}
      <div className="hidden lg:flex absolute bottom-0 right-0 w-[50%] h-[95vh] items-end justify-center pointer-events-none z-10 overflow-hidden">
        <FadeIn 
          delay={300} 
          className="w-full h-full relative flex items-end"
        >
          <div className="relative w-full h-full flex items-end translate-y-40">
            <Image
              src={heroImage}
              alt="Dra. Vanessa Diniz"
              fill
              priority
              className="object-contain object-bottom scale-[1.4] origin-bottom"
              style={{ 
                maskImage: 'linear-gradient(to bottom, black 60%, transparent 95%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 95%)'
              }}
              data-ai-hint="professional doctor"
            />
          </div>
        </FadeIn>
      </div>

      {/* Textura de Fundo Sutil */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] z-0" />
    </section>
  );
}
