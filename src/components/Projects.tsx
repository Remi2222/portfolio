import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Code
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const getFeatures = (key: string): string[] => {
    const features = t(key);
    if (Array.isArray(features)) {
      return features;
    }
    return [];
  };

  const projects = [
    {
      id: 1,
      title: t('projects.list.eliteClick.title'),
      description: t('projects.list.eliteClick.description'),
      technologies: ['React Native', 'TailwindCSS', 'Node.js', 'MySQL'],
      features: getFeatures('projects.list.eliteClick.features'),
      github: 'https://github.com/Remi2222/eliteclick',
      demo: '/demo/elite-click',
      category: t('projects.categories.mobileApp'),
    },
    {
      id: 2,
      title: t('projects.list.choworks.title'),
      description: t('projects.list.choworks.description'),
      technologies: ['Flutter', 'Firebase', 'Firestore', 'Authentication'],
      features: getFeatures('projects.list.choworks.features'),
      github: 'https://github.com/Remi2222/choworks',
      demo: '/demo/choworks',
      category: t('projects.categories.mobileApp'),
    },
    {
      id: 3,
      title: t('projects.list.vernaVert.title'),
      description: t('projects.list.vernaVert.description'),
      technologies: ['.NET Core', 'C#', 'Architecture MVC', 'Guna UI', 'MySQL'],
      features: getFeatures('projects.list.vernaVert.features'),
      github: 'https://github.com/Remi2222/verna-vert',
      demo: '/demo/verna-vert',
      category: t('projects.categories.desktopApp'),
    },
    {
      id: 4,
      title: t('projects.list.renault.title'),
      description: t('projects.list.renault.description'),
      technologies: ['C#', 'Windows Forms', 'GUNA Framework', 'MySQL'],
      features: getFeatures('projects.list.renault.features'),
      github: 'https://github.com/Remi2222/renault-crm',
      demo: '/demo/renault',
      category: t('projects.categories.desktopApp'),
    },
    {
      id: 5,
      title: t('projects.list.fastcube.title'),
      description: t('projects.list.fastcube.description'),
      technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'OpenAI API'],
      features: getFeatures('projects.list.fastcube.features'),
      github: 'https://github.com/Remi2222/fastcube',
      demo: '/demo/fastcube',
      category: t('projects.categories.webAi'),
    },
    {
      id: 6,
      title: t('projects.list.amouch.title'),
      description: t('projects.list.amouch.description'),
      technologies: ['React.js', 'Architecture Microservices', 'MySQL'],
      features: getFeatures('projects.list.amouch.features'),
      github: 'https://github.com/Remi2222/amouch',
      demo: '/demo/amouch',
      category: t('projects.categories.webApp'),
    },
    {
      id: 7,
      title: t('projects.list.tickets.title'),
      description: t('projects.list.tickets.description'),
      technologies: ['Python', 'Django', 'MySQL'],
      features: getFeatures('projects.list.tickets.features'),
      github: 'https://github.com/Remi2222/tickets-bus',
      demo: '/demo/tickets',
      category: t('projects.categories.webApp'),
    },
    {
      id: 8,
      title: t('projects.list.personalAnalytics.title'),
      description: t('projects.list.personalAnalytics.description'),
      technologies: ['Python', 'Plotly', 'SQLite', 'Pandas', 'Machine Learning'],
      features: getFeatures('projects.list.personalAnalytics.features'),
      github: 'https://github.com/Remi2222/personal-analytics-dashboard',
      demo: '/demo/personal-analytics',
      category: t('projects.categories.webApp'),
    }
  ];

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
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id='projects' className='py-32 bg-[#1F2937] relative'>
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-30"></div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <motion.h2
            variants={itemVariants}
            className='text-4xl md:text-5xl font-bold mb-6'
          >
            {t('projects.title')} <span className='gradient-text'>{t('projects.titleHighlight')}</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className='text-xl text-[#D1D5DB] max-w-3xl mx-auto'
          >
            {t('projects.subtitle')}
          </motion.p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-8'>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className='bg-[#111827] border border-[#374151] rounded-2xl shadow-lg overflow-hidden hover-lift group hover:border-[#10B981] transition-all duration-300'
            >
              <div className='p-6 border-b border-[#374151]'>
                <div className='mb-4'>
                  <h3 className='text-xl font-bold text-[#F9FAFB] mb-2'>
                        {project.title}
                      </h3>
                        <span className='text-sm text-[#34D399]'>{project.category}</span>
                </div>
                
                <p className='text-[#D1D5DB] leading-relaxed'>
                  {project.description}
                </p>
              </div>

              <div className='p-6 border-b border-[#374151]'>
                <h4 className='font-semibold text-[#F9FAFB] mb-3 flex items-center'>
                  <Code className='mr-2 text-[#10B981]' size={16} />
                  {t('projects.technologies')}
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='bg-[#10B981]/10 text-[#34D399] border border-[#10B981]/30 px-3 py-1 rounded-full text-sm font-medium hover:bg-[#10B981]/20 hover:border-[#10B981] transition-all duration-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className='p-6'>
                <div className='flex space-x-4'>
                  <motion.a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='flex items-center space-x-2 bg-[#374151] text-white px-4 py-2 rounded-lg hover:bg-[#1F2937] border border-[#374151] hover:border-[#10B981] transition-all duration-300'
                  >
                    <Github size={16} />
                    <span>{t('projects.code')}</span>
                  </motion.a>
                  
                  {project.demo !== '#' && (
                    <Link to={project.demo}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='flex items-center space-x-2 bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-[#10B981]/30 transition-all duration-300'
                      >
                        <ExternalLink size={16} />
                        <span>{t('projects.demo')}</span>
                      </motion.button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className='text-center mt-16'
        >
          <div className='bg-[#111827] border border-[#374151] rounded-2xl p-8 shadow-lg hover:border-[#10B981] transition-all duration-300'>
            <h3 className='text-2xl font-bold mb-4 text-[#F9FAFB]'>
              {t('projects.cta.title')}
            </h3>
            <p className='text-[#D1D5DB] mb-6'>
              {t('projects.cta.description')}
            </p>
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-8 py-3 rounded-full font-semibold inline-flex items-center space-x-2 hover-lift hover:shadow-lg hover:shadow-[#10B981]/30 transition-all duration-300'
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
