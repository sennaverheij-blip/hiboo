import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { testimonials, CALENDLY_URL } from '../data/models';
import SectionReveal from '../components/SectionReveal';

function SocialProofNotification() {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(3);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const showTimer = setTimeout(() => {
      setCount(Math.floor(Math.random() * 7) + 2);
      setVisible(true);
    }, 3000);
    return () => clearTimeout(showTimer);
  }, [dismissed]);

  useEffect(() => {
    if (dismissed || !visible) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCount(Math.floor(Math.random() * 7) + 2);
        setVisible(true);
      }, 500);
    }, 15000);
    return () => clearInterval(interval);
  }, [dismissed, visible]);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed bottom-6 left-6 z-50 glass-card !rounded-full px-5 py-3 flex items-center gap-3 max-w-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-600" />
          </span>
          <span className="text-sm text-gray-600">
            <strong className="text-gray-900">{count} studenten</strong> hebben zich zojuist aangesloten bij HIBOO
          </span>
          <button onClick={() => setDismissed(true)} className="text-gray-400 hover:text-gray-600">
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TestimonialLightbox({ name, onClose }: { name: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-white/70 hover:text-white">
        <X className="w-8 h-8" />
      </button>
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="glass-card p-8 text-center bg-white">
          <div className="w-32 h-32 mx-auto rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 font-bold text-3xl mb-6">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
          <p className="text-xl font-semibold text-gray-900">{name}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function VSLPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <SocialProofNotification />

      <AnimatePresence>
        {lightbox && (
          <TestimonialLightbox
            name={lightbox}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>

      {/* Hero + Video */}
      <section className="pt-16 pb-12 px-6 text-center max-w-4xl mx-auto">
        <SectionReveal>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-4 text-gray-900">
            Bekijk hoe gewone Nederlanders online verdienen
          </h1>
          <p className="text-lg text-gray-500 mb-10">
            Chanel legt in deze video precies uit hoe het werkt.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="glass-card p-2 !border-purple-200" style={{ boxShadow: '0 0 60px rgba(139,92,246,0.1)' }}>
            <iframe
              src="https://player.vimeo.com/video/1169096746?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1"
              allow="autoplay; fullscreen; picture-in-picture"
              className="w-full rounded-2xl"
              style={{ aspectRatio: '16/9', border: 'none' }}
              title="HIBOO Video"
            />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.4} className="mt-10">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
            Boek Nu Je Gratis Kickstart Call
          </a>
          <p className="text-sm text-purple-600 mt-4 font-medium">
            Slechts enkele plekken beschikbaar deze week
          </p>
        </SectionReveal>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Wat studenten bereiken</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 0.1}>
                <div
                  className="glass-card p-6 cursor-pointer"
                  onClick={() => setLightbox(t.name)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 font-bold text-sm">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.model}</p>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-purple-600 mb-3">{t.result}</p>
                  <p className="text-sm text-gray-500">{t.text}</p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="text-center mt-12">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
              Boek Nu Je Gratis Kickstart Call
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-black/[0.06] py-6 text-center">
        <p className="text-xs text-gray-400">
          &copy; 2025 HiBOO BV &middot; KvK: 95458751 &middot;{' '}
          <a href="/terms" className="hover:text-gray-600 transition-colors">Algemene Voorwaarden</a>
        </p>
      </div>
    </div>
  );
}
