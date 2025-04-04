'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">Contact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
            <div>
              <div className="mb-8">
                <p className="text-sm uppercase mb-2">Email</p>
                <Link 
                  href="mailto:hunghq27@gmail.com" 
                  className="text-xl hover:underline"
                >
                  hunghq27@gmail.com
                </Link>
              </div>
            </div>
            
            <div>
              <div>
                <p className="text-sm uppercase mb-2">Phone</p>
                <Link 
                  href="tel:+84969393304" 
                  className="text-xl hover:underline"
                >
                  +84 969 393 304
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection; 