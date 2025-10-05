import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Smartphone, 
  Globe, 
  Users, 
  ShoppingCart,
  Star,
  Calendar,
  Code
} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Elite Click - Digitalisation Services Publicité',
      description: 'Application mobile pour la digitalisation des services d\'une agence de publicité',
      technologies: ['React Native', 'TailwindCSS', 'Node.js', 'MySQL'],
      features: [
        'Digitalisation complète des services',
        'Interface mobile moderne',
        'Gestion des clients et projets',
        'Système de suivi intégré',
        'Backend robuste avec Node.js',
        'Base de données MySQL optimisée'
      ],
      github: 'https://github.com/Remi2222/eliteclick',
      demo: '#',
      category: 'Mobile App',
      status: 'En cours',
      date: 'Depuis Juil. 2025',
      client: 'Elite Click, Beni Mellal',
      icon: React.createElement(Smartphone, { className: 'text-blue-500', size: 24 })
    },
    {
      id: 2,
      title: 'ChoWorks - Gestion Interne Entreprise',
      description: 'Application mobile de gestion interne d\'entreprise avec interface moderne',
      technologies: ['Flutter', 'Firebase', 'Firestore', 'Authentication'],
      features: [
        'Interface utilisateur responsive',
        'Authentification sécurisée Firebase',
        'Gestion des données en temps réel',
        'Synchronisation cloud',
        'Interface intuitive et moderne',
        'Gestion des utilisateurs et permissions'
      ],
      github: 'https://github.com/Remi2222/choworks',
      demo: '#',
      category: 'Mobile App',
      status: 'Terminé',
      date: 'Août-Sept 2024',
      client: 'ChoWorks, Marrakech',
      icon: React.createElement(Smartphone, { className: 'text-green-500', size: 24 })
    },
    {
      id: 3,
      title: 'Verna Vert - Gestion Espaces Verts',
      description: 'Application desktop pour la gestion complète des espaces verts',
      technologies: ['.NET Core', 'C#', 'Architecture MVC', 'Guna UI', 'MySQL'],
      features: [
        'Architecture MVC moderne',
        'Interface utilisateur Guna UI',
        'Gestion relationnelle des données',
        'Rapports et analytics',
        'Système de planification',
        'Gestion des ressources et équipes'
      ],
      github: 'https://github.com/Remi2222/verna-vert',
      demo: '#',
      category: 'Desktop App',
      status: 'Terminé',
      date: 'Août-Sept 2023',
      client: 'Verna vert, Rabat',
      icon: React.createElement(Code, { className: 'text-purple-500', size: 24 })
    },
    {
      id: 4,
      title: 'Renault - Gestion Clientèle',
      description: 'Modernisation du système de gestion clientèle par application desktop',
      technologies: ['C#', 'Windows Forms', 'GUNA Framework', 'MySQL'],
      features: [
        'Interface Windows Forms moderne',
        'Framework GUNA pour le design',
        'Gestion complète des clients',
        'Système de suivi des ventes',
        'Rapports détaillés',
        'Base de données MySQL optimisée'
      ],
      github: 'https://github.com/Remi2222/renault-crm',
      demo: '#',
      category: 'Desktop App',
      status: 'Terminé',
      date: 'Mars-Avril 2022',
      client: 'Renault, El Jadida',
      icon: React.createElement(Users, { className: 'text-orange-500', size: 24 })
    },
    {
      id: 5,
      title: 'FASTCUBE - Plateforme Web IA Multiservice',
      description: 'Plateforme web intelligente avec chatbot, moteur de recommandation et résumé automatique',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'OpenAI API'],
      features: [
        'Chatbot conversationnel intelligent',
        'Moteur de recommandation avancé',
        'Système de résumé automatique',
        'Architecture full-stack moderne',
        'Intégration API OpenAI',
        'Interface utilisateur React.js'
      ],
      github: 'https://github.com/Remi2222/fastcube',
      demo: '#',
      category: 'Web App + IA',
      status: 'Terminé',
      icon: React.createElement(Globe, { className: 'text-blue-500', size: 24 })
    },
    {
      id: 6,
      title: 'AMOUCH - Application Web Animalerie',
      description: 'Application web pour animalerie avec architecture microservices',
      technologies: ['React.js', 'Architecture Microservices', 'MySQL'],
      features: [
        'Architecture microservices scalable',
        'Interface React.js moderne',
        'Gestion complète des animaux',
        'Système de réservation',
        'Gestion des stocks',
        'Base de données MySQL relationnelle'
      ],
      github: 'https://github.com/Remi2222/amouch',
      demo: '#',
      category: 'Web App',
      status: 'Terminé',
      icon: React.createElement(ShoppingCart, { className: 'text-green-500', size: 24 })
    },
    {
      id: 7,
      title: 'TICKETS - Plateforme Réservation Bus',
      description: 'Application web de réservation et achat de tickets de bus',
      technologies: ['Python', 'Django', 'MySQL'],
      features: [
        'Réservation de tickets en ligne',
        'Gestion des trajets et horaires',
        'Système de paiement sécurisé',
        'Gestion des comptes utilisateurs',
        'Interface Django responsive',
        'Base de données MySQL optimisée'
      ],
      github: 'https://github.com/Remi2222/tickets-bus',
      demo: '#',
      category: 'Web App',
      status: 'Terminé',
      icon: React.createElement(Globe, { className: 'text-purple-500', size: 24 })
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
    <section id='projects' className='py-20 bg-gray-50'>
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
            Mes <span className='gradient-text'>projets</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className='text-xl text-gray-600 max-w-3xl mx-auto'
          >
            Découvrez une sélection de mes projets récents, allant des applications 
            mobiles aux plateformes web modernes.
          </motion.p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className='bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group'
            >
              <div className='p-6 border-b border-gray-100'>
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex items-center space-x-3'>
                    {project.icon}
                    <div>
                      <h3 className='text-xl font-bold text-gray-800'>
                        {project.title}
                      </h3>
                      <div className='flex items-center space-x-2 mt-1'>
                        <span className='text-sm text-gray-500'>{project.category}</span>
                        <span className='text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full'>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className='text-gray-600 leading-relaxed'>
                  {project.description}
                </p>
              </div>

              <div className='p-6 border-b border-gray-100'>
                <h4 className='font-semibold text-gray-800 mb-3 flex items-center'>
                  <Code className='mr-2' size={16} />
                  Technologies utilisées
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className='p-6 border-b border-gray-100'>
                <h4 className='font-semibold text-gray-800 mb-3'>
                  Fonctionnalités principales
                </h4>
                <ul className='space-y-2'>
                  {project.features?.map((feature, featureIndex) => (
                    <li key={featureIndex} className='flex items-center text-sm text-gray-600'>
                      <Star className='text-yellow-500 mr-2' size={14} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='p-6'>
                <div className='flex space-x-4'>
                  <motion.a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors'
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors'
                  >
                    <ExternalLink size={16} />
                    <span>Démo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className='text-center mt-16'
        >
          <div className='bg-white rounded-2xl p-8 shadow-lg'>
            <h3 className='text-2xl font-bold mb-4 text-gray-800'>
              Intéressé par une collaboration ?
            </h3>
            <p className='text-gray-600 mb-6'>
              Je suis toujours ouvert à de nouveaux projets passionnants. 
              N'hésitez pas à me contacter pour discuter de vos besoins.
            </p>
            <motion.a
              href='#contact'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center space-x-2 hover-lift'
            >
              <span>Discutons de votre projet</span>
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;