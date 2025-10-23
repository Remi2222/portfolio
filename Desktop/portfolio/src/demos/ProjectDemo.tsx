import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, MapPin, CheckCircle, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface Screenshot {
  url: string;
  caption: string;
}

interface ProjectDemoProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  screenshots: Screenshot[];
  github: string;
  liveUrl?: string;
  client?: string;
  date?: string;
  status: string;
  category: string;
  challenges?: string[];
  outcomes?: string[];
}

const ProjectDemo: React.FC<ProjectDemoProps> = ({
  title,
  description,
  technologies,
  features,
  screenshots,
  github,
  liveUrl,
  client,
  date,
  status,
  category,
  challenges,
  outcomes
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % screenshots.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + screenshots.length) % screenshots.length);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 mb-8 transition-colors"
            onClick={() => {
              setTimeout(() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
          >
            <ArrowLeft size={20} />
            <span>Retour aux projets</span>
          </motion.button>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex flex-wrap items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{title}</h1>
              <p className="text-xl text-gray-600">{description}</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                status === 'Terminé' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {status}
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-purple-100 text-purple-800">
                {category}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {client && (
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin size={18} className="text-primary-600" />
                <span>{client}</span>
              </div>
            )}
            {date && (
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar size={18} className="text-primary-600" />
                <span>{date}</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-primary-100 text-primary-800 px-4 py-2 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex space-x-4">
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Github size={20} />
              <span>Voir le code</span>
            </motion.a>
            
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <ExternalLink size={20} />
                <span>Site en ligne</span>
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Screenshots Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Captures d'écran</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group relative"
                onClick={() => openLightbox(index)}
              >
                <div className="bg-gray-200 aspect-video flex items-center justify-center relative">
                  <img 
                    src={screenshot.url} 
                    alt={screenshot.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext fill="%236b7280" font-family="system-ui" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ECapture d\'écran à venir%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={40} />
                  </div>
                </div>
                <div className="bg-gray-50 p-4">
                  <p className="text-sm text-gray-600">{screenshot.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Fonctionnalités principales</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Challenges & Outcomes */}
        {(challenges || outcomes) && (
          <div className="grid md:grid-cols-2 gap-8">
            {challenges && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Défis relevés</h2>
                <ul className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-primary-600 font-bold">•</span>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {outcomes && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Résultats obtenus</h2>
                <ul className="space-y-3">
                  {outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-50 bg-black bg-opacity-50 rounded-full p-2"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-50 bg-black bg-opacity-50 rounded-full p-2"
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-3xl max-h-[70vh] w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={screenshots[selectedImage].url}
                alt={screenshots[selectedImage].caption}
                className="w-full h-full object-contain rounded-lg max-h-[70vh]"
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white bg-opacity-90 rounded-lg p-4 mt-4 text-center"
              >
                <p className="text-gray-800 font-medium">{screenshots[selectedImage].caption}</p>
                <p className="text-sm text-gray-600 mt-1">
                  Image {selectedImage + 1} sur {screenshots.length}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDemo;

