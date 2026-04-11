import React from 'react';
import ProjectDemo from './ProjectDemo';

const FastcubeDemo = () => {
  return (
    <ProjectDemo
      title="FASTCUBE - Plateforme Web IA Multiservice"
      description="Plateforme web intelligente avec chatbot IA local, moteur de recommandation et résumé automatique"
      technologies={['React.js', 'Node.js', 'Express.js', 'MySQL', 'Ollama', 'LLaMA']}
      features={[
        'Chatbot conversationnel intelligent avec Ollama',
        'Moteur de recommandation avancé',
        'Système de résumé automatique',
        'Architecture full-stack moderne',
        'IA locale avec Ollama (LLaMA)',
        'Interface utilisateur React.js'
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
      category="Web App + IA"
      challenges={[
        'Intégration d\'Ollama pour un chatbot IA local',
        'Développement d\'un moteur de recommandation personnalisé',
        'Optimisation des temps de réponse avec LLaMA',
        'Configuration et déploiement d\'Ollama en local'
      ]}
      outcomes={[
        'Plateforme IA multiservice complète et fonctionnelle',
        'Chatbot local performant avec Ollama',
        'Solution IA gratuite et respectueuse de la vie privée',
        'Interface utilisateur moderne et responsive'
      ]}
    />
  );
};

export default FastcubeDemo;

