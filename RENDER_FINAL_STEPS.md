# ✅ Prêt pour Render !

## 🎯 Étapes restantes

Votre projet est maintenant prêt pour Render. Voici ce qu'il reste à faire :

---

## 📝 ÉTAPE 1 : Aller sur Render et créer le service

1. Allez sur **https://render.com**
2. **Sign up** avec votre compte GitHub
3. Autorisez Render à accéder à vos repos GitHub

---

## 📝 ÉTAPE 2 : Créer un Web Service

1. Dans le dashboard, cliquez **New +** > **Web Service**
2. Sélectionnez le repo **`recrut_Ghostech`**
3. Render détecte automatiquement `render.yaml`

**Configuration :**
- **Name** : `ghostech-recrutement-backend`
- **Runtime** : Node (auto)
- **Build Command** : `npm install` (auto)
- **Start Command** : `npm start` (auto)
- **Root Directory** : `backend`

---

## 📝 ÉTAPE 3 : Ajouter les variables d'environnement

Dans Render, onglet **Environment**, ajoutez :

| KEY | VALUE |
|-----|-------|
| `EMAIL_USER` | `ghostech92@gmail.com` |
| `EMAIL_PASS` | **[Votre mot de passe app Gmail]** |
| `RECIPIENT_EMAIL` | `ghostech92@gmail.com` |
| `PORT` | `3000` |

⚠️ **EMAIL_PASS** doit être un **mot de passe d'application Gmail** !

### Comment générer un mot de passe d'application Gmail :
1. Allez sur https://myaccount.google.com/security
2. Activez la **vérification en deux étapes**
3. Allez dans **Mots de passe d'application**
4. Sélectionnez Mail + Windows
5. Générez et copiez le mot de passe

---

## 📝 ÉTAPE 4 : Déployer

1. Cliquez **Create Web Service**
2. Render commence le déploiement (2-3 min)
3. Vérifiez les logs (onglet **Logs**)
4. Une fois terminé, vous verrez l'URL :

```
https://ghostech-recrutement-backend.onrender.com
```

---

## 📝 ÉTAPE 5 : Mettre à jour le frontend

Ouvrez `ghostech-recrutement.html` et trouvez cette ligne :

```javascript
const API_URL = 'http://localhost:3000';
```

Remplacez par :

```javascript
const API_URL = 'https://ghostech-recrutement-backend.onrender.com';
```

**Sauvegardez et committez :**
```bash
git add ghostech-recrutement.html
git commit -m "Update API URL for Render deployment"
git push origin main
```

---

## ✅ ÉTAPE 6 : Tester

### Tester l'API
```bash
curl https://ghostech-recrutement-backend.onrender.com/api/health
# Doit afficher: {"status":"OK"}
```

### Tester le formulaire
1. Ouvrez `ghostech-recrutement.html` dans votre navigateur
2. Remplissez le formulaire
3. Cliquez **Envoyer ma candidature**
4. Vous devriez voir ✅ **Candidature envoyée !**
5. Vérifiez votre email `ghostech92@gmail.com`

---

## 📊 Avantages Render

- ✅ **Gratuit** (500 heures/mois = complet gratuit)
- ✅ **Déploiement automatique** à chaque push GitHub
- ✅ **Redémarrage automatique** si le serveur crash
- ✅ **Logs en temps réel**
- ✅ **HTTPS inclus**

---

## 🔄 Mise à jour future

Chaque fois que vous modifiez le backend :

```bash
git add backend/server.js    # (ou les fichiers modifiés)
git commit -m "Description de la modification"
git push origin main
```

Render détecte automatiquement les changements et redéploie ! ✨

---

## 🆘 Aide en cas d'erreur

### ❌ "Build failed"
- Vérifiez que le fichier `backend/package.json` existe
- Vérifiez que `backend/server.js` existe
- Regardez les **logs** dans Render pour plus de détails

### ❌ "Service is not responding"
- Vérifiez les **logs** dans Render
- Vérifiez que **EMAIL_PASS** est correct
- Attendez 2-3 min (démarrage du service)

### ❌ "The form doesn't send"
- Vérifiez que **API_URL** est correcte dans le HTML
- Ouvrez les **dev tools** du navigateur (F12) > Console
- Regardez les erreurs

---

## 📚 Documentation

- **Render Docs** : https://render.com/docs
- **Guide complet** : `DEPLOY_RENDER.md`

---

**Ghostech © 2026** 🚀 Innover. Apprendre. Construire.
