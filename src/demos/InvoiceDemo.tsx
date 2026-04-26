import React from 'react';
import ProjectDemo from './ProjectDemo';



const InvoiceDemo = () => {
  return (
    <ProjectDemo
      title="Facturly - Plateforme de Facturation en Ligne"
      description="Plateforme de facturation en ligne — création, gestion et suivi de factures simplifié"
      technologies={['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'JWT']}
      features={[
        'Création et gestion de factures',
        'Génération de factures en PDF',
        'Authentification sécurisée avec JWT',
        'Tableau de bord de suivi',
        'Gestion des clients',
        'Backend robuste avec NestJS',
        'Base de données PostgreSQL avec Prisma'
      ]}
      screenshots={[
        { url: `${process.env.PUBLIC_URL}/demos/invoice/home1.png`, caption: 'Écran de connexion sécurisé' },
        { url: `${process.env.PUBLIC_URL}/demos/invoice/home22.png`, caption: 'Écran de connexion sécurisé' },
        { url: `${process.env.PUBLIC_URL}/demos/invoice/login1.png`, caption: 'Écran de connexion sécurisé' },
        { url: `${process.env.PUBLIC_URL}/demos/invoice/dashboard1.png`, caption: 'Tableau de bord principal' },
        { url: `${process.env.PUBLIC_URL}/demos/invoice/creefacture.png`, caption: 'Création d\'une facture' },
        { url: `${process.env.PUBLIC_URL}/demos/invoice/facture.png`, caption: 'Liste des factures' },
        { url: `${process.env.PUBLIC_URL}/demos/invoice/pdf.png`, caption: 'Aperçu PDF de la facture' },
      ]}
      github="https://github.com/Remi2222/Invoice-"
      date="2026"
      status="Términé"
      category="Web App"
      challenges={[
        'Génération dynamique de PDF avec Puppeteer',
        'Authentification sécurisée avec JWT et Bcrypt',
        'Synchronisation frontend/backend en temps réel',
        'Gestion des états complexes avec Zustand'
      ]}
      outcomes={[
        'Génération automatique de factures en PDF',
        'Interface moderne et responsive avec Tailwind CSS',
        'Système d\'authentification sécurisé opérationnel',
        'Stack moderne : React 19, NestJS 11, Prisma 7'
      ]}
    />
  );
};

export default InvoiceDemo;