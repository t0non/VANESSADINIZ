
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Empathy } from "@/components/sections/Empathy";
import { Pillars } from "@/components/sections/Pillars";
import { Authority } from "@/components/sections/Authority";
import { OfficeExperience } from "@/components/sections/OfficeExperience";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Empathy />
      <Pillars />
      <Authority />
      <OfficeExperience />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
