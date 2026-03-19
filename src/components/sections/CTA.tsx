"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="py-40 bg-primary text-white relative overflow-hidden">
      <div className="container-premium relative z-10 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-headline mb-12 max-w-4xl mx-auto leading-tight">
            Dê o primeiro passo para um futuro com <span className="italic font-normal text-secondary">mais vitalidade.</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Nossa equipe está pronta para acolher você e sua família. Agende sua consulta e inicie um acompanhamento focado em você.
          </p>
          <div className="flex justify-center items-center">
            <Button 
              size="lg"
              className="bg-secondary text-primary hover:bg-white h-20 px-16 rounded-none transition-all duration-500 gap-4 text-xs uppercase tracking-[0.3em] font-bold shadow-2xl"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Agendar via WhatsApp</span>
            </Button>
          </div>
        </FadeIn>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}