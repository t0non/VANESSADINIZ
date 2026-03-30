"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

/*
  FEED DO INSTAGRAM — @dravanessadinizgeriatra

  Para exibir posts reais automaticamente, o ideal é integrar com a
  API do Instagram (Meta Graph API) ou usar widgets como Elfsight, SnapWidget ou Curator.
  
  Enquanto a integração oficial não estiver configurada, esta seção
  exibe um convite premium para visitar o perfil.
*/

export function InstagramFeed() {
  const INSTAGRAM_URL = "https://instagram.com/dravanessadinizgeriatra";
  const HANDLE = "@dravanessadinizgeriatra";

  return (
    <section className="py-24 md:py-36 bg-background overflow-hidden border-t border-primary/5">
      <div className="container-premium">
        <FadeIn className="flex flex-col items-center text-center">
          {/* Ícone do Instagram */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] flex items-center justify-center mb-8 shadow-lg">
            <Instagram className="w-8 h-8 text-white" />
          </div>

          <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">
            Acompanhe no Instagram
          </span>
          <h2 className="text-3xl md:text-5xl font-headline text-primary mb-6 leading-tight">
            Saúde, bem-estar e <span className="italic font-normal">informação</span>
          </h2>
          <p className="text-primary/60 font-light max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10">
            Acompanhe dicas de saúde, prevenção e qualidade de vida para a pessoa idosa. Siga para ficar por dentro de conteúdos exclusivos da rotina clínica.
          </p>
        </FadeIn>

        {/* Espaçamento sutil no lugar da galeria */}
        <div className="h-6" />

        {/* CTA para o perfil */}
        <FadeIn delay={300} className="flex justify-center">
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white px-10 h-14 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <Instagram className="w-5 h-5" />
            Seguir {HANDLE}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
