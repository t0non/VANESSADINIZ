
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import dynamic from 'next/dynamic';

const Empathy = dynamic(() => import('@/components/sections/Empathy').then(m => m.Empathy));
const Pillars = dynamic(() => import('@/components/sections/Pillars').then(m => m.Pillars));
const Authority = dynamic(() => import('@/components/sections/Authority').then(m => m.Authority));
const Narrative = dynamic(() => import('@/components/sections/Narrative').then(m => m.Narrative));
const OfficeExperience = dynamic(() => import('@/components/sections/OfficeExperience').then(m => m.OfficeExperience));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then(m => m.Testimonials));
const InstagramFeed = dynamic(() => import('@/components/sections/InstagramFeed').then(m => m.InstagramFeed));
const FAQ = dynamic(() => import('@/components/sections/FAQ').then(m => m.FAQ));
const CTA = dynamic(() => import('@/components/sections/CTA').then(m => m.CTA));
const LocationMap = dynamic(() => import('@/components/sections/LocationMap').then(m => m.LocationMap));
const Footer = dynamic(() => import('@/components/sections/Footer').then(m => m.Footer));

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
      <LocationMap />
      <Footer />
    </main>
  );
}
