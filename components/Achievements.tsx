'use client';

import { motion } from 'framer-motion';
import { profileData } from '@/data/profileData';
import { Award, ShieldAlert, Star, Trophy } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Achievements() {
  const achievements = profileData.achievements;
  const { t } = useLanguage();

  return (
    <section id="achievements" className="section-padding bg-white relative">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 uppercase tracking-tight">
              {t.achievements.heading} <span className="text-accent italic">{t.achievements.headingHighlight}</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary rounded-full" />
          </div>
          <p className="text-lg text-secondary/60 max-w-sm">
            {t.achievements.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group h-full"
            >
              <div className="bg-background-custom p-10 rounded-[40px] border-2 border-transparent hover:border-accent/30 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-xl">
                  {index === 0 ? <Trophy size={32} /> : index === 1 ? <ShieldAlert size={32} /> : <Star size={32} />}
                </div>
                
                <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-accent transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-accent text-sm font-bold uppercase tracking-widest mb-6 px-4 py-1.5 bg-accent/5 rounded-full">
                  {achievement.issuer}
                </p>
                
                <p className="text-secondary/60 text-base leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
