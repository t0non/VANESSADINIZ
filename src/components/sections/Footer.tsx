"use client";

import Link from "next/link";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white/90 py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-headline tracking-tighter text-white mb-8 block">
              APEX <span className="text-accent italic">AURA</span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              The definitive standard for luxury lifestyle and asset management. Built for those who understand the value of subtlety.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-semibold text-accent mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li><Link href="#" className="hover:text-white transition-colors">The Experience</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Member Portfolio</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Join Collective</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-semibold text-accent mb-8">Inquiries</h4>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li><Link href="#" className="hover:text-white transition-colors">Global Support</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Corporate Sales</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Press & Media</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Private Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-semibold text-accent mb-8">Follow</h4>
            <div className="flex space-x-6">
              <Link href="#" className="text-white/50 hover:text-white transition-colors"><Instagram size={20} strokeWidth={1.5} /></Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors"><Twitter size={20} strokeWidth={1.5} /></Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors"><Linkedin size={20} strokeWidth={1.5} /></Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors"><Mail size={20} strokeWidth={1.5} /></Link>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/30 font-light tracking-widest">
            © {new Date().getFullYear()} APEX AURA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-xs text-white/30 font-light uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
