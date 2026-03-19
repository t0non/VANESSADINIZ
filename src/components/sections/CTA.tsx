"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";

export function CTA() {
  return (
    <section className="py-40 bg-background relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="text-[20rem] font-headline font-bold uppercase tracking-tighter">APEX</span>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-headline mb-12 max-w-4xl mx-auto leading-tight">
            Ready to embody the <span className="italic text-accent">extraordinary?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-2xl mx-auto font-light">
            Join an elite collective of visionaries who demand nothing less than perfection from their digital and physical environments.
          </p>
          <div className="flex justify-center items-center">
            <Button 
              variant="outline"
              className="group relative overflow-hidden bg-transparent border-primary h-16 px-16 text-xs uppercase tracking-[0.4em] text-primary hover:text-white transition-colors duration-500"
            >
              <span className="relative z-10">Request Invitation</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
