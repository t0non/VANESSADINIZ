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

// Duplicate the reviews for a seamless infinite loop
const infiniteReviews = [...reviews, ...reviews, ...reviews, ...reviews];

export function Testimonials() {
  return (
    <section id="depoimentos" className="w-full bg-secondary/10 py-32 overflow-hidden relative">
      <div className="container-premium mb-20 text-center">
        <FadeIn>
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="flex items-center gap-3 bg-white px-6 py-2 rounded-full shadow-sm border border-primary/10 mb-6">
              <div className="relative w-5 h-5">
                <Image 
                  src="https://files.catbox.moe/ghtlx5.png" 
                  alt="Google Logo" 
                  fill 
                  className="object-contain" 
                />
              </div>
              <div className="flex gap-0.5 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="text-accent" />
                ))}
              </div>
              <span className="text-sm font-bold text-primary">5.0</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-headline text-primary mb-6">
              Mudando Histórias
            </h2>
            <p className="text-primary/60 font-light max-w-2xl mx-auto text-lg leading-relaxed">
              O que dizem as famílias que confiam no nosso olhar atento e cuidado integral.
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="relative w-full">
        {/* Gradients for smooth fade at edges */}
        <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee gap-8 px-8">
          {infiniteReviews.map((review, index) => (
            <div 
              key={index} 
              className="w-[350px] md:w-[450px] bg-white p-10 rounded-sm shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-primary/5 shrink-0 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-0.5 text-accent mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" className="text-accent" />
                  ))}
                </div>
                <p className="text-primary/80 font-light italic leading-relaxed text-base">
                  "{review.content}"
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4 border-t border-primary/5 pt-6">
                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center text-primary font-headline font-bold text-xl">
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-headline text-primary text-lg font-medium">{review.author}</h4>
                  <span className="text-[10px] lettering-wide font-bold text-accent uppercase tracking-widest">
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
