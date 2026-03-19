"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Portfolio() {
  const showcase = [
    PlaceHolderImages.find(img => img.id === "service-1"),
    PlaceHolderImages.find(img => img.id === "service-2"),
    PlaceHolderImages.find(img => img.id === "service-3"),
  ];

  return (
    <section id="portfolio" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <FadeIn className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-headline mb-6">Visual Resonance</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              Our aesthetic is a statement of intent. We believe in beauty as a functional necessity, creating spaces and experiences that inspire profound peace.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="text-accent text-sm tracking-[0.4em] uppercase font-semibold">
              The Aura Collection
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcase.map((item, index) => (
            <FadeIn key={index} delay={index * 200} className="aspect-[4/5] relative overflow-hidden group">
              {item && (
                <>
                  <Image
                    src={item.imageUrl}
                    alt={item.description}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
                    data-ai-hint={item.imageHint}
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                    <div className="text-white text-center">
                      <p className="text-xs uppercase tracking-[0.3em] mb-4 opacity-80">Collection Vol. 0{index + 1}</p>
                      <h4 className="text-2xl font-headline italic">{item.description}</h4>
                    </div>
                  </div>
                </>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
