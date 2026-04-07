"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { MapPin, Home, Monitor } from "lucide-react";

const modalities = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Presencial — Consultório",
    description: "Atendimento presencial no consultório, com ambiente acolhedor e totalmente acessível.",
    details: [
      "Rua Jaceguai, 208 – Sala 1408",
      "Instituto Hiraki – Bairro Prado",
      "Belo Horizonte, MG",
    ],
    cta: "Agendar consulta",
    href: "https://wa.me/553131576255?text=Ol%C3%A1%2C%20Dra.%20Vanessa.%20Gostaria%20de%20agendar%20uma%20consulta%20presencial.",
    accent: true,
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Domiciliar",
    description: "Atendimento na residência do paciente, ideal para pessoas com dificuldade de locomoção ou que necessitam de acompanhamento no conforto do lar.",
    details: [
      "Consulta no conforto do lar",
      "Atendimento humanizado",
      "Avaliação completa em domicílio",
    ],
    cta: "Agendar visita",
    href: "https://wa.me/553131576255?text=Ol%C3%A1%2C%20Dra.%20Vanessa.%20Gostaria%20de%20agendar%20uma%20consulta%20domiciliar.",
    accent: false,
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "On-line — Telemedicina",
    description: "Consultas por videoconferência para acompanhamento, orientação e retornos, com toda a qualidade e atenção de uma consulta presencial.",
    details: [
      "Consulta por videoconferência",
      "Praticidade sem sair de casa",
      "Ideal para retornos e orientações",
    ],
    cta: "Agendar teleconsulta",
    href: "https://wa.me/553131576255?text=Ol%C3%A1%2C%20Dra.%20Vanessa.%20Gostaria%20de%20agendar%20uma%20teleconsulta.",
    accent: false,
  },
];

export function OfficeExperience() {
  return (
    <section id="atendimento" className="py-24 md:py-36 bg-[#F8F7F4] overflow-hidden">
      <div className="container-premium">

        {/* Cabeçalho */}
        <FadeIn className="text-center mb-16 md:mb-24">
          <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">
            Formas de Atendimento
          </span>
          <h2 className="text-3xl md:text-5xl font-headline text-primary mb-6 leading-tight max-w-3xl mx-auto">
            Como posso <span className="italic font-normal">cuidar de você</span>
          </h2>
          <p className="text-primary/60 font-light max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Escolha a modalidade que melhor se adapta à sua rotina e necessidade.
          </p>
        </FadeIn>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {modalities.map((item, index) => (
            <FadeIn key={index} delay={index * 120}>
              <div
                className={`relative flex flex-col h-full rounded-2xl border p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl group ${
                  item.accent
                    ? "bg-primary text-white border-primary shadow-xl"
                    : "bg-white text-primary border-primary/10 shadow-md"
                }`}
              >
                {/* Ícone */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 ${
                    item.accent
                      ? "bg-white/10 text-accent"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  {item.icon}
                </div>

                {/* Título */}
                <h3 className="text-xl md:text-2xl font-headline mb-4 leading-snug">
                  {item.title}
                </h3>

                {/* Descrição */}
                <p
                  className={`text-sm md:text-base font-light leading-relaxed mb-8 ${
                    item.accent ? "text-white/70" : "text-primary/60"
                  }`}
                >
                  {item.description}
                </p>

                {/* Detalhes */}
                <ul className="space-y-3 mb-10 flex-grow">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                          item.accent ? "bg-accent" : "bg-accent"
                        }`}
                      />
                      <span
                        className={`text-sm font-medium ${
                          item.accent ? "text-white/80" : "text-primary/70"
                        }`}
                      >
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-3 h-14 px-10 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-500 hover:scale-[1.03] ${
                    item.accent
                      ? "bg-accent text-white hover:bg-accent/90 shadow-lg"
                      : "bg-primary text-white hover:bg-[#1A2820] shadow-md"
                  }`}
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="https://files.catbox.moe/pkq8i0.png"
                      alt="WhatsApp"
                      fill
                      className="object-contain brightness-0 invert"
                      sizes="24px"
                    />
                  </div>
                  {item.cta}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
