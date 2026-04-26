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
        { url: `${process.env.PUBLIC_URL}/demos/verna-vert/loginverna.jpeg`, caption: 'Login' },
        { url: `${process.env.PUBLIC_URL}/demos/verna-vert/interface.jpeg`, caption: 'Interface principale de gestion ' },
        { url: `${process.env.PUBLIC_URL}/demos/verna-vert/parcjardin.jpeg`, caption: 'Planification des interventions' },
        { url: `${process.env.PUBLIC_URL}/demos/verna-vert/reclamation.jpeg`, caption: 'Reclamation' }
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

