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
const Skills = () => {
  const skillCategories = [
    {
      title: "Langages de Programmation",
      icon: <Code className="text-blue-500" size={32} />,
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "Java", level: 85, icon: "☕" },
        { name: "C#", level: 88, icon: "🔷" },
        { name: "C++", level: 80, icon: "⚡" },
        { name: "C", level: 75, icon: "🔧" },
        { name: "HTML/CSS", level: 95, icon: "🎨" },
        { name: "SQL/PL-SQL", level: 90, icon: "🗄️" },
      ]
    },
    {
      title: "Frontend & Mobile",
      icon: <Smartphone className="text-green-500" size={32} />,
      skills: [
        { name: "React.js", level: 92, icon: "⚛️" },
        { name: "React Native", level: 90, icon: "📱" },
        { name: "Flutter", level: 85, icon: "🐦" },
        { name: "Tailwind CSS", level: 88, icon: "💨" },
        { name: "Expo", level: 85, icon: "⚡" },
        { name: "UI/UX Responsive", level: 90, icon: "🎨" },
      ]
    },
    {
      title: "Backend & Frameworks",
      icon: <Database className="text-purple-500" size={32} />,
      skills: [
        { name: "Django (Python)", level: 88, icon: "🎸" },
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express.js", level: 88, icon: "🚀" },
        { name: ".NET Core (C#)", level: 85, icon: "🔷" },
        { name: "Spring Boot (Java)", level: 80, icon: "🌱" },
        { name: "REST APIs", level: 92, icon: "🔗" },
      ]
    },
    {
      title: "Bases de Données & Cloud",
      icon: <Globe className="text-orange-500" size={32} />,
      skills: [
        { name: "MySQL", level: 90, icon: "🗄️" },
        { name: "Firestore (Firebase)", level: 85, icon: "🔥" },
        { name: "Azure", level: 80, icon: "☁️" },
        { name: "Architecture Microservices", level: 85, icon: "🏗️" },
        { name: "Administration Réseau", level: 80, icon: "🌐" },
      ]
    },
    {
      title: "IA & Machine Learning",
      icon: <Zap className="text-yellow-500" size={32} />,
      skills: [
        { name: "TensorFlow", level: 85, icon: "🧠" },
        { name: "Scikit-learn", level: 88, icon: "📊" },
        { name: "Réseaux Neuronaux", level: 80, icon: "🔗" },
        { name: "NLP", level: 75, icon: "💬" },
        { name: "OpenAI API", level: 85, icon: "🤖" },
        { name: "Apprentissage Supervisé", level: 82, icon: "📈" },
      ]
    },
    {
      title: "DevOps & Sécurité",
      icon: <Palette className="text-red-500" size={32} />,
      skills: [
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "Kubernetes", level: 75, icon: "⚓" },
        { name: "CI/CD", level: 80, icon: "🔄" },
        { name: "JWT/OAuth2", level: 88, icon: "🔐" },
        { name: "Firebase Auth", level: 90, icon: "🔥" },
        { name: "Chiffrement", level: 80, icon: "🔒" },
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
            Mes <span className="gradient-text">compétences</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Un éventail de technologies modernes pour créer des applications 
            performantes et des expériences utilisateur exceptionnelles.
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
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-semibold text-gray-800">
                          {skill.name}
                        </span>
                      </div>
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

        {/* Additional Skills */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800">
            Technologies & Outils supplémentaires
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Windows Forms", "Guna Framework", "Architecture MVC", 
              "Agile/Scrum", "Responsive Design", "PWA", "GraphQL", 
              "GitHub", "Git", "Canva ", "Bootstrap", "Firebase ", 
              "Ant Design", "Postman", "Figma", "Postman", "VS Code", 
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
