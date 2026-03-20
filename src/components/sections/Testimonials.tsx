"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const reviews = [
  {
    author: "Maria de Fátima",
    role: "Paciente e Familiar",
    initial: "M",
    content: "A Dra. Vanessa devolveu a qualidade de vida à minha mãe. O ajuste minucioso na medicação trouxe a lucidez de volta. É um atendimento impecável e sem pressa, que passa muita segurança para a família."
  },
  {
    author: "Carlos Roberto",
    role: "Paciente",
    initial: "C",
    content: "Excelente profissional! Um ambiente acolhedor e uma consulta realmente humana. A médica escuta tudo com atenção e explica o plano de tratamento de forma muito clara. Recomendo de olhos fechados."
  },
  {
    author: "Ana Paula",
    role: "Familiar",
    initial: "A",
    content: "Foi um alívio enorme encontrar a Dra. Vanessa. O diagnóstico de Alzheimer do meu pai assustou-nos muito, mas o acompanhamento e o suporte contínuo dela têm sido fundamentais para todos nós."
  }
];

// Duplicamos os reviews para um loop infinito fluido
const infiniteReviews = [...reviews, ...reviews, ...reviews, ...reviews, ...reviews];

export function Testimonials() {
  return (
    <section id="depoimentos" className="w-full bg-background py-32 overflow-hidden relative border-y border-primary/5">
      <div className="container-premium mb-20">
        <FadeIn className="flex flex-col items-center text-center">
          {/* Badge Google - Centralizado e Premium */}
          <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-full shadow-sm border border-primary/5 mb-8">
            <div className="relative w-5 h-5">
              <Image 
                src="https://files.catbox.moe/ghtlx5.png" 
                alt="Google" 
                fill 
                className="object-contain" 
              />
            </div>
            <div className="flex gap-0.5 text-[#FBBC05]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" stroke="none" />
              ))}
            </div>
            <span className="text-[11px] font-bold text-primary tracking-wider">5.0</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-headline text-primary mb-6 italic font-normal">
            Mudando Histórias
          </h2>
          <p className="text-primary/60 font-light max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            O que dizem as famílias que confiam no nosso olhar atento e cuidado integral.
          </p>
        </FadeIn>
      </div>

      <div className="relative w-full">
        {/* Gradients Suaves nas Bordas para Luxo Visual */}
        <div className="absolute top-0 left-0 w-24 md:w-80 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-80 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee gap-6 px-4">
          {infiniteReviews.map((review, index) => (
            <div 
              key={index} 
              className="w-[300px] md:w-[420px] bg-white p-8 md:p-10 rounded-sm border border-primary/5 shrink-0 flex flex-col justify-between transition-colors hover:border-accent/20"
            >
              <div>
                <div className="flex gap-0.5 text-[#FBBC05] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <p className="text-primary/70 font-light italic leading-relaxed text-sm md:text-base">
                  "{review.content}"
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-4 border-t border-primary/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary font-headline font-bold text-lg">
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-headline text-primary text-base md:text-lg">{review.author}</h4>
                  <span className="text-[9px] lettering-wide font-bold text-accent uppercase opacity-70">
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
