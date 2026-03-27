'use client';

import { motion } from 'framer-motion';
import { profileData } from '@/data/profileData';
import { Radio, Award, GraduationCap, Calendar } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function MilitaryExperience() {
  const experiences = profileData.experience;
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 uppercase tracking-tight">
            {t.experience.heading} <span className="text-primary italic">{t.experience.headingHighlight}</span>
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-secondary/60 max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="relative border-l-4 border-primary/10 ml-6 md:ml-12 pl-8 md:pl-16 space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Marker */}
              <div className="absolute -left-[42px] md:-left-[74px] top-0 w-8 h-8 md:w-12 md:h-12 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-lg">
                {exp.category === 'Military' ? (
                  <Radio size={20} className="text-primary" />
                ) : (
                  <Award size={20} className="text-primary" />
                )}
              </div>

              <div className="bg-background-custom p-8 rounded-[30px] shadow-sm hover:shadow-xl transition-all border border-gray-100/50 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className={exp.category === 'Military' ? 'text-primary' : 'text-accent' + ' text-xs font-bold uppercase tracking-widest mb-2 block'}>
                      {exp.category}
                    </span>
                    <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-medium text-secondary/60">
                      {exp.organization}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-full shadow-sm">
                    <Calendar size={16} className="text-accent" />
                    <span className="text-sm font-bold text-secondary">{exp.duration}</span>
                  </div>
                </div>
                
                <p className="text-secondary/70 leading-relaxed text-lg">
                  {exp.description}
                </p>
                
                {exp.category === 'Military' && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    <span className="flex items-center gap-2 px-4 py-1.5 bg-primary/5 text-primary rounded-full text-sm font-semibold border border-primary/10">
                      <GraduationCap size={16} /> China Training
                    </span>
                    <span className="flex items-center gap-2 px-4 py-1.5 bg-accent/5 text-accent rounded-full text-sm font-semibold border border-accent/10">
                      <Award size={16} /> Military Award
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
