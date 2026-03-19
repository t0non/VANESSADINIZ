"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Footer() {
  const logoImage = PlaceHolderImages.find(img => img.id === "logo")?.imageUrl || "https://files.catbox.moe/ulpl82.png";

  return (
    <footer className="bg-background text-foreground py-32 border-t border-border/50">
      <div className="container-premium">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="relative h-20 w-80 mb-10 block transition-transform hover:scale-105 duration-300">
              <Image
                src={logoImage}
                alt="Dra. Luísa Mendes Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-sm leading-relaxed font-light text-muted-foreground mb-8">
              Geriatria & Longevidade. Um olhar atento, integral e humano sobre a saúde na maturidade.
            </p>
            <div className="flex space-x-8">
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Instagram size={20} strokeWidth={1.5} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Linkedin size={20} strokeWidth={1.5} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Mail size={20} strokeWidth={1.5} /></Link>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-10">Consultório</h4>
            <ul className="space-y-6 text-sm font-light text-muted-foreground">
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 mt-1 text-accent shrink-0" />
                <span className="leading-relaxed">Av. Paulista, 1000 - Cj 12<br />Bela Vista, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>(11) 98765-4321</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-10">Navegação</h4>
            <ul className="space-y-5 text-sm font-light text-muted-foreground">
              <li><Link href="#filosofia" className="hover:text-accent transition-colors tracking-widest uppercase text-[10px]">Filosofia</Link></li>
              <li><Link href="#pilares" className="hover:text-accent transition-colors tracking-widest uppercase text-[10px]">Pilares do Cuidado</Link></li>
              <li><Link href="#sobre" className="hover:text-accent transition-colors tracking-widest uppercase text-[10px]">A Especialista</Link></li>
              <li><Link href="#faq" className="hover:text-accent transition-colors tracking-widest uppercase text-[10px]">Dúvidas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-10">Atendimento</h4>
            <p className="text-sm font-light text-muted-foreground mb-4">Segunda a Sexta</p>
            <p className="text-lg font-headline text-primary mb-2">09h às 18h</p>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mt-10">CRM-SP 123456</p>
          </div>
        </div>

        <div className="pt-16 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] uppercase tracking-[0.3em] font-medium text-muted-foreground/60">
          <p>
            © {new Date().getFullYear()} DRA. LUÍSA MENDES. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex space-x-12">
            <Link href="#" className="hover:text-accent transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-accent transition-colors">Ética Médica</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
