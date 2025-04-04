'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const industries = [
  'Healthcare',
  'Education',
  'Fashion',
  'DIY',
  'Fitness & Sports',
  'Hospitality',
  'Real Estate',
  'FMCG',
  'My expertise spans multiple industries.'
];

const IndustryShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getIntervalDuration = (index: number): number => {
      return index === industries.length - 1 ? 2000 : 500;
    };

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === industries.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, getIntervalDuration(currentIndex));

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          console.error("Video playback error:", e);
        }}
      >
        <source src="/videos/video 2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h2 className="text-[70px] font-bold text-white">
              {industries[currentIndex]}
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IndustryShowcase; 