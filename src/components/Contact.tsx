
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
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { containerVariants, itemVariants } from '../constants/animations';

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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim())
      newErrors.name = t('contact.validation.nameRequired') || 'Name is required';

    if (!formData.email.trim())
      newErrors.email = t('contact.validation.emailRequired') || 'Email is required';

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email =
        t('contact.validation.emailInvalid') || 'Please enter a valid email';
    }

    if (!formData.subject.trim())
      newErrors.subject = t('contact.validation.subjectRequired') || 'Subject is required';

    if (!formData.message.trim())
      newErrors.message = t('contact.validation.messageRequired') || 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          'EmailJS configuration is missing. Please check your environment variables.'
        );
      }

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

      const errorMsg =
        error instanceof Error
          ? error.message
          : 'An error occurred while sending your message';

      setErrorMessage(errorMsg);
      console.error('Form submission error:', error);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-[#14B8A6]" size={24} />,
      title: t('contact.email'),
      value: 'maryam.fajri02@gmail.com',
      link: 'mailto:maryam.fajri02@gmail.com'
    },
    {
      icon: <Phone className="text-[#22D3EE]" size={24} />,
      title: t('contact.phone'),
      value: '+212 643776635',
      link: 'tel:+212643776635'
    },
    {
      icon: <MapPin className="text-[#14B8A6]" size={24} />,
      title: t('contact.location'),
      value: t('contact.locationValue'),
      link: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/Remi2222',
      color:
        'hover:text-[#14B8A6] hover:border-[#14B8A6] hover:shadow-[0_0_15px_rgba(20,184,166,0.25)]'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://linkedin.com/in/maryam-fajri',
      color:
        'hover:text-[#22D3EE] hover:border-[#22D3EE] hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={24} />,
      url: 'https://twitter.com/maryam_fajri',
      color:
        'hover:text-[#14B8A6] hover:border-[#14B8A6] hover:shadow-[0_0_15px_rgba(20,184,166,0.25)]'
    }
  ];

  const inputBaseClasses =
    'w-full px-4 py-3 bg-[#0C1D32] border rounded-lg text-[#F8FAFC] placeholder-[#94A3B8] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/40 focus:border-[#14B8A6]';

  return (
    <section
      id="contact"
      className="py-32 bg-[#071426] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#14B8A6] to-transparent opacity-50"></div>

      {/* Ambient theme glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-[#14B8A6]/10 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-[#22D3EE]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#F8FAFC]"
          >
            {t('contact.title')}
            <span className="gradient-text">
              {t('contact.titleHighlight')}
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-[#CBD5E1] max-w-3xl mx-auto"
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
              className="text-2xl font-bold mb-8 text-[#F8FAFC]"
            >
              {t('contact.info')}
            </motion.h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-[#10243E] border border-[#263D56] rounded-lg hover-lift hover:border-[#14B8A6] hover:bg-[#10243E]/80 hover:shadow-[0_0_20px_rgba(20,184,166,0.10)] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-full bg-[#0C1D32] border border-[#263D56]">
                    {info.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#F8FAFC]">
                      {info.title}
                    </h4>
                    <a
                      href={info.link}
                      className="text-[#CBD5E1] hover:text-[#22D3EE] transition-colors"
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
              <h4 className="font-semibold text-[#F8FAFC] mb-4">
                {t('contact.followMe')}
              </h4>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-[#CBD5E1] ${social.color} transition-all duration-300 p-3 bg-[#10243E] border border-[#263D56] rounded-full hover-lift`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="hidden lg:block mt-12 h-px w-2/3 bg-gradient-to-r from-[#14B8A6] via-[#22D3EE] to-transparent opacity-40"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#10243E] border border-[#263D56] rounded-2xl p-8 hover:border-[#14B8A6] hover:shadow-[0_0_30px_rgba(20,184,166,0.10)] transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-8 text-[#F8FAFC]">
              {t('contact.form.title')}
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8 rounded-xl border border-[#14B8A6]/30 bg-gradient-to-b from-[#14B8A6]/5 to-[#22D3EE]/5"
              >
                <CheckCircle className="text-[#14B8A6] mx-auto mb-4" size={48} />

                <h4 className="text-xl font-semibold text-[#F8FAFC] mb-2">
                  {t('contact.form.success')}
                </h4>

                <p className="text-[#CBD5E1]">
                  {t('contact.form.successMessage')}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 bg-[#3B1D2A] border border-red-400/40 text-red-300 px-4 py-3 rounded-lg text-sm"
                  >
                    <AlertCircle
                      size={18}
                      className="flex-shrink-0 mt-0.5 text-red-400"
                    />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#CBD5E1] mb-2"
                    >
                      {t('contact.form.name')} *
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`${inputBaseClasses} ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500'
                          : 'border-[#263D56]'
                      }`}
                      placeholder={t('contact.form.namePlaceholder')}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />

                    {errors.name && (
                      <p id="name-error" className="text-red-400 text-sm mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#CBD5E1] mb-2"
                    >
                      {t('contact.form.email')} *
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${inputBaseClasses} ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500'
                          : 'border-[#263D56]'
                      }`}
                      placeholder={t('contact.form.emailPlaceholder')}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />

                    {errors.email && (
                      <p id="email-error" className="text-red-400 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#CBD5E1] mb-2"
                  >
                    {t('contact.form.subject')} *
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`${inputBaseClasses} ${
                      errors.subject
                        ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500'
                        : 'border-[#263D56]'
                    }`}
                    placeholder={t('contact.form.subjectPlaceholder')}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />

                  {errors.subject && (
                    <p id="subject-error" className="text-red-400 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#CBD5E1] mb-2"
                  >
                    {t('contact.form.message')} *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`${inputBaseClasses} resize-none ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500'
                        : 'border-[#263D56]'
                    }`}
                    placeholder={t('contact.form.messagePlaceholder')}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />

                  {errors.message && (
                    <p id="message-error" className="text-red-400 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#14B8A6] to-[#22D3EE] text-[#071426] py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover-lift hover:shadow-lg hover:shadow-[#14B8A6]/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#071426]"></div>
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
