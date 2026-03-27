'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData } from '@/data/profileData';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Testimonials() {
  const testimonials = profileData.testimonials;
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      const next = prev + newDirection;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  }, [testimonials.length]);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => paginate(1), 6000);
    return () => clearInterval(interval);
  }, [paginate]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mt-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 uppercase tracking-tighter">
            {t.testimonials.heading} <span className="text-primary italic">{t.testimonials.headingHighlight}</span>
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-secondary/60 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Testimonial Card */}
          <div className="relative min-h-[320px] md:min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full"
              >
                <div className="bg-background-custom p-10 md:p-14 rounded-[40px] border border-gray-100 shadow-sm relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-6 left-10 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                    <Quote size={22} className="text-white" />
                  </div>

                  <p className="text-lg md:text-xl text-secondary/80 leading-relaxed mb-10 mt-4 italic font-medium">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-5">
                    {/* Avatar Initial */}
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                      {testimonials[current].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-secondary text-lg">
                        {testimonials[current].name}
                      </p>
                      <p className="text-sm text-secondary/50 font-semibold uppercase tracking-wider">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-secondary/60 hover:bg-primary hover:border-primary hover:text-white transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'w-8 bg-primary'
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-secondary/60 hover:bg-primary hover:border-primary hover:text-white transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
