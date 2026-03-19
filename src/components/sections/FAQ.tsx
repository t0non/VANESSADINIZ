"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o processo de curadoria?",
    answer: "Nossa curadoria é personalizada para cada perfil. Iniciamos com uma consultoria privada para entender seus valores e necessidades, garantindo que cada detalhe do Apex Aura ressoe com seu estilo de vida."
  },
  {
    question: "Existe garantia de exclusividade?",
    answer: "Sim. Operamos com tiragens limitadas e acesso restrito para manter o padrão de exclusividade que nossos membros exigem. Você não está apenas adquirindo um serviço, mas um convite para um clube seleto."
  },
  {
    question: "Qual o nível de suporte oferecido?",
    answer: "Oferecemos suporte concierge 24/7. Nossa equipe está treinada para antecipar suas necessidades com a máxima discrição e eficiência, garantindo que sua experiência seja sempre fluida."
  },
  {
    question: "Como posso agendar uma experiência?",
    answer: "Basta clicar em qualquer um de nossos convites para falar com um consultor. O processo é simples, direto e focado na sua conveniência."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-headline mb-6">Transparência & Confiança</h2>
            <p className="text-muted-foreground font-light">As respostas que você precisa para dar o próximo passo com segurança.</p>
          </FadeIn>
          
          <FadeIn delay={200}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/50 px-2 hover:bg-muted/10 transition-colors">
                  <AccordionTrigger className="text-left font-headline font-normal py-6 hover:no-underline hover:text-accent tracking-wide">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
