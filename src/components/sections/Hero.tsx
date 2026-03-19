
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero")?.imageUrl || "";

  return (
    <section className="relative min-h-screen flex items-center pt-32 lg:pt-0 overflow-hidden bg-background">
      {/* Grid com proporção 60/40 no desktop para dar mais espaço ao texto */}
      <div className="container-premium grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center w-full">
        <div className="z-20 order-2 lg:order-1 pb-20 lg:pb-0">
          <FadeIn>
            <span className="inline-block text-accent lettering-wide text-[10px] font-bold mb-6">
              GERIATRIA E LONGEVIDADE PREMIUM
            </span>
            {/* Título com max-w aumentado e quebras de linha estratégicas */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline leading-[1.2] mb-16 text-primary max-w-4xl">
              O privilégio de envelhecer<br />
              com saúde, autonomia<br />
              e propósito.
            </h1>
            {/* Texto de apoio com peso normal (Regular) e cor mais densa para melhor contraste */}
            <p className="text-lg md:text-xl text-primary/90 font-normal leading-relaxed mb-14 max-w-xl">
              Cuidado médico integral para quem busca viver a melhor versão da maturidade. Um acompanhamento sem pressa, focado na sua história e bem-estar.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="xl" variant="default" className="text-sm md:text-base lettering-wide font-bold gap-4 group px-12 h-20">
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

        {/* Image Container: Proporção ajustada para 40% da largura no desktop */}
        <div className="relative order-1 lg:order-2 h-[60vh] lg:h-[105vh] w-full flex items-end lg:absolute lg:right-0 lg:bottom-0 lg:w-[45%] pointer-events-none">
          <FadeIn delay={300} className="w-full h-full relative">
            <Image
              src={heroImage}
              alt="Dra. Vanessa Diniz"
              fill
              priority
              className="object-contain object-bottom scale-110 lg:scale-125 origin-bottom"
              data-ai-hint="professional doctor"
            />
            {/* Degradê suave saindo do background para integrar a base da foto */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background via-background/90 to-transparent z-10" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
