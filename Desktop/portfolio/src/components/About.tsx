import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Award, Heart } from 'lucide-react';

const About = () => {
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

  const stats = [
    { number: "8+", label: "Langages maîtrisés" },
    { number: "7+", label: "Projets réalisés" },
    { number: "15+", label: "Frameworks & Outils" },
    { number: "100%", label: "Motivation" },
  ];

  const interests = [
    { icon: "💻", title: "Développement", description: "Création d'applications modernes" },
    { icon: "🎨", title: "Design UI/UX", description: "Interfaces utilisateur attrayantes" },
    { icon: "📱", title: "Mobile First", description: "Applications mobiles performantes" },
    { icon: "🚀", title: "Innovation", description: "Technologies émergentes" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
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
            À propos de <span className="gradient-text">moi</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Développeuse Full-Stack passionnée avec une expertise en développement web, 
            mobile et IA. Spécialisée dans React Native, React.js, Python, .NET Core 
            et les technologies modernes.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover-lift"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Mon parcours</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Diplômée en Informatique et Réseaux, je suis une développeuse Full-Stack 
                  passionnée par l'innovation technologique. J'ai acquis mes compétences 
                  à travers ma formation académique et mes projets personnels.
                </p>
                <p>
                  Mes compétences couvrent React Native et React.js pour le frontend, 
                  Python/Django et .NET Core pour le backend, ainsi que TensorFlow 
                  pour l'IA/ML. J'ai développé des projets variés comme l'application 
                  mobile Elite Click et des solutions web avec intégration IA.
                </p>
                <p>
                  Je maîtrise les architectures modernes, les bases de données relationnelles, 
                  et les technologies de sécurité. Mon approche se concentre sur la création 
                  d'applications performantes et bien structurées.
                </p>
                <p>
                  Toujours en veille technologique, j'aime relever des défis complexes 
                  et créer des solutions innovantes qui allient performance, sécurité et scalabilité.
                </p>
              </div>
            </motion.div>

            {/* Personal Info */}
            <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                <User className="text-primary-600" size={20} />
                <div>
                  <p className="font-semibold text-gray-800">Maryam Fajri</p>
                  <p className="text-sm text-gray-600">Développeuse Full Stack</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                <MapPin className="text-primary-600" size={20} />
                <div>
                  <p className="font-semibold text-gray-800">Localisation</p>
                  <p className="text-sm text-gray-600">Disponible en remote</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                <Calendar className="text-primary-600" size={20} />
                <div>
                  <p className="font-semibold text-gray-800">Disponibilité</p>
                  <p className="text-sm text-gray-600">Immédiate</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                <Award className="text-primary-600" size={20} />
                <div>
                  <p className="font-semibold text-gray-800">Spécialisation</p>
                  <p className="text-sm text-gray-600">Full-Stack & IA/ML</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Interests */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 mb-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover-lift"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Interests */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <Heart className="text-red-500 mr-2" size={24} />
                Mes passions
              </h3>
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4 hover-lift"
                >
                  <div className="text-2xl">{interest.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{interest.title}</h4>
                    <p className="text-sm text-gray-600">{interest.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
