// 2. ABOUT SECTION - src/sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import profileImg from '../assets/images/prof-image.jpg';
const About = () => {
    // Image from Unsplash - Professional desk setup
    const backgroundImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80";

    // Profile image from Unsplash - Professional headshot
    const profileImage = profileImg;  // Note: path starts from public folder

    const fadeInUp = {
        initial: { y: 60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    return (
        <Parallax
            blur={0}
            bgImage={backgroundImage}
            bgImageAlt="Background"
            strength={200}
        >
            <section id="about" className="min-h-screen relative">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

                <div className="container mx-auto px-6 py-20 relative">
                    <div className="flex flex-col md:flex-row items-center gap-12 backdrop-blur-md bg-white/10 dark:bg-gray-900/30 p-8 rounded-2xl shadow-2xl">
                        <div className="relative group">
                            <motion.div
                                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.img
                                src={profileImage}
                                alt="Profile"
                                className="relative w-64 h-64 rounded-full shadow-lg object-cover border-4 border-white dark:border-gray-800"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                            />
                        </div>

                        <motion.div
                            className="max-w-xl text-white"
                            initial="initial"
                            whileInView="animate"
                        >
                            <motion.h2
                                className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                                {...fadeInUp}
                            >
                                About Me
                            </motion.h2>

                            <motion.p
                                className="text-lg mb-6 leading-relaxed"
                                {...fadeInUp}
                                transition={{ delay: 0.2 }}
                            >
                                With more than a year of hands-on experience in both graphic design and development, I specialize in crafting visually appealing designs while building static and advance websites. My goal is to merge creativity with technology, delivering innovative and high-quality solutions tailored to your needs.
                            </motion.p>

                            <motion.div
                                className="space-y-4"
                                {...fadeInUp}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="flex flex-col gap-4">
                                    {[
                                        { title: "Full-stack Development", value: "90%" },
                                        { title: "UI/UX Design", value: "85%" },
                                        { title: "Social Media Strategy", value: "95%" }
                                    ].map((skill, index) => (
                                        <div key={index} className="space-y-2">
                                            <div className="flex justify-between">
                                                <span>{skill.title}</span>
                                                <span>{skill.value}</span>
                                            </div>
                                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: skill.value }}
                                                    transition={{ duration: 1, delay: 0.2 * index }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Parallax>
    );
};

export default About;