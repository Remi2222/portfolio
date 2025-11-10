import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuration Firebase - À REMPLACER par vos propres clés
// Allez sur https://console.firebase.google.com/ pour créer un projet gratuit
const firebaseConfig = {
  apiKey: "AIzaSyAtcCtxQ10LeZDcYz0pSntZ-F4Vobx2qUE",
  authDomain: "portfolio-c7bce.firebaseapp.com",
  projectId: "portfolio-c7bce",
  storageBucket: "portfolio-c7bce.firebasestorage.app",
  messagingSenderId: "913247320106",
  appId: "1:913247320106:web:de0411ef35bce45dfcab53"
};


// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firestore
export const db = getFirestore(app);

