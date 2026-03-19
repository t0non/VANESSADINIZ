
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero")?.imageUrl || "https://files.catbox.moe/objayu.png";

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 overflow-hidden bg-background">
      <div className="container-premium grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: Content */}
        <div className="z-10 order-2 lg:order-1">
          <FadeIn>
            <span className="inline-block text-accent lettering-wide text-[10px] font-semibold mb-8">
              Geriatria & Longevidade Premium
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline leading-[1.1] mb-10 text-primary">
              O privilégio de envelhecer com <span className="italic font-normal">saúde, autonomia</span> e propósito.
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12 max-w-xl">
              Um cuidado médico focado em longevidade e qualidade de vida. Porque você e quem você ama merecem um acompanhamento integral, humano e sem pressa.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Button size="xl" variant="default" className="text-[10px] lettering-wide font-bold">
                Agendar uma Avaliação
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Right: Full Image Container */}
        <div className="relative h-[40vh] lg:h-[65vh] w-full order-1 lg:order-2 flex justify-center items-center">
          <FadeIn delay={300} className="w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={heroImage}
                alt="Envelhecimento com dignidade"
                fill
                priority
                className="object-contain"
                data-ai-hint="peaceful elderly"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
