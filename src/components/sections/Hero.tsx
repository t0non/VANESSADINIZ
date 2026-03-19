"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero")?.imageUrl || "https://files.catbox.moe/objayu.png";

  return (
    <section id="experience" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="lg:col-span-6 z-10">
          <FadeIn>
            <span className="inline-block text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6">
              Experiência Exclusiva
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline leading-[1.1] mb-8 text-primary">
              A elegância de ser a sua <br />
              <span className="italic font-normal text-accent">melhor versão.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-10 max-w-lg">
              Descubra uma experiência pensada para quem não abre mão do cuidado, do detalhe e da exclusividade. Redefina o seu padrão de excelência.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="bg-primary text-white hover:bg-accent h-14 px-10 text-xs uppercase tracking-[0.2em] transition-all duration-300">
                Descubra a Coleção
              </Button>
              <Button variant="ghost" className="h-14 px-10 text-xs uppercase tracking-[0.2em] hover:text-accent group">
                Nossa História <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Visual */}
        <div className="lg:col-span-6 relative h-[60vh] lg:h-[75vh] w-full flex items-center justify-center">
          <FadeIn className="h-full w-full" delay={200}>
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={heroImage}
                alt="A elegância de Apex Aura"
                fill
                priority
                className="object-cover"
                data-ai-hint="luxury woman"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
