'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useLanguage } from '@/i18n/LanguageContext';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.welfare, href: '#welfare' },
    { name: t.nav.blog, href: '/blog' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const toggleLanguage = () => setLanguage(language === 'en' ? 'ur' : 'en');

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-heading text-xl font-bold text-primary tracking-tight">
          Sohail Hanif <span className="text-accent">Abbasi</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-primary/20 text-primary font-bold text-sm hover:bg-primary hover:text-white hover:border-primary transition-all"
            aria-label="Toggle language"
          >
            <Languages size={15} />
            {language === 'en' ? 'اردو' : 'EN'}
          </button>
        </div>

        {/* Mobile Right: Lang toggle + Menu */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-primary/20 text-primary font-bold text-xs hover:bg-primary hover:text-white transition-all"
            aria-label="Toggle language"
          >
            <Languages size={13} />
            {language === 'en' ? 'اردو' : 'EN'}
          </button>
          <button
            className="text-secondary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-64' : 'max-h-0'
        )}
      >
        <div className="px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-secondary hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
