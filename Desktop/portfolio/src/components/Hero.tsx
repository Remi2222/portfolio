import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Code, Smartphone, Database, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"
        />
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"
        />
        
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-20 blur-3xl"
        />
        
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20 blur-3xl"
        />
        
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-pink-400 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 35, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-cyan-400 rounded-full"
        />
      </div>
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDgsMTYzLDE4NCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white text-5xl font-bold shadow-lg">
                  MF
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <p className="text-lg text-gray-600 font-medium">
              {t('hero.greeting')}
            </p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">{t('hero.name')}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-2"
          >
            {t('hero.title')}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-4"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-500 max-w-2xl mx-auto mb-8"
          >
            {t('hero.description')}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base text-gray-500 max-w-3xl mx-auto mb-8"
          >
            {t('hero.details')}
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-8 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="flex flex-col items-center"
            >
              <Code className="text-primary-600 mb-2" size={32} />
              <span className="text-sm text-gray-600">{t('hero.fullStack')}</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="flex flex-col items-center"
            >
              <Smartphone className="text-secondary-600 mb-2" size={32} />
              <span className="text-sm text-gray-600">{t('hero.mobile')}</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="flex flex-col items-center"
            >
              <Database className="text-primary-600 mb-2" size={32} />
              <span className="text-sm text-gray-600">{t('hero.aiMl')}</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="flex flex-col items-center"
            >
              <Globe className="text-green-600 mb-2" size={32} />
              <span className="text-sm text-gray-600">{t('hero.devOps')}</span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover-lift"
            >
              {t('hero.viewProjects')}
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.a
              href={`${process.env.PUBLIC_URL}/CV_2025-10-23_Maryam_Fajri.pdf`}
              download="CV_Maryam_Fajri.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover-lift"
            >
              {t('hero.downloadCV')}
              <Download size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

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
