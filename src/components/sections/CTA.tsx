"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 bg-primary text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-headline mb-10 max-w-4xl mx-auto leading-tight">
            Dê o primeiro passo para um futuro com <span className="italic text-accent">mais vitalidade.</span>
          </h2>
          <p className="text-white/60 text-lg mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Nossa equipe está pronta para acolher você e sua família. Agende sua consulta e inicie um acompanhamento focado em você.
          </p>
          <div className="flex justify-center items-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-white hover:text-primary text-white h-16 px-12 rounded-none transition-all duration-300 gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar com a nossa equipe</span>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}