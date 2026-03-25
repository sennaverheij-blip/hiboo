import { Check } from 'lucide-react';
import { CALENDLY_URL } from '../data/models';
import SectionReveal from '../components/SectionReveal';

const modules = [
  {
    num: '01',
    name: 'Mindset & Fundament',
    description: 'Bouw de juiste mentaliteit en een stevig fundament voor succes als online ondernemer.',
    bullets: ['Ontwikkel discipline en lange termijn denken', 'Stel haalbare maar ambitieuze doelen', 'Overwin angst en twijfel als starter'],
  },
  {
    num: '02',
    name: 'Strategie Kiezen',
    description: 'Ontdek welk van de 10 verdienmodellen perfect bij jouw persoonlijkheid en situatie past.',
    bullets: ['Diepgaande analyse van alle 10 modellen', 'Persoonlijk assessment en matchmaking', 'Realistische verwachtingen per model'],
  },
  {
    num: '03',
    name: 'Starten',
    description: 'Ga van theorie naar actie met een concreet stappenplan voor jouw gekozen model.',
    bullets: ['Stap-voor-stap setup handleiding', 'Aanbevolen tools en platforms', 'Je eerste acties binnen 48 uur'],
  },
  {
    num: '04',
    name: 'Groei',
    description: 'Schaal je online business van eerste euro naar consistent inkomen.',
    bullets: ['Bewezen schaalstrategieën', 'Klantwerving en retentie technieken', 'Automatisering en systemen bouwen'],
  },
  {
    num: '05',
    name: 'Community & Support',
    description: 'Krijg toegang tot een netwerk van gelijkgestemden en persoonlijke begeleiding.',
    bullets: ['Actieve HIBOO community', 'Wekelijkse live Q&A sessies', 'Persoonlijk mentorship van Faris'],
  },
];

const features = [
  { icon: '♾️', title: 'Levenslange toegang' },
  { icon: '📅', title: 'Wekelijkse Q&A sessies' },
  { icon: '👥', title: 'Private community' },
  { icon: '🎯', title: 'Persoonlijk mentorship' },
];

export default function TrainingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <SectionReveal>
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-500 mb-4 font-semibold">Het programma</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[1.05] mb-6">
            5 modules. Eén route<br className="hidden md:block" /> naar resultaat.
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Stap voor stap leer je alles wat je nodig hebt om jouw gekozen model winstgevend te maken.
          </p>
        </SectionReveal>
      </section>

      {/* Modules */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {modules.map((mod, i) => (
            <SectionReveal key={mod.num} delay={i * 0.1}>
              <div className="glass-card p-8 md:p-12 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
                <div className="text-8xl md:text-[120px] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-b from-emerald-500/30 to-emerald-500/5 select-none">
                  {mod.num}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{mod.name}</h3>
                  <p className="text-white/50 mb-6">{mod.description}</p>
                  <div className="space-y-3">
                    {mod.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-white/60">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Features grid */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <SectionReveal key={f.title} delay={i * 0.1}>
              <div className="glass-card p-8 text-center">
                <div className="text-4xl mb-4">{f.icon}</div>
                <p className="font-semibold text-white">{f.title}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <SectionReveal>
          <div className="max-w-4xl mx-auto text-center rounded-3xl p-12 md:p-20"
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0.03) 100%)' }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Klaar om te starten?</h2>
            <p className="text-lg text-white/50 mb-8 max-w-lg mx-auto">
              Boek je gratis kickstart call en ontdek welk model bij jou past.
            </p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
              Boek Nu Gratis Kickstart Call
            </a>
            <p className="text-sm text-white/30 mt-6">100% gratis &middot; Geen verplichtingen &middot; Duurt 30 minuten</p>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
