# 🚀 DÉPLOIEMENT FINAL - Ghostech Recrutement

Votre projet est prêt pour être déployé sur Render ! Suivez ces étapes simples.

---

## ✅ Prérequis

- ✅ Compte GitHub (repo déjà pushé)
- ✅ Compte Render (gratuit)
- ✅ Mot de passe d'application Gmail

---

## 🎯 ÉTAPES DE DÉPLOIEMENT (5 min)

### ÉTAPE 1️⃣ : Créer un compte Render

1. Allez sur **https://render.com**
2. Cliquez **Sign Up**
3. Connectez-vous avec **GitHub**
4. Autorisez Render à accéder à vos repos

---

### ÉTAPE 2️⃣ : Créer un Web Service

1. Dans le dashboard, cliquez **New** > **Web Service**
2. Sélectionnez le repo **`recrut_Ghostech`**
3. Render détecte automatiquement `render.yaml`

**Configuration automatique :**
- Name : `ghostech-recrutement-backend`
- Runtime : Node
- Build Command : `npm install`
- Start Command : `npm start`
- Root Directory : `backend`

---

### ÉTAPE 3️⃣ : Variables d'environnement

Cliquez sur **Environment** et ajoutez ces variables :

| KEY | VALUE |
|-----|-------|
| `EMAIL_USER` | `ghostech92@gmail.com` |
| `EMAIL_PASS` | **[Votre mot de passe app Gmail]** |
| `RECIPIENT_EMAIL` | `ghostech92@gmail.com` |
| `PORT` | `3000` |

⚠️ **EMAIL_PASS** doit être un mot de passe d'application Gmail (pas votre mot de passe normal)

### Générer EMAIL_PASS :
1. Allez sur https://myaccount.google.com/security
2. Activez **Vérification en deux étapes**
3. Allez dans **Mots de passe d'application**
4. Sélectionnez : App = **Mail**, Device = **Windows**
5. Cliquez **Générer** et copiez le mot de passe

---

### ÉTAPE 4️⃣ : Déployer

Cliquez **Create Web Service** et attendez 2-3 minutes.

Une fois terminé, vous verrez l'URL :
```
https://ghostech-recrutement-backend.onrender.com
```

📋 **Notez cette URL** - vous en aurez besoin pour la suite !

---

### ÉTAPE 5️⃣ : Vérifier le déploiement

Testez que le serveur fonctionne :

```bash
curl https://ghostech-recrutement-backend.onrender.com/api/health
# Doit afficher: {"status":"OK"}
```

---

### ÉTAPE 6️⃣ : Mettre à jour le frontend

Maintenant que votre backend est déployé, mettez à jour le fichier HTML.

Ouvrez `ghostech-recrutement.html` et trouvez cette ligne (environ ligne 1215) :

```javascript
const API_URL = 'http://localhost:3000';
```

Remplacez par :

```javascript
const API_URL = 'https://ghostech-recrutement-backend.onrender.com';
```

(Remplacez l'URL par celle que Render vous a donnée)

**Sauvegardez le fichier.**

---

### ÉTAPE 7️⃣ : Pousser sur GitHub

Les changements du frontend seront automatiquement détectés et redéployés par Render :

```bash
cd c:\Users\hp\Downloads\recrut_Ghostech
git add ghostech-recrutement.html
git commit -m "Update backend URL for Render deployment"
git push origin main
```

Render détecte les changements et redéploie automatiquement ! ✨

---

### ÉTAPE 8️⃣ : Tester le formulaire

1. Ouvrez `ghostech-recrutement.html` dans votre navigateur
2. Remplissez le formulaire complet
3. Cliquez **Envoyer ma candidature**
4. Vous devriez voir ✅ **Candidature envoyée !**
5. Vérifiez vos emails :
   - **ghostech92@gmail.com** : reçoit la candidature complète
   - **Votre mail** : reçoit la confirmation

---

## 📊 Flux d'emails en production

```
Candidat remplit le formulaire
            ↓
Clique "Envoyer ma candidature"
            ↓
Backend Render reçoit les données
            ↓
Email 1 : Candidature complète → ghostech92@gmail.com
Email 2 : Confirmation simple → Mail du candidat
            ↓
Écran "Candidature envoyée !" ✅
```

---

## 🆘 Troubleshooting

### ❌ "Service not starting"
- Vérifiez les **logs** dans Render (onglet Logs)
- Vérifiez que **EMAIL_PASS** est correct
- Attendez 2-3 min

### ❌ "Build failed"
- Vérifiez que `render.yaml` existe
- Vérifiez que `backend/package.json` existe
- Regardez les logs

### ❌ "CORS error" / "Cannot fetch"
- Vérifiez l'URL dans le HTML
- Vérifiez que Render affiche "Active"
- Testez l'URL avec curl

### ❌ "Email not sent"
- Vérifiez **EMAIL_PASS** dans Render
- Vérifiez la vérification 2FA Gmail activée
- Vérifiez que c'est un mot de passe d'application (pas le mot de passe Gmail)

---

## 🎯 Récapitulatif

| Étape | Status | Notes |
|-------|--------|-------|
| 1. Créer compte Render | ⭕ À faire | Allez sur render.com |
| 2. Créer Web Service | ⭕ À faire | Repo GitHub connecté |
| 3. Variables d'env | ⭕ À faire | Ajouter EMAIL_PASS |
| 4. Déployer | ⭕ À faire | Cliquer "Create" |
| 5. Vérifier | ⭕ À faire | Tester /api/health |
| 6. Mettre à jour HTML | ⭕ À faire | URL de Render |
| 7. Pousser sur GitHub | ⭕ À faire | git push |
| 8. Tester formulaire | ⭕ À faire | Complet ! |

---

## ✨ Après le déploiement

- ✅ **Gratuit** : 500h/mois sur Render (plus que suffisant)
- ✅ **Automatique** : Chaque push GitHub = redéploiement automatique
- ✅ **Logs** : Consultables en temps réel dans Render
- ✅ **HTTPS** : Inclus automatiquement
- ✅ **Uptime** : 99.5%

---

## 📞 Besoin d'aide ?

- **Render Docs** : https://render.com/docs
- **Node.js** : https://nodejs.org/
- **Gmail** : https://support.google.com/

---

**Ghostech © 2026** 🚀 Innover. Apprendre. Construire.
