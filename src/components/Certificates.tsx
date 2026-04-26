import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Certificates = () => {
  const { t } = useLanguage();

  const certificates = [
    {
      id: 1,
      title: "AI for Business Professionals",
      organization: "HP LIFE",
      description: t('certificates.aiBusiness.description'),
      icon: <Award className="text-emerald-500" size={32} />,
      borderColor: "border-emerald-500",
      bgColor: "bg-emerald-500/10",
      hoverBg: "hover:bg-emerald-500/20"
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      organization: "HP LIFE",
      description: t('certificates.dataScience.description'),
      icon: <Award className="text-emerald-500" size={32} />,
      borderColor: "border-emerald-500",
      bgColor: "bg-emerald-500/10",
      hoverBg: "hover:bg-emerald-500/20"
    },
    {
      id: 3,
      title: "Machine Learning with Python",
      organization: "IBM",
      description: t('certificates.mlPython.description'),
      icon: <Award className="text-blue-600" size={32} />,
      borderColor: "border-blue-600",
      bgColor: "bg-blue-600/10",
      hoverBg: "hover:bg-blue-600/20"
    },
    {
      id: 4,
      title: "Python for Everybody",
      organization: "University of Michigan",
      description: t('certificates.pythonEverybody.description'),
      icon: <Award className="text-yellow-600" size={32} />,
      borderColor: "border-yellow-600",
      bgColor: "bg-yellow-600/10",
      hoverBg: "hover:bg-yellow-600/20"
    },
    {
      id: 5,
      title: "Full Stack Software Developer Assessment",
      organization: "IBM",
      description: t('certificates.fullStackIBM.description'),
      icon: <Award className="text-blue-600" size={32} />,
      borderColor: "border-blue-600",
      bgColor: "bg-blue-600/10",
      hoverBg: "hover:bg-blue-600/20"
    },
    {
      id: 6,
      title: "Python for Everybody Specialization",
      organization: "Coursera",
      description: t('certificates.pythonSpecialization.description'),
      icon: <Award className="text-blue-500" size={32} />,
      borderColor: "border-blue-500",
      bgColor: "bg-blue-500/10",
      hoverBg: "hover:bg-blue-500/20"
    },
    {
      id: 7,
      title: "Virtual Networks in Azure",
      organization: "Whizlabs / Coursera",
      description: t('certificates.azureNetworks.description'),
      icon: <Award className="text-cyan-500" size={32} />,
      borderColor: "border-cyan-500",
      bgColor: "bg-cyan-500/10",
      hoverBg: "hover:bg-cyan-500/20"
    },
    {
      id: 8,
      title: "Introduction to Git and GitHub",
      organization: "Google / Coursera",
      description: t('certificates.gitGithub.description'),
      icon: <Award className="text-orange-500" size={32} />,
      borderColor: "border-orange-500",
      bgColor: "bg-orange-500/10",
      hoverBg: "hover:bg-orange-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section id="certificates" className="py-32 bg-[#1F2937] relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-30"></div>
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
            className="text-4xl md:text-5xl font-bold mb-6 text-[#F9FAFB]"
          >
            {t('certificates.title')} <span className="text-[#10B981]">{t('certificates.titleHighlight')}</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-[#D1D5DB] max-w-3xl mx-auto"
          >
            {t('certificates.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`bg-[#1F2937] border-2 ${certificate.borderColor} rounded-xl p-6 transition-all duration-300 ${certificate.hoverBg} hover:border-[#10B981] hover:shadow-lg hover:shadow-[#10B981]/20`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${certificate.bgColor} p-3 rounded-lg`}>
                  {certificate.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#F9FAFB] mb-2">
                {certificate.title}
              </h3>
              
              <p className="text-sm italic text-[#34D399] mb-4">
                {certificate.organization}
              </p>
              
              <p className="text-[#D1D5DB] text-sm leading-relaxed">
                {certificate.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

