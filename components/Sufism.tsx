'use client';

import { motion } from 'framer-motion';
import { profileData } from '@/data/profileData';
import { BookOpen, Feather, Sparkles } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Sufism() {
  const { sufism } = profileData;
  const { t } = useLanguage();

  return (
    <section id="sufism" className="py-24 relative overflow-hidden bg-[#eaf4ec]">
      {/* Decorative calm background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-emerald-200/50 rounded-full text-emerald-800 font-semibold text-sm shadow-sm mb-6"
          >
            <Sparkles size={16} />
            Spiritual Journey
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
            Sufism & <span className="text-emerald-700 italic">Self Discovery</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            {sufism?.interest}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-lg border border-emerald-100 p-10 rounded-[32px] shadow-lg hover:shadow-xl hover:shadow-emerald-100/50 transition-all"
          >
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen size={30} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{sufism?.student}</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              A dedicated student of the profound teachings of Maulana Jalaluddin Rumi. Deeply engaged in the exploration of spiritual wisdom, seeking internal growth, and sharing reflections drawn from classic Islamic literature.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/60 backdrop-blur-lg border border-teal-100 p-10 rounded-[32px] shadow-lg hover:shadow-xl hover:shadow-teal-100/50 transition-all"
          >
            <div className="w-16 h-16 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center mb-6">
              <Feather size={30} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Writing & Reflections</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {sufism?.focus} By translating complex spiritual concepts into relatable daily reflections, the aim is to bridge the gap between ancient wisdom and modern living.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
