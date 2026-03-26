
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";

const specialties = [
  { text: "Avaliação Geriátrica Ampla" },
  { text: "Prevenção de doenças" },
  { text: "Longevidade e bem estar" },
  { text: "Controle de doenças crônicas" },
  { text: "Rastreamento de falhas de memória" },
  { text: "Atendimento humanizado" },
];

export function Narrative() {
  return (
    <section className="relative w-full overflow-x-hidden bg-[#FBFBF9] pt-0 pb-24 lg:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Imagem Desktop - Sem cortes e com escala imponente */}
        <div className="hidden lg:flex relative h-screen items-end justify-center">
          <div className="relative w-full h-full flex items-end [mask-image:linear-gradient(to_bottom,black_0%,black_40%,transparent_90%)]">
            <Image
              src="https://files.catbox.moe/cmawq4.png"
              alt="Dra. Vanessa Diniz"
              fill
              className="object-contain object-bottom scale-[1.5] origin-bottom"
              priority
            />
          </div>
        </div>

        {/* Coluna de Conteúdo */}
        <div className="p-8 md:p-16 lg:p-24 xl:p-32 flex flex-col justify-center bg-[#FBFBF9]">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline leading-tight mb-8 text-[#2A3F32] pt-8 md:pt-0">
              Vamos mudar a narrativa sobre o envelhecimento?
            </h2>

            {/* Imagem Mobile - Escala 1.8x e posicionamento equilibrado */}
            <div className="lg:hidden relative w-full h-[45vh] mb-16 overflow-visible flex items-end justify-center">
               <div className="relative w-full h-full flex items-end [mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]">
                <Image
                  src="https://files.catbox.moe/cmawq4.png"
                  alt="Dra. Vanessa Diniz"
                  fill
                  className="object-contain object-bottom scale-[1.8] origin-bottom"
                  priority
                />
              </div>
            </div>
            
            <div className="space-y-6 text-[#4B5563] font-body font-light text-base md:text-lg leading-[1.8] mb-16 max-w-2xl">
              <p>
                Não somos capazes de parar o tempo, mas podemos repensar os estigmas que foram construídos sobre este processo e assim desfrutar uma vida ativa, dinâmica e feliz.
              </p>
              <p>
                Com cuidado geriátrico especializado, baseado em ciência, é SIM possível envelhecer com saúde, preservar a independência e a autonomia.
              </p>
            </div>

            <h3 className="text-2xl font-headline mb-8 text-[#2A3F32] italic">Minhas especialidades</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 mb-16">
              {specialties.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 bg-white px-6 h-16 rounded-full shadow-sm border border-gray-100 group transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-body text-[13px] md:text-sm text-[#2A3F32] font-medium leading-tight">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <Link href="https://wa.me/553131576255" target="_blank" rel="noopener noreferrer">
              <Button 
                size="xl" 
                variant="default"
                className="bg-[#2A3F32] hover:bg-[#1A2820] text-white rounded-full px-16 h-20 flex items-center gap-4 w-fit shadow-xl group transition-all duration-500 hover:scale-105 border-none"
              >
                <div className="relative w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110">
                  <Image 
                    src="https://files.catbox.moe/pkq8i0.png" 
                    alt="WhatsApp" 
                    fill 
                    className="object-contain brightness-0 invert" 
                  />
                </div>
                <span className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.2em]">Agendar consulta</span>
              </Button>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
