'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const EverestSection = () => {
  return (
    <section id="fact" className="py-8 md:py-12 px-8 md:px-12 bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-1 items-center"
        >
          {/* Image on the left */}
          <div className="order-1 md:order-1 flex justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative w-96 h-96 md:w-[500px] md:h-[500px] overflow-hidden rounded-lg group"
            >
              <Image
                src="/images/Hobby/1.jpg"
                alt="Everest Base Camp"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
                sizes="(max-width: 768px) 384px, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </div>

          {/* Text on the right */}
          <div className="order-2 md:order-2 max-w-full pl-0 md:pl-1">
            <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight mb-6 md:mb-0">Little Fact About Myself</h2>
            <p className="text-lg md:text-[50px] leading-[1.1] md:leading-[1.15] font-semibold max-w-full line-clamp-6 h-auto md:h-[330px] flex items-center text-white mb-8 md:mb-0">
              I have set foot on Everest Base Camp at 5,364m.
            </p>
            <p className="text-base md:text-xl text-gray-300 leading-relaxed">
              The journey was nothing short of grueling—battling extreme weather that dropped to -15°C, trekking through treacherous terrain of rugged rocks and icy paths, and pushing through the thin air above 5,000m, where every step felt heavier than the last.
            </p>
            <p className="text-base md:text-xl text-gray-300 leading-relaxed mt-4">
              It was a test of endurance, resilience, and willpower. This journey reflects who I am—someone who thrives on challenges, pushes limits, and never backs down from the impossible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EverestSection; 