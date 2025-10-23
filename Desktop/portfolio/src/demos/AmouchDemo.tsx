import React from 'react';
import ProjectDemo from './ProjectDemo';

const AmouchDemo = () => {
  return (
    <ProjectDemo
      title="AMOUCH - Application Web Animalerie"
      description="Application web pour animalerie avec architecture microservices"
      technologies={['React.js', 'Architecture Microservices', 'MySQL']}
      features={[
        'Architecture microservices scalable',
        'Interface React.js moderne',
        'Gestion complète des animaux',
        'Système de réservation',
        'Gestion des stocks',
        'Base de données MySQL relationnelle'
      ]}
      screenshots={[
        { url: '/demos/amouch/amouch-1.png', caption: 'Catalogue des animaux' },
        { url: '/demos/amouch/amouch-2.png', caption: 'Système de réservation' },
        { url: '/demos/amouch/amouch-3.png', caption: 'Gestion des stocks' },
        { url: '/demos/amouch/amouch-4.png', caption: 'Interface d\'administration' }
      ]}
      github="https://github.com/Remi2222/amouch"
      status="Terminé"
      category="Web App"
      challenges={[
        'Mise en place d\'une architecture microservices',
        'Gestion des stocks en temps réel',
        'Système de réservation avec disponibilité dynamique',
        'Optimisation des performances pour le catalogue'
      ]}
      outcomes={[
        'Architecture microservices scalable et maintenable',
        'Système de gestion complet opérationnel',
        'Interface web moderne et intuitive',
        'Réduction de 40% du temps de gestion des stocks'
      ]}
    />
  );
};

export default AmouchDemo;

