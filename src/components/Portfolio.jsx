// 4. PORTFOLIO SECTION - src/sections/Portfolio.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Background image from Unsplash
const backgroundImage = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80";

const projects = [
  { 
    id: 1, 
    title: 'E-Commerce Platform',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
    demo: 'https://demo-ecommerce.com',
    github: 'https://github.com/yourusername/ecommerce',
    desc: 'Full-stack e-commerce platform built with React, Node.js, and MongoDB.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  { 
    id: 2, 
    title: 'Brand Identity Kit',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80',
    demo: 'https://behance.net/yourusername',
    desc: 'Complete brand identity design including logo, color palette, and typography.',
    tech: ['Illustrator', 'Photoshop', 'Figma']
  },
  { 
    id: 3, 
    title: 'Social Media Campaign',
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80',
    demo: 'https://instagram.com/campaign',
    desc: 'Viral marketing campaign that increased engagement by 200%.',
    tech: ['Instagram', 'Facebook', 'Content Strategy']
  }
];

const filters = ['All', 'Web', 'Design', 'Social'];

const Portfolio = () => {
  const [active, setActive] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <Parallax blur={0} bgImage={backgroundImage} strength={200}>
      <section id="portfolio" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2 
            className="text-4xl font-bold text-center text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.p
            className="text-gray-400 text-center mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A collection of my best work across web development, design, and social media
          </motion.p>

          <motion.div 
            className="flex justify-center gap-4 mb-12 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                  ${active === f
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
              >
                {f}
              </button>
            ))}
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filtered.map(({ id, title, image, demo, github, desc, tech }) => (
                <motion.div
                  key={id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                  onHoverStart={() => setHoveredId(id)}
                  onHoverEnd={() => setHoveredId(null)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm 
                    border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                    <img 
                      src={image} 
                      alt={title} 
                      className="aspect-video w-full object-cover opacity-80 group-hover:opacity-100 
                        transition-all duration-300 scale-100 group-hover:scale-110" 
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80" />
                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                      <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 
                        transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        {desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tech.map((t, i) => (
                          <span 
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        {github && (
                          <a 
                            href={github}
                            className="text-white/70 hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FiGithub className="text-xl" />
                          </a>
                        )}
                        <a 
                          href={demo}
                          className="text-white/70 hover:text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink className="text-xl" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default Portfolio;