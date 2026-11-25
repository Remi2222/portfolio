
import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  Database,
  Globe,
  Zap
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { containerVariants, itemVariants } from '../constants/animations';

const Skills = () => {
  const { t } = useLanguage();

  const colors = {
    navy: '#071426',
    card: '#10243E',
    teal: '#14B8A6',
    cyan: '#22D3EE',
    silver: '#CBD5E1',
    border: '#263D56',
  };

  const skillCategories = [
    {
      title: t('skills.categories.programming'),
      icon: <Code style={{ color: colors.teal }} size={32} />,
      skills: ["TypeScript", "JavaScript", "Java", "Python", "C#", "Dart", "Bash"],
      accent: colors.teal,
    },
    {
      title: t('skills.categories.frontend'),
      icon: <Smartphone style={{ color: colors.cyan }} size={32} />,
      skills: ["React", "Next.js", "NestJS", "Spring Boot", "Flutter", "React Native"],
      accent: colors.cyan,
    },
    {
      title: t('skills.categories.database'),
      icon: <Database style={{ color: colors.teal }} size={32} />,
      skills: ["PostgreSQL", "MySQL", "Prisma", "Firebase"],
      accent: colors.teal,
    },
    {
      title: t('skills.categories.devops'),
      icon: <Globe style={{ color: colors.cyan }} size={32} />,
      skills: ["Docker", "GitHub Actions (CI/CD)", "AWS (EC2, Lightsail)", "Git"],
      accent: colors.cyan,
    },
    {
      title: t('skills.categories.quality'),
      icon: <Zap style={{ color: colors.teal }} size={32} />,
      skills: ["Jest", "JWT", "OpenAPI", "Agile Scrum"],
      accent: colors.teal,
    },
  ];

  const additionalSkills = [
    "Docker Compose",
    "Jira",
    "API REST",
    "Node.js",
    "ASP.NET",
    "Entity Framework",
    "SQL Server",
    "Azure (réseaux virtuels)"
  ];

  return (
    <section
      id="skills"
      className="py-32 relative"
      style={{ backgroundColor: colors.navy }}
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: `linear-gradient(to right, transparent, ${colors.teal}, ${colors.cyan}, transparent)`,
          opacity: 0.7,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            {t('skills.title')}{' '}
            <span
              style={{
                background: `linear-gradient(90deg, ${colors.teal}, ${colors.cyan})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('skills.titleHighlight')}
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.silver }}
          >
            {t('skills.subtitle')}
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
           <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                categoryIndex === skillCategories.length - 1
                  ? 'lg:col-span-2 lg:w-1/2 lg:mx-auto'
                  : ''
             }`}
              style={{
                backgroundColor: colors.card,
                border: `1px solid ${colors.border}`,
      }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = category.accent;
                e.currentTarget.style.boxShadow =
                  `0 12px 30px ${category.accent}18`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.border;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="flex items-center mb-6">
                {category.icon}

                <h3 className="text-2xl font-bold ml-3 text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 rounded-full font-medium border transition-all duration-300"
                    style={{
                      backgroundColor: `${category.accent}12`,
                      borderColor: `${category.accent}40`,
                      color: colors.silver,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = category.accent;
                      e.currentTarget.style.borderColor = category.accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = colors.silver;
                      e.currentTarget.style.borderColor = `${category.accent}40`;
                    }}
                  >
                    {skill}
                  </span>
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
          <h3
            className="text-2xl font-bold mb-8"
            style={{ color: colors.teal }}
          >
            {t('skills.additionalTitle')}
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.06, y: -3 }}
                className="px-4 py-2 rounded-full font-medium border transition-all duration-300 cursor-default"
                style={{
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                  color: colors.silver,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.cyan;
                  e.currentTarget.style.color = colors.cyan;
                  e.currentTarget.style.boxShadow =
                    `0 5px 18px ${colors.cyan}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.border;
                  e.currentTarget.style.color = colors.silver;
                  e.currentTarget.style.boxShadow = 'none';
                }}
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
