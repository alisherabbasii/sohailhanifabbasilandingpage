'use client';

import { motion } from 'framer-motion';
import { profileData } from '@/data/profileData';
import { Radio, LayoutDashboard, FileSpreadsheet, Database, Shield, Monitor, Briefcase } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Skills() {
  const skills = profileData.skills;
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-padding bg-background-custom relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-primary" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6 uppercase tracking-tighter">
              {t.skills.heading} & <span className="text-primary italic">{t.skills.headingHighlight}</span>
            </h2>
            <p className="text-lg text-secondary/60 mb-8 leading-relaxed">
              {t.skills.subtitle}
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg uppercase font-bold text-xs">
                  RAD
                </div>
                <p className="text-sm font-bold text-secondary uppercase tracking-widest">Radar Specialization</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent text-white rounded-xl flex items-center justify-center shadow-lg uppercase font-bold text-xs">
                  BUS
                </div>
                <p className="text-sm font-bold text-secondary uppercase tracking-widest">Business Support</p>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-gray-100 flex items-center gap-6 group"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <skill.icon size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-secondary mb-3">{skill.name}</h3>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-accent"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
