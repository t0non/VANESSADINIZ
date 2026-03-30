"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";

const areas = [
  {
    title: "Planejamento de envelhecimento saudável e prevenção de doenças",
    image: "/areas/envelhecimento.png",
    href: "https://wa.me/553131576255?text=Ol%C3%A1%2C%20Dra.%20Vanessa.%20Gostaria%20de%20saber%20mais%20sobre%20Planejamento%20de%20Envelhecimento%20Saud%C3%A1vel.",
  },
  {
    title: "Alterações de memória e demências, como a Doença de Alzheimer",
    image: "/areas/alzheimer.png",
    href: "https://wa.me/553131576255?text=Ol%C3%A1%2C%20Dra.%20Vanessa.%20Gostaria%20de%20saber%20mais%20sobre%20Altera%C3%A7%C3%B5es%20de%20Mem%C3%B3ria.",
  },
  {
    title: "Alterações motoras, como a Doença de Parkinson",
    image: "/areas/parkinson.png",
    href: "https://wa.me/553131576255?text=Ol%C3%A1%2C%20Dra.%20Vanessa.%20Gostaria%20de%20saber%20mais%20sobre%20Altera%C3%A7%C3%B5es%20Motoras.",
  },
  {
    title: "Depressão, ansiedade e outros transtornos psiquiátricos no idoso",
    image: "/areas/depressao.png",
    href: "https://wa.me/553131576255?text=Ol%C3%A1%2C%20Dra.%20Vanessa.%20Gostaria%20de%20saber%20mais%20sobre%20Sa%C3%BAde%20Mental%20no%20Idoso.",
  },
  {
    title: "Osteoporose. Prevenção de quedas e fraturas",
    image: "/areas/osteoporose.png",
    href: "https://wa.me/553131576255?text=Ol%C3%A1%2C%20Dra.%20Vanessa.%20Gostaria%20de%20saber%20mais%20sobre%20Osteoporose%20e%20Preven%C3%A7%C3%A3o%20de%20Quedas.",
  },
  {
    title: "Infecções urinárias de repetição e incontinência urinária",
    image: "/areas/infeccao.png",
    href: "https://wa.me/553131576255?text=Ol%C3%A1%2C%20Dra.%20Vanessa.%20Gostaria%20de%20saber%20mais%20sobre%20Infec%C3%A7%C3%B5es%20Urin%C3%A1rias.",
  },
  {
    title: "Acompanhamento de doenças crônicas: diabetes, hipertensão, disfunção hormonal e outras",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80",
    href: "https://wa.me/553131576255?text=Ol%C3%A1%2C%20Dra.%20Vanessa.%20Gostaria%20de%20saber%20mais%20sobre%20Doen%C3%A7as%20Cr%C3%B4nicas.",
  },
  {
    title: "Doenças em fase avançada e finitude",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    href: "https://wa.me/553131576255?text=Ol%C3%A1%2C%20Dra.%20Vanessa.%20Gostaria%20de%20saber%20mais%20sobre%20Cuidados%20em%20Fase%20Avan%C3%A7ada.",
  },
];

export function Pillars() {
  return (
    <section id="pilares" className="relative w-full py-24 md:py-36 bg-[#F8F7F4] overflow-hidden">
      <div className="container-premium">

        {/* Cabeçalho */}
        <FadeIn className="text-center mb-16 md:mb-24">
          <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">
            Áreas de Atuação
          </span>
          <h2 className="text-3xl md:text-5xl font-headline text-primary mb-6 leading-tight max-w-3xl mx-auto">
            Principais condições que acompanho no{" "}
            <span className="italic font-normal">cuidado da pessoa idosa</span>
          </h2>
        </FadeIn>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {areas.map((area, index) => (
            <FadeIn key={index} delay={index * 80}>
              <Link
                href={area.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Foto */}
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Overlay Gradiente sempre visível na base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2820]/90 via-[#2A3F32]/30 to-transparent" />

                {/* Hover overlay adicional */}
                <div className="absolute inset-0 bg-[#2A3F32]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Conteúdo de Texto na Base */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="text-white font-headline text-base md:text-lg leading-snug mb-3">
                    {area.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/70 text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    <span>Saiba mais</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* CTA abaixo */}
        <FadeIn delay={400} className="flex justify-center mt-16 md:mt-20">
          <Link
            href="https://wa.me/553131576255?text=Olá%2C%20Dra.%20Vanessa.%20Gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-[#1A2820] text-white px-12 h-16 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 shadow-xl"
          >
            <div className="relative w-7 h-7 transition-transform group-hover:scale-110">
              <Image
                src="https://files.catbox.moe/pkq8i0.png"
                alt="WhatsApp"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            Agendar Consulta
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
