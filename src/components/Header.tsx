import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { scaleHoverVariant, rotateHoverVariant } from '../constants/animations';

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
    { name: t('header.certificates'), id: 'certificates' },
    { name: t('header.projects'), id: 'projects' },
    { name: t('header.contact'), id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-[#0F0015]/95 backdrop-blur-lg shadow-lg border-b border-[#4A2566]"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-[#F3E5F5]"
            onClick={() => scrollToSection('home')}
            aria-label="Maryam Fajri - Go to home"
          >
            Maryam Fajri
          </motion.button>

          <nav className="hidden lg:flex space-x-6" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.1 }}
                className="text-secondary hover:text-[#FFD700] transition-colors duration-200 font-medium cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-[#FFD700]"
                aria-label={`Go to ${item.name}`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-[#2D0052] border border-[#4A2566] rounded-full p-1" role="group" aria-label="Language selection">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[#FFD700] ${
                  language === 'fr'
                    ? 'bg-[#FFD700] text-[#1A0033]'
                    : 'text-secondary hover:text-[#FFD700]'
                }`}
                aria-label="Switch to French"
                aria-pressed={language === 'fr'}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[#FFD700] ${
                  language === 'en'
                    ? 'bg-[#FFD700] text-[#1A0033]'
                    : 'text-secondary hover:text-[#FFD700]'
                }`}
                aria-label="Switch to English"
                aria-pressed={language === 'en'}
              >
                EN
              </button>
            </div>

            <motion.a
              href="https://github.com/Remi2222"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-secondary hover:text-[#FFD700] transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/maryam-fajri"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-secondary hover:text-[#C084FC] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:maryam.fajri02@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-secondary hover:text-[#FFD700] transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </motion.a>
          </div>

          <button
            className="md:hidden text-secondary hover:text-[#FFD700] transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[#FFD700]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-[#4A2566]"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-secondary hover:text-[#FFD700] transition-colors duration-200 font-medium text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center bg-[#2D0052] border border-[#4A2566] rounded-full p-1 mt-4">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    language === 'fr'
                      ? 'bg-[#FFD700] text-[#1A0033]'
                      : 'text-secondary hover:text-[#FFD700]'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    language === 'en'
                      ? 'bg-[#FFD700] text-[#1A0033]'
                      : 'text-secondary hover:text-[#FFD700]'
                  }`}
                >
                  EN
                </button>
              </div>

              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/Remi2222" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={24} className="text-secondary hover:text-[#FFD700] transition-colors" />
                </a>
                <a href="https://linkedin.com/in/maryam-fajri" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={24} className="text-secondary hover:text-[#C084FC] transition-colors" />
                </a>
                <a href="mailto:maryam.fajri02@gmail.com" aria-label="Email">
                  <Mail size={24} className="text-secondary hover:text-[#FFD700] transition-colors" />
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