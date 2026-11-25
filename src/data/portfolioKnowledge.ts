// Base de connaissances du portfolio pour le chatbot (alignée sur le CV)
export const portfolioKnowledge = {
  personalInfo: {
    name: "Maryam Fajri",
    title: "Ingénieure Full Stack & DevOps",
    education: "Diplôme d'Ingénieur en Informatique et Réseaux, option MIAGE (EMSI Casablanca, 2022 - 2025)",
    location: "Casablanca, Maroc",
    lookingFor: "Un poste d'ingénieure au Maroc",
    email: "maryam.fajri02@gmail.com",
    phone: "+212 643776635",
    github: "https://github.com/Remi2222",
    linkedin: "https://linkedin.com/in/maryam-fajri",
  },

  skills: {
    languages: ["TypeScript", "JavaScript", "Java", "Python", "C#", "Dart", "Bash"],
    webMobile: ["React", "Next.js", "NestJS", "Spring Boot", "Flutter", "React Native"],
    data: ["PostgreSQL", "MySQL", "Prisma", "Firebase"],
    devopsCloud: ["Docker", "GitHub Actions (CI/CD)", "AWS (EC2, Lightsail)", "Git"],
    qualitySecurity: ["Jest", "JWT", "OpenAPI", "Agile Scrum"],
  },

  projects: [
    { name: "Syndic Pro Maroc", period: "Depuis mars 2026 (en cours)", description: "SaaS multi-tenant de gestion de syndic de copropriété avec comptabilité en partie double", tech: "Next.js, NestJS, PostgreSQL, Prisma, Flutter" },
    { name: "Facturly", period: "2025 - 2026", description: "Plateforme de gestion et de suivi de factures", tech: "React, NestJS, PostgreSQL, Docker" },
    { name: "AMOUCH", period: "2024 - 2025", description: "Plateforme vétérinaire et d'adoption d'animaux en microservices", tech: "React, Node.js, MySQL, Docker, Microservices" },
  ],

  experience: [
    { company: "Elite Click (Beni Mellal)", role: "Stagiaire Développeuse Mobile", period: "août - oct. 2025", summary: "Application mobile Flutter pour les clients et agents de l'agence (API REST, MySQL), déployée en production sur AWS Lightsail, code géré avec Git/GitHub." },
    { company: "FastCube (Casablanca)", role: "Stagiaire Développeuse Full Stack", period: "mars - juil. 2025", summary: "9 fonctionnalités et 7 API REST (React, NestJS, MySQL) en Agile Scrum (Jira). Sécurisation (JWT, hachage, validation), tests Jest, documentation OpenAPI. Temps de réponse réduit de 30 %. Déploiement avec Docker Compose et CI/CD GitHub Actions sur AWS EC2." },
    { company: "ChoWorks (Marrakech)", role: "Stagiaire Développeuse Mobile", period: "août - sept. 2024", summary: "Application mobile React Native avec API REST et Firebase pour centraliser la communication entre les équipes. Agile Scrum, Docker, Git/GitHub." },
    { company: "Renault Riva Dacia (El Jadida)", role: "Stagiaire Développeuse Desktop", period: "mars - avr. 2022", summary: "Application C# / ASP.NET (Entity Framework) avec SQL Server / MySQL pour centraliser les données clients et améliorer la communication entre clientèle et après-vente." },
  ],

  certifications: [
    "AWS Cloud Practitioner Essentials (2026)",
    "Machine Learning with Python - IBM (2025)",
    "Virtual Networks - Azure (2025)",
    "Full Stack Software Developer (Cloud, React, Node.js, Docker, Kubernetes) - IBM (2024)",
  ],

  languagesSpoken: "Français (courant), Anglais (courant), Arabe (langue maternelle)",
  interests: "Neurosciences et psychologie cognitive, équitation",
};

const k = portfolioKnowledge;

// Recherche simple par mots-clés
export function searchKnowledge(query: string): string {
  const q = query.toLowerCase();
  const has = (...words: string[]) => words.some((w) => q.includes(w));

  if (has('contact', 'email', 'mail', 'téléphone', 'telephone', 'joindre', 'phone')) {
    return `Vous pouvez contacter Maryam par email à ${k.personalInfo.email} ou par téléphone au ${k.personalInfo.phone}. Elle est basée à Casablanca.`;
  }

  if (has('disponible', 'disponibilité', 'available', 'recherche', 'looking', 'poste', 'freelance', 'embauche', 'recrut')) {
    return "Maryam recherche un poste d'ingénieure Full Stack & DevOps au Maroc. N'hésitez pas à la contacter par email ou via le formulaire de contact.";
  }

  if (has('stage', 'internship', 'expérience', 'experience', 'parcours', 'elite', 'fastcube', 'choworks', 'renault')) {
    if (has('fastcube')) return k.experience[1].summary;
    if (has('elite')) return k.experience[0].summary;
    if (has('choworks')) return k.experience[2].summary;
    if (has('renault')) return k.experience[3].summary;
    return "Maryam a effectué 4 stages : Elite Click (mobile Flutter, AWS Lightsail, 2025), FastCube (full stack React/NestJS, Docker, CI/CD, AWS EC2, 2025), ChoWorks (mobile React Native/Firebase, 2024) et Renault Riva Dacia (desktop C#/ASP.NET, 2022).";
  }

  if (has('projet', 'project', 'réalisation', 'syndic', 'facturly', 'amouch')) {
    if (has('syndic')) return `${k.projects[0].name} : ${k.projects[0].description}. Technologies : ${k.projects[0].tech}. Projet en cours depuis mars 2026.`;
    if (has('facturly')) return `${k.projects[1].name} : ${k.projects[1].description}. Technologies : ${k.projects[1].tech}.`;
    if (has('amouch')) return `${k.projects[2].name} : ${k.projects[2].description}. Technologies : ${k.projects[2].tech}.`;
    return "Projets principaux : Syndic Pro Maroc (SaaS multi-tenant de gestion de syndic avec comptabilité en partie double, en cours), Facturly (gestion et suivi de factures) et AMOUCH (plateforme vétérinaire et d'adoption d'animaux). Elle a aussi réalisé des applications pendant ses 4 stages.";
  }

  if (has('certif', 'certificat', 'aws', 'ibm', 'azure')) {
    return `Certifications : ${k.certifications.join(' ; ')}.`;
  }

  if (has('devops', 'docker', 'ci/cd', 'cloud', 'déploiement', 'deploiement')) {
    return "Côté DevOps & cloud, Maryam utilise Docker (et Docker Compose), GitHub Actions pour le CI/CD, AWS (EC2, Lightsail) et Git. Elle a déployé des applications en production chez FastCube (AWS EC2) et Elite Click (AWS Lightsail).";
  }

  if (has('mobile', 'flutter', 'react native')) {
    return "Pour le mobile, Maryam utilise Flutter (Elite Click, Syndic Pro Maroc) et React Native (ChoWorks).";
  }

  if (has('compétence', 'competence', 'skill', 'technologie', 'langage', 'stack', 'react', 'nest', 'python', 'typescript')) {
    return `Langages : ${k.skills.languages.join(', ')}. Web & mobile : ${k.skills.webMobile.join(', ')}. Données : ${k.skills.data.join(', ')}. DevOps & cloud : ${k.skills.devopsCloud.join(', ')}. Qualité & sécurité : ${k.skills.qualitySecurity.join(', ')}.`;
  }

  if (has('formation', 'diplôme', 'diplome', 'étude', 'etude', 'école', 'ecole', 'emsi', 'education')) {
    return "Maryam est diplômée ingénieure en Informatique et Réseaux, option MIAGE (EMSI Casablanca, 2022 - 2025), après un diplôme de Technicien Spécialisé en Développement Informatique (OFPPT, El Jadida, 2020 - 2022).";
  }

  if (has('langue', 'language', 'parle', 'anglais', 'arabe')) {
    return `Langues : ${k.languagesSpoken}.`;
  }

  if (has('intérêt', 'interet', 'passion', 'hobby', 'loisir')) {
    return `Centres d'intérêt : ${k.interests}.`;
  }

  return "Maryam Fajri est ingénieure Full Stack & DevOps (Bac+5, MIAGE). Elle conçoit et déploie des applications SaaS en production et recherche un poste d'ingénieure au Maroc. Posez-moi une question sur ses compétences, ses stages, ses projets ou ses certifications !";
}
