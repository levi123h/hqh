'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="flex items-center space-x-2 text-sm hover:opacity-70 transition-opacity"
          >
            <span>&#123; BACK TO TOP &#125;</span>
          </motion.button>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <p className="text-sm">© Design & Build by Hồ Quốc Hưng</p>
            <p className="text-sm text-gray-500">©{currentYear}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 