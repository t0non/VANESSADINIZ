
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero")?.imageUrl || "https://files.catbox.moe/1vgx82.jfif";

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="lg:col-span-7 z-10">
          <FadeIn>
            <span className="inline-block text-accent uppercase tracking-[0.2em] text-xs font-semibold mb-6">
              Geriatria & Longevidade
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline leading-[1.1] mb-8 text-primary">
              O privilégio de envelhecer com <span className="italic">saúde, autonomia</span> e propósito.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-10 max-w-xl">
              Um cuidado médico focado em longevidade e qualidade de vida. Porque você e quem você ama merecem um acompanhamento integral, humano e sem pressa.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-primary text-white hover:bg-accent h-14 px-10 text-sm tracking-wide rounded-none transition-all duration-300">
                Agendar uma Avaliação
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Visual */}
        <div className="lg:col-span-5 relative h-[40vh] lg:h-[60vh] w-full flex justify-center items-center">
          <FadeIn className="h-full w-full flex justify-center items-center" delay={200}>
            <div className="relative h-full w-full">
              <Image
                src={heroImage}
                alt="Envelhecimento com paz e saúde"
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
