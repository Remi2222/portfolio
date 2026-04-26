import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  CheckCircle
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const serviceId = 'service_udoxh7q';
      const templateId = 'template_4z8ufe7';
      const publicKey = 'M_113sDZ9bNhKys_6';
      
      emailjs.init(publicKey);
      await emailjs.send(serviceId, templateId, {
        title: formData.subject,
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      });
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      setIsSubmitting(false);
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-[#10B981]" size={24} />,
      title: t('contact.email'),
      value: "maryam.fajri02@gmail.com",
      link: "mailto:maryam.fajri02@gmail.com"
    },
    {
      icon: <Phone className="text-[#34D399]" size={24} />,
      title: t('contact.phone'),
      value: "+212 643776635",
      link: "tel:+2126XXXXXXXX"
    },
    {
      icon: <MapPin className="text-[#10B981]" size={24} />,
      title: t('contact.location'),
      value: t('contact.locationValue'),
      link: "#"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/Remi2222",
      color: "hover:text-gray-800"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://linkedin.com/in/maryam-fajri",
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      icon: <Twitter size={24} />,
      url: "https://twitter.com/maryam_fajri",
      color: "hover:text-blue-400"
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
    <section id="contact" className="py-32 bg-[#111827] relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-30"></div>
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
            {t('contact.title')}<span className="gradient-text">{t('contact.titleHighlight')}</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-[#D1D5DB] max-w-3xl mx-auto"
          >
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-[#F9FAFB]"
            >
              {t('contact.info')}
            </motion.h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-[#1F2937] border border-[#374151] rounded-lg hover-lift hover:border-[#10B981] transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#F9FAFB]">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-[#D1D5DB] hover:text-[#10B981] transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <h4 className="font-semibold text-[#F9FAFB] mb-4">{t('contact.followMe')}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-[#D1D5DB] hover:text-[#10B981] transition-colors p-3 bg-[#1F2937] border border-[#374151] rounded-full hover-lift hover:border-[#10B981]"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#1F2937] border border-[#374151] rounded-2xl p-8 hover:border-[#10B981] transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-8 text-[#F9FAFB]">
              {t('contact.form.title')}
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="text-[#10B981] mx-auto mb-4" size={48} />
                <h4 className="text-xl font-semibold text-[#F9FAFB] mb-2">
                  {t('contact.form.success')}
                </h4>
                <p className="text-[#D1D5DB]">
                  {t('contact.form.successMessage')}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#D1D5DB] mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#111827] border border-[#374151] text-[#F9FAFB] rounded-lg focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-colors"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#D1D5DB] mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#111827] border border-[#374151] text-[#F9FAFB] rounded-lg focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-colors"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#D1D5DB] mb-2">
                    {t('contact.form.subject')} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#111827] border border-[#374151] text-[#F9FAFB] rounded-lg focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-colors"
                    placeholder={t('contact.form.subjectPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#D1D5DB] mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#111827] border border-[#374151] text-[#F9FAFB] rounded-lg focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-colors resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#10B981] to-[#059669] text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover-lift hover:shadow-lg hover:shadow-[#10B981]/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>{t('contact.form.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>{t('contact.form.send')}</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
