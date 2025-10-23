import React from 'react';
import ProjectDemo from './ProjectDemo';

const TicketsDemo = () => {
  return (
    <ProjectDemo
      title="TICKETS - Plateforme Réservation Bus"
      description="Application web de réservation et achat de tickets de bus"
      technologies={['Python', 'Django', 'MySQL']}
      features={[
        'Réservation de tickets en ligne',
        'Gestion des trajets et horaires',
        'Système de paiement sécurisé',
        'Gestion des comptes utilisateurs',
        'Interface Django responsive',
        'Base de données MySQL optimisée'
      ]}
      screenshots={[
        { url: '/demos/tickets/tickets-1.png', caption: 'Page de recherche de trajets' },
        { url: '/demos/tickets/tickets-2.png', caption: 'Sélection des places' },
        { url: '/demos/tickets/tickets-3.png', caption: 'Processus de paiement' },
        { url: '/demos/tickets/tickets-4.png', caption: 'Historique des réservations' }
      ]}
      github="https://github.com/Remi2222/tickets-bus"
      status="Terminé"
      category="Web App"
      challenges={[
        'Développement d\'un système de réservation en temps réel',
        'Intégration du paiement en ligne sécurisé',
        'Gestion des disponibilités et places assises',
        'Optimisation pour gérer un grand nombre d\'utilisateurs'
      ]}
      outcomes={[
        'Plateforme de réservation complète et sécurisée',
        'Système de paiement intégré et fonctionnel',
        'Interface utilisateur intuitive avec Django',
        'Gestion efficace des réservations en temps réel'
      ]}
    />
  );
};

export default TicketsDemo;

