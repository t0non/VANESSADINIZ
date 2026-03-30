
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = "/areas/Sessao1.png";

  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col bg-background overflow-visible">
      
      {/* Container de Conteúdo */}
      <div className="container-premium relative z-20 w-full flex flex-col pt-40 lg:pt-60 pb-0 lg:pb-20 px-6 md:px-12">
        <div className="lg:w-[60%] flex flex-col text-center lg:text-left">
          <FadeIn className="flex flex-col items-center lg:items-start">
            {/* Subtítulo Superior (Kicker) */}
            <span className="text-accent text-[11px] md:text-[13px] font-bold uppercase tracking-[0.3em] mb-4 block opacity-80">
              Geriatra em Belo Horizonte
            </span>

            {/* Título Principal (H1) */}
            <h1 className="text-[46px] md:text-5xl lg:text-[72px] font-headline leading-[1.25] text-primary mb-2 md:mb-8 max-w-[850px]">
              Dra. Vanessa Diniz
            </h1>

            {/* Frase de Impacto - verbatim */}
            <p className="text-[13px] md:text-xl text-primary/60 font-body leading-[1.6] max-w-[320px] lg:max-w-xl mb-6 lg:mb-10">
              "Cada fase da vida traz seus desafios. Estou aqui para ajudar a manter a autonomia e a qualidade de vida da pessoa idosa com cuidado individualizado e intervenções no momento certo."
            </p>

            {/* CTA Principal */}
            <div className="flex justify-center lg:justify-start w-full">
              <Link href="https://wa.me/553131576255" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="xl" 
                  variant="default"
                  className="bg-primary hover:bg-[#1A2820] text-white rounded-full flex items-center justify-center gap-4 transition-all duration-500 shadow-2xl group hover:scale-105 border-none"
                >
                  <div className="relative w-7 h-7 md:w-8 md:h-8 transition-transform group-hover:scale-110">
                    <Image 
                      src="https://files.catbox.moe/pkq8i0.png" 
                      alt="WhatsApp" 
                      fill 
                      className="object-contain brightness-0 invert" 
                    />
                  </div>
                  <span className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.2em]">Agendar Avaliação</span>
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Imagem Mobile - Escala 1.6 e Posicionamento Elevado */}
      <div className="lg:hidden w-full overflow-visible -mt-12 mb-16">
        <div className="relative w-full aspect-[4/5] flex items-end justify-center overflow-visible">
          <Image
            src={heroImage}
            alt="Dra. Vanessa Diniz"
            fill
            className="object-contain object-bottom scale-[0.8] origin-bottom"
            style={{ 
              maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
            }}
            priority
          />
        </div>
      </div>

      {/* Imagem Desktop - Posicionada MAIS PARA CIMA */}
      <div className="hidden lg:flex absolute bottom-0 right-0 w-[50%] h-[95vh] items-end justify-center pointer-events-none z-10 overflow-hidden">
        <FadeIn 
          delay={300} 
          className="w-full h-full relative flex items-end"
        >
          <div className="relative w-full h-full flex items-end translate-y-0">
            <Image
              src={heroImage}
              alt="Dra. Vanessa Diniz"
              fill
              priority
              className="object-contain object-bottom scale-[0.8] origin-bottom"
              style={{ 
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
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
