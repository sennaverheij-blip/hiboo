import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Check, X as XIcon, ArrowRight } from 'lucide-react';
import { models, CALENDLY_URL } from '../data/models';
import SectionReveal from '../components/SectionReveal';

function EarningsBar({ earning }: { earning: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const parseRange = (s: string): [number, number] => {
    const nums = s.match(/[\d.]+/g);
    if (!nums || nums.length < 2) return [0, 100];
    return [parseFloat(nums[0]), parseFloat(nums[1])];
  };

  const [min, max] = parseRange(earning);
  const maxScale = 20000;
  const widthPercent = Math.min((max / maxScale) * 100, 100);

  return (
    <div ref={ref} className="w-full">
      <div className="flex justify-between text-sm text-gray-400 mb-2">
        <span>{earning.includes('Variabel') ? 'Variabel' : `€${min.toLocaleString('nl-NL')}`}</span>
        {!earning.includes('Variabel') && <span>€{max.toLocaleString('nl-NL')}</span>}
      </div>
      <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-400"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${widthPercent}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
        />
      </div>
    </div>
  );
}

export default function ModelDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const model = models.find((m) => m.slug === slug);

  if (!model) return <Navigate to="/" />;

  const relatedModels = models.filter((m) => m.slug !== model.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 60%)' }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <SectionReveal>
            <div className="text-6xl mb-6">{model.icon}</div>
            <p className="text-xs uppercase tracking-[0.25em] text-purple-600 mb-4 font-semibold">{model.difficulty}</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[1.05] mb-4 text-gray-900">
              {model.name}
            </h1>
            <p className="text-lg text-gray-500 mb-8 max-w-lg mx-auto">{model.description}</p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <span className="px-4 py-2 rounded-full bg-purple-50 text-purple-600 border border-purple-100 text-sm font-medium">
                {model.earning}
              </span>
              <span className="px-4 py-2 rounded-full bg-gray-50 text-gray-600 border border-gray-100 text-sm">
                {model.difficulty}
              </span>
              <span className="px-4 py-2 rounded-full bg-gray-50 text-gray-600 border border-gray-100 text-sm">
                Start: {model.timeToStart}
              </span>
            </div>

            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
              Start Nu Met {model.name}
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Hoe het werkt</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-1/2 left-[16.67%] right-[16.67%] h-px border-t border-dashed border-gray-200 -translate-y-1/2" />

            {model.steps.map((step, i) => (
              <SectionReveal key={step.title} delay={i * 0.15}>
                <div className="glass-card p-8 text-center relative">
                  <div className="w-10 h-10 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 font-bold mx-auto mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Voordelen</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {model.benefits.map((benefit, i) => (
              <SectionReveal key={benefit} delay={i * 0.1}>
                <div className="glass-card p-8">
                  <Check className="w-6 h-6 text-purple-600 mb-4" />
                  <p className="text-gray-600">{benefit}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Voor wie is dit?</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SectionReveal>
              <div className="glass-card p-8">
                <h3 className="text-lg font-semibold text-purple-600 mb-6 flex items-center gap-2">
                  <Check className="w-5 h-5" /> Ideaal voor jou als...
                </h3>
                <div className="space-y-4">
                  {model.idealFor.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="glass-card p-8">
                <h3 className="text-lg font-semibold text-red-500 mb-6 flex items-center gap-2">
                  <XIcon className="w-5 h-5" /> Niet voor jou als...
                </h3>
                <div className="space-y-4">
                  {model.notFor.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <XIcon className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Earnings potential */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">Verdienpotentieel</h2>
          </SectionReveal>

          <SectionReveal>
            <div className="glass-card p-8">
              <EarningsBar earning={model.earning} />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Related models */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Andere modellen</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedModels.map((m, i) => (
              <SectionReveal key={m.slug} delay={i * 0.1}>
                <Link to={`/model/${m.slug}`} className="block">
                  <div className="glass-card p-6">
                    <div className="text-3xl mb-4">{m.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{m.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{m.description}</p>
                    <div className="flex items-center gap-2 text-purple-600 text-sm font-medium">
                      <span>Bekijk model</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <SectionReveal>
          <div className="max-w-4xl mx-auto text-center rounded-3xl p-12 md:p-20"
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(139,92,246,0.02) 100%)' }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-gray-900">Klaar om te starten met {model.name}?</h2>
            <p className="text-lg text-gray-500 mb-8 max-w-lg mx-auto">
              Boek je gratis kickstart call en ontdek hoe jij kunt beginnen.
            </p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
              Boek Nu Gratis Kickstart Call
            </a>
            <p className="text-sm text-gray-400 mt-6">100% gratis &middot; Geen verplichtingen &middot; Duurt 30 minuten</p>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
