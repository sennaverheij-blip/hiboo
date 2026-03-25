import { Link } from 'react-router-dom';
import { models, CALENDLY_URL } from '../data/models';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <p className="text-xl font-bold tracking-tight mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            HIBO<span className="relative">O<span className="absolute -right-2.5 top-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500" /></span>
          </p>
          <p className="text-sm text-white/40 mb-4">Het #1 platform voor online ondernemers</p>
          <p className="text-xs text-white/30">&copy; 2025 HiBOO BV</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-emerald-500 mb-4 font-semibold">Snelle links</p>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-white/50 hover:text-white transition-colors">Home</Link>
            <Link to="/training" className="text-sm text-white/50 hover:text-white transition-colors">Training</Link>
            <Link to="/contact" className="text-sm text-white/50 hover:text-white transition-colors">Contact</Link>
            <Link to="/terms" className="text-sm text-white/50 hover:text-white transition-colors">Algemene Voorwaarden</Link>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-emerald-500 mb-4 font-semibold">Verdienmodellen</p>
          <div className="flex flex-col gap-2">
            {models.map((m) => (
              <Link key={m.slug} to={`/model/${m.slug}`} className="text-sm text-white/50 hover:text-white transition-colors">
                {m.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-emerald-500 mb-4 font-semibold">Bedrijfsinfo</p>
          <div className="flex flex-col gap-2 text-sm text-white/50">
            <p>HiBOO BV</p>
            <p>KvK: 95458751</p>
            <p>BTW: NL866727749B01</p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:text-emerald-400 transition-colors mt-2"
            >
              Gratis Kickstart Call &rarr;
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06] py-6 text-center">
        <p className="text-xs text-white/30">
          &copy; 2025 HiBOO BV &middot; KvK: 95458751 &middot; Alle rechten voorbehouden
        </p>
      </div>
    </footer>
  );
}
