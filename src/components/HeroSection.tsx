'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Once the component mounts, play the video
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  }, []);

  return (
    <section className="min-h-[430px] md:min-h-screen flex flex-col justify-center relative px-6 md:px-12 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video 
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          onError={(e) => {
            console.error("Video playback error:", e);
          }}
        >
          <source src="/videos/video 5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto z-20 relative"
      >
        <h2 className="text-2xl md:text-3xl mb-6 md:mb-10 text-white">
          Marketing Manager
        </h2>
        <div className="relative">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white">
            Hồ Quốc Hưng
          </h1>
        </div>
        <div className="max-w-2xl mt-10">
          <p className="text-xl md:text-2xl text-white">
            Driving marketing success through strategy, execution, and people-centered leadership
          </p>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
      >
        <p className="text-sm uppercase mb-2 text-white">&#123; SCROLL &#125;</p>
        <div className="scroll-indicator flex justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M12 19L19 12M12 19L5 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 