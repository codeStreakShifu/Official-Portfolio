import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/themeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const { dark, setDark } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveSection('hero');
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setScrolled(window.scrollY > 50);

      // Update progress bar
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Update active section
      const sections = LINKS.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `
    fixed inset-x-0 top-0 z-50 
    transition-all duration-300 
    ${scrolled 
      ? 'bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur-md py-2' 
      : 'bg-transparent py-6'}
  `;

  return (
    <motion.nav
      className={navClasses}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* Progress bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          {/* Logo - Updated with onClick handler */}
          <motion.a
            href="#hero"
            onClick={scrollToTop}
            className="text-2xl font-black cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              CodeStreakShifu
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {LINKS.map(({ id, label }) => (
              <motion.li key={id}>
                <a
                  href={`#${id}`}
                  className={`
                    relative py-2 px-1 text-sm font-medium
                    transition-colors duration-300
                    ${activeSection === id 
                      ? 'text-indigo-600 dark:text-indigo-400' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'}
                  `}
                >
                  {label}
                  {activeSection === id && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-indigo-600 dark:bg-indigo-400"
                      layoutId="underline"
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <motion.button
              aria-label="Toggle theme"
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {dark ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
            </motion.button>

            <motion.button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="p-2 md:hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {open ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-6 py-4 space-y-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
              {LINKS.map(({ id, label }) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`
                    block py-2 px-4 rounded-lg text-sm font-medium
                    transition-colors duration-300
                    ${activeSection === id 
                      ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' 
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800'}
                  `}
                  whileHover={{ x: 10 }}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
