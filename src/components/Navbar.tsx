import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { models, CALENDLY_URL } from '../data/models';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modelsOpen, setModelsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setModelsOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          background: scrolled ? 'rgba(0,0,0,0.75)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
            HIBO<span className="relative">O<span className="absolute -right-2.5 top-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500" /></span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm text-white/60 hover:text-white transition-colors">Home</Link>
            <Link to="/training" className="text-sm text-white/60 hover:text-white transition-colors">Training</Link>
            <div className="relative" onMouseEnter={() => setModelsOpen(true)} onMouseLeave={() => setModelsOpen(false)}>
              <button className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1">
                Modellen <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {modelsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 glass-card p-2"
                  >
                    {models.map((m) => (
                      <Link
                        key={m.slug}
                        to={`/model/${m.slug}`}
                        className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <span>{m.icon}</span>
                        <span>{m.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/contact" className="text-sm text-white/60 hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="hidden md:block">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm !py-2.5 !px-6">
              Gratis Kickstart
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {[
                { to: '/', label: 'Home' },
                { to: '/training', label: 'Training' },
                { to: '/contact', label: 'Contact' },
              ].map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={link.to} className="text-2xl font-semibold text-white">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <p className="text-sm text-white/40 mb-3 text-center">Modellen</p>
                <div className="flex flex-wrap justify-center gap-2 max-w-xs">
                  {models.map((m) => (
                    <Link
                      key={m.slug}
                      to={`/model/${m.slug}`}
                      className="text-sm px-3 py-1.5 rounded-full bg-white/5 text-white/70 hover:text-white"
                    >
                      {m.icon} {m.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4">
                  Gratis Kickstart
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
