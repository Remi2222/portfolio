// Base de connaissances du portfolio pour le chatbot RAG
export const portfolioKnowledge = {
  personalInfo: {
    name: "Maryam Fajri",
    title: "Ingénieure Full-Stack Freelance",
    education: "Diplômée en Informatique et Réseaux",
    location: "Maroc",
    availability: "Disponible en remote",
    email: "maryam.fajri02@gmail.com",
    phone: "+212 643776635",
    github: "https://github.com/Remi2222",
    linkedin: "https://linkedin.com/in/maryam-fajri",
  },

  skills: {
    programmingLanguages: [
      { name: "Python", level: 90, description: "Développement backend, IA/ML, Django" },
      { name: "JavaScript", level: 95, description: "React.js, React Native, Node.js" },
      { name: "Java", level: 85, description: "Spring Boot, applications enterprise" },
      { name: "C#", level: 88, description: ".NET Core, Windows Forms, GUNA Framework" },
      { name: "C++", level: 80, description: "Programmation système" },
      { name: "C", level: 75, description: "Programmation bas niveau" },
      { name: "HTML/CSS", level: 95, description: "Design web moderne" },
      { name: "SQL/PL-SQL", level: 90, description: "MySQL, bases de données relationnelles" },
    ],
    
    frontendMobile: [
      { name: "React.js", level: 92, description: "Applications web modernes" },
      { name: "React Native", level: 90, description: "Applications mobiles cross-platform" },
      { name: "Flutter", level: 85, description: "Applications mobiles natives" },
      { name: "Tailwind CSS", level: 88, description: "Framework CSS utility-first" },
      { name: "Expo", level: 85, description: "Développement React Native rapide" },
      { name: "UI/UX Responsive", level: 90, description: "Design adaptatif et accessible" },
    ],
    
    backendFrameworks: [
      { name: "Django (Python)", level: 88, description: "Framework web Python" },
      { name: "Node.js", level: 90, description: "Backend JavaScript" },
      { name: "Express.js", level: 88, description: "Framework Node.js" },
      { name: ".NET Core (C#)", level: 85, description: "Applications enterprise" },
      { name: "Spring Boot (Java)", level: 80, description: "Microservices Java" },
      { name: "REST APIs", level: 92, description: "Architecture API RESTful" },
    ],
    
    databases: [
      { name: "MySQL", level: 90, description: "Base de données relationnelle" },
      { name: "Firestore (Firebase)", level: 85, description: "Base de données NoSQL temps réel" },
      { name: "Azure", level: 80, description: "Cloud Microsoft" },
    ],
    
    aiML: [
      { name: "TensorFlow", level: 85, description: "Deep Learning" },
      { name: "Scikit-learn", level: 88, description: "Machine Learning" },
      { name: "Réseaux Neuronaux", level: 80, description: "CNN, ANN" },
      { name: "NLP", level: 75, description: "Traitement du langage naturel" },
      { name: "OpenAI API", level: 85, description: "Intégration GPT" },
      { name: "Apprentissage Supervisé", level: 82, description: "Classification, Régression" },
    ],
    
    devops: [
      { name: "Docker", level: 85, description: "Conteneurisation" },
      { name: "Kubernetes", level: 75, description: "Orchestration" },
      { name: "CI/CD", level: 80, description: "Intégration continue" },
      { name: "JWT/OAuth2", level: 88, description: "Authentification sécurisée" },
    ],
  },

  projects: [
    {
      name: "Elite Click",
      type: "Mobile App",
      description: "Application mobile pour la digitalisation des services d'une agence de publicité",
      technologies: ["React Native", "TailwindCSS", "Node.js", "MySQL"],
      status: "En cours",
      date: "Depuis Juillet 2025",
      client: "Elite Click, Beni Mellal",
      features: [
        "Digitalisation complète des services",
        "Interface mobile moderne",
        "Gestion des clients et projets",
        "Backend Node.js robuste",
      ]
    },
    {
      name: "ChoWorks",
      type: "Mobile App",
      description: "Application mobile de gestion interne d'entreprise",
      technologies: ["Flutter", "Firebase", "Firestore"],
      status: "Terminé",
      date: "Août-Sept 2024",
      client: "ChoWorks, Marrakech",
      features: [
        "Interface responsive",
        "Authentification Firebase",
        "Gestion temps réel",
        "Synchronisation cloud",
      ]
    },
    {
      name: "Verna Vert",
      type: "Desktop App",
      description: "Application desktop pour la gestion des espaces verts",
      technologies: [".NET Core", "C#", "Architecture MVC", "Guna UI", "MySQL"],
      status: "Terminé",
      date: "Août-Sept 2023",
      client: "Verna vert, Rabat",
      features: [
        "Architecture MVC moderne",
        "Interface Guna UI",
        "Gestion relationnelle",
        "Rapports et analytics",
      ]
    },
    {
      name: "Renault - Gestion Clientèle",
      type: "Desktop App",
      description: "Modernisation du système de gestion clientèle",
      technologies: ["C#", "Windows Forms", "GUNA Framework", "MySQL"],
      status: "Terminé",
      date: "Mars-Avril 2022",
      client: "Renault, El Jadida",
      features: [
        "Interface Windows Forms",
        "Gestion clients complète",
        "Suivi des ventes",
        "Rapports détaillés",
      ]
    },
    {
      name: "FASTCUBE",
      type: "Web App + IA",
      description: "Plateforme web intelligente avec chatbot et recommandation",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "OpenAI API"],
      status: "Terminé",
      features: [
        "Chatbot conversationnel",
        "Moteur de recommandation",
        "Résumé automatique",
        "Intégration OpenAI",
      ]
    },
    {
      name: "AMOUCH",
      type: "Web App",
      description: "Application web pour animalerie avec architecture microservices",
      technologies: ["React.js", "Architecture Microservices", "MySQL"],
      status: "Terminé",
      features: [
        "Architecture microservices",
        "Interface React.js",
        "Gestion des animaux",
        "Système de réservation",
      ]
    },
    {
      name: "TICKETS",
      type: "Web App",
      description: "Plateforme de réservation de tickets de bus",
      technologies: ["Python", "Django", "MySQL"],
      status: "Terminé",
      features: [
        "Réservation en ligne",
        "Gestion trajets",
        "Paiement sécurisé",
        "Interface Django",
      ]
    }
  ],

  services: [
    "Développement d'applications mobiles (React Native, Flutter)",
    "Développement web (React.js, Node.js, Django)",
    "Applications desktop (.NET Core, C#, Windows Forms)",
    "Intégration IA/ML (TensorFlow, OpenAI API)",
    "Architecture microservices",
    "Bases de données (MySQL, Firebase)",
    "API REST",
    "UI/UX Design responsive",
    "Sécurité (JWT, OAuth2)",
    "DevOps (Docker, CI/CD)",
  ],

  experience: {
    years: "3+ ans d'expérience en développement",
    projectsCount: "7+ projets réalisés",
    languagesCount: "8+ langages maîtrisés",
    toolsCount: "15+ frameworks et outils",
    specialization: "Full-Stack & IA/ML",
    workMode: "Freelance, disponible en remote",
  },

  approach: "Je crée des applications performantes qui allient design moderne, sécurité robuste et scalabilité. Mon approche se concentre sur la création de solutions innovantes et bien structurées.",

  contact: {
    responseTime: "Je réponds généralement dans les 24 heures",
    availability: "Lundi - Vendredi, 9h - 18h",
    openToCollaboration: "Toujours ouverte à de nouveaux projets passionnants",
  }
};

// Fonction de recherche RAG simple
export function searchKnowledge(query: string): string {
  const lowerQuery = query.toLowerCase();
  
  // Compétences
  if (lowerQuery.includes('compétence') || lowerQuery.includes('skill') || lowerQuery.includes('technologie') || lowerQuery.includes('langage')) {
    if (lowerQuery.includes('python')) {
      return "Maryam maîtrise Python à 90%. Elle l'utilise pour le développement backend avec Django, ainsi que pour l'IA/ML avec TensorFlow et Scikit-learn.";
    }
    if (lowerQuery.includes('javascript') || lowerQuery.includes('js') || lowerQuery.includes('react')) {
      return "Maryam maîtrise JavaScript à 95%, notamment React.js (92%) pour le web et React Native (90%) pour le mobile. Elle utilise également Node.js (90%) et Express.js (88%) pour le backend.";
    }
    if (lowerQuery.includes('mobile')) {
      return "Pour le développement mobile, Maryam utilise React Native (90%), Flutter (85%), et Expo (85%). Elle a réalisé plusieurs applications mobiles comme Elite Click et ChoWorks.";
    }
    if (lowerQuery.includes('ia') || lowerQuery.includes('ai') || lowerQuery.includes('machine learning') || lowerQuery.includes('ml')) {
      return "Les compétences de Maryam en IA/ML incluent TensorFlow (85%), Scikit-learn (88%), les Réseaux Neuronaux (80%), le NLP (75%), et l'OpenAI API (85%). Elle a créé FASTCUBE, une plateforme avec chatbot et recommandation intelligente.";
    }
    return `Maryam maîtrise ${portfolioKnowledge.skills.programmingLanguages.length} langages de programmation principaux dont Python (90%), JavaScript (95%), Java (85%), et C# (88%). Ses frameworks incluent React.js, React Native, Django, Node.js, .NET Core et Spring Boot.`;
  }
  
  // Projets
  if (lowerQuery.includes('projet') || lowerQuery.includes('project') || lowerQuery.includes('réalisation') || lowerQuery.includes('travail')) {
    if (lowerQuery.includes('elite') || lowerQuery.includes('publicité')) {
      return `Elite Click est le projet en cours de Maryam - une application mobile React Native pour digitaliser les services d'une agence de publicité à Beni Mellal. Technologies: React Native, TailwindCSS, Node.js, MySQL.`;
    }
    if (lowerQuery.includes('choworks')) {
      return `ChoWorks est une application mobile Flutter développée par Maryam pour la gestion interne d'entreprise à Marrakech. Elle utilise Firebase pour l'authentification et la gestion temps réel. Projet terminé en Août-Sept 2024.`;
    }
    if (lowerQuery.includes('fastcube') || lowerQuery.includes('chatbot')) {
      return `FASTCUBE est une plateforme web avec IA développée par Maryam. Elle intègre un chatbot conversationnel intelligent, un moteur de recommandation et un système de résumé automatique grâce à l'OpenAI API. Technologies: React.js, Node.js, Express.js, MySQL.`;
    }
    return `Maryam a réalisé 7+ projets variés : Elite Click (mobile, en cours), ChoWorks (mobile Flutter), Verna Vert (desktop .NET), Renault CRM (desktop C#), FASTCUBE (web + IA), AMOUCH (web microservices), et TICKETS (web Django).`;
  }
  
  // Contact / Disponibilité
  if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('téléphone') || lowerQuery.includes('joindre')) {
    return `Vous pouvez contacter Maryam par email à maryam.fajri02@gmail.com ou par téléphone au +212 643776635. Elle répond généralement dans les 24 heures. Disponibilité: Lundi-Vendredi, 9h-18h.`;
  }
  
  if (lowerQuery.includes('disponible') || lowerQuery.includes('disponibilité') || lowerQuery.includes('available')) {
    return "Maryam est disponible immédiatement pour des projets freelance et des collaborations en remote. Son temps de réponse est généralement de 24h. Elle travaille du lundi au vendredi, 9h-18h.";
  }
  
  // Services
  if (lowerQuery.includes('service') || lowerQuery.includes('proposer') || lowerQuery.includes('faire')) {
    return `Maryam propose plusieurs services : développement d'applications mobiles (React Native, Flutter), développement web (React.js, Node.js, Django), applications desktop (.NET, C#), intégration IA/ML, architecture microservices, et conception UI/UX responsive.`;
  }
  
  // Expérience
  if (lowerQuery.includes('expérience') || lowerQuery.includes('experience') || lowerQuery.includes('parcours')) {
    return `Maryam a 3+ ans d'expérience en développement Full-Stack. Elle a réalisé 7+ projets pour des clients au Maroc (Beni Mellal, Marrakech, Rabat, El Jadida), allant d'applications mobiles à des plateformes web avec IA.`;
  }
  
  // Tarifs / Collaboration
  if (lowerQuery.includes('tarif') || lowerQuery.includes('prix') || lowerQuery.includes('coût') || lowerQuery.includes('budget')) {
    return "Pour discuter des tarifs et du budget de votre projet, vous pouvez contacter Maryam directement par email (maryam.fajri02@gmail.com) ou via le formulaire de contact. Elle propose des devis personnalisés selon vos besoins.";
  }
  
  // Spécialisation
  if (lowerQuery.includes('spécialis') || lowerQuery.includes('expert') || lowerQuery.includes('fort')) {
    return "La spécialisation principale de Maryam est le développement Full-Stack & IA/ML. Elle est particulièrement forte en React Native/React.js (95%), Python (90%), Node.js (90%), et intégration d'IA avec OpenAI API (85%).";
  }
  
  // Réponse générale
  return `Maryam Fajri est une Ingénieure Full-Stack Freelance diplômée en Informatique et Réseaux. Elle maîtrise 8+ langages de programmation et a réalisé 7+ projets variés (mobile, web, desktop, IA). Elle est disponible en remote pour de nouveaux projets. N'hésitez pas à poser des questions spécifiques sur ses compétences, projets ou services !`;
}

