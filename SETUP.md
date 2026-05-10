#  Ghostech - Formulaire de Recrutement

Structure du projet :
```
recrut_Ghostech/
├── ghostech-recrutement.html          # Frontend (formulaire)
├── logi_ghostech.png                  # Logo
├── flyer_ghostech.png                 # Flyer (optionnel)
└── backend/
    ├── server.js                      # Serveur Express
    ├── package.json                   # Dépendances
    ├── .env.example                   # Variables d'environnement (exemple)
    ├── .env                           # Variables d'environnement (À configurer)
    └── README.md                      # Documentation backend
```

##  DÉMARRAGE RAPIDE

### Étape 1️ : Configurer le Backend

```bash
# 1. Accéder au dossier backend
cd backend

# 2. Installer les dépendances
npm install

# 3. Créer le fichier .env à partir de .env.example
cp .env.example .env

# 4. Modifier .env avec vos identifiants Gmail
# Voir la section "Configuration Gmail" du README.md du backend
```

### Étape 2️ : Lancer le Backend

```bash
# Mode développement (avec rechargement auto)
npm run dev

# OU Mode production
npm start
```

Vous verrez : ` Serveur Ghostech lancé sur http://localhost:3000`

### Étape 3️ : Ouvrir le Formulaire

Ouvrir simplement **`ghostech-recrutement.html`** dans un navigateur.

---

##  Configuration Gmail

⚠️ **Important** : Vous devez utiliser un **mot de passe d'application**, pas votre mot de passe Gmail !

### Créer un mot de passe d'application :

1. Allez sur **https://myaccount.google.com/security**
2. Activez la **vérification en deux étapes** (si ce n'est pas fait)
3. Allez dans **Mots de passe d'application** (en bas de page)
4. Sélectionnez :
   - App : **Mail**
   - Device : **Windows** (ou votre OS)
5. Cliquez **Générer**
6. Copiez le mot de passe (16 caractères)
7. Collez dans `backend/.env` sous `EMAIL_PASS`

### Exemple de `.env` :
```
EMAIL_USER=ghostech92@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
RECIPIENT_EMAIL=ghostech92@gmail.com
PORT=3000
```

---

##  Flux de fonctionnement

```
1. Utilisateur remplit le formulaire HTML
   ↓
2. Clique sur "Envoyer ma candidature"
   ↓
3. Le formulaire envoie les données au backend (POST /api/submit-candidature)
   ↓
4. Le backend reçoit les données
   ↓
5. Envoie un email à ghostech92@gmail.com avec les détails
   ↓
6. Envoie un email de confirmation au candidat
   ↓
7. Retourne une réponse de succès au formulaire
   ↓
8. Affiche l'écran "Candidature envoyée !" 🎉
```

---

##  Vérifier que tout fonctionne

### Test du backend
```bash
curl http://localhost:3000/api/health
# Doit afficher : {"status":"OK"}
```

### Test complet
1. Accédez au formulaire HTML
2. Remplissez tous les champs
3. Cliquez sur "Envoyer ma candidature"
4. Vous devriez voir l'écran de succès
5. Un email doit arriver dans `ghostech92@gmail.com`

---

##  Troubleshooting

###  "CORS error"
- Assurez-vous que le backend est lancé (`npm run dev`)
- Vérifiez le port (par défaut 3000)

###  "Cannot GET /api/submit-candidature"
- Vérifiez que vous envoyez une requête POST (pas GET)
- Vérifiez l'URL du backend dans le code

###  "Auth failed"
- Vérifiez que vous utilisez un **mot de passe d'application** (pas le mot de passe Gmail)
- Vérifiez que la **vérification en deux étapes** est activée sur Gmail

###  "ECONNREFUSED"
- Le backend n'est pas lancé
- Lancez `npm run dev` dans le dossier backend

---

##  Déploiement

### Option 1 : Déployer le backend sur Render (gratuit)

1. Push votre code sur GitHub
2. Allez sur **https://render.com**
3. Créez un nouveau **Web Service**
4. Connectez votre repo GitHub
5. Configurez :
   - Runtime: Node
   - Build command: `npm install`
   - Start command: `npm start`
6. Ajoutez les variables d'environnement (.env)
7. Déployez !

### Option 2 : Déployer sur Railway

1. Allez sur **https://railway.app**
2. Créez un nouveau projet
3. Connectez votre GitHub
4. Configurez les variables (.env)
5. Déployez !

### Modifier l'URL du frontend

Une fois déployé, modifiez dans le HTML :

```javascript
const API_URL = 'https://votre-backend-url.com'; // Remplacer par votre URL
```

---

##  Support

Pour des questions sur le backend, consultez `backend/README.md`

---

**Ghostech © 2026** – Innover. Apprendre. Construire. 
