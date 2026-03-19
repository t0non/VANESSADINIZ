import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Connection } from "@/components/sections/Connection";
import { Solution } from "@/components/sections/Solution";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Connection />
      <Services />
      <Solution />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}