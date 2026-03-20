
"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Empathy() {
  const empathyImage = PlaceHolderImages.find(img => img.id === "empathy")?.imageUrl || "";

  return (
    <section id="filosofia" className="py-32 md:py-48 bg-background">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn className="order-2 lg:order-1">
            <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-8 block opacity-80">
              Empatia e Acolhimento
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline mb-12 leading-tight text-primary">
              Um olhar integral para quem <span className="italic font-normal">dedicou a vida a cuidar.</span>
            </h2>
            <div className="space-y-10 text-lg md:text-xl text-primary/60 font-light leading-relaxed max-w-xl">
              <p>
                Envelhecer não precisa ser sinônimo de perda. Muitas vezes, o excesso de medicamentos (polifarmácia) e a fragmentação do cuidado médico trazem mais ansiedade do que saúde.
              </p>
              <p>
                Nossa filosofia foca na qualidade de vida e na autonomia. Entendemos os medos da dependência e da perda de memória, e trabalhamos para devolver a segurança a você e à sua família.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={200} className="order-1 lg:order-2 flex items-end justify-center lg:justify-end">
            <div className="relative w-full transition-transform duration-1000 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
              <Image
                src={empathyImage}
                alt="Cuidado e acolhimento"
                width={1000}
                height={800}
                className="w-full h-auto object-contain scale-150 origin-bottom transition-transform duration-1000 hover:scale-[1.55]"
                data-ai-hint="elderly couple"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
