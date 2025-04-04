'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const AboutMe = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about-me" className="py-14 md:py-20 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2 items-center"
        >
          <div className="order-2 md:order-1 max-w-full pr-0 md:pr-4 mt-16 md:mt-0 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">About me</h2>
            <div className="space-y-6">
              <p className="text-lg md:text-[50px] leading-[1.1] md:leading-[1.15] font-semibold max-w-full line-clamp-6 h-auto md:h-[330px] flex items-center">
                A strategic leader with a global outlook, I drive results through visionary, people-focused, and impactful marketing.
              </p>
              <p className="text-base md:text-xl text-gray-700 leading-relaxed">
                Passionate about crafting data-driven marketing strategies, I excel at turning insights into action, fostering growth, and inspiring teams.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-80 h-80 md:w-96 md:h-96 overflow-visible"
            >
              {/* Cosmic web background animation */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] z-0 overflow-hidden">
                <motion.svg 
                  className="absolute w-full h-full" 
                  viewBox="0 0 400 400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  {/* Background gradients */}
                  <defs>
                    {/* Multi-color gradients for particles */}
                    <linearGradient id="purpleBlueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(147,51,234,0.95)" />
                      <stop offset="100%" stopColor="rgba(59,130,246,0.95)" />
                    </linearGradient>
                    
                    <linearGradient id="blueTealGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(37,99,235,0.95)" />
                      <stop offset="100%" stopColor="rgba(20,184,166,0.95)" />
                    </linearGradient>
                    
                    <linearGradient id="tealPinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(20,184,166,0.95)" />
                      <stop offset="100%" stopColor="rgba(244,63,94,0.95)" />
                    </linearGradient>
                    
                    <linearGradient id="pinkPurpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(244,63,94,0.95)" />
                      <stop offset="100%" stopColor="rgba(147,51,234,0.95)" />
                    </linearGradient>
                    
                    {/* Glow filters */}
                    <filter id="blueGlow" height="300%" width="300%" x="-100%" y="-100%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feFlood floodColor="rgba(59,130,246,0.4)" result="blueFlood"/>
                      <feComposite in="blueFlood" in2="coloredBlur" operator="in" result="blueGlow"/>
                      <feMerge>
                        <feMergeNode in="blueGlow"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    
                    <filter id="purpleGlow" height="300%" width="300%" x="-100%" y="-100%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feFlood floodColor="rgba(147,51,234,0.4)" result="purpleFlood"/>
                      <feComposite in="purpleFlood" in2="coloredBlur" operator="in" result="purpleGlow"/>
                      <feMerge>
                        <feMergeNode in="purpleGlow"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    
                    <filter id="tealGlow" height="300%" width="300%" x="-100%" y="-100%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feFlood floodColor="rgba(20,184,166,0.4)" result="tealFlood"/>
                      <feComposite in="tealFlood" in2="coloredBlur" operator="in" result="tealGlow"/>
                      <feMerge>
                        <feMergeNode in="tealGlow"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    
                    <filter id="pinkGlow" height="300%" width="300%" x="-100%" y="-100%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feFlood floodColor="rgba(244,63,94,0.4)" result="pinkFlood"/>
                      <feComposite in="pinkFlood" in2="coloredBlur" operator="in" result="pinkGlow"/>
                      <feMerge>
                        <feMergeNode in="pinkGlow"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  <motion.g
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
                  >
                    {/* Generate 60 colorful stars with larger sizes */}
                    {Array.from({ length: 60 }).map((_, i) => {
                      const angle = (i / 60) * Math.PI * 2;
                      const distanceFromCenter = 80 + Math.random() * 120;
                      const x = 200 + Math.cos(angle) * distanceFromCenter;
                      const y = 200 + Math.sin(angle) * distanceFromCenter;
                      const size = 1.2 + Math.random() * 2.5;
                      
                      // Choose color based on position
                      const colorIndex = Math.floor(Math.random() * 4);
                      const colors = [
                        `rgba(37,99,235,${0.6 + Math.random() * 0.4})`,   // blue
                        `rgba(147,51,234,${0.6 + Math.random() * 0.4})`,  // purple
                        `rgba(20,184,166,${0.6 + Math.random() * 0.4})`,  // teal
                        `rgba(244,63,94,${0.6 + Math.random() * 0.4})`    // pink
                      ];
                      const gradients = [
                        "url(#blueTealGradient)",
                        "url(#purpleBlueGradient)",
                        "url(#tealPinkGradient)",
                        "url(#pinkPurpleGradient)"
                      ];
                      const filters = ["url(#blueGlow)", "url(#purpleGlow)", "url(#tealGlow)", "url(#pinkGlow)"];
                      
                      const shouldUseGradient = Math.random() > 0.4; // Increased chance for gradients
                      const shouldUseFilter = Math.random() > 0.3;   // Increased chance for glow
                      const fill = shouldUseGradient ? gradients[colorIndex % gradients.length] : colors[colorIndex];
                      
                      return (
                        <motion.circle 
                          key={i}
                          cx={x} 
                          cy={y} 
                          r={size} 
                          fill={fill}
                          filter={shouldUseFilter ? filters[colorIndex % filters.length] : ""}
                          animate={{
                            opacity: [0.5, 1, 0.5],
                            r: [size, size * 1.8, size]
                          }}
                          transition={{
                            duration: 4 + Math.random() * 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 3
                          }}
                        />
                      );
                    })}
                    
                    {/* Star connections - colorful web lines */}
                    <g>
                      {Array.from({ length: 80 }).map((_, i) => {
                        const angle1 = (i / 80) * Math.PI * 2;
                        const angle2 = ((i + 20) / 80) * Math.PI * 2;
                        const distance1 = 100 + Math.random() * 100;
                        const distance2 = 100 + Math.random() * 100;
                        const x1 = 200 + Math.cos(angle1) * distance1;
                        const y1 = 200 + Math.sin(angle1) * distance1;
                        const x2 = 200 + Math.cos(angle2) * distance2;
                        const y2 = 200 + Math.sin(angle2) * distance2;
                        
                        // Vary the colors of the web lines
                        const colorIndex = i % 4;
                        const colors = [
                          "rgba(37,99,235,0.2)",   // blue
                          "rgba(147,51,234,0.2)",  // purple
                          "rgba(20,184,166,0.2)",  // teal
                          "rgba(244,63,94,0.2)"    // pink
                        ];
                        
                        return (
                          <motion.line 
                            key={i}
                            x1={x1} 
                            y1={y1} 
                            x2={x2} 
                            y2={y2}
                            stroke={colors[colorIndex]}
                            strokeWidth="0.4"
                            animate={{
                              opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{
                              duration: 5 + Math.random() * 7,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: Math.random() * 2
                            }}
                          />
                        );
                      })}
                    </g>
                    
                    {/* Additional cross connections with varied colors */}
                    <g>
                      {Array.from({ length: 40 }).map((_, i) => {
                        const angle1 = (i / 40) * Math.PI * 2;
                        const angle2 = ((i + 10) / 40) * Math.PI * 2;
                        const distance1 = 80 + Math.random() * 120;
                        const distance2 = 80 + Math.random() * 120;
                        const x1 = 200 + Math.cos(angle1) * distance1;
                        const y1 = 200 + Math.sin(angle1) * distance1;
                        const x2 = 200 + Math.cos(angle2) * distance2;
                        const y2 = 200 + Math.sin(angle2) * distance2;
                        
                        // Alternate colors
                        const colorIndex = (i + 2) % 4;
                        const colors = [
                          "rgba(37,99,235,0.15)",   // blue
                          "rgba(147,51,234,0.15)",  // purple
                          "rgba(20,184,166,0.15)",  // teal
                          "rgba(244,63,94,0.15)"    // pink
                        ];
                        
                        return (
                          <motion.line 
                            key={`cross-${i}`}
                            x1={x1} 
                            y1={y1} 
                            x2={x2} 
                            y2={y2}
                            stroke={colors[colorIndex]}
                            strokeWidth="0.3"
                            animate={{
                              opacity: [0.05, 0.2, 0.05]
                            }}
                            transition={{
                              duration: 8 + Math.random() * 6,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: Math.random() * 3
                            }}
                          />
                        );
                      })}
                    </g>
                  </motion.g>
                </motion.svg>
              </div>
              
              {/* Image without hover effect */}
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] z-10 bg-center bg-contain bg-no-repeat scale-125"
                style={{
                  backgroundImage: "url('/images/placeholder-profile-4.png')"
                }}
              ></div>
              
              {/* Floating particles with enhanced colors */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute w-4 h-4 rounded-full bg-purple-400/60 top-1/4 right-1/4 z-20 blur-[1px]"
              />
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  x: [0, 5, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ 
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute w-3 h-3 rounded-full bg-teal-300/50 bottom-1/3 left-1/3 z-20 blur-[1px]"
              />
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  x: [0, -5, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute w-2.5 h-2.5 rounded-full bg-pink-300/50 top-1/3 right-1/4 z-20 blur-[1px]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe; 