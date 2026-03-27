'use client';

import { motion } from 'framer-motion';
import { profileData } from '@/data/profileData';
import { ExternalLink, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Welfare', href: '#welfare' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-secondary text-white relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div className="col-span-1">
            <a href="#" className="inline-block font-bold text-2xl tracking-tight mb-4">
              Sohail Hanif <span className="text-accent">Abbasi</span>
            </a>
            <p className="text-white/50 leading-relaxed text-base mb-8">
              Pakistan Army Veteran with 25 years of distinguished service. Radar Technician. Business Support Specialist. Community Welfare Activist.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <MapPin size={14} />
              <span>Madinah, Saudi Arabia</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/30 text-xs font-bold uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-accent transition-colors font-medium text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="text-white/30 text-xs font-bold uppercase tracking-widest mb-8">Connect</h4>
            <div className="space-y-6">
              <a 
                href={`mailto:${profileData.socials.email}`} 
                className="flex items-center gap-4 text-white/70 hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="font-medium">{profileData.socials.email}</span>
              </a>
              <a 
                href={profileData.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 text-white/70 hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <ExternalLink size={18} />
                </div>
                <span className="font-medium">Facebook Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            &copy; {currentYear} Sohail Hanif Abbasi. All rights reserved.
          </p>
          <p className="text-white/30 text-sm flex items-center gap-2">
            Made with <Heart size={14} className="text-accent fill-accent" /> for a distinguished career
          </p>
        </div>
      </div>
    </footer>
  );
}
