"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Authority() {
  const doctorImage = PlaceHolderImages.find(img => img.id === "doctor")?.imageUrl || "";

  return (
    <section id="sobre" className="pt-20 pb-32 md:pt-24 bg-background overflow-hidden">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Coluna da Imagem (Desktop Only) */}
          <FadeIn className="relative hidden lg:flex items-end justify-center lg:order-1 self-stretch">
            <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-full min-h-[500px] lg:min-h-[800px] flex items-end">
              <div className="relative w-full h-full flex items-end [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
                <Image
                  src={doctorImage}
                  alt="Dra. Vanessa Diniz"
                  fill
                  className="object-contain object-bottom scale-[1.75] origin-bottom -translate-y-32 lg:-translate-y-44 transition-transform duration-1000 hover:scale-[1.8] hover:-translate-y-48"
                  data-ai-hint="professional doctor"
                  priority
                />
              </div>
            </div>
          </FadeIn>

          {/* Coluna do Texto (Mobile & Desktop) */}
          <FadeIn delay={200} className="lg:order-2 py-6 md:py-12 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block opacity-80">A Especialista</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline mb-0 lg:mb-8 text-primary leading-tight">
              Experiência clínica guiada pelo <span className="italic font-normal">afeto e pela ciência.</span>
            </h2>

            {/* Imagem Mobile (Posicionada com margem negativa agressiva e escala aumentada) */}
            <div className="lg:hidden w-full -mt-10 mb-6 overflow-hidden">
               <div className="relative w-full aspect-[4/5] flex items-end [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
                <Image
                  src={doctorImage}
                  alt="Dra. Vanessa Diniz"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain object-bottom scale-[1.8] origin-bottom"
                  data-ai-hint="professional doctor"
                />
              </div>
            </div>

            <div className="space-y-8 text-primary/70 text-lg md:text-xl font-light leading-relaxed mb-12">
              <p>
                Dra. Vanessa Diniz acredita que a medicina na maturidade exige mais do que protocolos técnicos: exige escuta ativa e tempo valorizado.
              </p>
              <p>
                Com especialização em Geriatria, sua prática é voltada para um acompanhamento contínuo, onde o paciente é visto em sua totalidade, respeitando sua história de vida e seus desejos para o futuro.
              </p>
            </div>
            
            <div className="flex flex-col space-y-10 w-full items-center lg:items-start">
              <div className="pt-8 border-t border-primary/10 w-full">
                <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-1">CRM-SP 123.456 | RQE 78.910</p>
                <p className="text-xs text-primary/50 uppercase tracking-widest font-medium">Médica Geriatra e Especialista em Longevidade</p>
              </div>
              
              <Button size="xl" variant="default" className="text-sm lettering-wide font-bold w-fit uppercase tracking-widest gap-4 group px-12 h-20 shadow-xl rounded-full bg-primary hover:bg-[#1A2820] transition-all duration-500">
                <div className="relative w-6 h-6 transition-transform group-hover:scale-110">
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
