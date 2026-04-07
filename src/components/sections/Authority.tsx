"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { GraduationCap, Stethoscope, HeartPulse, Building2, CheckCircle2 } from "lucide-react";

export function Authority() {
  const doctorImage = "/areas/Sobre.png";

  const milestones = [
    {
      year: "2018",
      title: "Medicina",
      desc: "Graduação pela Universidade de Itaúna (MG).",
      icon: <GraduationCap size={18} className="text-accent" />
    },
    {
      year: "2019 – 2021",
      title: "Clínica Médica",
      desc: "Residência pela Santa Casa de Barretos (SP). Atuação na linha de frente COVID-19. RQE 56843.",
      icon: <Stethoscope size={18} className="text-accent" />
    },
    {
      year: "2021 – 2024",
      title: "Geriatria",
      desc: "Residência pelo Hosp. Odilon Behrens (BH). Estágios em Psiquiatria e Neurologia. RQE 62246.",
      icon: <Building2 size={18} className="text-accent" />
    },
    {
      year: "2024 – 2025",
      title: "Cuidados Paliativos",
      desc: "Pós-graduação (Unyleya) e atuação no Hospital Risoleta Neves.",
      icon: <HeartPulse size={18} className="text-accent" />
    }
  ];

  const focusPoints = [
    "Consultório Particular",
    "Atendimento Domiciliar",
    "Telemedicina personalizada"
  ];

  return (
    <section id="sobre" className="pt-20 pb-4 lg:pb-32 md:pt-24 bg-background overflow-x-hidden">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Imagem Desktop - Ajustada para acompanhar a leitura (sticky) */}
          <FadeIn className="relative hidden lg:flex lg:order-1 self-start sticky top-24 h-[85vh] w-full">
            <div className="relative w-full h-full flex items-end justify-center translate-y-96">
              <Image
                src={doctorImage}
                alt="Dra. Vanessa Diniz Nogueira - Especialista em Geriatria em BH"
                fill
                className="object-contain object-bottom scale-[1.6] origin-bottom"
                style={{ 
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                }}
                data-ai-hint="professional doctor"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </FadeIn>

          {/* Coluna de Texto Reestruturada */}
          <div className="lg:order-2 py-6 md:py-12 flex flex-col items-center lg:items-start text-center lg:text-left">
            <FadeIn>
              <span className="text-accent text-[11px] uppercase tracking-[0.4em] font-bold mb-6 block opacity-80">Sobre a Dra. Vanessa</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline mb-8 text-primary leading-tight">
                Experiência clínica guiada pelo <span className="italic font-normal">afeto e pela ciência.</span>
              </h2>
            </FadeIn>

            {/* Imagem Mobile */}
            <div className="lg:hidden w-full -mt-10 mb-10 overflow-x-hidden">
               <div className="relative w-full aspect-[4/5] flex items-end">
                <Image
                  src={doctorImage}
                  alt="Dra. Vanessa Diniz Nogueira - Geriatria e Cuidados Paliativos"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain object-bottom scale-[0.9] origin-bottom"
                  style={{ 
                    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                  }}
                  data-ai-hint="professional doctor"
                />
              </div>
            </div>

            {/* Narrativa Curta (Otimizada para SEO) */}
            <FadeIn delay={100} className="space-y-5 text-primary/80 text-sm md:text-base font-light leading-relaxed mb-10 max-w-xl">
              <p>
                A <strong className="font-medium text-primary">Dra. Vanessa Diniz</strong> é <strong>médica geriatra em Belo Horizonte</strong> (RQE 62246), com trajetória fundamentada no <strong className="font-medium text-primary">cuidado integral e humanizado da pessoa idosa</strong>. Graduada em 2018, dedica sua atuação a promover qualidade de vida e autonomia para os pacientes em todas as fases do envelhecimento.
              </p>
              <p>
                Sua expertise clínica passa pela Residência em Clínica Médica (Santa Casa de Barretos) e Residência em <strong className="font-medium text-primary">Geriatria</strong> pelo Hospital Metropolitano Odilon Behrens. Uma formação enriquecida pela vivência intensiva em áreas interdisciplinares essenciais ao idoso, como neurologia e psiquiatria.
              </p>
              <p>
                Especialista também em <strong className="font-medium text-primary">Cuidados Paliativos</strong>, com pós-graduação e sólida atuação prática em hospitais de referência, a Dra. Vanessa oferece suporte técnico e acolhimento para alívio do sofrimento de pacientes com doenças crônicas ou graves.
              </p>
              <p>
                Atualmente, realiza avaliações geriátricas abrangentes por meio de <strong className="font-medium text-primary">consultas presenciais, atendimento domiciliar e telemedicina</strong>, entregando uma medicina ética, segura e focada no paciente e em seus familiares.
              </p>
            </FadeIn>

            {/* Trajetória - Cards Compactos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-12 max-w-xl">
              {milestones.map((item, idx) => (
                <FadeIn key={idx} delay={200 + (idx * 50)}>
                  <div className="bg-primary/5 p-4 rounded-xl border border-primary/5 h-full hover:bg-primary/[0.07] transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{item.year}</span>
                    </div>
                    <h3 className="text-primary font-headline text-sm mb-1">{item.title}</h3>
                    <p className="text-[11px] text-primary/60 leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Atuação Atual - Bullet points horizontais em desktop */}
            <FadeIn delay={400} className="w-full mb-12">
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8">
                {focusPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent" />
                    <span className="text-xs font-bold text-primary/70 uppercase tracking-widest">{point}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* CTA & Credenciais (Centralizado na tela toda) */}
        <FadeIn delay={500} className="w-full flex flex-col items-center mt-12 md:mt-16">
          <div className="pt-10 border-t border-primary/10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-6">
            <Link href="https://wa.me/553131576255?text=Olá%2C%20Dra.%20Vanessa.%20Gostaria%20de%20agendar%20uma%20avaliação." target="_blank" rel="noopener noreferrer">
              <Button size="xl" variant="default" className="rounded-full bg-primary hover:bg-[#1A2820] transition-all duration-500 shadow-xl group px-10 h-16 hover:scale-105 border-none">
                <div className="relative w-7 h-7 md:w-8 md:h-8 transition-transform group-hover:scale-110">
                  <Image
                    src="https://files.catbox.moe/pkq8i0.png"
                    alt="WhatsApp"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]">Agendar Consulta</span>
              </Button>
            </Link>

            <div className="text-center">
              <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-1">CRM-MG 78668</p>
              <p className="text-[10px] text-primary/50 uppercase tracking-[0.2em] font-medium">Médica Geriatra · Cuidados Paliativos</p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
