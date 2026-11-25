import React from 'react';
import ProjectDemo from './ProjectDemo';

const FastcubeDemo = () => {
  return (
    <ProjectDemo
      title="FastCube - Stage Full Stack"
      description="Développement full stack de 9 fonctionnalités et 7 API REST en Agile Scrum (mars - juillet 2025)"
      technologies={['React', 'NestJS', 'MySQL', 'Jest', 'OpenAPI', 'Docker Compose', 'GitHub Actions', 'AWS EC2']}
      features={[
        '9 fonctionnalités full stack (React, NestJS, MySQL)',
        '7 API REST documentées avec OpenAPI',
        'Sécurisation : JWT, hachage, validation des données',
        'Tests unitaires avec Jest',
        'Déploiement avec Docker Compose sur AWS EC2',
        'CI/CD avec GitHub Actions'
      ]}
      screenshots={[
        { url: `${process.env.PUBLIC_URL}/demos/fastcube/homeweb.png`, caption: 'Page d\'accueil de la plateforme FASTCUBE' },
        { url: `${process.env.PUBLIC_URL}/demos/fastcube/acceuil2.png`, caption: 'Interface d\'accueil alternative' },
        { url: `${process.env.PUBLIC_URL}/demos/fastcube/home2.png`, caption: 'Vue principale du site' },
        { url: `${process.env.PUBLIC_URL}/demos/fastcube/chatbot.png`, caption: 'Interface du chatbot IA conversationnel' },
        { url: `${process.env.PUBLIC_URL}/demos/fastcube/recommondation.png`, caption: 'Moteur de recommandation intelligent' },
        { url: `${process.env.PUBLIC_URL}/demos/fastcube/service.png`, caption: 'Page des services IA disponibles' },
        { url: `${process.env.PUBLIC_URL}/demos/fastcube/dashboard.png`, caption: 'Dashboard d\'administration et analytics' },
        { url: `${process.env.PUBLIC_URL}/demos/fastcube/blog.png`, caption: 'Section blog et articles IA' },
        { url: `${process.env.PUBLIC_URL}/demos/fastcube/ticketpage.png`, caption: 'Système de tickets et support' },
        { url: `${process.env.PUBLIC_URL}/demos/fastcube/newslatterpage.png`, caption: 'Newsletter et abonnements' },
        { url: `${process.env.PUBLIC_URL}/demos/fastcube/contactus.png`, caption: 'Page contact et support client' }
      ]}
      github="https://github.com/Remi2222/fastcube"
      status="Terminé"
      category="Stage Full Stack"
      challenges={[
        'Livrer plusieurs fonctionnalités en sprints Agile Scrum (Jira)',
        'Sécuriser les API (JWT, hachage, validation)',
        'Optimiser les requêtes pour réduire les temps de réponse'
      ]}
      outcomes={[
        'Temps de réponse réduit de 30 %',
        'Pipeline CI/CD et déploiement automatisé sur AWS EC2',
        'API testées (Jest) et documentées (OpenAPI)'
      ]}
    />
  );
};

export default FastcubeDemo;

