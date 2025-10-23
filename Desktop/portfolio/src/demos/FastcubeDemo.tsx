import React from 'react';
import ProjectDemo from './ProjectDemo';

const FastcubeDemo = () => {
  return (
    <ProjectDemo
      title="FASTCUBE - Plateforme Web IA Multiservice"
      description="Plateforme web intelligente avec chatbot, moteur de recommandation et résumé automatique"
      technologies={['React.js', 'Node.js', 'Express.js', 'MySQL', 'OpenAI API']}
      features={[
        'Chatbot conversationnel intelligent',
        'Moteur de recommandation avancé',
        'Système de résumé automatique',
        'Architecture full-stack moderne',
        'Intégration API OpenAI',
        'Interface utilisateur React.js'
      ]}
      screenshots={[
        { url: '/demos/fastcube/homeweb.png', caption: 'Page d\'accueil de la plateforme FASTCUBE' },
        { url: '/demos/fastcube/acceuil2.png', caption: 'Interface d\'accueil alternative' },
        { url: '/demos/fastcube/home2.png', caption: 'Vue principale du site' },
        { url: '/demos/fastcube/chatbot.png', caption: 'Interface du chatbot IA conversationnel' },
        { url: '/demos/fastcube/recommondation.png', caption: 'Moteur de recommandation intelligent' },
        { url: '/demos/fastcube/service.png', caption: 'Page des services IA disponibles' },
        { url: '/demos/fastcube/dashboard.png', caption: 'Dashboard d\'administration et analytics' },
        { url: '/demos/fastcube/blog.png', caption: 'Section blog et articles IA' },
        { url: '/demos/fastcube/ticketpage.png', caption: 'Système de tickets et support' },
        { url: '/demos/fastcube/newslatterpage.png', caption: 'Newsletter et abonnements' },
        { url: '/demos/fastcube/contactus.png', caption: 'Page contact et support client' }
      ]}
      github="https://github.com/Remi2222/fastcube"
      status="Terminé"
      category="Web App + IA"
      challenges={[
        'Intégration de l\'API OpenAI pour le chatbot intelligent',
        'Développement d\'un moteur de recommandation personnalisé',
        'Optimisation des temps de réponse pour l\'IA',
        'Gestion des tokens et coûts API'
      ]}
      outcomes={[
        'Plateforme IA multiservice complète et fonctionnelle',
        'Chatbot avec taux de satisfaction de 85%',
        'Recommandations pertinentes avec 78% de précision',
        'Interface utilisateur moderne et responsive'
      ]}
    />
  );
};

export default FastcubeDemo;

