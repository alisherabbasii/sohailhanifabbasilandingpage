'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData } from '@/data/profileData';
import { Quote } from 'lucide-react';

export default function QuoteSection() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const quotes = profileData.sufism?.quotes || [];

  useEffect(() => {
    if (quotes.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 6000); // Change quote every 6 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);

  if (quotes.length === 0) return null;

  return (
    <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-8 backdrop-blur-sm border border-white/20">
          <Quote size={28} className="text-emerald-200" />
        </div>
        
        <div className="min-h-[160px] flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuoteIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-4xl font-light text-emerald-50 leading-relaxed italic mb-8 px-4">
                "{quotes[currentQuoteIndex].text}"
              </h3>
              <p className="text-lg md:text-xl font-semibold text-emerald-300 tracking-wider uppercase">
                &mdash; {quotes[currentQuoteIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
