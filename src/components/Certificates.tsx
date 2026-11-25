
import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { containerVariants, itemVariants } from '../constants/animations';

const Certificates = () => {
  const { t } = useLanguage();

  const colors = {
    navy: '#071426',
    card: '#10243E',
    teal: '#14B8A6',
    cyan: '#22D3EE',
    silver: '#CBD5E1',
    border: '#263D56',
  };

  const certificates = [
    {
      id: 9,
      title: "AWS Cloud Practitioner Essentials",
      organization: "Amazon Web Services (AWS)",
      description: t('certificates.awsCloudPractitioner.description'),
      accent: colors.teal,
    },
    {
      id: 3,
      title: "Machine Learning with Python",
      organization: "IBM",
      description: t('certificates.mlPython.description'),
      accent: colors.cyan,
    },
    {
      id: 7,
      title: "Virtual Networks in Azure",
      organization: "Whizlabs / Coursera",
      description: t('certificates.azureNetworks.description'),
      accent: colors.teal,
    },
    {
      id: 5,
      title: "Full Stack Software Developer (Cloud, React, Node.js, Docker, Kubernetes)",
      organization: "IBM",
      description: t('certificates.fullStackIBM.description'),
      accent: colors.cyan,
    },
    {
      id: 1,
      title: "AI for Business Professionals",
      organization: "HP LIFE",
      description: t('certificates.aiBusiness.description'),
      accent: colors.teal,
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      organization: "HP LIFE",
      description: t('certificates.dataScience.description'),
      accent: colors.cyan,
    },
    {
      id: 4,
      title: "Python for Everybody",
      organization: "University of Michigan",
      description: t('certificates.pythonEverybody.description'),
      accent: colors.teal,
    },
    {
      id: 6,
      title: "Python for Everybody Specialization",
      organization: "Coursera",
      description: t('certificates.pythonSpecialization.description'),
      accent: colors.cyan,
    },
    {
      id: 8,
      title: "Introduction to Git and GitHub",
      organization: "Google / Coursera",
      description: t('certificates.gitGithub.description'),
      accent: colors.teal,
    },
    {
      id: 10,
      title: "AWS Basics",
      organization: "KodeKloud",
      description: t('certificates.awsBasics.description'),
      accent: colors.cyan,
    },
    {
      id: 11,
      title: "Introduction to Containers with Docker, Kubernetes & OpenShift",
      organization: "IBM",
      description: t('certificates.dockerKubernetes.description'),
      accent: colors.teal,
    },
    {
      id: 13,
      title: "React Basics",
      organization: "Meta",
      description: t('certificates.reactBasics.description'),
      accent: colors.cyan,
    },
  ];

  return (
    <section
      id="certificates"
      className="py-32 relative"
      style={{ backgroundColor: '#02232c'}}
    >
    
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: `linear-gradient(to right, transparent, ${colors.teal}, ${colors.cyan}, transparent)`,
          opacity: 0.7,
        }}
      />

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
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            {t('certificates.title')}{' '}
            <span
              style={{
                background: `linear-gradient(90deg, ${colors.teal}, ${colors.cyan})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('certificates.titleHighlight')}
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.silver }}
          >
            {t('certificates.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={itemVariants}
              whileHover={{ y: -7 }}
              className="rounded-xl p-6 transition-all duration-300 cursor-default"
              style={{
                backgroundColor: '#02232c',
                border: `1px solid ${colors.border}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = certificate.accent;
                e.currentTarget.style.boxShadow =
                  `0 12px 30px ${certificate.accent}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.border;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="p-3 rounded-xl"
                  style={{
                    backgroundColor: `${certificate.accent}15`,
                    border: `1px solid ${certificate.accent}35`,
                  }}
                >
                  <Award
                    size={32}
                    style={{ color: certificate.accent }}
                  />
                </div>

                <div
                  className="w-2 h-2 rounded-full mt-2"
                  style={{ backgroundColor: certificate.accent }}
                />
              </div>

             
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                {certificate.title}
              </h3>

              <p
                className="text-sm font-semibold mb-4"
                style={{ color: certificate.accent }}
              >
                {certificate.organization}
              </p>

              <p
                className="text-sm leading-relaxed"
                style={{ color: colors.silver }}
              >
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
