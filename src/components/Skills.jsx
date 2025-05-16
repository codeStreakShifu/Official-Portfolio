// 3. SKILLS SECTION - src/sections/Skills.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { FaHtml5, FaCss3Alt, FaReact, FaFigma, FaInstagram, FaFacebook, FaJs, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SiAdobephotoshop, SiTailwindcss, SiAdobeillustrator } from 'react-icons/si';

const backgroundImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80";

const categories = ['All', 'Development', 'Design', 'Social'];

const skills = [
  // Development
  { icon: <FaHtml5 />, label: 'HTML5', category: 'Development', proficiency: 90 },
  { icon: <FaCss3Alt />, label: 'CSS3', category: 'Development', proficiency: 85 },
  { icon: <FaReact />, label: 'React', category: 'Development', proficiency: 88 },
  { icon: <FaJs />, label: 'JavaScript', category: 'Development', proficiency: 85 },
  { icon: <SiTailwindcss />, label: 'Tailwind', category: 'Development', proficiency: 92 },
  
  // Design
  { icon: <FaFigma />, label: 'Figma', category: 'Design', proficiency: 88 },
  { icon: <SiAdobephotoshop />, label: 'Photoshop', category: 'Design', proficiency: 85 },
  { icon: <SiAdobeillustrator />, label: 'Illustrator', category: 'Design', proficiency: 80 },
  
  // Social Media
  { icon: <FaInstagram />, label: 'Instagram', category: 'Social', proficiency: 95 },
  { icon: <FaFacebook />, label: 'Facebook', category: 'Social', proficiency: 90 },
  { icon: <FaTwitter />, label: 'Twitter', category: 'Social', proficiency: 88 },
  { icon: <FaLinkedin />, label: 'LinkedIn', category: 'Social', proficiency: 85 }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <Parallax
      blur={0}
      bgImage={backgroundImage}
      bgImageAlt="Skills Background"
      strength={200}
    >
      <section id="skills" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Expertise
          </motion.h2>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                  ${activeCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSkills.map(({ icon, label, proficiency }, i) => (
              <motion.div
                key={label}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onHoverStart={() => setHoveredSkill(label)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <motion.div
                  className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/10
                    hover:bg-white/20 transition-all duration-300 flex flex-col items-center"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center justify-center w-16 h-16 mb-4 text-5xl text-white 
                    transition-transform duration-300 group-hover:scale-110 
                    bg-white/5 rounded-full">
                    {icon}
                  </div>
                  <h3 className="text-white font-medium mb-2">{label}</h3>
                  
                  {/* Proficiency bar */}
                  <div className="h-1 w-full bg-white/20 rounded-full mt-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: hoveredSkill === label ? `${proficiency}%` : "0%" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                  <p className="text-white/60 text-sm mt-2">{proficiency}%</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default Skills;
