
"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function WhatsAppButton() {
  const doctorImage = PlaceHolderImages.find(img => img.id === "doctor")?.imageUrl || "";

  return (
    <div className="fixed bottom-10 right-10 z-[60]">
      <Popover>
        <PopoverTrigger asChild>
          <button
            className="relative flex items-center group outline-none transition-transform hover:scale-105 active:scale-95"
            aria-label="Abrir widget de atendimento"
          >
            {/* Mensagem flutuante lateral */}
            <div className="hidden md:block absolute right-full mr-4 bg-white text-primary text-[12px] uppercase tracking-widest font-bold px-6 py-3 rounded-full shadow-xl border border-border/50 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap">
              Como podemos ajudar?
            </div>

            {/* Container da Imagem de Perfil Circular */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white shadow-2xl overflow-hidden bg-secondary/20">
              <Image 
                src={doctorImage} 
                alt="Dra. Vanessa Diniz" 
                fill 
                className="object-cover object-top" 
              />
            </div>

            {/* Indicador de Status Online (Ponto Verde) */}
            <div className="absolute bottom-1 right-1 w-5 h-5 md:w-6 md:h-6 bg-[#25D366] rounded-full border-2 border-white shadow-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent 
          side="top" 
          align="end" 
          sideOffset={20}
          className="w-[90vw] md:w-[600px] p-8 rounded-3xl shadow-2xl border-primary/5 bg-[#FBFBF9] animate-in fade-in zoom-in slide-in-from-bottom-10 duration-500"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-headline text-[#2A3F32] mb-2 italic">Atendimento Personalizado</h3>
            <p className="text-sm text-[#4B5563] font-light">Selecione o assunto do seu interesse para iniciar a conversa:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
            <Link 
              href="https://wa.me/5511987654321?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Avaliação%20Geriátrica%20Ampla."
              target="_blank"
              className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100 transition duration-300 hover:shadow-md hover:border-[#C5A880]/20 group"
            >
              <div className="flex-shrink-0 text-[#2A3F32] group-hover:text-[#C5A880] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 11h2l1 1h2m-6 0h2l1-1h2" />
                </svg>
              </div>
              <span className="font-sans text-xs md:text-sm text-[#2A3F32] font-medium leading-tight">Avaliação Geriátrica Ampla</span>
            </Link>

            <Link 
              href="https://wa.me/5511987654321?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Prevenção%20de%20doenças."
              target="_blank"
              className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100 transition duration-300 hover:shadow-md hover:border-[#C5A880]/20 group"
            >
              <div className="flex-shrink-0 text-[#2A3F32] group-hover:text-[#C5A880] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <span className="font-sans text-xs md:text-sm text-[#2A3F32] font-medium leading-tight">Prevenção de doenças</span>
            </Link>

            <Link 
              href="https://wa.me/5511987654321?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Longevidade%20e%20bem%20estar."
              target="_blank"
              className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100 transition duration-300 hover:shadow-md hover:border-[#C5A880]/20 group"
            >
              <div className="flex-shrink-0 text-[#2A3F32] group-hover:text-[#C5A880] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3m0 0l3.75 3.75M12 3L8.25 6.75" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 15.75c0-1.268-.63-2.39-1.593-3.068a3.745 3.745 0 01-1.043-3.296 3.745 3.745 0 01-3.296-1.043A3.745 3.745 0 0112 4.5" />
                </svg>
              </div>
              <span className="font-sans text-xs md:text-sm text-[#2A3F32] font-medium leading-tight">Longevidade e bem estar</span>
            </Link>

            <Link 
              href="https://wa.me/5511987654321?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Controle%20de%20doenças%20crônicas."
              target="_blank"
              className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100 transition duration-300 hover:shadow-md hover:border-[#C5A880]/20 group"
            >
              <div className="flex-shrink-0 text-[#2A3F32] group-hover:text-[#C5A880] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V7.5m0-3h18a2.25 2.25 0 012.25 2.25v.75m-20.25-.75V6m11.25 10.5h3.75m-3.75 0V13.5m-6 0h6m-6 0V10.5" />
                </svg>
              </div>
              <span className="font-sans text-xs md:text-sm text-[#2A3F32] font-medium leading-tight">Controle de doenças crônicas</span>
            </Link>

            <Link 
              href="https://wa.me/5511987654321?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Rastreamento%20de%20falhas%20de%20memória."
              target="_blank"
              className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100 transition duration-300 hover:shadow-md hover:border-[#C5A880]/20 group"
            >
              <div className="flex-shrink-0 text-[#2A3F32] group-hover:text-[#C5A880] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.829 1.58-2.126a8.204 8.204 0 004.14-3.153M6.168 12.528a8.204 8.204 0 004.14 3.153c.922.297 1.58 1.143 1.58 2.126v.192M14.25 12.528A8.204 8.204 0 0118.39 9.375c.922-.297 1.58-1.143 1.58-2.126v-.192m-9.84-2.157A8.204 8.204 0 002.04 9.375C1.118 9.672.46 10.518.46 11.5v.192m13.79-2.157A8.204 8.204 0 0114.25 6v-.192c0-.983-.658-1.829-1.58-2.126M6.168 9.375A8.204 8.204 0 0010.31 6.222C11.232 5.925 11.89 5.079 11.89 4.096v-.192"/>
                </svg>
              </div>
              <span className="font-sans text-xs md:text-sm text-[#2A3F32] font-medium leading-tight">Rastreamento de memória</span>
            </Link>

            <Link 
              href="https://wa.me/5511987654321?text=Olá,%20gostaria%20de%20falar%20com%20a%20equipe%20de%20atendimento."
              target="_blank"
              className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100 transition duration-300 hover:shadow-md hover:border-[#C5A880]/20 group"
            >
              <div className="flex-shrink-0 text-[#2A3F32] group-hover:text-[#C5A880] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75m0-12h-.75m0 0c-3.728 0-6.75 3.022-6.75 6.75v.75m0 0c0-3.728 3.022-6.75 6.75-6.75h.75M9.75 16.5H4.5v3.75a2.25 2.25 0 002.25 2.25h3.75A2.25 2.25 0 0012.75 20.25V16.5z" />
                </svg>
              </div>
              <span className="font-sans text-xs md:text-sm text-[#2A3F32] font-medium leading-tight">Falar com Atendimento</span>
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-primary/5 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-widest text-[#2A3F32]/40 font-bold">Dra. Vanessa Diniz | Geriatria</p>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></div>
              <span className="text-[10px] text-[#25D366] font-bold uppercase tracking-widest">Online agora</span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

