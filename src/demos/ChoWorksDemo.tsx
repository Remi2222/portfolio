import React from 'react';
import ProjectDemo from './ProjectDemo';

const ChoWorksDemo = () => {
  return (
    <ProjectDemo
      title="ChoWorks - Stage Mobile"
      description="Application mobile pour centraliser la communication entre les équipes (août - septembre 2024)"
      technologies={['React Native', 'API REST', 'Firebase', 'Docker', 'Git/GitHub']}
      features={[
        'Application mobile React Native',
        'API REST et Firebase',
        'Communication centralisée entre les équipes',
        'Travail en Agile Scrum avec Docker et Git/GitHub'
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
        'Centraliser la communication entre plusieurs équipes',
        'Intégrer Firebase avec une API REST',
        'Travailler en Agile Scrum avec Docker et Git/GitHub'
      ]}
      outcomes={[
        'Application mobile centralisant la communication interne',
        'Données synchronisées via Firebase',
        'Environnement reproductible avec Docker'
      ]}
    />
  );
};

export default ChoWorksDemo;

