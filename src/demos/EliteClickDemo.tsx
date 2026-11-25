import React from 'react';
import ProjectDemo from './ProjectDemo';

const EliteClickDemo = () => {
  return (
    <ProjectDemo
      title="Elite Click - Stage Mobile"
      description="Application mobile Flutter pour les clients et les agents de l'agence (août - octobre 2025)"
      technologies={['Flutter', 'Dart', 'API REST', 'MySQL', 'AWS Lightsail']}
      features={[
        'Application mobile Flutter pour clients et agents',
        'API REST et base de données MySQL',
        'Déploiement en production sur AWS Lightsail',
        'Code géré avec Git/GitHub'
      ]}
      screenshots={[
        { url: `${process.env.PUBLIC_URL}/demos/elite-click/login.jpg`, caption: 'Écran de connexion sécurisé' },
        { url: `${process.env.PUBLIC_URL}/demos/elite-click/home.jpg`, caption: 'Page d\'accueil de l\'application' },
        { url: `${process.env.PUBLIC_URL}/demos/elite-click/service.jpg`, caption: 'Catalogue des services publicitaires' },
        { url: `${process.env.PUBLIC_URL}/demos/elite-click/profil.jpg`, caption: 'Interface de profil utilisateur' },
        { url: `${process.env.PUBLIC_URL}/demos/elite-click/commandes.jpg`, caption: 'Gestion des commandes clients' },
        { url: `${process.env.PUBLIC_URL}/demos/elite-click/commercialetabledeboard.jpg`, caption: 'Tableau de bord commercial - Analytics' },
        { url: `${process.env.PUBLIC_URL}/demos/elite-click/commercialeclient.jpg`, caption: 'Interface commerciale - Gestion clients' },
        { url: `${process.env.PUBLIC_URL}/demos/elite-click/commerciale localisation.jpg`, caption: 'Interface commerciale - Localisation et suivi' }
      ]}
      github="https://github.com/Remi2222/eliteclick"
      client="Elite Click, Beni Mellal"
      date="Août - Oct. 2025"
      status="Terminé"
      category="Mobile App"
      challenges={[
        'Concevoir une application mobile adaptée à deux profils : clients et agents',
        'Exposer et consommer une API REST connectée à MySQL',
        'Déployer l\'application en production sur AWS Lightsail'
      ]}
      outcomes={[
        'Application mobile livrée et déployée en production',
        'Interfaces dédiées aux clients et aux agents',
        'Code versionné avec Git/GitHub'
      ]}
    />
  );
};

export default EliteClickDemo;

