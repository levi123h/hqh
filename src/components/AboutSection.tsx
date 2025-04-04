'use client';

import { motion } from 'framer-motion';

const AboutSection = () => {
  const skills = [
    { id: '01', name: 'UI Design' },
    { id: '02', name: 'Brand Design' },
    { id: '03', name: 'UX Design' },
    { id: '04', name: 'No-code Development' },
  ];

  const experiences = [
    {
      role: 'Lead Designer',
      company: 'Born Group',
      year: '2021',
      end: 'NOW',
    },
    {
      role: 'Senior Product Designer',
      company: 'W12',
      year: '2019',
      end: '2021',
    },
    {
      role: 'Middleweight Designer',
      company: 'Nimbletank',
      year: '2018',
      end: '2019',
    },
    {
      role: 'Middleweight Designer',
      company: 'Code D\'azur',
      year: '2015',
      end: '2018',
    },
    {
      role: 'Junior Designer',
      company: 'Mullen Lowe Profero',
      year: '2013',
      end: '2015',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-xl md:text-2xl mb-8">&#123; ABOUT &#125;</h2>
          <div className="max-w-3xl">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-8">
              I pair strong visual design skills with a focus on user-centered design.
            </h3>
            <p className="text-lg md:text-xl">
              With 10 years of experience in the design industry I have been helping to bring brands to life through thoughtful design that resonates.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <h2 className="text-xl md:text-2xl mb-8">&#123; PROFILE &#125;</h2>
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-medium mb-6">
              For over 10 years I have been striving to create bold experiences that connect brands with their audience through design that resonates.
            </h3>
            <p className="text-lg">
              Specializing in experience design, art direction, and digital design, I strive to give each project a distinct personality and visual identity.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-24"
        >
          <h3 className="text-xl md:text-2xl mb-8">My Experience</h3>
          <p className="mb-6 text-lg">
            Throughout my career I've had the privilege of working with some very talented people at a great bunch of companies.
          </p>
          <div className="flex mb-10">
            <a href="#" className="inline-block border border-black px-6 py-2 mr-4 hover:bg-black hover:text-white transition-all duration-300">
              Download CV
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-4 text-left text-sm uppercase">Role</th>
                  <th className="py-4 text-left text-sm uppercase">Company</th>
                  <th className="py-4 text-left text-sm uppercase">Year</th>
                </tr>
              </thead>
              <tbody>
                {experiences.map((exp, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-6 pr-4 text-md md:text-lg">{exp.role}</td>
                    <td className="py-6 pr-4 text-md md:text-lg">{exp.company}</td>
                    <td className="py-6 text-md md:text-lg">
                      {exp.year} {exp.end && <>→ {exp.end}</>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl md:text-2xl mb-8">My Skillset</h3>
          <p className="mb-12 text-lg">
            Over the course of my career, I've strived to develop a diverse set of core skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div key={skill.id} className="border-t border-gray-300 pt-6">
                <span className="text-sm block mb-2">{skill.id}</span>
                <h4 className="text-xl md:text-2xl">{skill.name}</h4>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 