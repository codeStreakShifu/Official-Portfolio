import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { FaCode, FaPaintBrush, FaChartLine } from 'react-icons/fa';

const backgroundImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80";

const servicesData = [
  {
    icon: <FaCode className="text-4xl text-indigo-500 group-hover:text-white transition-colors" />,
    title: 'Web Development',
    description: 'Building responsive and performant websites and web apps.',
    features: ['Custom Websites', 'Web Applications', 'API Integration', 'Performance Optimization']
  },
  {
    icon: <FaPaintBrush className="text-4xl text-indigo-500 group-hover:text-white transition-colors" />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
  },
  {
    icon: <FaChartLine className="text-4xl text-indigo-500 group-hover:text-white transition-colors" />,
    title: 'SEO Optimization',
    description: 'Improving your website ranking and visibility on search engines.',
    features: ['Keyword Research', 'Technical SEO', 'Content Strategy', 'Analytics']
  },
];

export default function Services() {
  return (
    <Parallax blur={0} bgImage={backgroundImage} strength={200}>
      <section id="services" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Professional solutions tailored to your needs. From concept to execution, 
              I deliver high-quality results that exceed expectations.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {servicesData.map(({ icon, title, description, features }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div 
                  className="group h-full bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10
                    hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-700
                    transition-all duration-300"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="mb-6">{icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white">{title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-white/90">{description}</p>
                  
                  <ul className="space-y-3">
                    {features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="flex items-center text-gray-300 group-hover:text-white/90"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3 
                          group-hover:bg-white transition-colors" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Parallax>
  );
}
