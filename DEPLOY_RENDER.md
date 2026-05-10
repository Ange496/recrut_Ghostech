# 🚀 Guide de Déploiement Render

## ✅ Prérequis

- ✅ Compte GitHub
- ✅ Compte Render (gratuit)
- ✅ Le projet prêt localement

---

## 📝 Étapes de déploiement

### Étape 1️⃣ : Créer un repo GitHub

#### Option A : Depuis GitHub Desktop (facile)
1. Ouvrez **GitHub Desktop**
2. Cliquez **File** > **New Repository**
3. Nom : `ghostech-recrutement`
4. Path : `c:\Users\hp\Downloads\recrut_Ghostech`
5. Cliquez **Create Repository**
6. Dans GitHub Desktop : **Publish repository**
7. ✅ Repo créé sur GitHub

#### Option B : Depuis la ligne de commande
```bash
cd c:\Users\hp\Downloads\recrut_Ghostech

# Initialiser le repo
git init
git add .
git commit -m "Initial commit - Ghostech recruitment form"

# Créer le repo sur GitHub et le connecter
# (Suivre les instructions du site GitHub)

git branch -M main
git push -u origin main
```

---

### Étape 2️⃣ : Configurer Render

1. Allez sur **https://render.com**
2. Cliquez **Sign up** et connectez avec GitHub
3. Autorisez Render à accéder à vos repos
4. Vous verrez votre dashboard

---

### Étape 3️⃣ : Créer un nouveau service

1. Dans le dashboard Render, cliquez **New +**
2. Sélectionnez **Web Service**
3. Connectez votre repo `ghostech-recrutement`
4. Configuration auto :
   - **Name** : `ghostech-recrutement-backend` (Render génère l'URL)
   - **Runtime** : Node
   - **Build Command** : `npm install` (automatique)
   - **Start Command** : `npm start` (automatique)
   - **Root Directory** : `backend` (important !)

---

### Étape 4️⃣ : Configurer les variables d'environnement

1. Dans Render, allez à votre service
2. Cliquez l'onglet **Environment**
3. Cliquez **Add Environment Variable**
4. Ajoutez les variables :

```
KEY                 VALUE
===============================
EMAIL_USER          ghostech92@gmail.com
EMAIL_PASS          [Votre mot de passe app Gmail]
RECIPIENT_EMAIL     ghostech92@gmail.com
PORT                3000
```

⚠️ **IMPORTANT** : Utilisez un **mot de passe d'application Gmail**, pas votre mot de passe normal !

Pour créer un mot de passe d'application :
1. Allez sur https://myaccount.google.com/security
2. Activez la **vérification en deux étapes**
3. Allez dans **Mots de passe d'application**
4. Sélectionnez Mail + Windows
5. Générez et copiez le mot de passe

---

### Étape 5️⃣ : Déployer

1. Retournez à votre service Render
2. Cliquez **Deploy**
3. Regardez les logs (onglet **Logs**)
4. Attendez que le déploiement finisse (2-3 min)

Une fois terminé, vous verrez un message comme :
```
✅ Serveur Ghostech lancé sur http://localhost:3000
```

Et une URL comme :
```
https://ghostech-recrutement-backend.onrender.com
```

---

### Étape 6️⃣ : Mettre à jour le frontend

Dans le fichier HTML `ghostech-recrutement.html`, trouvez la ligne :

```javascript
const API_URL = 'http://localhost:3000';
```

Et remplacez par :

```javascript
const API_URL = 'https://ghostech-recrutement-backend.onrender.com';
```

(Remplacez le domaine par celui donné par Render)

---

### Étape 7️⃣ : Tester le déploiement

1. Testez l'API :
```bash
curl https://ghostech-recrutement-backend.onrender.com/api/health
# Doit afficher: {"status":"OK"}
```

2. Testez le formulaire HTML :
   - Ouvrez le formulaire
   - Remplissez tous les champs
   - Cliquez **Envoyer ma candidature**
   - Vous devriez voir "Candidature envoyée !" ✅

3. Vérifiez votre email `ghostech92@gmail.com`

---

## 📊 Avantages du déploiement Render

- ✅ **Gratuit** (500 heures/mois)
- ✅ **Automatique** : Déploie à chaque push sur main
- ✅ **Logs en temps réel** : Débugage facile
- ✅ **SSL** : HTTPS inclus
- ✅ **Uptime** : 99.5%

---

## 🔄 Mise à jour future

Pour mettre à jour le backend :

1. Modifiez les fichiers dans le dossier `backend/`
2. Commitez et pushez sur GitHub :
```bash
git add .
git commit -m "Description de la modification"
git push origin main
```
3. Render détecte le changement et redéploie automatiquement ✨

---

## 🐛 Troubleshooting

### ❌ "Build failed"
- Vérifiez que `backend/package.json` existe
- Vérifiez que `backend/server.js` existe
- Regardez les logs Render pour plus de détails

### ❌ "EMAIL_PASS incorrect"
- Vérifiez que vous utilisez un **mot de passe d'application** (pas Gmail)
- Vérifiez la vérification 2FA activée sur Gmail
- Regénérez le mot de passe

### ❌ "Service not starting"
- Vérifiez les logs (onglet **Logs** dans Render)
- Vérifiez les variables d'env sont correctes
- Redéployez manuellement

---

## 📞 Support

- Docs Render : https://render.com/docs
- Docs Node.js : https://nodejs.org/
- Issues Gmail : https://support.google.com/

---

**Ghostech © 2026** 🚀 Innover. Apprendre. Construire.
