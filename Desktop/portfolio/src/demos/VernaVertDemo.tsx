import React from 'react';
import ProjectDemo from './ProjectDemo';

const VernaVertDemo = () => {
  return (
    <ProjectDemo
      title="Verna Vert - Gestion Espaces Verts"
      description="Application desktop pour la gestion complète des espaces verts"
      technologies={['.NET Core', 'C#', 'Architecture MVC', 'Guna UI', 'MySQL']}
      features={[
        'Architecture MVC moderne',
        'Interface utilisateur Guna UI',
        'Gestion relationnelle des données',
        'Rapports et analytics',
        'Système de planification',
        'Gestion des ressources et équipes'
      ]}
      screenshots={[
        { url: '/demos/verna-vert/vernavert-1.png', caption: 'Interface principale de gestion' },
        { url: '/demos/verna-vert/vernavert-2.png', caption: 'Planification des interventions' },
        { url: '/demos/verna-vert/vernavert-3.png', caption: 'Gestion des équipes et ressources' },
        { url: '/demos/verna-vert/vernavert-4.png', caption: 'Rapports et statistiques' }
      ]}
      github="https://github.com/Remi2222/verna-vert"
      client="Verna vert, Rabat"
      date="Août-Sept 2023"
      status="Terminé"
      category="Desktop App"
      challenges={[
        'Implémentation de l\'architecture MVC en .NET Core',
        'Création d\'une interface moderne avec Guna UI',
        'Gestion complexe de la planification des interventions',
        'Optimisation des requêtes MySQL pour les rapports'
      ]}
      outcomes={[
        'Système de gestion complet et opérationnel',
        'Interface desktop moderne et intuitive',
        'Réduction de 70% du temps de planification',
        'Rapports automatisés et exports Excel intégrés'
      ]}
    />
  );
};

export default VernaVertDemo;

