import React from 'react';
import ProjectDemo from './ProjectDemo';

const RenaultDemo = () => {
  return (
    <ProjectDemo
      title="Renault Riva Dacia - Stage Desktop"
      description="Application pour centraliser les données clients (mars - avril 2022)"
      technologies={['C#', 'ASP.NET', 'Entity Framework', 'SQL Server', 'MySQL']}
      features={[
        'Application C# / ASP.NET avec Entity Framework',
        'Bases de données SQL Server et MySQL',
        'Centralisation des données clients',
        'Meilleure communication entre clientèle et après-vente'
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
        'Centraliser des données clients dispersées',
        'Faciliter la communication entre les services clientèle et après-vente'
      ]}
      outcomes={[
        'Données clients centralisées dans une même application',
        'Communication améliorée entre les deux services'
      ]}
    />
  );
};

export default RenaultDemo;

