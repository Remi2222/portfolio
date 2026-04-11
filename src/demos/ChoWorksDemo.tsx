import React from 'react';
import ProjectDemo from './ProjectDemo';

const ChoWorksDemo = () => {
  return (
    <ProjectDemo
      title="ChoWorks - Gestion Interne Entreprise"
      description="Application mobile de gestion interne d'entreprise avec interface moderne"
      technologies={['Flutter', 'Firebase', 'Firestore', 'Authentication']}
      features={[
        'Interface utilisateur responsive',
        'Authentification sécurisée Firebase',
        'Gestion des données en temps réel',
        'Synchronisation cloud',
        'Interface intuitive et moderne',
        'Gestion des utilisateurs et permissions'
      ]}
      screenshots={[
        { url: `${process.env.PUBLIC_URL}/demos/choworks/choworks-1.png`, caption: 'Écran de connexion sécurisé' },
        { url: `${process.env.PUBLIC_URL}/demos/choworks/choworks-2.png`, caption: 'Dashboard principal' },
        { url: `${process.env.PUBLIC_URL}/demos/choworks/choworks-3.png`, caption: 'Gestion des employés' },
        { url: `${process.env.PUBLIC_URL}/demos/choworks/choworks-4.png`, caption: 'Système de permissions' }
      ]}
      github="https://github.com/Remi2222/choworks"
      client="ChoWorks, Marrakech"
      date="Août-Sept 2024"
      status="Terminé"
      category="Mobile App"
      challenges={[
        'Développement cross-platform avec Flutter pour iOS et Android',
        'Implémentation de l\'authentification Firebase sécurisée',
        'Gestion des permissions et rôles utilisateurs complexes',
        'Synchronisation en temps réel avec Firestore'
      ]}
      outcomes={[
        'Application déployée avec succès sur iOS et Android',
        'Temps de développement réduit grâce à Flutter',
        'Système de permissions granulaires opérationnel',
        'Synchronisation temps réel sans latence notable'
      ]}
    />
  );
};

export default ChoWorksDemo;

