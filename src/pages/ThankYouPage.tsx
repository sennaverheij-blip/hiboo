import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { testimonials } from '../data/models';
import SectionReveal from '../components/SectionReveal';

export default function ThankYouPage() {
  const topTestimonials = [testimonials[3], testimonials[0], testimonials[1]];

  return (
    <>
      {/* Confirmation */}
      <section className="pt-32 pb-20 px-6 text-center relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 60%)' }}
        />

        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2, duration: 0.6 }}
            className="mx-auto mb-8"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto">
              <circle cx="40" cy="40" r="36" fill="none" stroke="#7c3aed" strokeWidth="3" opacity="0.3" />
              <circle cx="40" cy="40" r="36" fill="none" stroke="#7c3aed" strokeWidth="3"
                strokeDasharray="226" strokeDashoffset="226"
                style={{ animation: 'draw-check 0.8s ease forwards 0.3s' }}
              />
              <path d="M25 42 L35 52 L55 30" fill="none" stroke="#7c3aed" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
                className="draw-check"
              />
            </svg>
          </motion.div>

          <SectionReveal>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.04em] mb-4 text-gray-900">
              Afspraak bevestigd.
            </h1>
            <p className="text-lg text-gray-500 max-w-md mx-auto">
              Je kickstart call staat ingepland. Check je e-mail voor de bevestiging.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Wat gebeurt er nu?</h2>
          </SectionReveal>

          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: '1', title: 'Check je e-mail', desc: 'Ontvang de bevestiging en Zoom-link' },
                { num: '2', title: 'Bereid je voor', desc: 'Denk alvast na welk verdienmodel je aanspreekt' },
                { num: '3', title: 'Verschijn op de call', desc: 'Faris helpt je de juiste keuze te maken' },
              ].map((step, i) => (
                <SectionReveal key={step.num} delay={i * 0.15}>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 font-bold mx-auto mb-4">
                      {step.num}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500">{step.desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-gray-900">Je bent in goed gezelschap.</h2>
            <p className="text-gray-500">500+ mensen gingen je voor. Dit is wat zij bereikten.</p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topTestimonials.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 0.1}>
                <div className="glass-card p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 font-bold mx-auto mb-4">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <p className="text-lg font-bold text-purple-600 mb-2">{t.result}</p>
                  <p className="text-sm font-medium text-gray-900 mb-1">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.model}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Alvast verkennen?</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Bekijk alle 10 modellen', to: '/training', desc: 'Ontdek welke modellen er zijn' },
              { title: 'Leer meer over de training', to: '/training', desc: 'Bekijk het volledige programma' },
              { title: 'Meer over HIBOO', to: '/', desc: 'Terug naar de homepage' },
            ].map((card, i) => (
              <SectionReveal key={card.title} delay={i * 0.1}>
                <Link to={card.to} className="block">
                  <div className="glass-card p-6 text-center group">
                    <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{card.desc}</p>
                    <ArrowRight className="w-5 h-5 text-purple-600 mx-auto group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
