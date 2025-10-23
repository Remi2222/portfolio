import React from 'react';
import ProjectDemo from './ProjectDemo';

const EliteClickDemo = () => {
  return (
    <ProjectDemo
      title="Elite Click - Digitalisation Services Publicité"
      description="Application mobile pour la digitalisation des services d'une agence de publicité"
      technologies={['React Native', 'TailwindCSS', 'Node.js', 'MySQL']}
      features={[
        'Digitalisation complète des services',
        'Interface mobile moderne',
        'Gestion des clients et projets',
        'Système de suivi intégré',
        'Backend robuste avec Node.js',
        'Base de données MySQL optimisée'
      ]}
      screenshots={[
        { url: '/demos/elite-click/login.jpg', caption: 'Écran de connexion sécurisé' },
        { url: '/demos/elite-click/home.jpg', caption: 'Page d\'accueil de l\'application' },
        { url: '/demos/elite-click/service.jpg', caption: 'Catalogue des services publicitaires' },
        { url: '/demos/elite-click/profil.jpg', caption: 'Interface de profil utilisateur' },
        { url: '/demos/elite-click/commandes.jpg', caption: 'Gestion des commandes clients' },
        { url: '/demos/elite-click/commercialetabledeboard.jpg', caption: 'Tableau de bord commercial - Analytics' },
        { url: '/demos/elite-click/commercialeclient.jpg', caption: 'Interface commerciale - Gestion clients' },
        { url: '/demos/elite-click/commerciale localisation.jpg', caption: 'Interface commerciale - Localisation et suivi' }
      ]}
      github="https://github.com/Remi2222/eliteclick"
      client="Elite Click, Beni Mellal"
      date="Depuis Juil. 2025"
      status="En cours"
      category="Mobile App"
      challenges={[
        'Création d\'une interface mobile intuitive pour gérer des processus complexes',
        'Optimisation des performances pour une utilisation fluide sur mobile',
        'Synchronisation en temps réel entre l\'app mobile et le backend',
        'Gestion sécurisée des données clients et projets'
      ]}
      outcomes={[
        'Réduction de 60% du temps de traitement des demandes clients',
        'Interface mobile responsive et performante',
        'Système de notifications en temps réel opérationnel',
        'Dashboard analytique complet pour le suivi des projets'
      ]}
    />
  );
};

export default EliteClickDemo;

