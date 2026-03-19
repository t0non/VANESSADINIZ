"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Diamond, ShieldCheck, Crown, Layers } from "lucide-react";

const services = [
  {
    icon: <Diamond className="w-8 h-8 stroke-[1px]" />,
    title: "Curated Excellence",
    description: "Every detail meticulously handled to ensure only the highest standard of quality for our community."
  },
  {
    icon: <Crown className="w-8 h-8 stroke-[1px]" />,
    title: "Royal Privilege",
    description: "Unlock access to exclusive circles and opportunities that remain hidden from the ordinary world."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 stroke-[1px]" />,
    title: "Secure Legacy",
    description: "Private management of your most valuable assets with absolute discretion and sophisticated technology."
  },
  {
    icon: <Layers className="w-8 h-8 stroke-[1px]" />,
    title: "Seamless Flow",
    description: "An intuitive interface designed to blend perfectly with your high-pace lifestyle and unique needs."
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-headline mb-8 text-primary">
              Crafted for the <span className="italic">Discerning</span> Few
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              We provide a suite of elite services designed to streamline your complexity and amplify your potential, all within a serene, minimalist environment.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="group p-8 border border-transparent hover:border-accent/10 transition-all duration-500">
                <div className="mb-8 text-accent group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-headline mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
