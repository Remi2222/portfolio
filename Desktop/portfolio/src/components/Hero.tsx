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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20 md:py-0" style={{ paddingTop: '80px' }}>
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
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Photo Section - Left */}
          <motion.div
            variants={itemVariants}
            className="order-2 lg:order-1"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Multi-Layer Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                }}
                className="absolute -inset-8 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 rounded-full blur-3xl opacity-40"
              />
              
              <motion.div
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 0],
                }}
                transition={{
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                }}
                className="absolute -inset-6 bg-gradient-to-l from-blue-400 via-purple-400 to-pink-400 rounded-full blur-2xl opacity-30"
              />
              
              {/* Photo Container - Large Rounded Square */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                className="relative w-full aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-2xl"
                style={{
                  boxShadow: '0 30px 80px rgba(102, 126, 234, 0.5), 0 0 60px rgba(217, 70, 239, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative">
                  <img
                    src={`${process.env.PUBLIC_URL}/me.jpg`}
                    alt="Maryam Fajri"
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: '60% center',
                      transform: 'scale(1.15)',
                    }}
                  />
                  {/* Subtle Gradient Overlay - Reduced opacity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-600/5 via-transparent to-transparent"></div>
                </div>
              </motion.div>

              {/* Animated Corner Accents */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-primary-500 rounded-tl-2xl"
              />
              <motion.div
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary-500 rounded-br-2xl"
              />

              {/* Floating Particles Around Photo */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.sin(i) * 10, 0],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: ['#0ea5e9', '#a78bfa', '#d946ef'][i % 3],
                    boxShadow: `0 0 10px ${['#0ea5e9', '#a78bfa', '#d946ef'][i % 3]}`,
                    left: `${15 + i * 15}%`,
                    top: i % 2 === 0 ? '10%' : '90%',
                  }}
                />
              ))}
              
              {/* Floating Badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-8 py-4 rounded-full shadow-xl border-2 border-primary-200"
                style={{
                  boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
                }}
              >
                <p className="text-base font-bold gradient-text whitespace-nowrap">Full Stack Developer</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content - Right */}
          <motion.div
            variants={containerVariants}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
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
              className="text-lg md:text-xl text-gray-600 mb-6"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base text-gray-500 mb-6"
            >
              {t('hero.description')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm text-gray-500 mb-8"
            >
              {t('hero.details')}
            </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start space-x-6 mb-10"
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
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
