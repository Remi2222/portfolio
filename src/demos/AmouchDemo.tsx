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
        { url: `${process.env.PUBLIC_URL}/demos/amouch/connexion.png`, caption: 'Page de connexion - Authentification sécurisée des utilisateurs' },
        { url: `${process.env.PUBLIC_URL}/demos/amouch/inscription.png`, caption: 'Page d\'inscription - Création de compte pour nouveaux utilisateurs' },
        { url: `${process.env.PUBLIC_URL}/demos/amouch/annimeauxdispo.png`, caption: 'Animaux disponibles - Catalogue des animaux prêts à l\'adoption' },
        { url: `${process.env.PUBLIC_URL}/demos/amouch/adoptions.png`, caption: 'Interface d\'adoptions - Processus d\'adoption et suivi des demandes' },
        { url: `${process.env.PUBLIC_URL}/demos/amouch/espace adoptant.png`, caption: 'Espace adoptant - Dashboard personnel pour les adoptants' },
        { url: `${process.env.PUBLIC_URL}/demos/amouch/espaceveterinaire.png`, caption: 'Espace vétérinaire - Interface dédiée aux professionnels vétérinaires' },
        { url: `${process.env.PUBLIC_URL}/demos/amouch/veterinairecalendrier.png`, caption: 'Calendrier vétérinaire - Gestion des rendez-vous et consultations' },
        { url: `${process.env.PUBLIC_URL}/demos/amouch/gestionveterinaire.png`, caption: 'Gestion vétérinaire - Suivi médical et dossiers des animaux' },
        { url: `${process.env.PUBLIC_URL}/demos/amouch/convesation.png`, caption: 'Conversation - Système de messagerie et communication' },
        { url: `${process.env.PUBLIC_URL}/demos/amouch/sensibilisation et education.png`, caption: 'Sensibilisation et éducation - Contenu informatif et ressources pédagogiques' }
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

