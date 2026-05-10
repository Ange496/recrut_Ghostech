# Backend Ghostech - Formulaire de Recrutement

Backend simple Node.js/Express pour traiter les candidatures du formulaire Ghostech.

## 🚀 Installation

### 1. Installer les dépendances
```bash
cd backend
npm install
```

### 2. Configurer les variables d'environnement

Copier le fichier `.env.example` en `.env` :
```bash
cp .env.example .env
```

### 3. Configuration Gmail avec mot de passe d'application

⚠️ **Important** : N'utilisez PAS votre mot de passe Gmail normal !

**Étapes :**
1. Allez sur https://myaccount.google.com/security
2. Activez la **vérification en deux étapes** si ce n'est pas fait
3. Allez dans **Mots de passe d'application** (en bas de page)
4. Sélectionnez "Mail" et "Windows"
5. Copiez le mot de passe généré (16 caractères)
6. Collez-le dans `.env` sous `EMAIL_PASS`

Exemple `.env` complété :
```
EMAIL_USER=ghostech92@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
RECIPIENT_EMAIL=ghostech92@gmail.com
PORT=3000
```

## 🏃 Lancer le serveur

### Mode production
```bash
npm start
```

### Mode développement (avec rechargement auto)
```bash
npm run dev
```

Le serveur démarre sur `http://localhost:3000`

## 📋 Endpoints

### POST `/api/submit-candidature`
Envoie une candidature par email.

**Body (JSON) :**
```json
{
  "nom": "Koné Mariama",
  "age": "22",
  "sexe": "Féminin",
  "ville": "Abidjan",
  "whatsapp": "+225 07 00 00 00 00",
  "email": "candidate@email.com",
  "poste": "Développeur Front-end",
  "competences": "HTML, CSS, React",
  "niveau": "Intermédiaire",
  "projets": "Oui",
  "projetsDetail": "...",
  "portfolio": "https://github.com/...",
  "motivation": "...",
  "apport": "...",
  "remote": "Oui",
  "heures": "10h et plus",
  "engagement": "Oui"
}
```

**Réponse (succès) :**
```json
{
  "success": true,
  "message": "Candidature envoyée avec succès"
}
```

**Réponse (erreur) :**
```json
{
  "success": false,
  "message": "Erreur lors de l'envoi de la candidature",
  "error": "..."
}
```

### GET `/api/health`
Vérifie que le serveur fonctionne.

**Réponse :**
```json
{
  "status": "OK"
}
```

## 🔗 Intégration Frontend

Le formulaire HTML envoie automatiquement les données au backend :

```javascript
const response = await fetch('http://localhost:3000/api/submit-candidature', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

## 📧 Emails envoyés

### 1️⃣ Email à l'équipe Ghostech
- **À** : ghostech92@gmail.com
- **Sujet** : 🚀 Candidature Ghostech – [Poste] – [Nom]
- **Contenu** : Détails complets de la candidature

### 2️⃣ Email de confirmation au candidat
- **À** : Email du candidat
- **Sujet** : ✅ Votre candidature Ghostech a été reçue
- **Contenu** : Confirmation d'réception

## ⚠️ Troubleshooting

### ❌ "CORS error" - Les requêtes bloquées
- Le serveur backend doit être lancé
- Vérifiez que le port est correct (3000 par défaut)
- Vérifiez l'URL dans le frontend

### ❌ "Auth failed" - Erreur d'authentification email
- Vérifiez que vous utilisez un **mot de passe d'application** (pas le mot de passe Gmail)
- Vérifiez la **vérification en deux étapes** est activée
- Vérifiez l'email dans `.env`

### ❌ "ECONNREFUSED" - Connexion refusée
- Assurez-vous que le serveur backend est lancé
- Vérifiez le port (par défaut 3000)

## 🚀 Déploiement

Options pour déployer le backend gratuitement :

1. **Heroku** (gratuit avec limites)
2. **Render** (gratuit)
3. **Railway** (gratuit au démarrage)
4. **Vercel** (serverless)

## 📝 Licences
MIT © Ghostech 2026
