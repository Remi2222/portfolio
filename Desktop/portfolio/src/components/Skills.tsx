import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Database, 
  Palette, 
  Globe, 
  Zap
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.categories.programming'),
      icon: <Code className="text-blue-500" size={32} />,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Java", level: 85 },
        { name: "C#", level: 88 },
        { name: "C++", level: 80 },
        { name: "C", level: 75 },
        { name: "HTML/CSS", level: 95 },
        { name: "SQL/PL-SQL", level: 90 },
      ]
    },
    {
      title: t('skills.categories.frontend'),
      icon: <Smartphone className="text-green-500" size={32} />,
      skills: [
        { name: "React.js", level: 92 },
        { name: "React Native", level: 90 },
        { name: "Flutter", level: 85 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Expo", level: 85 },
        { name: "UI/UX Responsive", level: 90 },
      ]
    },
    {
      title: t('skills.categories.backend'),
      icon: <Database className="text-purple-500" size={32} />,
      skills: [
        { name: "Django (Python)", level: 88 },
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: ".NET Core (C#)", level: 85 },
        { name: "Spring Boot (Java)", level: 80 },
        { name: "REST APIs", level: 92 },
      ]
    },
    {
      title: t('skills.categories.database'),
      icon: <Globe className="text-orange-500" size={32} />,
      skills: [
        { name: "MySQL", level: 90 },
        { name: "Firestore (Firebase)", level: 85 },
        { name: "Azure", level: 80 },
        { name: "Architecture Microservices", level: 85 },
        { name: "Administration Réseau", level: 80 },
      ]
    },
    {
      title: t('skills.categories.ai'),
      icon: <Zap className="text-yellow-500" size={32} />,
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "Scikit-learn", level: 88 },
        { name: "Réseaux Neuronaux", level: 80 },
        { name: "NLP", level: 75 },
        { name: "OpenAI API", level: 85 },
        { name: "Apprentissage Supervisé", level: 82 },
      ]
    },
    {
      title: t('skills.categories.devops'),
      icon: <Palette className="text-red-500" size={32} />,
      skills: [
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "JWT/OAuth2", level: 88 },
        { name: "Firebase Auth", level: 90 },
        { name: "Chiffrement", level: 80 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t('skills.title')} <span className="gradient-text">{t('skills.titleHighlight')}</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('skills.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl p-8 hover-lift"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold ml-3 text-gray-800">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-800">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-gray-600">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 + 0.5 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800">
            {t('skills.additionalTitle')}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Windows Forms", "Guna Framework", "Architecture MVC", 
              "Agile/Scrum", "Responsive Design", "PWA", "GraphQL", 
              "GitHub", "Git", "Canva", "Bootstrap", "Firebase", 
              "Ant Design", "Postman", "Figma", "VS Code", 
              "IntelliJ", "Monitoring", "Automatisation", "Régression", 
              "Clustering", "CNN", "ANN", "Virtual Networks"
            ].map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-white px-4 py-2 rounded-full shadow-md text-gray-700 font-medium hover-lift"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
