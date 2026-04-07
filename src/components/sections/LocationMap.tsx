"use client";

import { MapPin, Navigation } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export function LocationMap() {
  const mapEmbedUrl = "https://maps.google.com/maps?q=Rua%20Jaceguai,%20208%20Prado,%20Belo%20Horizonte&t=&z=16&ie=UTF8&iwloc=&output=embed";
  const routeUrl = "https://www.google.com/maps/dir/?api=1&destination=Rua+Jaceguai,+208+-+Prado,+Belo+Horizonte+-+MG";

  return (
    <section id="localizacao" className="w-full py-24 md:py-32 bg-white relative overflow-hidden border-t border-primary/5">
      <div className="container-premium">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Informações */}
          <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <FadeIn>
              <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">
                Localização
              </span>
              <h2 className="text-3xl md:text-5xl font-headline text-primary mb-6 leading-tight">
                Como <span className="italic font-normal">chegar</span>
              </h2>
              <p className="text-primary/60 font-light text-base md:text-lg leading-relaxed mb-8">
                Consultório de fácil acesso, preparado para receber você com total conforto e acessibilidade.
              </p>

              <div className="flex items-start gap-4 mb-10 p-6 bg-[#F8F7F4] rounded-2xl border border-primary/5">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-accent shadow-sm shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline text-primary text-xl mb-2">Instituto Hiraki</h3>
                  <p className="text-primary/70 font-light text-sm leading-relaxed">
                    Rua Jaceguai, 208 – Sala 1408 <br />
                    Bairro Prado <br />
                    Belo Horizonte, MG
                  </p>
                </div>
              </div>

              <a
                href={routeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full lg:w-auto px-10 h-14 bg-primary text-white rounded-full font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-500 hover:bg-[#1A2820] hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <Navigation className="w-4 h-4" />
                Calcular Rota
              </a>
            </FadeIn>
          </div>

          {/* Mapa Decorado */}
          <div className="lg:w-2/3 w-full relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            <FadeIn delay={200} className="w-full h-full">
              {/* Fallback frame if iframe doesn't load immediately */}
              <div className="absolute inset-0 bg-primary/5 animate-pulse -z-10" />
              
              <iframe 
                src={mapEmbedUrl} 
                className="w-full h-full border-0 transition-all duration-1000"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de localização do consultório"
              />

              {/* Borda interna refinada */}
              <div className="absolute inset-0 border border-black/10 rounded-3xl pointer-events-none" />
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
