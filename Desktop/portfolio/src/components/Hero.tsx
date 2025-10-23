import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Code, Smartphone, Database, Globe } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-primary-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-secondary-200 rounded-full opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white text-4xl font-bold">
                  MF
                </div>
              </div>
            </div>
          </motion.div>
          {/* Welcome Message */}
        <motion.div
        variants={itemVariants}
        className="mb-6"
        >
        <p className="text-lg text-gray-600 font-medium">
            Hi, I'm Maryam 👋
        </p>
        </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Maryam Fajri</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-4"
          >
            Ingénieure Full-Stack Freelance
            Diplômée en Informatique et Réseaux
          </motion.p>

          {/* Description */}
          <motion.p
        variants={itemVariants}
        className="text-lg text-gray-500 max-w-2xl mx-auto mb-8"
        >
        Je transforme vos idées en solutions digitales innovantes
        </motion.p>

        <motion.p
        variants={itemVariants}
        className="text-base text-gray-500 max-w-3xl mx-auto mb-8"
        >
        Spécialisée en développement web, mobile et intelligence artificielle, 
        je crée des applications performantes qui allient design moderne, 
        sécurité robuste et scalabilité.
        </motion.p>
          {/* Tech Stack Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-8 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="flex flex-col items-center"
            >
              <Code className="text-primary-600 mb-2" size={32} />
              <span className="text-sm text-gray-600">Full-Stack</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="flex flex-col items-center"
            >
              <Smartphone className="text-secondary-600 mb-2" size={32} />
              <span className="text-sm text-gray-600">Mobile</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="flex flex-col items-center"
            >
              <Database className="text-primary-600 mb-2" size={32} />
              <span className="text-sm text-gray-600">IA/ML</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="flex flex-col items-center"
            >
              <Globe className="text-green-600 mb-2" size={32} />
              <span className="text-sm text-gray-600">DevOps</span>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover-lift"
            >
              Voir mes projets
              <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href="/CV_Maryam_Fajri.pdf"
              download="CV_Maryam_Fajri.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover-lift"
            >
              Télécharger CV
              <Download size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
