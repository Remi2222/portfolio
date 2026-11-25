
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
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

  const socialLinks = [
    {
      icon: <Github size={24} />,
      url: 'https://github.com/Remi2222',
      label: 'GitHub',
      hoverColor: 'hover:text-[#14B8A6]'
    },
    {
      icon: <Linkedin size={24} />,
      url: 'https://linkedin.com/in/maryam-fajri',
      label: 'LinkedIn',
      hoverColor: 'hover:text-[#22D3EE]'
    },
    {
      icon: <Mail size={24} />,
      url: 'mailto:maryam.fajri02@gmail.com',
      label: 'Email',
      hoverColor: 'hover:text-[#14B8A6]'
    }
  ];

  const navigationLinks = [
    { label: t('footer.home'), action: scrollToTop },
    { label: t('footer.about'), action: () => scrollToSection('about') },
    { label: t('footer.skills'), action: () => scrollToSection('skills') },
    { label: t('footer.projects'), action: () => scrollToSection('projects') },
    { label: t('footer.contactLink'), action: () => scrollToSection('contact') }
  ];

  return (
    <footer className="bg-[#071426] border-t border-[#263D56] text-white py-12 relative overflow-hidden">

      {/* Subtle decorative glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#14B8A6]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Brand and social links */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Maryam Fajri
            </h3>

            <p className="text-[#CBD5E1] mb-4">
              {t('footer.description')}
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-[#CBD5E1] ${social.hoverColor} transition-colors duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#F8FAFC]">
              {t('footer.navigation')}
            </h4>

            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-[#CBD5E1] hover:text-[#14B8A6] transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Cntact information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#F8FAFC]">
              {t('footer.contact')}
            </h4>

            <div className="space-y-2 text-[#CBD5E1]">
              <p className="hover:text-[#14B8A6] transition-colors">
                maryam.fajri02@gmail.com
              </p>
              <p className="hover:text-[#22D3EE] transition-colors">
                +212 643776635
              </p>
              <p>{t('contact.locationValue')}</p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-[#263D56] pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-[#CBD5E1] mb-4 md:mb-0">
            <span>© {currentYear} Maryam Fajri</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
