
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Code
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { containerVariants, itemVariants } from '../constants/animations';

const Projects = () => {
  const { t } = useLanguage();

  const getFeatures = (key: string): string[] => {
    const features = t(key);
    return Array.isArray(features) ? features : [];
  };

  const projects: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    features: string[];
    github?: string;
    demo?: string;
    category: string;
  }[] = [
    {
      id: 1,
      title: t('projects.list.syndic.title'),
      description: t('projects.list.syndic.description'),
      technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Flutter'],
      features: getFeatures('projects.list.syndic.features'),
      category: t('projects.categories.saas'),
    },
    {
      id: 2,
      title: t('projects.list.factureAuto.title'),
      description: t('projects.list.factureAuto.description'),
      technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'Docker'],
      features: getFeatures('projects.list.factureAuto.features'),
      github: 'https://github.com/Remi2222/Invoice-',
      demo: '/demo/invoice',
      category: t('projects.categories.webApp'),
    },
    {
      id: 3,
      title: t('projects.list.amouch.title'),
      description: t('projects.list.amouch.description'),
      technologies: ['React', 'Node.js', 'MySQL', 'Docker', 'Microservices'],
      features: getFeatures('projects.list.amouch.features'),
      github: 'https://github.com/Remi2222/AMOUCH',
      demo: '/demo/amouch',
      category: t('projects.categories.webApp'),
    },
    {
      id: 4,
      title: t('projects.list.fastcube.title'),
      description: t('projects.list.fastcube.description'),
      technologies: ['React', 'NestJS', 'MySQL', 'Docker Compose', 'GitHub Actions', 'AWS EC2'],
      features: getFeatures('projects.list.fastcube.features'),
      github: 'https://github.com/Remi2222/platforme-web',
      demo: '/demo/fastcube',
      category: t('projects.categories.internshipWeb'),
    },
    {
      id: 5,
      title: t('projects.list.eliteClick.title'),
      description: t('projects.list.eliteClick.description'),
      technologies: ['Flutter', 'Dart', 'API REST', 'MySQL', 'AWS Lightsail'],
      features: getFeatures('projects.list.eliteClick.features'),
      github: 'https://github.com/Remi2222/eliteclick',
      demo: '/demo/elite-click',
      category: t('projects.categories.internshipMobile'),
    },
    {
      id: 6,
      title: t('projects.list.choworks.title'),
      description: t('projects.list.choworks.description'),
      technologies: ['React Native', 'API REST', 'Firebase', 'Docker'],
      features: getFeatures('projects.list.choworks.features'),
      github: 'https://github.com/Remi2222/choworks',
      demo: '/demo/choworks',
      category: t('projects.categories.internshipMobile'),
    },
    {
      id: 7,
      title: t('projects.list.renault.title'),
      description: t('projects.list.renault.description'),
      technologies: ['C#', 'ASP.NET', 'Entity Framework', 'SQL Server', 'MySQL'],
      features: getFeatures('projects.list.renault.features'),
      github: 'https://github.com/Remi2222/renault-crm',
      demo: '/demo/renault',
      category: t('projects.categories.internshipDesktop'),
    },
  ];

  const colors = {
    navy: '#071426',
    card: '#10243E',
    teal: '#14B8A6',
    cyan: '#22D3EE',
    silver: '#CBD5E1',
    border: '#263D56',
  };

  return (
    <section
      id="projects"
      className="py-32 relative"
      style={{ backgroundColor: colors.navy }}
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
            {t('projects.title')}{' '}
            <span
              style={{
                background: `linear-gradient(90deg, ${colors.teal}, ${colors.cyan})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('projects.titleHighlight')}
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.silver }}
          >
            {t('projects.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const accent = index % 2 === 0
              ? colors.teal
              : colors.cyan;

            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="rounded-2xl overflow-hidden group transition-all duration-300"
                style={{
                  backgroundColor: colors.card,
                  border: `1px solid ${colors.border}`,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accent;
                  e.currentTarget.style.boxShadow =
                    `0 12px 35px ${accent}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.border;
                  e.currentTarget.style.boxShadow =
                    '0 10px 30px rgba(0,0,0,0.15)';
                }}
              >
                <div
                  className="p-6 border-b"
                  style={{ borderColor: colors.border }}
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>

                    <span
                      className="text-sm font-semibold"
                      style={{ color: accent }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <p
                    className="leading-relaxed"
                    style={{ color: colors.silver }}
                  >
                    {project.description}
                  </p>
                </div>

                <div
                  className="p-6 border-b"
                  style={{ borderColor: colors.border }}
                >
                  <h4 className="font-semibold text-white mb-3 flex items-center">
                    <Code
                      className="mr-2"
                      size={16}
                      style={{ color: accent }}
                    />
                    {t('projects.technologies')}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-sm font-medium border transition-all duration-300"
                        style={{
                          backgroundColor: `${accent}12`,
                          color: accent,
                          borderColor: `${accent}50`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-4">

                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg text-white border transition-all duration-300"
                        style={{
                          backgroundColor: '#193451',
                          borderColor: colors.border,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = accent;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = colors.border;
                        }}
                      >
                        <Github size={16} />
                        <span>{t('projects.code')}</span>
                      </motion.a>
                    )}

                    {project.demo && (
                      <Link to={project.demo}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold text-[#071426] transition-all duration-300"
                          style={{
                            background: `linear-gradient(90deg, ${accent}, ${index % 2 === 0 ? colors.cyan : colors.teal})`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow =
                              `0 8px 25px ${accent}45`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          <ExternalLink size={16} />
                          <span>{t('projects.demo')}</span>
                        </motion.button>
                      </Link>
                    )}

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div
            className="rounded-2xl p-8 border transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${colors.card}, ${colors.navy})`,
              borderColor: colors.border,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = colors.teal;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = colors.border;
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              {t('projects.cta.title')}
            </h3>

            <p
              className="mb-6"
              style={{ color: colors.silver }}
            >
              {t('projects.cta.description')}
            </p>

            <motion.button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-semibold inline-flex items-center space-x-2 text-[#071426] transition-all duration-300"
              style={{
                background: `linear-gradient(90deg, ${colors.teal}, ${colors.cyan})`,
              }}
            >
              <span>{t('projects.cta.button')}</span>
              <ExternalLink size={20} />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
