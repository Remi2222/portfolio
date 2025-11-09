import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Award, Heart } from 'lucide-react';
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
    { number: "8+", label: t('about.stats.languages') },
    { number: "7+", label: t('about.stats.projects') },
    { number: "15+", label: t('about.stats.tools') },
    { number: "100%", label: t('about.stats.motivation') },
  ];

  const interests = [
    { icon: "💻", title: t('about.interests.development.title'), description: t('about.interests.development.description') },
    { icon: "🎨", title: t('about.interests.design.title'), description: t('about.interests.design.description') },
    { icon: "📱", title: t('about.interests.mobile.title'), description: t('about.interests.mobile.description') },
    { icon: "🚀", title: t('about.interests.innovation.title'), description: t('about.interests.innovation.description') },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t('about.title')} <span className="gradient-text">{t('about.titleHighlight')}</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('about.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover-lift"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">{t('about.myJourney')}</h3>
              <div className="space-y-4 text-gray-600">
                <p>{t('about.paragraph1')}</p>
                <p>{t('about.paragraph2')}</p>
                <p>{t('about.paragraph3')}</p>
                <p>{t('about.paragraph4')}</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                <User className="text-primary-600" size={20} />
                <div>
                  <p className="font-semibold text-gray-800">{t('about.name')}</p>
                  <p className="text-sm text-gray-600">{t('about.role')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                <MapPin className="text-primary-600" size={20} />
                <div>
                  <p className="font-semibold text-gray-800">{t('about.location')}</p>
                  <p className="text-sm text-gray-600">{t('about.remote')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                <Calendar className="text-primary-600" size={20} />
                <div>
                  <p className="font-semibold text-gray-800">{t('about.availability')}</p>
                  <p className="text-sm text-gray-600">{t('about.immediate')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                <Award className="text-primary-600" size={20} />
                <div>
                  <p className="font-semibold text-gray-800">{t('about.specialization')}</p>
                  <p className="text-sm text-gray-600">{t('about.specializationValue')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 mb-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover-lift"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <Heart className="text-red-500 mr-2" size={24} />
                {t('about.passions')}
              </h3>
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4 hover-lift"
                >
                  <div className="text-2xl">{interest.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{interest.title}</h4>
                    <p className="text-sm text-gray-600">{interest.description}</p>
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
