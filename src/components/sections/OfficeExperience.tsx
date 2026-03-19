"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check } from "lucide-react";

const features = [
  "Consultas estendidas (até 1h30 de duração)",
  "Ambiente acolhedor e totalmente acessível",
  "Atendimento sem pressa e focado na escuta",
  "Suporte direto para dúvidas pós-consulta",
  "Espaço café gourmet para acompanhantes"
];

export function OfficeExperience() {
  const officeImage = PlaceHolderImages.find(img => img.id === "office")?.imageUrl || "";

  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn className="order-2 lg:order-1">
            <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">Diferencial</span>
            <h2 className="text-3xl md:text-5xl font-headline mb-10 text-primary">A Experiência no Consultório</h2>
            <p className="text-primary/60 font-light text-lg mb-12 leading-relaxed">
              Diferente dos modelos convencionais, aqui o seu tempo é respeitado. Criamos um ambiente onde a saúde é tratada com a dignidade que você merece.
            </p>
            
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center transition-colors group-hover:bg-accent/20">
                    <div className="w-4 h-4 text-accent"><Check size={16} /></div>
                  </div>
                  <span className="text-primary/80 font-medium tracking-wide text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={200} className="order-1 lg:order-2 relative">
            <div className="aspect-[16/10] relative overflow-hidden">
              <Image
                src={officeImage}
                alt="Consultório Premium"
                fill
                className="object-cover"
                data-ai-hint="luxury clinic room"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
