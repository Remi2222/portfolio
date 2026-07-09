import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Code, Smartphone, Database, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { containerVariants, itemVariants } from '../constants/animations';

const Hero = () => {
  const { t } = useLanguage();

  // Extracted skills array — add/remove entries here instead of duplicating markup
  const skills = [
    { icon: Code, color: '#FFD700', label: t('hero.fullStack') },
    { icon: Smartphone, color: '#FFD700', label: t('hero.mobile') },
    { icon: Database, color: '#FFD700', label: t('hero.aiMl') },
    { icon: Globe, color: '#FFD700', label: t('hero.devOps') },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-12 md:py-0 bg-main">
      {/*
        Local styles for the decorative background blobs.
        Moved off framer-motion: these are simple infinite loops with fixed
        keyframe values, so CSS animations are cheaper than JS-driven rAF loops
        (no React reconciliation, browser can composite on its own thread).
      */}
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

      <div className="absolute inset-0 bg-gradient-to-br from-[#0F0015] via-[#1A0033] to-[#0F0015]"></div>

      {/* Background blobs — now plain divs animated via CSS, not framer-motion */}
      <div className="hero-blob-a absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#FFD700]/15 to-transparent rounded-full blur-3xl" />
      <div className="hero-blob-b absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#2D0052]/25 to-transparent rounded-full blur-3xl" />

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
              {/* Glow effect — CSS animation instead of framer-motion */}
              <div className="hero-glow absolute -inset-8 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] rounded-full blur-2xl opacity-25" />

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                className="relative w-full aspect-square rounded-3xl overflow-hidden border-4 border-[#4A2566] shadow-2xl"
                style={{
                  boxShadow: '0 30px 80px rgba(255, 215, 0, 0.2), 0 0 60px rgba(255, 215, 0, 0.15), inset 0 0 30px rgba(26, 0, 51, 0.2)',
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#1A0033] via-[#2D0052] to-[#1A0033] relative">
                  <img
                    src="/me.jpeg"
                    alt={t('hero.photoAlt')}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '60% center' }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-600/5 via-transparent to-transparent"></div>
                </div>
              </motion.div>

              {/* Corner accents — CSS animation */}
              <div className="hero-corner-tl absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-[#FFD700] rounded-tl-2xl" />
              <div className="hero-corner-br absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-[#FFA500] rounded-br-2xl" />

              {/* Floating label — CSS animation */}
              <div
                className="hero-floating-label absolute -bottom-6 left-1/2 bg-card px-8 py-4 rounded-full shadow-xl border-2 border-[#FFD700]"
                style={{ boxShadow: '0 10px 30px rgba(255, 215, 0, 0.25)' }}
              >
                <p className="text-base font-bold gradient-text whitespace-nowrap">{t('Software Engineer')}</p>
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

            {/* Skills row — now driven by the skills array above */}
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
                className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#1A0033] px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover-lift hover:shadow-lg hover:shadow-[#FFD700]/40 transition-all duration-300 focus:outline-2 focus:outline-offset-2 focus:outline-[#FFD700]"
                aria-label={t('hero.viewProjects')}
              >
                {t('hero.viewProjects')}
                <ArrowRight size={20} />
              </motion.button>

              <motion.a
                href="/Mon_cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#FFD700] text-[#FFD700] px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover-lift hover:bg-[#FFD700] hover:text-[#1A0033] transition-all duration-300 focus:outline-2 focus:outline-offset-2 focus:outline-[#FFD700]"
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