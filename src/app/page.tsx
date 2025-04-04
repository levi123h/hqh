'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import IndustryShowcase from '../components/IndustryShowcase';
import Clients from '../components/Clients';
import EverestSection from '../components/EverestSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <main className="relative overflow-hidden">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection />
            <AboutMe />
            <Skills />
            <IndustryShowcase />
            <Clients />
            <EverestSection />
            <ContactSection />
            <Footer />
          </motion.div>
        </>
      )}
    </main>
  );
} 