import React from 'react';
import ProjectDemo from './ProjectDemo';



const AmouchDemo = () => {
  return (
    <ProjectDemo
      title="AMOUCH - Plateforme vétérinaire et d'adoption"
      description="Plateforme vétérinaire et d'adoption d'animaux en architecture microservices (2024 - 2025)"
      technologies={['React', 'Node.js', 'MySQL', 'Docker', 'Microservices']}
      features={[
        'Architecture microservices',
        'Catalogue d\'animaux et suivi des demandes d\'adoption',
        'Espaces dédiés aux adoptants et aux vétérinaires',
        'Calendrier de rendez-vous et suivi médical',
        'Messagerie entre utilisateurs',
        'Contenus de sensibilisation et d\'éducation'
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
        'Gestion de plusieurs profils (adoptants, vétérinaires)',
        'Planification des rendez-vous vétérinaires'
      ]}
      outcomes={[
        'Architecture microservices conteneurisée avec Docker',
        'Parcours complet d\'adoption et de suivi vétérinaire',
        'Interface web moderne et intuitive'
      ]}
    />
  );
};

export default AmouchDemo;

