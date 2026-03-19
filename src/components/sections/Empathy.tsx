
"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Empathy() {
  const empathyImage = PlaceHolderImages.find(img => img.id === "empathy")?.imageUrl || "";

  return (
    <section id="filosofia" className="py-32 bg-secondary/20">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn className="order-2 lg:order-1">
            <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">Empatia e Acolhimento</span>
            <h2 className="text-3xl md:text-5xl font-headline mb-10 leading-tight text-primary">
              Um olhar integral para quem <span className="italic font-normal">dedicou a vida a cuidar.</span>
            </h2>
            <div className="space-y-8 text-lg text-primary/80 font-light leading-relaxed">
              <p>
                Envelhecer não precisa ser sinônimo de perda. Muitas vezes, o excesso de medicamentos (polifarmácia) e a fragmentação do cuidado médico trazem mais ansiedade do que saúde.
              </p>
              <p>
                Nossa filosofia foca na qualidade de vida e na autonomia. Entendemos os medos da dependência e da perda de memória, e trabalhamos para devolver a segurança a você e à sua família.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={200} className="order-1 lg:order-2">
            <div className="aspect-square relative rounded-sm overflow-hidden shadow-2xl">
              <Image
                src={empathyImage}
                alt="Cuidado e acolhimento"
                fill
                className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                data-ai-hint="medical caring"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
