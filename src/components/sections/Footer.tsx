
"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Footer() {
  const logoImage = PlaceHolderImages.find(img => img.id === "logo")?.imageUrl || "";

  return (
    <footer className="bg-background text-primary py-32 border-t border-primary/5">
      <div className="container-premium">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32 text-center md:text-left">
          {/* Coluna Logo e Bio */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <Link href="/" className="relative h-24 w-full max-w-[300px] mb-10 block transition-transform hover:scale-105 duration-300">
              <Image
                src={logoImage}
                alt="Dra. Vanessa Diniz Logo"
                fill
                className="object-contain object-center md:object-left"
              />
            </Link>
            <p className="text-sm leading-relaxed font-light text-primary/60 mb-8 max-w-sm md:max-w-none">
              Geriatria & Longevidade. Um olhar atento, integral e humano sobre a saúde na maturidade.
            </p>
            <div className="flex space-x-8 justify-center md:justify-start">
              <Link href="#" className="text-primary/40 hover:text-accent transition-colors"><Instagram size={20} strokeWidth={1.5} /></Link>
              <Link href="#" className="text-primary/40 hover:text-accent transition-colors"><Linkedin size={20} strokeWidth={1.5} /></Link>
              <Link href="#" className="text-primary/40 hover:text-accent transition-colors"><Mail size={20} strokeWidth={1.5} /></Link>
            </div>
          </div>

          {/* Coluna Consultório */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-10">Consultório</h4>
            <ul className="space-y-6 text-sm font-light text-primary/60">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <MapPin className="w-4 h-4 text-accent shrink-0 md:mt-1" />
                <span className="leading-relaxed">Av. das Américas, 500 - Bloco 2, Sala 301<br />Barra da Tijuca, Rio de Janeiro - RJ<br />CEP 22640-100</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>(21) 98765-4321</span>
              </li>
            </ul>
          </div>

          {/* Coluna Navegação */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-10">Navegação</h4>
            <ul className="space-y-5 text-[10px] font-bold text-primary/60 tracking-[0.2em] uppercase">
              <li><Link href="#filosofia" className="hover:text-accent transition-colors">Filosofia</Link></li>
              <li><Link href="#pilares" className="hover:text-accent transition-colors">Especialidades</Link></li>
              <li><Link href="#sobre" className="hover:text-accent transition-colors">Sobre Vanessa</Link></li>
              <li><Link href="#faq" className="hover:text-accent transition-colors">Dúvidas</Link></li>
            </ul>
          </div>

          {/* Coluna Atendimento */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-10">Atendimento</h4>
            <p className="text-sm font-light text-primary/60 mb-4">Segunda a Sexta</p>
            <p className="text-xl font-headline text-primary mb-2">09h às 18h</p>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mt-10">CRM-SP 123456</p>
          </div>
        </div>

        <div className="pt-16 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] uppercase tracking-[0.3em] font-medium text-primary/40">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} DRA. VANESSA DINIZ. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex space-x-12">
            <Link href="#" className="hover:text-accent transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-accent transition-colors">Aviso Legal</Link>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-[8px] uppercase tracking-[0.2em] text-primary/30 max-w-2xl mx-auto px-4">
            As informações neste site têm caráter informativo e não substituem a consulta médica.
          </p>
        </div>
      </div>
    </footer>
  );
}
