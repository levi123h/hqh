'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  client: string;
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Wagamama redesign',
    client: 'TRG',
    tags: ['UI DESIGN', 'UX DESIGN', 'ART DIRECTION'],
    image: '/images/project1.jpg',
  },
  {
    id: '2',
    title: 'Verizon Stream TV',
    client: 'Verizon',
    tags: ['UI DESIGN', 'UX DESIGN'],
    image: '/images/project2.jpg',
  },
  {
    id: '3',
    title: 'Future Customer Journey',
    client: 'BT',
    tags: ['DESIGN'],
    image: '/images/project3.jpg',
  },
  {
    id: '4',
    title: 'Nielsen IQ redesign',
    client: 'Nielsen',
    tags: ['UI DESIGN', 'UX DESIGN'],
    image: '/images/project4.jpg',
  },
  {
    id: '5',
    title: 'PNC Bank',
    client: 'PNC',
    tags: ['UI DESIGN', 'ART DIRECTION'],
    image: '/images/project5.jpg',
  },
  {
    id: '6',
    title: 'TRM Bullion App',
    client: 'TRM',
    tags: ['UI DESIGN'],
    image: '/images/project6.jpg',
  },
];

const FeaturedWork = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl mb-12 md:mb-20"
        >
          &#123; Featured work &#125;
        </motion.h2>

        <div 
          ref={containerRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] bg-gray-200 mb-4 overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10"></div>
                {/* This would be a real image in a production environment */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                  {project.title} Image
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium">
                  {project.client}
                  <span className="font-normal"> {project.title}</span>
                </h3>
                <div className="flex flex-wrap mt-2 gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork; 