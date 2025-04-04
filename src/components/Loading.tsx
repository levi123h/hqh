'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center"
      >
        <h1 className="loading-text mb-8">&#123; LOADING &#125;</h1>
        <p className="text-3xl font-bold mb-4">{progress}%</p>
      </motion.div>
    </div>
  );
};

export default Loading; 