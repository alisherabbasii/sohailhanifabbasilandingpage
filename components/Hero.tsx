'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { profileData } from '@/data/profileData';
import { ArrowRight, Download } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="about" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-primary/5 rounded-bl-[100px] hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 uppercase tracking-wider">
            {t.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-secondary mb-6 leading-[1.1]">
            {profileData.name}
          </h1>
          <p className="text-xl md:text-2xl text-secondary/80 font-medium mb-4">
            {profileData.title}
          </p>
          <p className="text-lg text-secondary/60 mb-10 max-w-xl leading-relaxed">
            {profileData.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center gap-2 hover:bg-secondary transition-all shadow-lg shadow-primary/20"
            >
              {t.hero.contactMe} <ArrowRight size={20} />
            </a>
            <a
              href="#experience"
              className="px-8 py-4 border-2 border-primary/20 text-primary rounded-xl font-bold flex items-center gap-2 hover:bg-primary/5 transition-all"
            >
              {t.hero.viewExperience} <Download size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto group">
            <div className="absolute inset-0 bg-accent/20 rounded-[40px] rotate-6 group-hover:rotate-3 transition-transform duration-500" />
            <div className="absolute inset-0 bg-primary rounded-[40px] -rotate-3 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative h-full w-full rounded-[40px] overflow-hidden border-8 border-white shadow-2xl">
              <Image
                src="/images/hero-profile.png"
                alt={profileData.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
            </div>

            {/* Floating Achievement Card */}
            <div className="absolute -bottom-6 -right-6 md:right-0 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-[240px]">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                <span className="font-bold text-lg">{t.hero.yearsCount}</span>
              </div>
              <div>
                <p className="text-xs text-secondary/60 font-bold uppercase tracking-wider">{t.hero.experienceLabel}</p>
                <p className="text-sm font-bold text-secondary">{t.hero.yearsOfService}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
