import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { containerVariants, itemVariants } from '../constants/animations';

const Certificates = () => {
  const { t } = useLanguage();

  const certificates = [
    {
      id: 1,
      title: "AI for Business Professionals",
      organization: "HP LIFE",
      description: t('certificates.aiBusiness.description'),
      icon: <Award className="text-[#FFD700]" size={32} />,
      borderColor: "border-[#FFD700]",
      bgColor: "bg-[#FFD700]/10",
      hoverBg: "hover:bg-[#FFD700]/20"
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      organization: "HP LIFE",
      description: t('certificates.dataScience.description'),
      icon: <Award className="text-[#C084FC]" size={32} />,
      borderColor: "border-[#C084FC]",
      bgColor: "bg-[#C084FC]/10",
      hoverBg: "hover:bg-[#C084FC]/20"
    },
    {
      id: 3,
      title: "Machine Learning with Python",
      organization: "IBM",
      description: t('certificates.mlPython.description'),
      icon: <Award className="text-[#FFA500]" size={32} />,
      borderColor: "border-[#FFA500]",
      bgColor: "bg-[#FFA500]/10",
      hoverBg: "hover:bg-[#FFA500]/20"
    },
    {
      id: 4,
      title: "Python for Everybody",
      organization: "University of Michigan",
      description: t('certificates.pythonEverybody.description'),
      icon: <Award className="text-[#FFD700]" size={32} />,
      borderColor: "border-[#FFD700]",
      bgColor: "bg-[#FFD700]/10",
      hoverBg: "hover:bg-[#FFD700]/20"
    },
    {
      id: 5,
      title: "Full Stack Software Developer Assessment",
      organization: "IBM",
      description: t('certificates.fullStackIBM.description'),
      icon: <Award className="text-[#C084FC]" size={32} />,
      borderColor: "border-[#C084FC]",
      bgColor: "bg-[#C084FC]/10",
      hoverBg: "hover:bg-[#C084FC]/20"
    },
    {
      id: 6,
      title: "Python for Everybody Specialization",
      organization: "Coursera",
      description: t('certificates.pythonSpecialization.description'),
      icon: <Award className="text-[#FFD700]" size={32} />,
      borderColor: "border-[#FFD700]",
      bgColor: "bg-[#FFD700]/10",
      hoverBg: "hover:bg-[#FFD700]/20"
    },
    {
      id: 7,
      title: "Virtual Networks in Azure",
      organization: "Whizlabs / Coursera",
      description: t('certificates.azureNetworks.description'),
      icon: <Award className="text-[#FFA500]" size={32} />,
      borderColor: "border-[#FFA500]",
      bgColor: "bg-[#FFA500]/10",
      hoverBg: "hover:bg-[#FFA500]/20"
    },
    {
      id: 8,
      title: "Introduction to Git and GitHub",
      organization: "Google / Coursera",
      description: t('certificates.gitGithub.description'),
      icon: <Award className="text-[#C084FC]" size={32} />,
      borderColor: "border-[#C084FC]",
      bgColor: "bg-[#C084FC]/10",
      hoverBg: "hover:bg-[#C084FC]/20"
    },
     {id: 9,
        title: "AWS Cloud Practitioner Essentials",
        organization: "Amazon Web Services (AWS)",
        description: t('certificates.awsCloudPractitioner.description'),
        icon: <Award className="text-[#FF9900]" size={32} />,
        borderColor: "border-[#FF9900]",
        bgColor: "bg-[#FF9900]/10",
        hoverBg: "hover:bg-[#FF9900]/20"
    },
    {
        id: 10,
        title: "AWS Basics",
        organization: "KodeKloud",
        description: t('certificates.awsBasics.description'),
        icon: <Award className="text-[#FF9900]" size={32} />,
        borderColor: "border-[#FF9900]",
        bgColor: "bg-[#FF9900]/10",
        hoverBg: "hover:bg-[#FF9900]/20"
    },
    {
        id: 11,
        title: "Introduction to Containers with Docker, Kubernetes & OpenShift",
        organization: "IBM",
        description: t('certificates.dockerKubernetes.description'),
        icon: <Award className="text-[#0F62FE]" size={32} />,
        borderColor: "border-[#0F62FE]",
        bgColor: "bg-[#0F62FE]/10",
        hoverBg: "hover:bg-[#0F62FE]/20"
    },
    
    {
        id: 13,
        title: "React Basics",
        organization: "Meta",
        description: t('certificates.reactBasics.description'),
        icon: <Award className="text-[#61DAFB]" size={32} />,
        borderColor: "border-[#61DAFB]",
        bgColor: "bg-[#61DAFB]/10",
        hoverBg: "hover:bg-[#61DAFB]/20"
    }
      ];

  return (
    <section id="certificates" className="py-32 bg-[#1A0033] relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-40"></div>
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
            {t('certificates.title')} <span className="gradient-text">{t('certificates.titleHighlight')}</span>
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
              className={`bg-[#2D1B4E] border-2 ${certificate.borderColor} rounded-xl p-6 transition-all duration-300 ${certificate.hoverBg} hover:shadow-lg hover:shadow-[#C084FC]/20`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${certificate.bgColor} p-3 rounded-lg`}>
                  {certificate.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#F9FAFB] mb-2">
                {certificate.title}
              </h3>
              
              <p className="text-sm italic text-[#C084FC] mb-4">
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