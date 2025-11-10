import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User as UserIcon } from 'lucide-react';
import { searchKnowledge } from '../data/portfolioKnowledge';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Bonjour ! 👋 Je suis l'assistant virtuel de Maryam Fajri. Je peux répondre à vos questions sur ses compétences, projets, expérience et disponibilité. Comment puis-je vous aider ?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  const quickQuestions = language === 'fr' ? [
    "Quelles sont vos compétences ?",
    "Parlez-moi de vos projets",
    "Comment vous contacter ?",
    "Êtes-vous disponible ?",
  ] : [
    "What are your skills?",
    "Tell me about your projects",
    "How to contact you?",
    "Are you available?",
  ];

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = searchKnowledge(text);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <div style={{
        position: 'sticky',
        top: '100px',
        right: 0,
        zIndex: 2147483647,
        width: 0,
        height: 0,
        float: 'right',
      }}>
        <button
        onClick={() => setIsOpen(!isOpen)}
        className="chatbot-button"
        style={{
          position: 'absolute',
          right: isMobile ? '90px' : '110px',
          padding: isMobile ? '12px 16px' : '16px 24px',
          background: 'linear-gradient(135deg, rgba(131, 150, 237, 0.7), rgba(195, 142, 252, 0.7))',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          boxShadow: '0 10px 40px rgba(102, 126, 234, 0.5), 0 0 20px rgba(102, 126, 234, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '8px' : '12px',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          fontWeight: '600',
          fontSize: isMobile ? '13px' : '15px',
          whiteSpace: 'nowrap',
          backdropFilter: 'blur(10px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 15px 50px rgba(102, 126, 234, 0.7), 0 0 30px rgba(102, 126, 234, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
          e.currentTarget.style.boxShadow = '0 10px 40px rgba(102, 126, 234, 0.5), 0 0 20px rgba(102, 126, 234, 0.4)';
        }}
      >
        {isOpen ? (
          <>
            <X size={isMobile ? 18 : 22} />
            <span className="hidden sm:inline">Fermer</span>
          </>
        ) : (
          <>
            <MessageCircle size={isMobile ? 18 : 22} />
            <span className="hidden sm:inline">Besoin d'aide ?</span>
          </>
        )}
        </button>
      </div>

      {isOpen && isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 2147483646,
          }}
        />
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: isMobile ? 1 : 0.8, y: isMobile ? '100%' : 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: isMobile ? 1 : 0.8, y: isMobile ? '100%' : 20 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            top: isMobile ? '0' : '50%',
            right: isMobile ? '0' : '24px',
            left: isMobile ? '0' : 'auto',
            bottom: isMobile ? '0' : 'auto',
            transform: isMobile ? 'none' : 'translateY(-50%)',
            width: isMobile ? '100vw' : '450px',
            height: isMobile ? '100vh' : '600px',
            maxWidth: isMobile ? '100vw' : '95vw',
            maxHeight: isMobile ? '100vh' : '85vh',
            backgroundColor: 'white',
            borderRadius: isMobile ? '0' : '20px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 2147483647,
          }}
        >
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: isMobile ? '20px 16px' : '24px',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: isMobile ? '12px' : '16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  fontWeight: '700', 
                  fontSize: isMobile ? '18px' : '22px', 
                  margin: 0,
                  marginBottom: '8px',
                  letterSpacing: '-0.5px',
                }}>
                  Vous avez des questions ?
                </h3>
                <p style={{ 
                  fontSize: isMobile ? '13px' : '14px', 
                  opacity: 0.9,
                  margin: 0,
                  fontWeight: '400',
                }}>
                  Je suis là pour vous aider ! 💬
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: isMobile ? '16px' : '24px',
              background: 'linear-gradient(to bottom, #f9fafb 0%, #ffffff 100%)',
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '12px' : '16px',
            }}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: 'flex',
                    justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    maxWidth: '80%',
                    flexDirection: message.sender === 'user' ? 'row-reverse' : 'row',
                  }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      background: message.sender === 'user' 
                        ? 'linear-gradient(135deg, #667eea, #764ba2)' 
                        : 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
                      boxShadow: message.sender === 'user'
                        ? '0 4px 12px rgba(102, 126, 234, 0.3)'
                        : '0 2px 8px rgba(0, 0, 0, 0.05)',
                    }}>
                      {message.sender === 'user' ? (
                        <UserIcon size={18} style={{ color: 'white' }} />
                      ) : (
                        <Bot size={18} style={{ color: '#667eea' }} />
                      )}
                    </div>
                    <div style={{
                      padding: '14px 18px',
                      borderRadius: '18px',
                      background: message.sender === 'user'
                        ? 'linear-gradient(135deg, #667eea, #764ba2)'
                        : 'white',
                      color: message.sender === 'user' ? 'white' : '#1f2937',
                      boxShadow: message.sender === 'user' 
                        ? '0 4px 12px rgba(102, 126, 234, 0.2)' 
                        : '0 2px 12px rgba(0, 0, 0, 0.08)',
                      border: message.sender === 'bot' ? '1px solid #f3f4f6' : 'none',
                    }}>
                      <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                    }}>
                      <Bot size={18} style={{ color: '#667eea' }} />
                    </div>
                    <div style={{
                      padding: '12px 16px',
                      borderRadius: '16px',
                      backgroundColor: 'white',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      display: 'flex',
                      gap: '4px',
                    }}>
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        style={{ width: '8px', height: '8px', backgroundColor: '#9ca3af', borderRadius: '50%' }}
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        style={{ width: '8px', height: '8px', backgroundColor: '#9ca3af', borderRadius: '50%' }}
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        style={{ width: '8px', height: '8px', backgroundColor: '#9ca3af', borderRadius: '50%' }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div style={{ 
                padding: isMobile ? '0 16px 12px' : '0 24px 16px', 
                backgroundColor: '#f9fafb' 
              }}>
                <p style={{ 
                  fontSize: isMobile ? '11px' : '12px', 
                  color: '#6b7280', 
                  marginBottom: '8px', 
                  fontWeight: 500 
                }}>
                  Questions rapides :
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '6px' : '8px' }}>
                  {quickQuestions.map((question, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => handleSendMessage(question)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        fontSize: isMobile ? '11px' : '12px',
                        padding: isMobile ? '6px 10px' : '8px 12px',
                        backgroundColor: 'white',
                        border: '1px solid #bae6fd',
                        color: '#0369a1',
                        borderRadius: '9999px',
                        cursor: 'pointer',
                      }}
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div style={{ 
              padding: isMobile ? '16px' : '20px 24px', 
              backgroundColor: 'white', 
              borderTop: '1px solid #f3f4f6',
              boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.05)',
            }}>
              <div style={{ 
                display: 'flex', 
                gap: isMobile ? '8px' : '12px', 
                alignItems: 'center' 
              }}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={language === 'fr' ? "Posez votre question..." : "Ask your question..."}
                  style={{
                    flex: 1,
                    padding: isMobile ? '12px 16px' : '14px 20px',
                    border: '1px solid #e5e7eb',
                    borderRadius: isMobile ? '14px' : '16px',
                    outline: 'none',
                    fontSize: isMobile ? '14px' : '15px',
                    transition: 'all 0.2s ease',
                    backgroundColor: '#f9fafb',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#667eea';
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                    e.currentTarget.style.backgroundColor = '#f9fafb';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
                <motion.button
                  onClick={() => handleSendMessage()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!inputValue.trim()}
                  style={{
                    padding: isMobile ? '12px' : '14px',
                    background: inputValue.trim() 
                      ? 'linear-gradient(135deg, #667eea, #764ba2)' 
                      : '#e5e7eb',
                    color: 'white',
                    border: 'none',
                    borderRadius: isMobile ? '12px' : '14px',
                    cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: inputValue.trim() 
                      ? '0 4px 12px rgba(102, 126, 234, 0.3)' 
                      : 'none',
                    transition: 'all 0.2s ease',
                    width: isMobile ? '44px' : '48px',
                    height: isMobile ? '44px' : '48px',
                  }}
                >
                  <Send size={isMobile ? 18 : 20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
      )}
    </>
  );
};

export default Chatbot;
