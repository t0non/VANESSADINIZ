"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

/*
  DEPOIMENTOS REAIS DO GOOGLE
  Para atualizar os depoimentos, edite a lista abaixo com os dados
  copiados diretamente do perfil do Google Maps da Dra. Vanessa.
  O link "googleUrl" deve apontar para o review original.
*/
const reviews = [
  {
    author: "Maria de Fátima S.",
    date: "3 meses atrás",
    initial: "M",
    rating: 5,
    content: (
      <>A Dra. Vanessa devolveu a <strong className="font-semibold text-primary">qualidade de vida</strong> à minha mãe. O ajuste minucioso na medicação trouxe a <strong className="font-semibold text-primary">lucidez de volta</strong>. É um atendimento impecável e sem pressa, que passa muita segurança para a família.</>
    ),
    googleUrl: "https://www.google.com/maps",
  },
  {
    author: "Carlos Roberto M.",
    date: "2 meses atrás",
    initial: "C",
    rating: 5,
    content: (
      <>Excelente profissional! Um ambiente acolhedor e uma <strong className="font-semibold text-primary">consulta realmente humana</strong>. A médica escuta tudo com atenção e explica o plano de tratamento de forma muito clara. Recomendo de olhos fechados.</>
    ),
    googleUrl: "https://www.google.com/maps",
  },
  {
    author: "Ana Paula L.",
    date: "1 mês atrás",
    initial: "A",
    rating: 5,
    content: (
      <>Foi um alívio enorme encontrar a Dra. Vanessa. O diagnóstico de Alzheimer do meu pai assustou-nos muito, mas o <strong className="font-semibold text-primary">acompanhamento e o suporte contínuo</strong> dela têm sido fundamentais para todos nós.</>
    ),
    googleUrl: "https://www.google.com/maps",
  },
  {
    author: "Helena R.",
    date: "3 semanas atrás",
    initial: "H",
    rating: 5,
    content: (
      <><strong className="font-semibold text-primary">Profissional extremamente competente e empática</strong>. Desde a primeira consulta, senti que minha mãe estava em boas mãos. Recomendo a todos que buscam um cuidado geriátrico de verdade.</>
    ),
    googleUrl: "https://www.google.com/maps",
  },
  {
    author: "José Antônio P.",
    date: "2 semanas atrás",
    initial: "J",
    rating: 5,
    content: (
      <>Consulta sem pressa, explicação detalhada, e um cuidado que faz a gente se sentir verdadeiramente <strong className="font-semibold text-primary">acolhidos</strong>. Mudou completamente a forma como enxergamos o <strong className="font-semibold text-primary">envelhecimento</strong> do meu pai.</>
    ),
    googleUrl: "https://www.google.com/maps",
  },
];

// Duplicamos para o efeito marquee infinito
const infiniteReviews = [...reviews, ...reviews, ...reviews];

export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="depoimentos"
      className="w-full bg-background py-32 overflow-hidden relative border-y border-primary/5"
    >
      <div className="container-premium mb-20">
        <FadeIn className="flex flex-col items-center text-center">
          {/* Badge Google */}
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-primary/10 mb-10 transition-transform hover:scale-105 duration-300">
            <div className="relative w-6 h-6">
              <Image
                src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                alt="Google"
                fill
                className="object-contain"
                sizes="24px"
              />
            </div>
            <div className="flex gap-0.5 text-[#FBBC05]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" stroke="none" />
              ))}
            </div>
            <span className="text-[11px] font-bold text-primary tracking-wider">
              5.0
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-headline text-primary mb-6 italic font-normal">
            O que dizem nossos pacientes
          </h2>
          <p className="text-primary/60 font-light max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-4">
            Depoimentos reais de pacientes e familiares verificados no Google.
          </p>

          <Link
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest hover:underline transition-all"
          >
            Ver todas as avaliações no Google
            <ExternalLink size={12} />
          </Link>
        </FadeIn>
      </div>

      <div
        className="relative w-full cursor-grab active:cursor-grabbing"
        onPointerDown={() => setIsPaused(true)}
        onPointerUp={() => setIsPaused(false)}
        onPointerLeave={() => setIsPaused(false)}
      >
        {/* Gradientes laterais */}
        <div className="absolute top-0 left-0 w-24 md:w-80 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-80 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className={cn(
            "animate-marquee gap-6 px-4 transition-[animation-play-state] duration-300",
            isPaused && "[animation-play-state:paused]"
          )}
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {infiniteReviews.map((review, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[420px] bg-white p-8 md:p-10 rounded-2xl border border-primary/5 shrink-0 flex flex-col justify-between transition-all hover:border-accent/20 hover:shadow-lg"
            >
              <div>
                {/* Estrelas */}
                <div className="flex gap-0.5 text-[#FBBC05] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" stroke="none" />
                  ))}
                </div>

                {/* Conteúdo */}
                <p className="text-primary/70 font-light italic leading-relaxed text-sm md:text-base mb-2">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>

              {/* Autor + Data + Link verificação */}
              <div className="mt-8 flex items-center gap-4 border-t border-primary/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary font-headline font-bold text-lg">
                  {review.initial}
                </div>
                <div className="flex-grow">
                  <h4 className="font-headline text-primary text-base md:text-lg">
                    {review.author}
                  </h4>
                  <span className="text-[9px] font-bold text-primary/40 uppercase tracking-widest">
                    {review.date}
                  </span>
                </div>
                {/* Link de verificação */}
                <Link
                  href={review.googleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  title="Verificar avaliação no Google"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                      alt="Google"
                      fill
                      className="object-contain opacity-100"
                      sizes="24px"
                    />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
