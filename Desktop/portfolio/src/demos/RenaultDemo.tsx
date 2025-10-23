import React from 'react';
import ProjectDemo from './ProjectDemo';

const RenaultDemo = () => {
  return (
    <ProjectDemo
      title="Renault - Gestion Clientèle"
      description="Modernisation du système de gestion clientèle par application desktop"
      technologies={['C#', 'Windows Forms', 'GUNA Framework', 'MySQL']}
      features={[
        'Interface Windows Forms moderne',
        'Framework GUNA pour le design',
        'Gestion complète des clients',
        'Système de suivi des ventes',
        'Rapports détaillés',
        'Base de données MySQL optimisée'
      ]}
      screenshots={[
        { url: `${process.env.PUBLIC_URL}/demos/renault/renault-1.png`, caption: 'Dashboard principal' },
        { url: `${process.env.PUBLIC_URL}/demos/renault/renault-2.png`, caption: 'Gestion des clients' },
        { url: `${process.env.PUBLIC_URL}/demos/renault/renault-3.png`, caption: 'Suivi des ventes' },
        { url: `${process.env.PUBLIC_URL}/demos/renault/renault-4.png`, caption: 'Rapports et analyses' }
      ]}
      github="https://github.com/Remi2222/renault-crm"
      client="Renault, El Jadida"
      date="Mars-Avril 2022"
      status="Terminé"
      category="Desktop App"
      challenges={[
        'Modernisation d\'un ancien système de gestion',
        'Migration des données existantes vers MySQL',
        'Création d\'une interface moderne avec GUNA Framework',
        'Formation du personnel à la nouvelle solution'
      ]}
      outcomes={[
        'Système CRM moderne et efficace',
        'Amélioration de 50% de la productivité des équipes',
        'Migration réussie de toutes les données historiques',
        'Interface intuitive adoptée rapidement par les utilisateurs'
      ]}
    />
  );
};

export default RenaultDemo;

