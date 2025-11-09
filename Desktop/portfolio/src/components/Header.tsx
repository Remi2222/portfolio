import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: t('header.home'), id: 'home' },
    { name: t('header.about'), id: 'about' },
    { name: t('header.skills'), id: 'skills' },
    { name: t('header.projects'), id: 'projects' },
    { name: t('header.contact'), id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Maryam Fajri
          </motion.div>

          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.1 }}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium cursor-pointer"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  language === 'fr'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                EN
              </button>
            </div>

            <motion.a
              href="https://github.com/Remi2222"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/maryam-fajri"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:maryam.fajri@example.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center bg-gray-100 rounded-full p-1 mt-4">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    language === 'fr'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    language === 'en'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  EN
                </button>
              </div>

              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/Remi2222" target="_blank" rel="noopener noreferrer">
                  <Github size={24} className="text-gray-600 hover:text-primary-600" />
                </a>
                <a href="https://linkedin.com/in/maryam-fajri" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} className="text-gray-600 hover:text-primary-600" />
                </a>
                <a href="mailto:maryam.fajri@example.com">
                  <Mail size={24} className="text-gray-600 hover:text-primary-600" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
