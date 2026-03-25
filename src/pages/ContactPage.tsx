import { Check } from 'lucide-react';
import { CALENDLY_URL } from '../data/models';
import SectionReveal from '../components/SectionReveal';

export default function ContactPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      {/* Emerald orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 60%)' }}
      />

      <SectionReveal className="relative z-10 text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.04em] leading-[1.05] mb-6">
          Klaar voor je gratis gesprek?
        </h1>
        <p className="text-lg text-white/50 mb-10 max-w-lg mx-auto">
          Boek direct een 30-minuten kickstart call met Faris. Volledig gratis, zonder verplichtingen.
        </p>

        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg mb-8 inline-block">
          Plan je Gratis Kickstart Call
        </a>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          {['Volledig gratis', 'Geen verkooppraatjes', 'Jouw model in 30 min duidelijk'].map((t) => (
            <div key={t} className="flex items-center gap-2 text-sm text-white/50">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>{t}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-white/30 mt-12">HiBOO BV &middot; KvK 95458751</p>
      </SectionReveal>
    </section>
  );
}
