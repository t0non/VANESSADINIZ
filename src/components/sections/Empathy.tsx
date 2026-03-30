
"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Empathy() {
  const empathyImage = PlaceHolderImages.find(img => img.id === "empathy")?.imageUrl || "";

  return (
    <section id="filosofia" className="py-24 md:py-48 bg-background">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Conteúdo Textual */}
          <div className="flex flex-col">
            <FadeIn>
              <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-8 block opacity-80 text-center lg:text-left">
                Empatia e Acolhimento
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline mb-8 md:mb-12 leading-tight text-primary text-center lg:text-left">
                Um olhar integral para quem <span className="italic font-normal">dedicou a vida a cuidar.</span>
              </h2>
            </FadeIn>
            
            {/* Imagem Mobile com Máscara de Fusão */}
            <FadeIn delay={100} className="lg:hidden mb-4">
              <Image
                src={empathyImage}
                alt="Dra. Vanessa Diniz - Cuidado e acolhimento"
                width={1200}
                height={1200}
                className="w-full h-auto object-contain"
                style={{ 
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                }}
                data-ai-hint="elderly couple"
              />
            </FadeIn>

            <FadeIn delay={200} className="space-y-10 text-lg md:text-xl text-primary/60 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <p>
                Envelhecer não precisa ser sinônimo de perda. Muitas vezes, o excesso de medicamentos (polifarmácia) e a fragmentação do cuidado médico trazem mais ansiedade do que saúde.
              </p>
              <p>
                Nossa filosofia foca na qualidade de vida e na autonomia. Entendemos os medos da dependência e da perda de memória, e trabalhamos para devolver a segurança a você e à sua família.
              </p>
            </FadeIn>
          </div>
          
          {/* Imagem Desktop com Fusão */}
          <FadeIn delay={300} className="hidden lg:block">
            <Image
              src={empathyImage}
              alt="Dra. Vanessa Diniz - Cuidado e acolhimento"
              width={1200}
              height={1200}
              className="w-full h-auto object-contain"
              style={{ 
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
              }}
              data-ai-hint="elderly couple"
              priority
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
