'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: 'About Me', href: '#about-me' },
    { name: 'Skill Set', href: '#skills' },
    { name: 'Projects', href: '#clients' },
    { name: 'Fact', href: '#fact' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">
            Hồ Quốc Hưng
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:opacity-70 transition-opacity"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-black"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xl font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Navbar; 