"use client";

import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background text-foreground/70 py-24 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-headline tracking-tight text-primary mb-8 block">
              DRA. LUÍSA <span className="text-accent italic">MENDES</span>
            </Link>
            <p className="text-sm leading-relaxed font-light mb-4">
              Geriatria & Longevidade. Um olhar atento e integral sobre a saúde na maturidade.
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">CRM-SP 123456</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-accent mb-8">Navegação</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="#filosofia" className="hover:text-accent transition-colors">Nossa Filosofia</Link></li>
              <li><Link href="#pilares" className="hover:text-accent transition-colors">Pilares do Cuidado</Link></li>
              <li><Link href="#sobre" className="hover:text-accent transition-colors">Sobre a Médica</Link></li>
              <li><Link href="#faq" className="hover:text-accent transition-colors">Dúvidas Frequentes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-accent mb-8">Consultório</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-accent" />
                <span>Av. Paulista, 1000 - Cj 12<br />Bela Vista, São Paulo - SP</span>
              </li>
              <li>Segunda a Sexta: 09h às 18h</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-accent mb-8">Redes</h4>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-accent transition-colors"><Instagram size={20} strokeWidth={1.5} /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Linkedin size={20} strokeWidth={1.5} /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Mail size={20} strokeWidth={1.5} /></Link>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em]">
          <p className="font-light">
            © {new Date().getFullYear()} DRA. LUÍSA MENDES. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-accent transition-colors">Privacidade</Link>
            <Link href="#" className="hover:text-accent transition-colors">Ética Médica</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}