'use client';

import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { Mail, Send, ExternalLink, Phone, MapPin, Users } from 'lucide-react';
import { profileData } from '@/data/profileData';
import { useLanguage } from '@/i18n/LanguageContext';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [state, handleSubmit] = useForm("xnjonlle");
  const { t } = useLanguage();

  if (state.succeeded) {
    return (
      <section id="contact" className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative text-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background-custom p-12 rounded-[50px] shadow-2xl border border-gray-50 inline-block"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
              <Send size={40} />
            </div>
            <h2 className="text-3xl font-bold text-secondary mb-4">{t.contact.messageSent}</h2>
            <p className="text-lg text-secondary/60 mb-8">
              {t.contact.thankYou}
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-secondary transition-all"
            >
              {t.contact.sendAnother}
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 uppercase tracking-tighter">
            {t.contact.heading} <span className="text-primary italic">{t.contact.headingHighlight}</span>
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-secondary/60 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="bg-background-custom p-10 rounded-[40px] shadow-sm border border-gray-100 relative group overflow-hidden">
               {/* Decorative Gradient Overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              
              <h3 className="text-2xl font-bold text-secondary mb-8">{t.contact.contactInfo}</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-gray-50 group-hover/item:bg-primary group-hover/item:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-secondary/40 uppercase tracking-widest mb-1">{t.contact.emailLabel}</p>
                    <p className="text-lg font-bold text-secondary">{profileData.socials.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent shadow-sm border border-gray-50 group-hover/item:bg-accent group-hover/item:text-white transition-all">
                    <ExternalLink size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-secondary/40 uppercase tracking-widest mb-1">{t.contact.socialLabel}</p>
                    <a href={profileData.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-secondary hover:text-accent transition-colors">
                      {t.contact.facebookProfile}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-gray-50 group-hover/item:bg-primary group-hover/item:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-secondary/40 uppercase tracking-widest mb-1">{t.contact.locationLabel}</p>
                    <p className="text-lg font-bold text-secondary">{profileData.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
               <div className="px-6 py-4 bg-primary text-white rounded-2xl flex items-center gap-3 font-bold shadow-lg shadow-primary/20">
                  <Phone size={20} /> {t.contact.professionalSupport}
               </div>
               <div className="px-6 py-4 bg-accent text-white rounded-2xl flex items-center gap-3 font-bold shadow-lg shadow-accent/20">
                  <Users size={20} /> {t.contact.welfareMission}
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-10 md:p-12 rounded-[50px] shadow-2xl border border-gray-50 relative"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="full-name" className="text-sm font-bold text-secondary/60 uppercase tracking-wider ml-1">{t.contact.fullName}</label>
                  <input
                    id="full-name"
                    name="name"
                    required
                    className="w-full bg-background-custom border border-gray-100 rounded-2xl px-6 py-4 text-secondary font-medium focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                    placeholder={t.contact.namePlaceholder}
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-xs font-bold mt-1 ml-1"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-secondary/60 uppercase tracking-wider ml-1">{t.contact.emailAddress}</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full bg-background-custom border border-gray-100 rounded-2xl px-6 py-4 text-secondary font-medium focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                    placeholder={t.contact.emailPlaceholder}
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-xs font-bold mt-1 ml-1"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-secondary/60 uppercase tracking-wider ml-1">{t.contact.yourMessage}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-background-custom border border-gray-100 rounded-2xl px-6 py-4 text-secondary font-medium focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all resize-none placeholder:text-gray-400"
                  placeholder={t.contact.messagePlaceholder}
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-xs font-bold mt-1 ml-1"
                />
              </div>
              
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-secondary focus:ring-4 focus:ring-primary/20 transition-all shadow-xl shadow-primary/10 disabled:opacity-50"
              >
                {state.submitting ? t.contact.sending : (
                  <>{t.contact.sendMessage} <Send size={20} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
