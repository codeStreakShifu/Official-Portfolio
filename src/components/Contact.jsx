import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { useForm } from 'react-hook-form';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiMapPin, FiPhone, FiArrowRight } from 'react-icons/fi';

const backgroundImage = "https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80";

const contactInfo = [
  {
    icon: <FiMail className="text-2xl text-indigo-400" />,
    title: 'Email',
    content: 'codestreakshifu@gmail.com',
    href: 'mailto:codestreakshifu@gmail.com'
  },
  {
    icon: <FiPhone className="text-2xl text-indigo-400" />,
    title: 'Phone',
    content: '09682362002',
    href: 'tel:+639682362002'
  },
  {
    icon: <FiMapPin className="text-2xl text-indigo-400" />,
    title: 'Address',
    content: 'Buhisan Cebu City',
    href: 'https://maps.google.com/?q=Buhisan+Cebu+City'
  }
];

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setIsSubmitting(false);
  };

  return (
    <Parallax blur={0} bgImage={backgroundImage} strength={200}>
      <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
        {/* Background Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-indigo-900/80 backdrop-blur-sm"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Have a project in mind? I'd love to hear about it.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-xl
                        hover:bg-white/10 transition-all duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="p-3 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium mb-1">{info.title}</h4>
                        <p className="text-gray-300">{info.content}</p>
                      </div>
                      <FiArrowRight className="text-gray-400 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10"
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300">
                    I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-white">
                      <div className="flex items-center gap-2">
                        <FiUser className="text-indigo-400" />
                        <span>Name</span>
                      </div>
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white
                        placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1"
                      >
                        {errors.name.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Similar styling for email and message fields */}
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg
                      flex items-center justify-center gap-2 hover:from-indigo-700 hover:to-purple-700
                      transition-all duration-300 disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiSend className={isSubmitting ? 'animate-ping' : ''} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Parallax>
  );
}
