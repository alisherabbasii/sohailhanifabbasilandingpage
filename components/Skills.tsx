'use client';

import { motion } from 'framer-motion';
import { profileData } from '@/data/profileData';
import { useLanguage } from '@/i18n/LanguageContext';
import { Zap } from 'lucide-react';

export default function Skills() {
  const skills = profileData.skills;
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-primary font-semibold text-sm shadow-sm border border-primary/10 mb-6"
          >
            <Zap size={16} className="text-accent" />
            Core Competencies
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-secondary mb-6 tracking-tight">
            {t.skills.heading} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic">{t.skills.headingHighlight}</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary/70 max-w-2xl mx-auto font-medium">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/70 backdrop-blur-xl p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-primary/10 border border-white/50 flex flex-col gap-6 group transition-all duration-300 relative overflow-hidden"
            >
              {/* Card Gradient Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex items-center justify-between relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm border border-primary/10">
                  <skill.icon size={28} />
                </div>
                <span className="text-3xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                  {skill.level}%
                </span>
              </div>
              
              <div className="relative z-10 w-full">
                <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{skill.name}</h3>
                <div className="w-full h-2.5 bg-gray-100/80 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                  >
                    {/* Shimmer effect inside the bar */}
                    <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/30 blur opacity-50 block animate-shimmer" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
