
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { number: "4", label: t('about.stats.internships') },
    { number: "7", label: t('about.stats.languages') },
    { number: "3", label: t('about.stats.saas') },
    { number: "Bac+5", label: t('about.stats.degree') },
  ];

  const interests = [
    { icon: "💻", title: t('about.interests.saas.title'), description: t('about.interests.saas.description') },
    { icon: "☁️", title: t('about.interests.cloud.title'), description: t('about.interests.cloud.description') },
    { icon: "🧠", title: t('about.interests.neuro.title'), description: t('about.interests.neuro.description') },
    { icon: "🐎", title: t('about.interests.riding.title'), description: t('about.interests.riding.description') },
  ];

  return (
    <section id="about" className="py-32 bg-[#02232c] relative overflow-hidden">

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent opacity-50"></div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-20 right-0 w-80 h-80 bg-[#02232c]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6 text-[#F8FAFC]"
          >
            {t('about.title')}{' '}
            <span className="gradient-text">
              {t('about.titleHighlight')}
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-[#CBD5E1] max-w-3xl mx-auto"
          >
            {t('about.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* My Journey */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="bg-[#02232c] border border-[#263D56] rounded-2xl p-8 shadow-lg hover-lift hover:border-[#14B8A6] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#F8FAFC]">
                {t('about.myJourney')}
              </h3>

              <div className="space-y-4 text-[#CBD5E1]">
                <p>{t('about.paragraph1')}</p>
                <p>{t('about.paragraph2')}</p>
                <p>{t('about.paragraph3')}</p>
                <p>{t('about.paragraph4')}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Statistics and interests */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 mb-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#02232c] border border-[#263D56] p-6 rounded-xl shadow-lg text-center hover-lift hover:border-[#14B8A6] transition-all duration-300"
                >
                  <div className={`text-3xl font-bold mb-2 ${index % 2 === 0 ? 'text-[#F8FAFC]' : 'text-[#22D3EE]'}`}>
                    {stat.number}
                  </div>

                  <div className="text-[#F8FAFC] font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Interests */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#F8FAFC] flex items-center">
                <Heart className="text-[#14B8A6] mr-2" size={24} />
                {t('about.passions')}
              </h3>

              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="bg-[#02232c] border border-[#263D56] p-4 rounded-lg shadow-md flex items-center space-x-4 hover-lift hover:border-[#22D3EE] transition-all duration-300"
                >
                  <div className="text-2xl">
                    {interest.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#F8FAFC]">
                      {interest.title}
                    </h4>

                    <p className="text-sm text-[#22D3EE]">
                      {interest.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
