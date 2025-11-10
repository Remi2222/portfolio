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
      contact: 'Contact',
    },
    hero: {
      greeting: "Salut, je suis Maryam 👋",
      name: "Maryam Fajri",
      title: "Ingénieure Full-Stack Freelance",
      subtitle: "Diplômée en Informatique et Réseaux",
      description: "Je transforme vos idées en solutions digitales innovantes",
      details: "Spécialisée en développement web, mobile et intelligence artificielle, je crée des applications performantes qui allient design moderne, sécurité robuste et scalabilité.",
      fullStack: "Full-Stack",
      mobile: "Mobile",
      aiMl: "IA/ML",
      devOps: "DevOps",
      viewProjects: "Voir mes projets",
      downloadCV: "Télécharger CV",
    },
    about: {
      title: "À propos de",
      titleHighlight: "moi",
      subtitle: "Développeuse Full-Stack passionnée avec une expertise en développement web, mobile et IA. Spécialisée dans React Native, React.js, Python, .NET Core et les technologies modernes.",
      myJourney: "Mon parcours",
      paragraph1: "Diplômée en Informatique et Réseaux, je suis une développeuse Full-Stack passionnée par l'innovation technologique. J'ai acquis mes compétences à travers ma formation académique et mes projets personnels.",
      paragraph2: "Mes compétences couvrent React Native et React.js pour le frontend, Python/Django et .NET Core pour le backend, ainsi que TensorFlow pour l'IA/ML. J'ai développé des projets variés comme l'application mobile Elite Click et des solutions web avec intégration IA.",
      paragraph3: "Je maîtrise les architectures modernes, les bases de données relationnelles, et les technologies de sécurité. Mon approche se concentre sur la création d'applications performantes et bien structurées.",
      paragraph4: "Toujours en veille technologique, j'aime relever des défis complexes et créer des solutions innovantes qui allient performance, sécurité et scalabilité.",
      name: "Maryam Fajri",
      role: "Développeuse Full Stack",
      location: "Localisation",
      remote: "Disponible en remote",
      availability: "Disponibilité",
      immediate: "Immédiate",
      specialization: "Spécialisation",
      specializationValue: "Full-Stack & IA/ML",
      stats: {
        languages: "Langages maîtrisés",
        projects: "Projets réalisés",
        tools: "Frameworks & Outils",
        motivation: "Motivation",
      },
      passions: "Mes passions",
      interests: {
        development: {
          title: "Développement",
          description: "Création d'applications modernes",
        },
        design: {
          title: "Design UI/UX",
          description: "Interfaces utilisateur attrayantes",
        },
        mobile: {
          title: "Mobile First",
          description: "Applications mobiles performantes",
        },
        innovation: {
          title: "Innovation",
          description: "Technologies émergentes",
        },
      },
    },
    skills: {
      title: "Mes",
      titleHighlight: "compétences",
      subtitle: "Un éventail de technologies modernes pour créer des applications performantes et des expériences utilisateur exceptionnelles.",
      categories: {
        programming: "Langages de Programmation",
        frontend: "Frontend & Mobile",
        backend: "Backend & Frameworks",
        database: "Bases de Données & Cloud",
        ai: "IA & Machine Learning",
        devops: "DevOps & Sécurité",
      },
      additionalTitle: "Technologies & Outils supplémentaires",
    },
    projects: {
      title: "Mes",
      titleHighlight: "projets",
      subtitle: "Découvrez une sélection de mes projets récents, allant des applications mobiles aux plateformes web modernes.",
      technologies: "Technologies utilisées",
      features: "Fonctionnalités principales",
      code: "Code",
      demo: "Démo",
      status: {
        ongoing: "En cours",
        completed: "Terminé",
      },
      categories: {
        mobileApp: "Mobile App",
        desktopApp: "Desktop App",
        webApp: "Web App",
        webAi: "Web App + IA",
      },
      cta: {
        title: "Intéressé par une collaboration ?",
        description: "Je suis toujours ouvert à de nouveaux projets passionnants. N'hésitez pas à me contacter pour discuter de vos besoins.",
        button: "Discutons de votre projet",
      },
      list: {
        eliteClick: {
          title: "Elite Click - Digitalisation Services Publicité",
          description: "Application mobile pour la digitalisation des services d'une agence de publicité",
          features: [
            "Digitalisation complète des services",
            "Interface mobile moderne",
            "Gestion des clients et projets",
            "Système de suivi intégré",
            "Backend robuste avec Node.js",
            "Base de données MySQL optimisée",
          ],
        },
        choworks: {
          title: "ChoWorks - Gestion Interne Entreprise",
          description: "Application mobile de gestion interne d'entreprise avec interface moderne",
          features: [
            "Interface utilisateur responsive",
            "Authentification sécurisée Firebase",
            "Gestion des données en temps réel",
            "Synchronisation cloud",
            "Interface intuitive et moderne",
            "Gestion des utilisateurs et permissions",
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
        renault: {
          title: "Renault - Gestion Clientèle",
          description: "Modernisation du système de gestion clientèle par application desktop",
          features: [
            "Interface Windows Forms moderne",
            "Framework GUNA pour le design",
            "Gestion complète des clients",
            "Système de suivi des ventes",
            "Rapports détaillés",
            "Base de données MySQL optimisée",
          ],
        },
        fastcube: {
          title: "FASTCUBE - Plateforme Web IA Multiservice",
          description: "Plateforme web intelligente avec chatbot, moteur de recommandation et résumé automatique",
          features: [
            "Chatbot conversationnel intelligent",
            "Moteur de recommandation avancé",
            "Système de résumé automatique",
            "Architecture full-stack moderne",
            "Intégration API OpenAI",
            "Interface utilisateur React.js",
          ],
        },
        amouch: {
          title: "AMOUCH - Application Web Animalerie",
          description: "Application web pour animalerie avec architecture microservices",
          features: [
            "Architecture microservices scalable",
            "Interface React.js moderne",
            "Gestion complète des animaux",
            "Système de réservation",
            "Gestion des stocks",
            "Base de données MySQL relationnelle",
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
      },
    },
    contact: {
      title: "Contactez-",
      titleHighlight: "moi",
      subtitle: "Une idée de projet ? Une question ? N'hésitez pas à me contacter. Je réponds généralement dans les 24 heures.",
      info: "Informations de contact",
      email: "Email",
      phone: "Téléphone",
      location: "Localisation",
      locationValue: "Maroc",
      availability: "Disponibilité",
      availabilityValue: "Lun - Ven, 9h - 18h",
      followMe: "Suivez-moi",
      availabilityTitle: "Disponibilité",
      availabilityText: "Je suis disponible pour des projets freelance et des collaborations. Réponse garantie sous 24h pour toute demande.",
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
        messagePlaceholder: "Décrivez votre projet ou votre demande...",
      },
    },
    footer: {
      description: "Développeuse Full Stack passionnée par la création d'applications modernes et d'expériences utilisateur exceptionnelles.",
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
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm Maryam 👋",
      name: "Maryam Fajri",
      title: "Freelance Full-Stack Engineer",
      subtitle: "Graduate in Computer Science and Networks",
      description: "I transform your ideas into innovative digital solutions",
      details: "Specialized in web, mobile, and artificial intelligence development, I create high-performance applications that combine modern design, robust security, and scalability.",
      fullStack: "Full-Stack",
      mobile: "Mobile",
      aiMl: "AI/ML",
      devOps: "DevOps",
      viewProjects: "View my projects",
      downloadCV: "Download CV",
    },
    about: {
      title: "About",
      titleHighlight: "me",
      subtitle: "Passionate Full-Stack Developer with expertise in web, mobile, and AI development. Specialized in React Native, React.js, Python, .NET Core, and modern technologies.",
      myJourney: "My Journey",
      paragraph1: "Graduate in Computer Science and Networks, I am a Full-Stack developer passionate about technological innovation. I acquired my skills through my academic training and personal projects.",
      paragraph2: "My skills cover React Native and React.js for the frontend, Python/Django and .NET Core for the backend, as well as TensorFlow for AI/ML. I have developed various projects such as the Elite Click mobile application and web solutions with AI integration.",
      paragraph3: "I master modern architectures, relational databases, and security technologies. My approach focuses on creating high-performance and well-structured applications.",
      paragraph4: "Always keeping up with technology trends, I enjoy tackling complex challenges and creating innovative solutions that combine performance, security, and scalability.",
      name: "Maryam Fajri",
      role: "Full Stack Developer",
      location: "Location",
      remote: "Available remotely",
      availability: "Availability",
      immediate: "Immediate",
      specialization: "Specialization",
      specializationValue: "Full-Stack & AI/ML",
      stats: {
        languages: "Languages mastered",
        projects: "Projects completed",
        tools: "Frameworks & Tools",
        motivation: "Motivation",
      },
      passions: "My Passions",
      interests: {
        development: {
          title: "Development",
          description: "Creating modern applications",
        },
        design: {
          title: "UI/UX Design",
          description: "Attractive user interfaces",
        },
        mobile: {
          title: "Mobile First",
          description: "High-performance mobile applications",
        },
        innovation: {
          title: "Innovation",
          description: "Emerging technologies",
        },
      },
    },
    skills: {
      title: "My",
      titleHighlight: "skills",
      subtitle: "A range of modern technologies to create high-performance applications and exceptional user experiences.",
      categories: {
        programming: "Programming Languages",
        frontend: "Frontend & Mobile",
        backend: "Backend & Frameworks",
        database: "Databases & Cloud",
        ai: "AI & Machine Learning",
        devops: "DevOps & Security",
      },
      additionalTitle: "Additional Technologies & Tools",
    },
    projects: {
      title: "My",
      titleHighlight: "projects",
      subtitle: "Discover a selection of my recent projects, ranging from mobile applications to modern web platforms.",
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
      },
      cta: {
        title: "Interested in collaboration?",
        description: "I'm always open to exciting new projects. Feel free to contact me to discuss your needs.",
        button: "Let's discuss your project",
      },
      list: {
        eliteClick: {
          title: "Elite Click - Advertising Services Digitization",
          description: "Mobile application for digitizing advertising agency services",
          features: [
            "Complete service digitization",
            "Modern mobile interface",
            "Client and project management",
            "Integrated tracking system",
            "Robust Node.js backend",
            "Optimized MySQL database",
          ],
        },
        choworks: {
          title: "ChoWorks - Company Internal Management",
          description: "Mobile application for internal company management with modern interface",
          features: [
            "Responsive user interface",
            "Secure Firebase authentication",
            "Real-time data management",
            "Cloud synchronization",
            "Intuitive and modern interface",
            "User and permission management",
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
        renault: {
          title: "Renault - Customer Management",
          description: "Modernization of customer management system through desktop application",
          features: [
            "Modern Windows Forms interface",
            "GUNA Framework for design",
            "Complete customer management",
            "Sales tracking system",
            "Detailed reports",
            "Optimized MySQL database",
          ],
        },
        fastcube: {
          title: "FASTCUBE - AI Multi-service Web Platform",
          description: "Intelligent web platform with chatbot, recommendation engine, and automatic summarization",
          features: [
            "Intelligent conversational chatbot",
            "Advanced recommendation engine",
            "Automatic summarization system",
            "Modern full-stack architecture",
            "OpenAI API integration",
            "React.js user interface",
          ],
        },
        amouch: {
          title: "AMOUCH - Pet Store Web Application",
          description: "Web application for pet store with microservices architecture",
          features: [
            "Scalable microservices architecture",
            "Modern React.js interface",
            "Complete animal management",
            "Booking system",
            "Inventory management",
            "Relational MySQL database",
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
      },
    },
    contact: {
      title: "Contact",
      titleHighlight: "me",
      subtitle: "Have a project idea? A question? Don't hesitate to contact me. I usually respond within 24 hours.",
      info: "Contact information",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Morocco",
      availability: "Availability",
      availabilityValue: "Mon - Fri, 9am - 6pm",
      followMe: "Follow me",
      availabilityTitle: "Availability",
      availabilityText: "I am available for freelance projects and collaborations. Response guaranteed within 24 hours for any request.",
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
        messagePlaceholder: "Describe your project or request...",
      },
    },
    footer: {
      description: "Full Stack Developer passionate about creating modern applications and exceptional user experiences.",
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


