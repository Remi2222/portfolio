import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Maryam Fajri
            </h3>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/Remi2222"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/maryam-fajri"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:maryam.fajri02@gmail.com"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToTop()}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t('footer.home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t('footer.about')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t('footer.skills')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t('footer.projects')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t('footer.contactLink')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-2 text-gray-400">
              <p>maryam.fajri02@gmail.com</p>
              <p>+212 643776635 </p>
              <p>{t('contact.locationValue')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Maryam Fajri. {t('footer.madeWith')}</span>
            <Heart className="text-red-500 mx-1" size={16} />
            
          </div>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition-colors"
            aria-label={t('footer.backToTop')}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
