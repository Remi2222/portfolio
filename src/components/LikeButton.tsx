import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../firebase/config';
import { doc, getDoc, setDoc, deleteDoc, collection, getDocs } from 'firebase/firestore';

const LikeButton = () => {
  const [hasLiked, setHasLiked] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [browserId, setBrowserId] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Générer ou récupérer l'UUID du navigateur
  useEffect(() => {
    let id = localStorage.getItem('portfolio-browser-id');
    if (!id) {
      id = uuidv4();
      localStorage.setItem('portfolio-browser-id', id);
    }
    setBrowserId(id);
  }, []);

  // Charger les données de likes
  useEffect(() => {
    if (!browserId) return;

    const loadLikes = async () => {
      try {
        // Vérifier si cet utilisateur a déjà liké
        const userLikeDoc = await getDoc(doc(db, 'likes', browserId));
        setHasLiked(userLikeDoc.exists());

        // Compter le total de likes
        const likesSnapshot = await getDocs(collection(db, 'likes'));
        setTotalLikes(likesSnapshot.size);
      } catch (error) {
        console.log('Erreur lors du chargement des likes:', error);
        // En cas d'erreur, on utilise localStorage comme fallback
        const localLiked = localStorage.getItem('portfolio-has-liked') === 'true';
        setHasLiked(localLiked);
        const localCount = parseInt(localStorage.getItem('portfolio-like-count') || '0');
        setTotalLikes(localCount);
      } finally {
        setIsLoading(false);
      }
    };

    loadLikes();
  }, [browserId]);

  // Créer des particules d'animation
  const createParticles = () => {
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1000);
  };

  const handleLike = async () => {
    if (isAnimating || !browserId) return;

    setIsAnimating(true);
    createParticles();

    try {
      if (hasLiked) {
        // Unliker
        await deleteDoc(doc(db, 'likes', browserId));
        setHasLiked(false);
        setTotalLikes(prev => Math.max(0, prev - 1));
        localStorage.setItem('portfolio-has-liked', 'false');
      } else {
        // Liker
        await setDoc(doc(db, 'likes', browserId), {
          timestamp: new Date().toISOString(),
          browserId: browserId,
        });
        setHasLiked(true);
        setTotalLikes(prev => prev + 1);
        localStorage.setItem('portfolio-has-liked', 'true');
      }
      // Sauvegarder le compteur localement
      localStorage.setItem('portfolio-like-count', totalLikes.toString());
    } catch (error) {
      console.log('Erreur lors du like:', error);
      // Fallback sur localStorage uniquement
      const newLikedState = !hasLiked;
      setHasLiked(newLikedState);
      setTotalLikes(prev => newLikedState ? prev + 1 : Math.max(0, prev - 1));
      localStorage.setItem('portfolio-has-liked', newLikedState.toString());
      localStorage.setItem('portfolio-like-count', totalLikes.toString());
    }

    setTimeout(() => setIsAnimating(false), 300);
  };

  if (isLoading) {
    return null;
  }

  return (
    <div
      style={{
        position: 'sticky',
        top: '100px',
        right: 0,
        zIndex: 2147483646,
        width: 0,
        height: 0,
        float: 'right',
      }}
    >
      {/* Particules d'animation */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
            animate={{
              opacity: 0,
              scale: 1.5,
              x: particle.x,
              y: particle.y,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              pointerEvents: 'none',
            }}
          >
            <Heart
              size={16}
              fill="#ef4444"
              color="#ef4444"
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Bouton avec gradient violet/bleu - À DROITE */}
      <button
        onClick={handleLike}
        className="like-button"
        style={{
          position: 'absolute',
          right: isMobile ? '16px' : '24px',
          padding: isMobile ? '12px 16px' : '16px 24px',
          background: hasLiked 
            ? 'linear-gradient(135deg, #667eea, #764ba2)'
            : 'white',
          color: hasLiked ? 'white' : '#374151',
          border: hasLiked ? 'none' : '2px solid #e5e7eb',
          borderRadius: '50px',
          cursor: 'pointer',
          boxShadow: hasLiked
            ? '0 10px 40px rgba(102, 126, 234, 0.5), 0 0 20px rgba(102, 126, 234, 0.4)'
            : '0 4px 12px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '8px' : '12px',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          fontWeight: '600',
          fontSize: isMobile ? '13px' : '15px',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
          e.currentTarget.style.boxShadow = hasLiked
            ? '0 15px 50px rgba(102, 126, 234, 0.7), 0 0 30px rgba(102, 126, 234, 0.6)'
            : '0 8px 20px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
          e.currentTarget.style.boxShadow = hasLiked
            ? '0 10px 40px rgba(102, 126, 234, 0.5), 0 0 20px rgba(102, 126, 234, 0.4)'
            : '0 4px 12px rgba(0, 0, 0, 0.1)';
        }}
      >
        <motion.div
          animate={isAnimating ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <Heart
            size={isMobile ? 18 : 22}
            fill={hasLiked ? 'white' : 'none'}
            color={hasLiked ? 'white' : '#6b7280'}
            strokeWidth={2}
          />
        </motion.div>
        <span>
          {totalLikes}
        </span>
      </button>
    </div>
  );
};

export default LikeButton;
