import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import TrainingPage from './pages/TrainingPage';
import ContactPage from './pages/ContactPage';
import VSLPage from './pages/VSLPage';
import ModelDetailPage from './pages/ModelDetailPage';
import ThankYouPage from './pages/ThankYouPage';
import TermsPage from './pages/TermsPage';

export default function App() {
  const location = useLocation();
  const isVSL = location.pathname === '/vsl';

  return (
    <>
      <ScrollToTop />
      {!isVSL && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/vsl" element={<VSLPage />} />
          <Route path="/model/:slug" element={<ModelDetailPage />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      {!isVSL && <Footer />}
    </>
  );
}
