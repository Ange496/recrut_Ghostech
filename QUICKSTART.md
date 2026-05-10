#  DÉMARRAGE RAPIDE - Ghostech

##  En 5 minutes, votre formulaire sera fonctionnel !

### Étape 1 : Installation des dépendances (2 min)

#### Windows
```bash
cd backend
npm install
```

#### Mac/Linux
```bash
cd backend
chmod +x run.sh
npm install
```

---

### Étape 2 : Configurer Gmail (2 min)

1. Allez sur **https://myaccount.google.com/security**
2. Activez la **vérification en deux étapes**
3. Cliquez sur **Mots de passe d'application** (en bas)
4. Sélectionnez :
   - App : **Mail**
   - Device : **Windows / Mac / Linux**
5. Cliquez **Générer** et copiez le mot de passe (16 caractères)
6. Ouvrez `backend/.env` et collez :

```
EMAIL_USER=ghostech92@gmail.com
EMAIL_PASS=VOTRE_MOT_DE_PASSE_ICI
RECIPIENT_EMAIL=ghostech92@gmail.com
PORT=3000
```

---

### Étape 3 : Lancer le serveur (1 min)

#### Windows
Double-cliquez sur **`backend/run.bat`**

OU exécutez :
```bash
cd backend
npm run dev
```

#### Mac/Linux
```bash
cd backend
chmod +x run.sh
./run.sh
```

---

### Étape 4 : Tester le formulaire (1 min)

1. Ouvrez **`ghostech-recrutement.html`** dans votre navigateur
2. Remplissez le formulaire
3. Cliquez **"Envoyer ma candidature"**
4.  Vous devriez voir "Candidature envoyée !"
5. Vérifiez votre email `ghostech92@gmail.com`

---

##  Vérifications

### Le serveur fonctionne ?
```bash
curl http://localhost:3000/api/health
# Réponse: {"status":"OK"}
```

### Les emails ne s'envoient pas ?
-  Backend lancé ?
-  `.env` configuré ?
-  Mot de passe d'application (pas Gmail normal) ?
-  Vérification en deux étapes activée ?

---

##  Prêt pour la production ?

Voir `SETUP.md` pour :
- Déploiement sur Render/Railway
- Options avancées
- Troubleshooting complet

---

##  Structure finale

```
recrut_Ghostech/
├── ghostech-recrutement.html    ← Ouvrir dans le navigateur
├── logi_ghostech.png
├── flyer_ghostech.png (optionnel)
├── SETUP.md                     ← Documentation complète
├── QUICKSTART.md                ← Ce fichier
└── backend/
    ├── run.bat                  ← Double-cliquer (Windows)
    ├── run.sh                   ← ./run.sh (Mac/Linux)
    ├── server.js
    ├── package.json
    ├── .env                     ← À configurer
    ├── .env.example
    └── .gitignore
```

---

**Ghostech © 2026**  Innover. Apprendre. Construire.
