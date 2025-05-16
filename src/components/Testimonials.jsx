import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { FaQuoteLeft } from 'react-icons/fa';

const backgroundImage = "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80";

const testimonialsData = [
  {
    name: 'Jane Doe',
    role: 'CEO, CompanyX',
    text: 'This service is amazing! Our web traffic increased by 50% after working with this team.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
  },
  {
    name: 'John Smith',
    role: 'Product Manager',
    text: 'Highly professional and delivered on time. Great communication throughout.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  },
  {
    name: 'Sarah Johnson',
    role: 'Designer',
    text: 'Loved the UI/UX work. The website looks clean and modern.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Parallax blur={0} bgImage={backgroundImage} strength={200}>
      <section id="testimonials" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Don't just take my word for it - hear what my clients have to say about our collaboration.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {testimonialsData.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0,
                    x: activeIndex === index ? 0 : 100
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 ${activeIndex === index ? 'relative' : ''}`}
                >
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                    <FaQuoteLeft className="text-4xl text-indigo-400 mb-6" />
                    <p className="text-white text-lg italic mb-8">{testimonial.text}</p>
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-gray-300 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 
                    ${activeIndex === index 
                      ? 'bg-indigo-500 w-6' 
                      : 'bg-white/30 hover:bg-white/50'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
}
