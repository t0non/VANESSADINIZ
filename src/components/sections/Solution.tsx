"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Solution() {
  const doctorImage = PlaceHolderImages.find(img => img.id === "doctor")?.imageUrl || "https://picsum.photos/seed/doctor_luisa/800/1000";

  return (
    <section id="sobre" className="py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          <div className="relative">
            <FadeIn>
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={doctorImage}
                  alt="Dra. Luísa Mendes"
                  fill
                  className="object-cover grayscale-[0.2]"
                  data-ai-hint="doctor portrait"
                />
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={200}>
            <span className="text-accent text-xs uppercase tracking-[0.3em] font-semibold mb-6 block">A Especialista</span>
            <h2 className="text-4xl md:text-5xl font-headline mb-8 text-primary">
              Conheça a Dra. <span className="italic">Luísa Mendes</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed mb-10">
              <p>
                Especialista em Geriatria pela USP. Com uma visão integral da saúde, a Dra. Luísa dedica-se a entender as necessidades únicas de cada paciente.
              </p>
              <p>
                A sua consulta é um espaço de tempo valorizado, onde cada detalhe do histórico médico e do contexto de vida importa. O foco é sempre o equilíbrio entre evidência científica e dignidade humana.
              </p>
            </div>
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest">CRM-SP 123456 | RQE 78910</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}