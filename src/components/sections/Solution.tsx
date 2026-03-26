"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Solution() {
  const doctorImage = PlaceHolderImages.find(img => img.id === "doctor")?.imageUrl || "https://picsum.photos/seed/doctor_luisa/800/1000";

  return (
    <section id="sobre" className="py-32 bg-secondary/10">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left: Doctor Photo */}
          <FadeIn className="relative">
            <div className="aspect-[4/5] relative overflow-hidden rounded-sm grayscale-[0.3] hover:grayscale-0 transition-all duration-1000">
              <Image
                src={doctorImage}
                alt="Dra. Luísa Mendes"
                fill
                className="object-cover"
                data-ai-hint="doctor portrait"
              />
            </div>
          </FadeIn>

          {/* Right: Content */}
          <FadeIn delay={200}>
            <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block opacity-80">A Especialista</span>
            <h2 className="text-4xl md:text-5xl font-headline mb-10 text-primary leading-tight">
              Conheça a Dra. <span className="italic font-normal">Vanessa Diniz</span>
            </h2>
            <div className="space-y-8 text-muted-foreground text-lg font-light leading-relaxed mb-12">
              <p>
                Especialista em Geriatria. Com uma visão integral da saúde, a Dra. Vanessa dedica-se a entender as necessidades únicas de cada paciente.
              </p>
              <p>
                A sua consulta é um espaço de tempo valorizado, onde cada detalhe do histórico médico e do contexto de vida importa. O foco é sempre o equilíbrio entre evidência científica e dignidade humana.
              </p>
            </div>
            
            <div className="flex flex-col space-y-8">
              <div className="pt-8 border-t border-border/50">
                <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-1">CRM-MG 78668</p>
              </div>
              <Link href="https://wa.me/553131576255" target="_blank" rel="noopener noreferrer">
                <Button size="xl" variant="default" className="text-xs uppercase tracking-[0.2em] font-bold w-fit bg-primary hover:bg-[#1A2820] text-white rounded-sm border-none">
                  Agendar Consulta
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
