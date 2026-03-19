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
    question: "Atende planos de saúde?",
    answer: "Trabalhamos exclusivamente no modelo particular para garantir a duração e a profundidade que uma consulta geriátrica de excelência exige. No entanto, fornecemos toda a documentação necessária para que você possa solicitar o reembolso junto ao seu convênio."
  },
  {
    question: "A partir de que idade devo procurar um geriatra?",
    answer: "Não existe uma idade rígida. Embora o foco principal seja em pacientes acima de 60 anos, muitos buscam o geriatra a partir dos 45-50 para planejamento de longevidade e prevenção de doenças típicas do envelhecimento."
  },
  {
    question: "Como funciona a primeira consulta?",
    answer: "A primeira consulta é extensa (cerca de 1h30). Realizamos uma Avaliação Geriátrica Ampla, revisamos todos os exames e medicamentos em uso, e conversamos profundamente sobre rotina, humor e memória."
  },
  {
    question: "A Dra. realiza visitas domiciliares?",
    answer: "Sim, realizamos atendimento domiciliar para pacientes com dificuldade de locomoção, garantindo o mesmo padrão de cuidado no conforto e segurança do lar."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-32 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-headline mb-6 text-primary">Perguntas Frequentes</h2>
            <p className="text-muted-foreground font-light">As respostas que você precisa para dar o próximo passo com segurança.</p>
          </FadeIn>
          
          <FadeIn delay={200}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/50 px-2">
                  <AccordionTrigger className="text-left font-headline font-normal py-6 hover:no-underline hover:text-accent tracking-wide text-lg text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6 text-base">
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