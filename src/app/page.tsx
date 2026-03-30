
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Empathy } from "@/components/sections/Empathy";
import { Pillars } from "@/components/sections/Pillars";
import { Authority } from "@/components/sections/Authority";
import { Narrative } from "@/components/sections/Narrative";
import { OfficeExperience } from "@/components/sections/OfficeExperience";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Empathy />
      <Pillars />
      <Authority />
      <Narrative />
      <OfficeExperience />
      <Testimonials />
      <InstagramFeed />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
