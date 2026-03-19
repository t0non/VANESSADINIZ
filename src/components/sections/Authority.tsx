"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Authority() {
  const doctorImage = PlaceHolderImages.find(img => img.id === "doctor")?.imageUrl || "";

  return (
    <section id="sobre" className="py-32 bg-secondary/10">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <FadeIn className="relative">
            <div className="aspect-[4/5] relative overflow-hidden rounded-sm grayscale-[0.1] hover:grayscale-0 transition-all duration-1000 border border-primary/5">
              <Image
                src={doctorImage}
                alt="Envelhecimento Sereno"
                fill
                className="object-cover"
                data-ai-hint="peaceful aging"
              />
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block opacity-80">A Especialista</span>
            <h2 className="text-4xl md:text-5xl font-headline mb-10 text-primary leading-tight">
              Experiência clínica guiada pelo <span className="italic font-normal">afeto e pela ciência.</span>
            </h2>
            <div className="space-y-8 text-primary/70 text-lg font-light leading-relaxed mb-12">
              <p>
                Dra. Vanessa Diniz acredita que a medicina na maturidade exige mais do que protocolos técnicos: exige escuta ativa e tempo valorizado.
              </p>
              <p>
                Com especialização em Geriatria, sua prática é voltada para um acompanhamento contínuo, onde o paciente é visto em sua totalidade, respeitando sua história de vida e seus desejos para o futuro.
              </p>
            </div>
            
            <div className="flex flex-col space-y-8">
              <div className="pt-8 border-t border-primary/10">
                <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-1">CRM-SP 123.456 | RQE 78.910</p>
                <p className="text-[10px] text-primary/50 uppercase tracking-widest font-medium">Médica Geriatra e Especialista em Longevidade</p>
              </div>
              <Button size="xl" variant="default" className="text-[10px] lettering-wide font-bold w-fit uppercase tracking-widest gap-3 group">
                <div className="relative w-5 h-5 transition-transform group-hover:scale-110">
                  <Image 
                    src="https://files.catbox.moe/pkq8i0.png" 
                    alt="WhatsApp" 
                    fill 
                    className="object-contain brightness-0 invert" 
                  />
                </div>
                Agendar Consulta
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
