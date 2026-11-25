import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, any> = {
  fr: {
    header: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      certificates: 'Certifications',
      contact: 'Contact',
    },
    hero: {
      greeting: "Salut, je suis Maryam 👋",
      name: "Maryam Fajri",
      title: "Ingénieure Full Stack & DevOps",
      subtitle: "Diplômée en Informatique et Réseaux, option MIAGE (Bac+5) · EMSI Casablanca",
      description: "Je conçois et déploie des applications SaaS en production.",
      details: "4 stages en développement web, mobile et déploiement cloud (React, NestJS, Flutter, Docker, AWS). Je recherche un poste d'ingénieure au Maroc.",
      label: "Ingénieure Full Stack & DevOps",
      photoAlt: "Maryam Fajri, ingénieure Full Stack & DevOps",
      fullStack: "Full Stack",
      mobile: "Mobile",
      cloud: "Cloud",
      devOps: "DevOps",
      viewProjects: "Voir mes projets",
      downloadCV: "Télécharger CV",
    },
    about: {
      title: "À propos de",
      titleHighlight: "moi",
      subtitle: "Ingénieure Full Stack & DevOps, je conçois et déploie des applications SaaS en production, du back-end à l'infrastructure cloud.",
      myJourney: "Mon parcours",
      paragraph1: "Diplômée ingénieure en Informatique et Réseaux, option MIAGE (EMSI Casablanca, Bac+5), après un diplôme de Technicien Spécialisé en Développement Informatique (OFPPT, El Jadida).",
      paragraph2: "À travers 4 stages en développement web, mobile et desktop, j'ai réalisé des applications avec React, NestJS, Flutter et React Native, sur des bases de données MySQL, PostgreSQL et Firebase.",
      paragraph3: "Chez FastCube, j'ai développé 9 fonctionnalités et 7 API REST sécurisées (JWT, validation des données, tests Jest, documentation OpenAPI), réduit de 30 % le temps de réponse en optimisant les requêtes, et déployé avec Docker Compose et GitHub Actions sur AWS EC2.",
      paragraph4: "Je développe actuellement Syndic Pro Maroc, un SaaS multi-tenant de gestion de syndic de copropriété avec comptabilité en partie double. Je recherche un poste d'ingénieure au Maroc.",
      name: "Maryam Fajri",
      role: "Ingénieure Informatique et Réseaux, option MIAGE",
      location: "Localisation",
      availability: "Recherche",
      specialization: "Spécialisation",
      specializationValue: "Full Stack & DevOps",
      stats: {
        internships: "Stages en entreprise",
        languages: "Langages de programmation",
        saas: "Projets SaaS / plateformes",
        degree: "Diplôme d'ingénieur",
      },
      passions: "Centres d'intérêt",
      interests: {
        saas: {
          title: "SaaS & Full Stack",
          description: "Concevoir des applications de bout en bout",
        },
        cloud: {
          title: "DevOps & Cloud",
          description: "Docker, CI/CD, AWS",
        },
        neuro: {
          title: "Neurosciences",
          description: "Psychologie cognitive",
        },
        riding: {
          title: "Équitation",
          description: "Discipline, patience et concentration",
        },
      },
    },
    skills: {
      title: "Mes",
      titleHighlight: "compétences",
      subtitle: "Les technologies que j'utilise pour concevoir, sécuriser et déployer des applications web et mobiles.",
      categories: {
        programming: "Langages",
        frontend: "Web & Mobile",
        database: "Données",
        devops: "DevOps & Cloud",
        quality: "Qualité & Sécurité",
      },
      additionalTitle: "Autres outils et méthodes",
    },
    projects: {
      title: "Mes",
      titleHighlight: "projets",
      subtitle: "Une sélection de mes projets : plateformes SaaS et applications réalisées en stage.",
      technologies: "Technologies utilisées",
      features: "Fonctionnalités principales",
      code: "Code",
      demo: "Démo",
      status: {
        ongoing: "En cours",
        completed: "Terminé",
      },
      categories: {
        mobileApp: "Application mobile",
        desktopApp: "Application desktop",
        webApp: "Application web",
        webAi: "Application web + IA",
        saas: "SaaS",
        internshipWeb: "Stage · Full Stack",
        internshipMobile: "Stage · Mobile",
        internshipDesktop: "Stage · Desktop",
      },
      cta: {
        title: "Une opportunité à me proposer ?",
        description: "Je recherche un poste d'ingénieure Full Stack & DevOps au Maroc. N'hésitez pas à me contacter pour en discuter.",
        button: "Contactez-moi",
      },
      list: {
        syndic: {
          title: "Syndic Pro Maroc - SaaS de gestion de syndic",
          description: "SaaS multi-tenant de gestion de syndic de copropriété avec comptabilité en partie double (projet en cours depuis mars 2026)",
          features: [
            "Architecture multi-tenant",
            "Comptabilité en partie double",
            "Gestion de syndic de copropriété",
            "Application web Next.js et application mobile Flutter",
            "API NestJS avec PostgreSQL et Prisma",
          ],
        },
        factureAuto: {
          title: "Facturly - Gestion et suivi de factures",
          description: "Plateforme de gestion et de suivi de factures (2025 - 2026)",
          features: [
            "Création et gestion de factures",
            "Génération de factures en PDF",
            "Authentification sécurisée avec JWT",
            "Tableau de bord de suivi",
            "Gestion des clients",
            "Déploiement conteneurisé avec Docker",
          ],
        },
        amouch: {
          title: "AMOUCH - Plateforme vétérinaire et d'adoption",
          description: "Plateforme vétérinaire et d'adoption d'animaux en architecture microservices (2024 - 2025)",
          features: [
            "Architecture microservices",
            "Catalogue d'animaux et suivi des demandes d'adoption",
            "Espaces dédiés aux adoptants et aux vétérinaires",
            "Calendrier de rendez-vous et suivi médical",
            "Messagerie entre utilisateurs",
            "Contenus de sensibilisation et d'éducation",
          ],
        },
        fastcube: {
          title: "FastCube - Stage Full Stack",
          description: "Stage de mars à juillet 2025 : développement full stack de 9 fonctionnalités et 7 API REST en Agile Scrum (Jira)",
          features: [
            "9 fonctionnalités et 7 API REST (React, NestJS, MySQL)",
            "Sécurisation : JWT, hachage, validation des données",
            "Tests Jest et documentation OpenAPI",
            "Temps de réponse réduit de 30 % grâce à l'optimisation des requêtes",
            "Déploiement avec Docker Compose sur AWS EC2",
            "CI/CD avec GitHub Actions",
          ],
        },
        eliteClick: {
          title: "Elite Click - Stage Mobile",
          description: "Stage d'août à octobre 2025 : application mobile Flutter pour les clients et les agents de l'agence",
          features: [
            "Application mobile Flutter pour clients et agents",
            "API REST et base de données MySQL",
            "Déploiement en production sur AWS Lightsail",
            "Code géré avec Git/GitHub",
          ],
        },
        choworks: {
          title: "ChoWorks - Stage Mobile",
          description: "Stage d'août à septembre 2024 : application mobile pour centraliser la communication entre les équipes",
          features: [
            "Application mobile React Native",
            "API REST et Firebase",
            "Communication centralisée entre les équipes",
            "Travail en Agile Scrum avec Docker et Git/GitHub",
          ],
        },
        renault: {
          title: "Renault Riva Dacia - Stage Desktop",
          description: "Stage de mars à avril 2022 : application pour centraliser les données clients",
          features: [
            "Application C# / ASP.NET avec Entity Framework",
            "Bases de données SQL Server et MySQL",
            "Centralisation des données clients",
            "Meilleure communication entre clientèle et après-vente",
          ],
        },
        vernaVert: {
          title: "Verna Vert - Gestion Espaces Verts",
          description: "Application desktop pour la gestion complète des espaces verts",
          features: [
            "Architecture MVC moderne",
            "Interface utilisateur Guna UI",
            "Gestion relationnelle des données",
            "Rapports et analytics",
            "Système de planification",
            "Gestion des ressources et équipes",
          ],
        },
        tickets: {
          title: "TICKETS - Plateforme Réservation Bus",
          description: "Application web de réservation et achat de tickets de bus",
          features: [
            "Réservation de tickets en ligne",
            "Gestion des trajets et horaires",
            "Système de paiement sécurisé",
            "Gestion des comptes utilisateurs",
            "Interface Django responsive",
            "Base de données MySQL optimisée",
          ],
        },
        personalAnalytics: {
          title: "Personal Analytics Dashboard",
          description: "Tableau de bord d'analyse personnelle avec machine learning pour visualiser et prédire vos métriques de productivité",
          features: [
            "Formulaire de saisie quotidienne avec base de données SQLite",
            "Dashboard interactif avec graphiques Plotly et analyses avancées",
            "Modèles de machine learning (Random Forest) pour prédictions",
            "Visualisations : heatmaps de corrélation, analyses de tendances",
            "Export de données en CSV et Excel",
            "KPIs personnalisés avec comparaisons hebdomadaires",
          ],
        },
      },
    },
    contact: {
      title: "Contactez-",
      titleHighlight: "moi",
      subtitle: "Une opportunité ? Une question ? N'hésitez pas à me contacter. Je réponds généralement dans les 24 heures.",
      info: "Informations de contact",
      email: "Email",
      phone: "Téléphone",
      location: "Localisation",
      locationValue: "Casablanca, Maroc",
      availability: "Disponibilité",
      availabilityValue: "Lun - Ven, 9h - 18h",
      followMe: "Suivez-moi",
      availabilityTitle: "Recherche active",
      availabilityText: "Je recherche un poste d'ingénieure Full Stack & DevOps au Maroc. Réponse sous 24h pour toute proposition.",
      validation: {
        nameRequired: "Le nom est requis",
        emailRequired: "L'email est requis",
        emailInvalid: "Adresse email invalide",
        subjectRequired: "Le sujet est requis",
        messageRequired: "Le message est requis",
      },
      form: {
        title: "Envoyez-moi un message",
        name: "Nom complet",
        email: "Email",
        subject: "Sujet",
        message: "Message",
        send: "Envoyer le message",
        sending: "Envoi en cours...",
        success: "Message envoyé !",
        successMessage: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
        namePlaceholder: "Votre nom",
        emailPlaceholder: "votre@email.com",
        subjectPlaceholder: "Sujet de votre message",
        messagePlaceholder: "Décrivez votre proposition ou votre demande...",
      },
    },
    certificates: {
      title: "Certifications",
      titleHighlight: "professionnelles",
      subtitle: "Formations et certifications validant mes compétences en cloud, DevOps et développement.",
      awsCloudPractitioner: {
        description: "Fondamentaux du cloud AWS : services de calcul, stockage, réseau, sécurité et modèle de tarification.",
      },
      mlPython: {
        description: "Apprentissage supervisé, réseaux de neurones, utilisation de scikit-learn et TensorFlow.",
      },
      azureNetworks: {
        description: "Conception et gestion de réseaux virtuels dans Azure, sécurité réseau et connectivité hybride.",
      },
      fullStackIBM: {
        description: "Développement full stack : cloud, React, Node.js, Docker, Kubernetes et architectures modernes.",
      },
      aiBusiness: {
        description: "Rôle de l'IA en entreprise, outils IA, prompting efficace, utilisation éthique de l'intelligence artificielle.",
      },
      dataScience: {
        description: "Pratiques data science, outils d'analyse de données, approche data-driven pour la prise de décision.",
      },
      pythonEverybody: {
        description: "Python, structures de données, analyse de données et bases de données.",
      },
      pythonSpecialization: {
        description: "Spécialisation Python : structures de données, APIs réseau, bases de données, traitement et visualisation de données.",
      },
      gitGithub: {
        description: "Git et GitHub : contrôle de version, collaboration, gestion de branches et workflows professionnels.",
      },
      awsBasics: {
        description: "Bases des services cloud AWS : calcul, stockage, réseau et concepts fondamentaux du cloud.",
      },
      dockerKubernetes: {
        description: "Conteneurisation avec Docker, orchestration avec Kubernetes et déploiement avec OpenShift.",
      },
      reactBasics: {
        description: "Interfaces interactives avec les composants React, les hooks et JavaScript moderne.",
      },
    },
    footer: {
      description: "Ingénieure Full Stack & DevOps. Je conçois et déploie des applications SaaS en production.",
      navigation: "Navigation",
      contact: "Contact",
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contactLink: "Contact",
      madeWith: "Fait avec",
      backToTop: "Retour en haut",
    },
  },
  en: {
    header: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      certificates: 'Certifications',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm Maryam 👋",
      name: "Maryam Fajri",
      title: "Full Stack & DevOps Engineer",
      subtitle: "Graduate in Computer Science and Networks, MIAGE track (Master's level) · EMSI Casablanca",
      description: "I design and deploy SaaS applications in production.",
      details: "4 internships in web and mobile development and cloud deployment (React, NestJS, Flutter, Docker, AWS). I'm looking for an engineering position in Morocco.",
      label: "Full Stack & DevOps Engineer",
      photoAlt: "Maryam Fajri, Full Stack & DevOps Engineer",
      fullStack: "Full Stack",
      mobile: "Mobile",
      cloud: "Cloud",
      devOps: "DevOps",
      viewProjects: "View my projects",
      downloadCV: "Download CV",
    },
    about: {
      title: "About",
      titleHighlight: "me",
      subtitle: "Full Stack & DevOps Engineer designing and deploying production SaaS applications, from the back end to cloud infrastructure.",
      myJourney: "My Journey",
      paragraph1: "Engineering graduate in Computer Science and Networks, MIAGE track (EMSI Casablanca, 5-year degree), after a Specialized Technician diploma in Software Development (OFPPT, El Jadida).",
      paragraph2: "Through 4 internships in web, mobile and desktop development, I built applications with React, NestJS, Flutter and React Native, on MySQL, PostgreSQL and Firebase databases.",
      paragraph3: "At FastCube, I developed 9 features and 7 secured REST APIs (JWT, data validation, Jest tests, OpenAPI documentation), cut response time by 30% through query optimization, and deployed with Docker Compose and GitHub Actions on AWS EC2.",
      paragraph4: "I'm currently building Syndic Pro Maroc, a multi-tenant SaaS for condominium management with double-entry accounting. I'm looking for an engineering position in Morocco.",
      name: "Maryam Fajri",
      role: "Computer Science and Networks Engineer, MIAGE track",
      location: "Location",
      availability: "Looking for",
      specialization: "Specialization",
      specializationValue: "Full Stack & DevOps",
      stats: {
        internships: "Internships",
        languages: "Programming languages",
        saas: "SaaS / platform projects",
        degree: "Engineering degree",
      },
      passions: "Interests",
      interests: {
        saas: {
          title: "SaaS & Full Stack",
          description: "Building end-to-end applications",
        },
        cloud: {
          title: "DevOps & Cloud",
          description: "Docker, CI/CD, AWS",
        },
        neuro: {
          title: "Neuroscience",
          description: "Cognitive psychology",
        },
        riding: {
          title: "Horse riding",
          description: "Discipline, patience and focus",
        },
      },
    },
    skills: {
      title: "My",
      titleHighlight: "skills",
      subtitle: "The technologies I use to design, secure and deploy web and mobile applications.",
      categories: {
        programming: "Languages",
        frontend: "Web & Mobile",
        database: "Data",
        devops: "DevOps & Cloud",
        quality: "Quality & Security",
      },
      additionalTitle: "Other tools and methods",
    },
    projects: {
      title: "My",
      titleHighlight: "projects",
      subtitle: "A selection of my work: SaaS platforms and applications built during internships.",
      technologies: "Technologies used",
      features: "Key features",
      code: "Code",
      demo: "Demo",
      status: {
        ongoing: "Ongoing",
        completed: "Completed",
      },
      categories: {
        mobileApp: "Mobile App",
        desktopApp: "Desktop App",
        webApp: "Web App",
        webAi: "Web App + AI",
        saas: "SaaS",
        internshipWeb: "Internship · Full Stack",
        internshipMobile: "Internship · Mobile",
        internshipDesktop: "Internship · Desktop",
      },
      cta: {
        title: "Have an opportunity for me?",
        description: "I'm looking for a Full Stack & DevOps engineering position in Morocco. Feel free to get in touch.",
        button: "Contact me",
      },
      list: {
        syndic: {
          title: "Syndic Pro Maroc - Condominium management SaaS",
          description: "Multi-tenant SaaS for condominium management with double-entry accounting (ongoing since March 2026)",
          features: [
            "Multi-tenant architecture",
            "Double-entry accounting",
            "Condominium (syndic) management",
            "Next.js web app and Flutter mobile app",
            "NestJS API with PostgreSQL and Prisma",
          ],
        },
        factureAuto: {
          title: "Facturly - Invoice management and tracking",
          description: "Invoice management and tracking platform (2025 - 2026)",
          features: [
            "Invoice creation and management",
            "PDF invoice generation",
            "Secure authentication with JWT",
            "Tracking dashboard",
            "Client management",
            "Containerized deployment with Docker",
          ],
        },
        amouch: {
          title: "AMOUCH - Veterinary and pet adoption platform",
          description: "Veterinary and pet adoption platform built on a microservices architecture (2024 - 2025)",
          features: [
            "Microservices architecture",
            "Animal catalog and adoption request tracking",
            "Dedicated spaces for adopters and veterinarians",
            "Appointment calendar and medical follow-up",
            "Messaging between users",
            "Awareness and education content",
          ],
        },
        fastcube: {
          title: "FastCube - Full Stack Internship",
          description: "Internship from March to July 2025: full stack development of 9 features and 7 REST APIs in Agile Scrum (Jira)",
          features: [
            "9 features and 7 REST APIs (React, NestJS, MySQL)",
            "Security: JWT, hashing, data validation",
            "Jest tests and OpenAPI documentation",
            "30% faster response time through query optimization",
            "Docker Compose deployment on AWS EC2",
            "CI/CD with GitHub Actions",
          ],
        },
        eliteClick: {
          title: "Elite Click - Mobile Internship",
          description: "Internship from August to October 2025: Flutter mobile app for the agency's clients and agents",
          features: [
            "Flutter mobile app for clients and agents",
            "REST API and MySQL database",
            "Production deployment on AWS Lightsail",
            "Code managed with Git/GitHub",
          ],
        },
        choworks: {
          title: "ChoWorks - Mobile Internship",
          description: "Internship from August to September 2024: mobile app centralizing communication between teams",
          features: [
            "React Native mobile app",
            "REST API and Firebase",
            "Centralized communication between teams",
            "Agile Scrum with Docker and Git/GitHub",
          ],
        },
        renault: {
          title: "Renault Riva Dacia - Desktop Internship",
          description: "Internship from March to April 2022: application centralizing customer data",
          features: [
            "C# / ASP.NET application with Entity Framework",
            "SQL Server and MySQL databases",
            "Centralized customer data",
            "Better communication between customer service and after-sales",
          ],
        },
        vernaVert: {
          title: "Verna Vert - Green Spaces Management",
          description: "Desktop application for complete green spaces management",
          features: [
            "Modern MVC architecture",
            "Guna UI user interface",
            "Relational data management",
            "Reports and analytics",
            "Planning system",
            "Resource and team management",
          ],
        },
        tickets: {
          title: "TICKETS - Bus Booking Platform",
          description: "Web application for booking and purchasing bus tickets",
          features: [
            "Online ticket booking",
            "Route and schedule management",
            "Secure payment system",
            "User account management",
            "Responsive Django interface",
            "Optimized MySQL database",
          ],
        },
        personalAnalytics: {
          title: "Personal Analytics Dashboard",
          description: "Personal analytics dashboard with machine learning to visualize and predict your productivity metrics",
          features: [
            "Daily input form with SQLite database",
            "Interactive dashboard with Plotly charts and advanced analytics",
            "Machine learning models (Random Forest) for predictions",
            "Visualizations: correlation heatmaps, trend analysis",
            "Data export to CSV and Excel",
            "Custom KPIs with weekly comparisons",
          ],
        },
      },
    },
    contact: {
      title: "Contact",
      titleHighlight: "me",
      subtitle: "Have an opportunity? A question? Don't hesitate to contact me. I usually respond within 24 hours.",
      info: "Contact information",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Casablanca, Morocco",
      availability: "Availability",
      availabilityValue: "Mon - Fri, 9am - 6pm",
      followMe: "Follow me",
      availabilityTitle: "Actively looking",
      availabilityText: "I'm looking for a Full Stack & DevOps engineering position in Morocco. I reply within 24 hours to any proposal.",
      validation: {
        nameRequired: "Name is required",
        emailRequired: "Email is required",
        emailInvalid: "Invalid email address",
        subjectRequired: "Subject is required",
        messageRequired: "Message is required",
      },
      form: {
        title: "Send me a message",
        name: "Full name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send message",
        sending: "Sending...",
        success: "Message sent!",
        successMessage: "Thank you for your message. I will reply as soon as possible.",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        subjectPlaceholder: "Subject of your message",
        messagePlaceholder: "Describe your proposal or request...",
      },
    },
    certificates: {
      title: "Professional",
      titleHighlight: "Certifications",
      subtitle: "Training and certifications validating my skills in cloud, DevOps and development.",
      awsCloudPractitioner: {
        description: "AWS cloud fundamentals: compute, storage, networking, security and pricing model.",
      },
      mlPython: {
        description: "Supervised learning, neural networks, using scikit-learn and TensorFlow.",
      },
      azureNetworks: {
        description: "Design and management of virtual networks in Azure, network security and hybrid connectivity.",
      },
      fullStackIBM: {
        description: "Full stack development: cloud, React, Node.js, Docker, Kubernetes and modern architectures.",
      },
      aiBusiness: {
        description: "Role of AI in business, AI tools, effective prompting, ethical use of artificial intelligence.",
      },
      dataScience: {
        description: "Data science practices, data analysis tools, data-driven approach for decision making.",
      },
      pythonEverybody: {
        description: "Python, data structures, data analysis and databases.",
      },
      pythonSpecialization: {
        description: "Python specialization: data structures, networked APIs, databases, data processing and visualization.",
      },
      gitGithub: {
        description: "Git and GitHub: version control, collaboration, branch management and professional workflows.",
      },
      awsBasics: {
        description: "Basics of AWS cloud services: compute, storage, networking and core cloud concepts.",
      },
      dockerKubernetes: {
        description: "Containerization with Docker, orchestration with Kubernetes and deployment with OpenShift.",
      },
      reactBasics: {
        description: "Interactive interfaces with React components, hooks and modern JavaScript.",
      },
    },
    footer: {
      description: "Full Stack & DevOps Engineer. I design and deploy SaaS applications in production.",
      navigation: "Navigation",
      contact: "Contact",
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contactLink: "Contact",
      madeWith: "Made with",
      backToTop: "Back to top",
    },
  },
};
