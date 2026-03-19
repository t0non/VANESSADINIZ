"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero")?.imageUrl || "https://files.catbox.moe/1vgx82.jfif";

  return (
    <section id="experience" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="lg:col-span-6 z-10">
          <FadeIn>
            <span className="inline-block text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6">
              Exclusive Luxury Experience
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline leading-[1.1] mb-8 text-primary">
              Elevate Your <br />
              <span className="italic font-normal">Aura</span> to the Apex
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-10 max-w-lg">
              Experience the pinnacle of sophisticated living. Apex Aura blends minimalist design with unparalleled luxury to redefine your everyday existence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="bg-primary text-white hover:bg-accent h-14 px-10 text-xs uppercase tracking-[0.2em] transition-all duration-300">
                Begin Journey
              </Button>
              <Button variant="ghost" className="h-14 px-10 text-xs uppercase tracking-[0.2em] hover:text-accent group">
                The Collections <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Visual */}
        <div className="lg:col-span-6 relative h-[60vh] lg:h-[85vh] w-full">
          <FadeIn className="h-full w-full" delay={200}>
            <div className="relative h-full w-full overflow-hidden shadow-2xl">
              <Image
                src={heroImage}
                alt="Luxury Lifestyle Apex Aura"
                fill
                priority
                className="object-cover"
                data-ai-hint="luxury lifestyle"
              />
              <div className="absolute inset-0 border-[20px] border-background/20 pointer-events-none"></div>
            </div>
            {/* Decorative element */}
            <div className="hidden lg:block absolute -bottom-8 -left-8 w-48 h-48 border border-accent/30 z-[-1]"></div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
