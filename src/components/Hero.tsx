
import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Code, Smartphone, Database, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { containerVariants, itemVariants } from '../constants/animations';
import process from 'process';

const Hero = () => {
  const { t } = useLanguage();

  const skills = [
    { icon: Code, color: '#14B8A6', label: t('hero.fullStack') },
    { icon: Smartphone, color: '#0EA5E9', label: t('hero.mobile') },
    { icon: Database, color: '#14B8A6', label: t('hero.cloud') },
    { icon: Globe, color: '#38BDF8', label: t('hero.devOps') },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-12 md:py-0 bg-main">

      <style>{`
        @keyframes heroBlobPulseA {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        @keyframes heroBlobPulseB {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        @keyframes heroGlowPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        @keyframes heroCornerPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes heroLabelFloat {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -10px); }
        }
        .hero-blob-a {
          animation: heroBlobPulseA 8s ease-in-out infinite;
        }
        .hero-blob-b {
          animation: heroBlobPulseB 10s ease-in-out infinite;
          animation-delay: 2s;
        }
        .hero-glow {
          animation: heroGlowPulse 4s ease-in-out infinite;
        }
        .hero-corner-tl {
          animation: heroCornerPulse 2s ease-in-out infinite;
        }
        .hero-corner-br {
          animation: heroCornerPulse 2s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .hero-floating-label {
          animation: heroLabelFloat 3s ease-in-out infinite;
        }
      `}</style>

      {/* Main Navy Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071426] via-[#102A43] to-[#071426]"></div>

      {/* Background Decorative Blobs */}
      <div className="hero-blob-a absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#14B8A6]/15 to-transparent rounded-full blur-3xl" />
      <div className="hero-blob-b absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#0EA5E9]/25 to-transparent rounded-full blur-3xl" />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDgsMTYzLDE4NCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="hero-glow absolute -inset-8 bg-gradient-to-r from-[#14B8A6] via-[#0EA5E9] to-[#14B8A6] rounded-full blur-2xl opacity-25" />

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                className="relative w-full aspect-square rounded-3xl overflow-hidden border-4 border-[#23445E] shadow-2xl"
                style={{
                  boxShadow: '0 30px 80px rgba(20, 184, 166, 0.2), 0 0 60px rgba(14, 165, 233, 0.15), inset 0 0 30px rgba(7, 20, 38, 0.2)',
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#102A43] via-[#163B56] to-[#102A43] relative">
                  <img
                    src={`${process.env.PUBLIC_URL}/me.jpeg`}
                    alt="Maryam Fajri"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '60% center' }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-600/5 via-transparent to-transparent"></div>
                </div>
              </motion.div>

              {/* Decorative Corners */}
              <div className="hero-corner-tl absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-[#14B8A6] rounded-tl-2xl" />
              <div className="hero-corner-br absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-[#0EA5E9] rounded-br-2xl" />

              {/* Floating Label */}
              <div
                className="hero-floating-label absolute -bottom-6 left-1/2 bg-card px-8 py-4 rounded-full shadow-xl border-2 border-[#14B8A6]"
                style={{
                  boxShadow: '0 10px 30px rgba(20, 184, 166, 0.25)',
                }}
              >
                <p className="text-base font-bold gradient-text whitespace-nowrap">{t('hero.label')}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="order-1 lg:order-2 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-lg text-secondary font-medium">{t('hero.greeting')}</p>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">{t('hero.name')}</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-secondary mb-2">
              {t('hero.title')}
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-secondary mb-6">
              {t('hero.subtitle')}
            </motion.p>

            <motion.p variants={itemVariants} className="text-base text-secondary mb-6">
              {t('hero.description')}
            </motion.p>

            <motion.p variants={itemVariants} className="text-sm text-secondary mb-8">
              {t('hero.details')}
            </motion.p>

            {/* Skills */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start space-x-6 mb-10">
              {skills.map(({ icon: Icon, color, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="flex flex-col items-center"
                >
                  <Icon style={{ color }} className="mb-2" size={32} />
                  <span className="text-sm text-secondary">{label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
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
                className="bg-gradient-to-r from-[#14B8A6] to-[#0EA5E9] text-[#071426] px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover-lift hover:shadow-lg hover:shadow-[#14B8A6]/40 transition-all duration-300 focus:outline-2 focus:outline-offset-2 focus:outline-[#14B8A6]"
                aria-label={t('hero.viewProjects')}
              >
                {t('hero.viewProjects')}
                <ArrowRight size={20} />
              </motion.button>

              <motion.a
                href={`${process.env.PUBLIC_URL}/Mon_cv.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#14B8A6] text-[#14B8A6] px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover-lift hover:bg-[#14B8A6] hover:text-[#071426] transition-all duration-300 focus:outline-2 focus:outline-offset-2 focus:outline-[#14B8A6]"
                aria-label={t('hero.downloadCV')}
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
