'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { profileData } from '@/data/profileData';
import { Heart, Users, Globe, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Welfare() {
  const welfare = profileData.welfare;
  const { t } = useLanguage();

  return (
    <section id="welfare" className="section-padding bg-background-custom relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] md:aspect-square w-full rounded-[60px] overflow-hidden shadow-2xl border-[16px] border-white z-20">
              <Image
                src="/images/welfare.png"
                alt="Welfare Mission"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-secondary/80 to-transparent p-12 text-white">
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-white font-bold text-xs uppercase tracking-widest mb-4">
                  Community Impact
                </span>
                <h3 className="text-3xl font-bold mb-2">{welfare.name}</h3>
                <p className="text-lg text-white/80 font-medium italic">{welfare.mission}</p>
              </div>
            </div>
            
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[100px] -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="p-4 bg-primary/5 rounded-2xl inline-flex items-center gap-3 text-primary mb-6">
              <Heart className="fill-current" />
              <span className="font-bold uppercase tracking-tight text-sm">{t.welfare.badge}</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-secondary mb-8 leading-tight">
              {t.welfare.heading} <span className="text-primary italic underline decoration-accent/30 decoration-8 underline-offset-8">{t.welfare.headingHighlight}</span>
            </h2>
            
            <p className="text-xl text-secondary/70 mb-10 leading-relaxed font-medium">
              {welfare.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-white rounded-[32px] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <Users size={24} />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-3">{t.welfare.communityGrowth}</h4>
                <p className="text-secondary/60 leading-relaxed">{welfare.impact}</p>
              </div>
              
              <div className="p-8 bg-white rounded-[32px] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Globe size={24} />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-3">{t.welfare.globalImpact}</h4>
                <p className="text-secondary/60 leading-relaxed">{t.welfare.globalImpactDesc}</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-4 text-xl font-bold text-primary hover:text-accent transition-colors underline decoration-primary/20 decoration-2 underline-offset-8"
            >
              {t.welfare.learnMore} <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
