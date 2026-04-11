# 🔥 Configuration Firebase pour le Système de Likes

## 📋 Étapes de configuration (5 minutes)

### 1️⃣ Créer un projet Firebase (GRATUIT)

1. Allez sur [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Cliquez sur **"Ajouter un projet"**
3. Donnez un nom à votre projet (ex: `portfolio-maryam`)
4. **Désactivez Google Analytics** (pas nécessaire pour ce projet)
5. Cliquez sur **"Créer le projet"**

### 2️⃣ Activer Firestore Database

1. Dans le menu de gauche, cliquez sur **"Firestore Database"**
2. Cliquez sur **"Créer une base de données"**
3. Choisissez **"Démarrer en mode production"**
4. Sélectionnez la région la plus proche (ex: `europe-west1`)
5. Cliquez sur **"Activer"**

### 3️⃣ Configurer les règles de sécurité

1. Dans **Firestore Database**, allez dans l'onglet **"Règles"**
2. Remplacez les règles par ceci :

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permettre la lecture à tout le monde
    match /likes/{likeId} {
      allow read: if true;
      // Permettre l'écriture uniquement si l'ID correspond au document
      allow write: if request.auth == null && likeId == request.resource.data.browserId;
      allow delete: if true;
    }
  }
}
```

3. Cliquez sur **"Publier"**

### 4️⃣ Obtenir les clés de configuration

1. Dans le menu de gauche, cliquez sur l'icône **⚙️ (Paramètres du projet)**
2. Faites défiler jusqu'à **"Vos applications"**
3. Cliquez sur l'icône **Web** `</>`
4. Donnez un nom à votre app (ex: `portfolio-web`)
5. **NE PAS** cocher "Firebase Hosting"
6. Cliquez sur **"Enregistrer l'application"**
7. Copiez la configuration Firebase qui ressemble à :

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "portfolio-maryam.firebaseapp.com",
  projectId: "portfolio-maryam",
  storageBucket: "portfolio-maryam.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

### 5️⃣ Mettre à jour votre code

1. Ouvrez le fichier `src/firebase/config.ts`
2. Remplacez les valeurs `VOTRE_XXX` par vos vraies clés Firebase
3. Sauvegardez le fichier

**Exemple :**
```typescript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "portfolio-maryam.firebaseapp.com",
  projectId: "portfolio-maryam",
  storageBucket: "portfolio-maryam.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

### 6️⃣ Tester localement

```bash
npm start
```

Allez sur votre portfolio et cliquez sur le bouton ❤️ en bas à gauche !

---

## ✅ Comment ça marche ?

### 🔐 Système d'identification unique
- Chaque visiteur reçoit un **UUID unique** stocké dans `localStorage`
- Cet UUID reste **permanent** même après refresh
- Si l'utilisateur vide son cache → nouvel UUID → peut re-liker

### 💾 Stockage des likes
1. **localStorage** : Sauvegarde locale (pour persister après refresh)
2. **Firebase Firestore** : Base de données globale (compteur total)
3. Chaque like est stocké avec son UUID unique

### 🎯 Avantages
- ✅ Pas besoin de connexion
- ✅ Gratuit (jusqu'à 50,000 lectures/jour)
- ✅ Temps réel
- ✅ Persiste après refresh
- ✅ Empêche les likes multiples du même navigateur

---

## 🚀 Déployer

Après configuration, déployez normalement :

```bash
npm run build
npm run deploy
```

---

## 📊 Voir les statistiques

1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Sélectionnez votre projet
3. Cliquez sur **"Firestore Database"**
4. Vous verrez la collection `likes` avec tous les likes
5. Chaque document = 1 like avec son UUID et timestamp

---

## 🎨 Personnalisation

Le bouton est positionné en **bas à gauche** (symétrique au chatbot).

Pour changer la position, modifiez dans `src/components/LikeButton.tsx` :

```typescript
style={{
  position: 'fixed',
  bottom: '24px',  // Distance du bas
  left: '24px',    // Distance de gauche
  zIndex: 1000,
}}
```

---

## ❓ FAQ

**Q: C'est vraiment gratuit ?**  
R: Oui ! Firebase gratuit jusqu'à 50,000 lectures et 20,000 écritures par jour.

**Q: Les likes sont-ils permanents ?**  
R: Oui ! Stockés dans Firestore + localStorage pour double sécurité.

**Q: Une personne peut-elle liker plusieurs fois ?**  
R: Non, sauf si elle change de navigateur ou vide son cache.

**Q: Puis-je voir qui a liké ?**  
R: Non, seul l'UUID du navigateur est stocké (anonyme).

---

## 🆘 Besoin d'aide ?

Si vous avez des problèmes, vérifiez :
1. ✅ Les clés Firebase sont correctes
2. ✅ Les règles Firestore sont bien configurées
3. ✅ La base de données Firestore est activée
4. ✅ Vous avez bien sauvegardé `src/firebase/config.ts`

Bon courage ! 🚀❤️

