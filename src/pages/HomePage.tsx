import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue } from 'motion/react';
import { ChevronDown, Star } from 'lucide-react';
import { models, testimonials, CALENDLY_URL } from '../data/models';
import SectionReveal from '../components/SectionReveal';
import CountUp from '../components/CountUp';

function HeroSection() {
  const [showScroll, setShowScroll] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setShowScroll(false);
    };
    const handleMouse = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 20);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 20);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, [mouseX, mouseY]);

  const words = ['Verdien', 'online.', 'Op', 'jouw', 'manier.', 'Vanaf', 'dag', 'één.'];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 60%)',
          x: mouseX,
          y: mouseY,
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 50%)',
          x: useTransform(mouseX, v => -v),
          y: useTransform(mouseY, v => -v),
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.25em] text-emerald-500 mb-6 font-semibold"
        >
          Het #1 platform voor online ondernemers
        </motion.p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-[-0.04em] mb-8">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.04 }}
              className="inline-block mr-3 md:mr-4"
            >
              {word}
              {(i === 1 || i === 4) && <br className="hidden md:block" />}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-white/60 max-w-[520px] mx-auto mb-10"
        >
          Ontdek de 10 bewezen online verdienmodellen die gewone Nederlanders gebruiken om financieel vrij te worden.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Boek Gratis Kickstart Call
          </a>
          <Link to="/training" className="btn-secondary">
            Bekijk Training
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-3 text-sm text-white/50"
        >
          <div className="flex -space-x-2">
            {['SB', 'IM', 'IN', 'DS', 'YV'].map((initials, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-white/10 border-2 border-black flex items-center justify-center text-xs text-white/60 font-medium">
                {initials}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
            ))}
          </div>
          <span>Meer dan 500 studenten gestart</span>
        </motion.div>
      </div>

      {showScroll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-white/30 animate-bounce-down" />
        </motion.div>
      )}
    </section>
  );
}

function StatsSection() {
  return (
    <SectionReveal>
      <div className="border-y border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 500, suffix: '+', label: 'Studenten gestart' },
            { value: 10, label: 'Verdienmodellen' },
            { value: 9080, prefix: '€', label: 'Hoogste student sale' },
            { value: 4.9, label: 'Gemiddelde beoordeling', isStar: true },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.isStar ? (
                  <span className="flex items-center justify-center gap-1">
                    4.9 <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                  </span>
                ) : (
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                )}
              </p>
              <p className="text-sm text-white/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

function ModelsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionReveal className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-500 mb-4 font-semibold">10 Verdienmodellen</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Kies jouw weg naar financiële vrijheid.</h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Van complete beginner tot ambitieuze ondernemer — er is een model dat perfect bij jou past.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <SectionReveal key={model.slug} delay={i * 0.05}>
              <Link to={`/model/${model.slug}`} className="block">
                <div className="glass-card p-6 h-full">
                  <div className="text-3xl mb-4">{model.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{model.name}</h3>
                  <p className="text-sm text-white/50 mb-4">{model.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {model.earning}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/10">
                      {model.difficulty}
                    </span>
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StickyScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const activeIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 1, 2, 3]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const unsubscribe = activeIndex.on('change', (v) => setCurrent(Math.round(v)));
    return unsubscribe;
  }, [activeIndex]);

  const features = [
    { headline: 'Geen ervaring nodig.', icon: '🚀', num: '01', title: 'Start als beginner', desc: 'Onze training is ontworpen voor mensen zonder enige ervaring. We nemen je stap voor stap mee, van nul naar je eerste euro online.', detail: '90% van onze studenten begon zonder ervaring' },
    { headline: 'Werk volledig remote.', icon: '🌍', num: '02', title: 'Locatie-onafhankelijk', desc: 'Alles wat je nodig hebt is een laptop en internet. Werk vanuit huis, een café, of waar je ook bent — jij bepaalt.', detail: 'Gemiddeld 4 uur per dag nodig' },
    { headline: 'Community van gelijkgestemden.', icon: '👥', num: '03', title: 'Nooit alleen', desc: 'Krijg toegang tot een actieve community van andere ondernemers. Stel vragen, deel successen, en groei samen.', detail: '500+ actieve leden in de community' },
    { headline: 'Begin binnen één week.', icon: '⚡', num: '04', title: 'Snel resultaat', desc: 'Geen maandenlange voorbereiding. Met onze bewezen methode kun je binnen 7 dagen je eerste stappen zetten.', detail: 'Gemiddeld 5 dagen tot eerste actie' },
  ];

  return (
    <section ref={containerRef} className="relative" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ opacity: current === i ? 1 : 0, y: current === i ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className="absolute"
                style={{ display: current === i ? 'block' : 'none' }}
              >
                <div className="text-6xl mb-6">{f.icon}</div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">{f.headline}</h2>
              </motion.div>
            ))}
          </div>

          <div>
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ opacity: current === i ? 1 : 0, y: current === i ? 0 : 30 }}
                transition={{ duration: 0.5 }}
                style={{ display: current === i ? 'block' : 'none' }}
              >
                <div className="glass-card p-8">
                  <p className="text-emerald-500 text-sm font-bold mb-2">{f.num}</p>
                  <h3 className="text-2xl font-bold text-white mb-4">{f.title}</h3>
                  <p className="text-white/60 mb-6">{f.desc}</p>
                  <div className="glass-card !bg-emerald-500/5 p-4 !border-emerald-500/20">
                    <p className="text-emerald-400 text-sm font-medium">{f.detail}</p>
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

function FounderSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-emerald-500/20 blur-3xl" />
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-2 border-emerald-500/30 flex items-center justify-center">
                  <span className="text-8xl">👨‍💼</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-500 mb-4 font-semibold">Oprichter & Mentor</p>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Faris</h2>
              <blockquote className="text-2xl md:text-3xl font-light italic text-white/80 mb-6 leading-snug">
                "Ik heb de fouten al gemaakt. Jij hoeft dat niet."
              </blockquote>
              <p className="text-white/50 mb-8 leading-relaxed">
                Faris is een ervaren online ondernemer die alle 10 verdienmodellen persoonlijk heeft getest en geperfectioneerd.
                Met meer dan 500 studenten begeleid, heeft hij HIBOO gebouwd vanuit zijn eigen ervaring — zodat jij sneller, slimmer en met minder fouten kunt starten.
              </p>
              <div className="flex gap-8">
                {[
                  { num: '5+', label: 'Jaar ervaring' },
                  { num: '500+', label: 'Studenten' },
                  { num: '10', label: 'Modellen beheerst' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-emerald-500">{s.num}</p>
                    <p className="text-xs text-white/40">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Echte resultaten van echte studenten.</h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <SectionReveal key={t.name} delay={i * 0.1}>
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/40">{t.model}</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-emerald-400 mb-3">{t.result}</p>
                <p className="text-sm text-white/50">{t.text}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'Heb ik ervaring nodig om te beginnen?', a: 'Nee, absoluut niet. HIBOO is speciaal ontworpen voor beginners. Onze training neemt je stap voor stap mee, van het kiezen van je model tot het verdienen van je eerste euro online. De meeste van onze studenten begonnen zonder enige ervaring.' },
    { q: 'Hoeveel tijd heb ik nodig per week?', a: 'We raden aan om minimaal 5-10 uur per week te investeren. Hoe meer tijd je erin stopt, hoe sneller je resultaat ziet. Veel studenten combineren HIBOO met een baan of studie.' },
    { q: 'Welk verdienmodel past het beste bij mij?', a: 'Dat hangt af van je persoonlijkheid, beschikbare tijd, en doelen. Tijdens je gratis kickstart call helpt Faris je om het perfecte model te kiezen op basis van jouw situatie.' },
    { q: 'Wat kost deelname aan HIBOO?', a: 'De prijzen variëren per programma. Boek een gratis kickstart call om de opties te bespreken die bij jouw budget en doelen passen. Er is voor iedereen een passende optie.' },
    { q: 'Is er begeleiding en support?', a: 'Ja! Je krijgt toegang tot wekelijkse Q&A sessies, een actieve community, en persoonlijk mentorship van Faris. Je staat er nooit alleen voor.' },
    { q: 'Kan ik dit combineren met een baan of studie?', a: 'Absoluut. Veel van onze studenten werken parttime of studeren nog. De training is flexibel en je kunt in je eigen tempo werken.' },
    { q: 'Hoe snel kan ik mijn eerste euro verdienen?', a: 'Dit verschilt per model, maar veel studenten verdienen hun eerste euro binnen 1-4 weken na het starten. Sommige modellen, zoals appointment setting, kunnen zelfs sneller resultaat opleveren.' },
    { q: 'Is HIBOO een officieel geregistreerd bedrijf?', a: 'Ja. HIBOO wordt geopereerd door HiBOO BV, KvK: 95458751, BTW: NL866727749B01. We zijn een volledig geregistreerd Nederlands bedrijf.' },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Veelgestelde vragen</h2>
        </SectionReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <SectionReveal key={i} delay={i * 0.05}>
              <div className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-white pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-white/40 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openIndex === i ? '200px' : '0px' }}
                >
                  <p className="px-6 pb-5 text-sm text-white/50 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
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
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ModelsSection />
      <StickyScrollSection />
      <FounderSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
