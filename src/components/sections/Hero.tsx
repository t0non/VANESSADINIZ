
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero")?.imageUrl || "";

  return (
    <section className="relative min-h-screen flex items-center pt-32 lg:pt-16 overflow-hidden bg-background">
      <div className="container-premium grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center w-full relative z-10">
        <div className="z-20 order-2 lg:order-1 pb-20 lg:pb-0">
          <FadeIn>
            <span className="inline-block text-accent lettering-wide text-[10px] font-bold mb-6">
              GERIATRIA E LONGEVIDADE PREMIUM
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-headline leading-[1.1] mb-12 text-primary w-full max-w-none">
              O privilégio de envelhecer<br />
              com saúde, autonomia<br />
              e propósito.
            </h1>

            <p className="text-lg md:text-xl text-primary font-normal leading-relaxed mb-14 max-w-xl">
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

        <div className="relative order-1 lg:order-2 h-[50vh] lg:h-[80vh] w-full flex items-center justify-center">
          <FadeIn delay={300} className="w-full h-full relative">
            <Image
              src={heroImage}
              alt="Dra. Vanessa Diniz"
              fill
              priority
              className="object-contain object-center scale-110 lg:scale-125 origin-center"
              data-ai-hint="professional doctor"
            />
            {/* Transição suave na base da imagem */}
            <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
