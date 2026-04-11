import React from 'react';
import ProjectDemo from './ProjectDemo';

const PersonalAnalyticsDemo = () => {
  return (
    <ProjectDemo
      title="Personal Analytics Dashboard"
      description="Tableau de bord d'analyse personnelle avec machine learning pour visualiser et prédire vos métriques de productivité"
      technologies={['Python', 'Dash' , 'SQLite' , 'MachineLearning' , 'Pandas']}
      features={[
        
      ]}
      screenshots={[
        { url: `${process.env.PUBLIC_URL}/demos/Personaldashboard/Capture d'écran 2026-01-29 145939.png`, caption: 'Formulaire  interactif pour enregistrer les données quotidiennes' },
        { url: `${process.env.PUBLIC_URL}/demos/Personaldashboard/Capture d'écran 2026-01-29 150424.png`, caption: 'Tableau affichant toutes les données enregistrées' },
        { url: `${process.env.PUBLIC_URL}/demos/Personaldashboard/Capture d'écran 2026-01-29 150441.png`, caption: 'Visualisation de l\'évolution des métriques dans le temps ' },
        { url: `${process.env.PUBLIC_URL}/demos/Personaldashboard/Capture d'écran 2026-01-29 150623.png`, caption: 'Prédictions ML  pour la productivité' },
        { url: `${process.env.PUBLIC_URL}/demos/Personaldashboard/Capture d'écran 2026-01-29 150610.png`, caption: 'Graphique des Tâches accomplies ' },

    
      ]}
    />
  );
};

export default PersonalAnalyticsDemo;

