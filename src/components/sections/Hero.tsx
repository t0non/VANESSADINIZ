
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero")?.imageUrl || "";

  return (
    <section className="relative min-h-screen flex items-center pt-32 lg:pt-0 overflow-hidden bg-background">
      <div className="container-premium grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
        <div className="z-20 order-2 lg:order-1 pb-20 lg:pb-0">
          <FadeIn>
            <span className="inline-block text-accent lettering-wide text-[10px] font-bold mb-6">
              GERIATRIA E LONGEVIDADE PREMIUM
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline leading-[1.1] mb-10 text-primary">
              O privilégio de envelhecer com <span className="italic font-normal">saúde, autonomia</span> e propósito.
            </h1>
            <p className="text-lg text-primary/70 font-light leading-relaxed mb-12 max-w-xl">
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

        {/* Image Container: Massive size and absolute positioning on desktop */}
        <div className="relative order-1 lg:order-2 h-[60vh] lg:h-[105vh] w-full flex items-end lg:absolute lg:right-0 lg:bottom-0 lg:w-[55%] pointer-events-none">
          <FadeIn delay={300} className="w-full h-full relative">
            <Image
              src={heroImage}
              alt="Dra. Vanessa Diniz"
              fill
              priority
              className="object-contain object-bottom scale-110 lg:scale-125 origin-bottom"
              data-ai-hint="professional doctor"
            />
            {/* Smooth transition gradient from background color */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
