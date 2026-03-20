
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";

const specialties = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 11h2l1 1h2m-6 0h2l1-1h2" />
      </svg>
    ),
    text: "Avaliação Geriátrica Ampla",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    text: "Prevenção de doenças",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3m0 0l3.75 3.75M12 3L8.25 6.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 15.75c0-1.268-.63-2.39-1.593-3.068a3.745 3.745 0 01-1.043-3.296 3.745 3.745 0 01-3.296-1.043A3.745 3.745 0 0112 4.5" />
      </svg>
    ),
    text: "Longevidade e bem estar",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V7.5m0-3h18a2.25 2.25 0 012.25 2.25v.75m-20.25-.75V6m11.25 10.5h3.75m-3.75 0V13.5m-6 0h6m-6 0V10.5" />
      </svg>
    ),
    text: "Controle de múltiplas doenças crônicas",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.829 1.58-2.126a8.204 8.204 0 004.14-3.153M6.168 12.528a8.204 8.204 0 004.14 3.153c.922.297 1.58 1.143 1.58 2.126v.192M14.25 12.528A8.204 8.204 0 0118.39 9.375c.922-.297 1.58-1.143 1.58-2.126v-.192m-9.84-2.157A8.204 8.204 0 002.04 9.375C1.118 9.672.46 10.518.46 11.5v.192m13.79-2.157A8.204 8.204 0 0114.25 6v-.192c0-.983-.658-1.829-1.58-2.126M6.168 9.375A8.204 8.204 0 0010.31 6.222C11.232 5.925 11.89 5.079 11.89 4.096v-.192"/>
      </svg>
    ),
    text: "Rastreamento de falhas de memória",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75m0-12h-.75m0 0c-3.728 0-6.75 3.022-6.75 6.75v.75m0 0c0-3.728 3.022-6.75 6.75-6.75h.75M9.75 16.5H4.5v3.75a2.25 2.25 0 002.25 2.25h3.75A2.25 2.25 0 0012.75 20.25V16.5z" />
      </svg>
    ),
    text: "Atendimento humanizado e sem pressa",
  },
];

export function Narrative() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FBFBF9] pt-0 pb-24 lg:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left: Image Container - Desktop Only */}
        <div className="hidden lg:flex relative h-screen items-end justify-center overflow-visible">
          <div className="relative w-full h-full flex items-end [mask-image:linear-gradient(to_bottom,black_75%,rgba(0,0,0,0.8)_85%,transparent_100%)]">
            <Image
              src="https://files.catbox.moe/cmawq4.png"
              alt="Dra. Vanessa Diniz"
              fill
              className="object-contain object-bottom scale-[1.1] origin-bottom transition-transform duration-1000 hover:scale-[1.15]"
              priority
            />
          </div>
        </div>

        {/* Right: Content Container */}
        <div className="p-8 md:p-16 lg:p-24 xl:p-32 flex flex-col justify-center bg-[#FBFBF9]">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline leading-tight mb-10 text-[#2A3F32]">
              Vamos mudar a narrativa sobre o envelhecimento?
            </h2>

            {/* Mobile Image: Positioned specifically between headline and text */}
            <div className="lg:hidden relative w-full h-[60vh] mb-12 overflow-visible flex items-end justify-center">
               <div className="relative w-full h-full flex items-end [mask-image:linear-gradient(to_bottom,black_75%,rgba(0,0,0,0.8)_85%,transparent_100%)]">
                <Image
                  src="https://files.catbox.moe/cmawq4.png"
                  alt="Dra. Vanessa Diniz"
                  fill
                  className="object-contain object-bottom scale-[2.2] origin-bottom"
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-16">
              {specialties.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 transition duration-300 hover:shadow-md hover:border-[#C1A68D]/20 group"
                >
                  <div className="flex-shrink-0 text-[#2A3F32] group-hover:text-[#C1A68D] transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="font-body text-sm md:text-base text-[#2A3F32] font-medium leading-tight">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <Button 
              size="xl" 
              variant="default"
              className="bg-[#2A3F32] hover:bg-[#1A2820] text-white rounded-full px-16 h-20 flex items-center gap-4 w-fit shadow-xl group transition-all duration-500 hover:scale-105"
            >
              <div className="relative w-6 h-6 transition-transform group-hover:scale-110">
                <Image 
                  src="https://files.catbox.moe/pkq8i0.png" 
                  alt="WhatsApp" 
                  fill 
                  className="object-contain brightness-0 invert" 
                />
              </div>
              <span className="text-[12px] uppercase tracking-[0.2em] font-bold">Agendar consulta</span>
            </Button>
          </FadeIn>
        </div>
      </div>
      
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] z-0" />
    </section>
  );
}
