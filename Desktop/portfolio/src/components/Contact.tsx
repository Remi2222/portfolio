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
  MessageCircle,
  Clock,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
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
      // Configuration EmailJS avec vos vraies clés
      const serviceId = 'service_udoxh7q'; // Votre Service ID
      const templateId = 'template_4z8ufe7'; // Votre Template ID
      const publicKey = 'M_113sDZ9bNhKys_6'; // Votre Public Key
      
      // Initialiser EmailJS avec votre clé publique
      emailjs.init(publicKey);
      
      // Envoyer l'email
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
      console.error('Erreur lors de l\'envoi:', error);
      setIsSubmitting(false);
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-500" size={24} />,
      title: "Email",
      value: "maryam.fajri02@gmail.com",
      link: "mailto:maryam.fajri02@gmail.com"
    },
    {
      icon: <Phone className="text-green-500" size={24} />,
      title: "Téléphone",
      value: "+212 643776635",
      link: "tel:+2126XXXXXXXX"
    },
    {
      icon: <MapPin className="text-red-500" size={24} />,
      title: "Localisation",
      value: "Maroc",
      link: "#"
    },
    {
      icon: <Clock className="text-purple-500" size={24} />,
      title: "Disponibilité",
      value: "Lun - Ven, 9h - 18h",
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
    <section id="contact" className="py-20 bg-white">
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
            Contactez-<span className="gradient-text">moi</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Une idée de projet ? Une question ? N'hésitez pas à me contacter. 
            Je réponds généralement dans les 24 heures.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-gray-800"
            >
              Informations de contact
            </motion.h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover-lift"
                >
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <h4 className="font-semibold text-gray-800 mb-4">Suivez-moi</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`text-gray-600 ${social.color} transition-colors p-3 bg-gray-50 rounded-full hover-lift`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-lg"
            >
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <MessageCircle className="mr-2 text-primary-600" size={20} />
                Disponibilité
              </h4>
              <p className="text-gray-600">
                Je suis disponible pour des projets freelance et des collaborations. 
                Réponse garantie sous 24h pour toute demande.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              Envoyez-moi un message
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Message envoyé !
                </h4>
                <p className="text-gray-600">
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Envoyer le message</span>
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
