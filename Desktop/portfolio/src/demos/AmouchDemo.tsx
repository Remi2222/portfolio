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
        { url: `${process.env.PUBLIC_URL}/demos/amouch/Capture d'écran 2025-10-29 164227.png`, caption: 'Page d\'accueil - Présentation de l\'animalerie avec navigation intuitive' },
        { url: `${process.env.PUBLIC_URL}/demos/amouch/Capture d'écran 2025-10-29 164239.png`, caption: 'Catalogue complet des animaux - Affichage avec photos et informations essentielles' },
        { url: `${process.env.PUBLIC_URL}/demos/amouch/Capture d'écran 2025-10-29 164342.png`, caption: 'Fiche détaillée d\'un animal - Informations complètes, santé et historique' },
        { url: `${process.env.PUBLIC_URL}/demos/amouch/Capture d'écran 2025-10-29 164354.png`, caption: 'Système de recherche avancée - Filtres par espèce, prix, disponibilité' },
        { url: `${process.env.PUBLIC_URL}/demos/amouch/Capture d'écran 2025-10-29 164413.png`, caption: 'Formulaire de réservation - Processus de réservation d\'un animal' },
        { url: `${process.env.PUBLIC_URL}/demos/amouch/Capture d'écran 2025-10-29 164428.png`, caption: 'Liste des réservations - Suivi et gestion des réservations en cours' },
        { url: `${process.env.PUBLIC_URL}/demos/amouch/Capture d'écran 2025-10-29 164444.png`, caption: 'Gestion des stocks - Inventaire produits alimentaires et accessoires' },
        { url: `${process.env.PUBLIC_URL}/demos/amouch/Capture d'écran 2025-10-29 164537.png`, caption: 'Interface d\'administration - Dashboard complet pour gestion de l\'animalerie' },
        { url: `${process.env.PUBLIC_URL}/demos/amouch/Capture d'écran 2025-10-29 164550.png`, caption: 'Analytics et statistiques - Tableau de bord avec métriques et rapports' },
        { url: `${process.env.PUBLIC_URL}/demos/amouch/Capture d'écran 2025-10-29 165012.png`, caption: 'Gestion des utilisateurs - Administration des comptes et permissions' }
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

