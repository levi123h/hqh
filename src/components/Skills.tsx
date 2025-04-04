'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Skills = () => {
  // Categories with their logos
  const skillCategories = [
    {
      id: "01",
      title: "Paid advertising",
      description: "Driving targeted traffic and conversions with strategic ad placement",
      logos: [
        { src: "/images/Logo/Paid ads/google ads.png", alt: "Google Ads" },
        { src: "/images/Logo/Paid ads/meta.png", alt: "Meta Ads" },
        { src: "/images/Logo/Paid ads/linkedin.png", alt: "LinkedIn Ads" },
        { src: "/images/Logo/Paid ads/X.png", alt: "X Ads" },
        { src: "/images/Logo/Paid ads/pinterest.png", alt: "Pinterest Ads" }
      ]
    },
    {
      id: "02",
      title: "SEO/ SEM",
      description: "Optimizing visibility and ranking in search engines",
      logos: [
        { src: "/images/Logo/SEO/semrush.png", alt: "SEMrush" },
        { src: "/images/Logo/SEO/yoast.png", alt: "Yoast SEO" },
        { src: "/images/Logo/SEO/Rankmath.png", alt: "Rank Math" },
        { src: "/images/Logo/SEO/google-keyword.png", alt: "Google Keyword Planner" }
      ]
    },
    {
      id: "03",
      title: "Marketing Automation",
      description: "Streamlining and scaling marketing processes",
      logos: [
        { src: "/images/Logo/Marketing automation/Zapier.png", alt: "Zapier" },
        { src: "/images/Logo/Marketing automation/saleforce pardot.png", alt: "Salesforce Pardot" }
      ]
    },
    {
      id: "04",
      title: "Reporting & Analytics",
      description: "Transforming data into actionable insights",
      logos: [
        { src: "/images/Logo/Report/GA4.png", alt: "Google Analytics 4" },
        { src: "/images/Logo/Report/LOOKER.png", alt: "Looker Studio" },
        { src: "/images/Logo/Report/mixpanel.png", alt: "Mixpanel" }
      ]
    },
    {
      id: "05",
      title: "Email Marketing",
      description: "Creating personalized customer journeys that convert",
      logos: [
        { src: "/images/Logo/Email Marketing/Mailchimp.png", alt: "Mailchimp" },
        { src: "/images/Logo/Email Marketing/Sharpspring-real.png", alt: "SharpSpring" }
      ]
    },
    {
      id: "06",
      title: "Social Media",
      description: "Building brand presence and engagement across platforms",
      logos: [
        { src: "/images/Logo/Social Media/Hoot suite.png", alt: "Hootsuite" },
        { src: "/images/Logo/Social Media/Metricool.png", alt: "Metricool" },
        { src: "/images/Logo/Social Media/Later.png", alt: "Later" }
      ]
    },
    {
      id: "07",
      title: "CRM",
      description: "Managing customer relationships for retention and growth",
      logos: [
        { src: "/images/Logo/CRM/hubspot.png", alt: "HubSpot" },
        { src: "/images/Logo/CRM/odoo.png", alt: "Odoo" },
        { src: "/images/Logo/CRM/Bitrix.png", alt: "Bitrix" }
      ]
    },
    {
      id: "08",
      title: "CRO",
      description: "Enhancing website performance to maximize conversions",
      logos: [
        { src: "/images/Logo/CRO/hotjar.png", alt: "Hotjar" },
        { src: "/images/Logo/CRO/optimizely.png", alt: "Optimizely" }
      ]
    },
    {
      id: "09",
      title: "Project Management",
      description: "Organizing workflows to deliver results efficiently",
      logos: [
        { src: "/images/Logo/Project management/monday.png", alt: "Monday.com" },
        { src: "/images/Logo/Project management/notion.png", alt: "Notion" },
        { src: "/images/Logo/Project management/click up.png", alt: "ClickUp" }
      ]
    },
    {
      id: "10",
      title: "AI",
      description: "Leveraging artificial intelligence to enhance marketing strategies",
      logos: [
        { src: "/images/Logo/AI/GPT.png", alt: "GPT" },
        { src: "/images/Logo/AI/CLAUDE.png", alt: "Claude" },
        { src: "/images/Logo/AI/CURSOR REAL.png", alt: "Cursor" },
        { src: "/images/Logo/AI/DEEPSEEK.png", alt: "DeepSeek" }
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl mb-12 md:mb-20"
        >
          &#123; MY SKILL SET &#125;
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-0">
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Number(category.id.replace('0', '')) * 0.05 }}
              whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-gray-200 mr-3">{category.id}</span>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <p className="text-sm text-gray-500 mb-2 min-h-[30px]">{category.description}</p>
              
              <div className="flex flex-wrap gap-x-4 gap-y-0 mt-2 items-center justify-center border-t border-gray-100 pt-2">
                {category.logos.length > 0 ? (
                  category.logos.map((logo, index) => (
                    <motion.div 
                      key={index} 
                      className="relative w-[45%] md:w-[150px] h-[120px]"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="object-contain w-full h-full"
                      />
                    </motion.div>
                  ))
                ) : (
                  <p className="text-sm text-gray-400 italic">Logos coming soon</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 