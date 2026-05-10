#  🚀 DÉPLOIEMENT VERCEL - Ghostech Recrutement

Déployez votre backend Node.js sur **Vercel** en 3 minutes ! C'est gratuit et ultra-simple.

---

##  📋 Prérequis

-  ✅ Compte GitHub (repo déjà pushé)
-  ✅ Compte Vercel (gratuit)
-  ✅ Mot de passe d'application Gmail

---

##  ⚡ ÉTAPES DE DÉPLOIEMENT (3 min)

### ÉTAPE 1️ : Créer un compte Vercel

1. Allez sur **https://vercel.com**
2. Cliquez **Sign Up**
3. Connectez-vous avec **GitHub**
4. Autorisez Vercel à accéder à vos repos GitHub

---

### ÉTAPE 2️ : Importer le projet

1. Dans le dashboard Vercel, cliquez **Add New...** → **Project**
2. Cherchez et sélectionnez **`recrut_Ghostech`**
3. Cliquez **Import**

**Vercel détecte automatiquement :**
- Framework : Node.js ✓
- Root Directory : `backend` (à vérifier)
- Build Command : `npm install`
- Output Directory : (vide, c'est OK)

> ⚠️ **Important** : Dans **Root Directory**, assurez-vous que c'est `backend/` pas `.`

---

### ÉTAPE 3️ : Configurer les variables d'environnement

Avant de déployer, ajoutez vos variables :

1. Cliquez sur l'onglet **Environment Variables**
2. Ajoutez ces 4 variables :

| KEY | VALUE |
|-----|-------|
| `EMAIL_USER` | `ghostech92@gmail.com` |
| `EMAIL_PASS` | **[Votre mot de passe app Gmail]** |
| `RECIPIENT_EMAIL` | `ghostech92@gmail.com` |
| `PORT` | `3000` |

#### 🔑 Générer EMAIL_PASS (mot de passe d'application Gmail) :

1. Allez sur https://myaccount.google.com/security
2. Activez **Vérification en deux étapes** (si pas déjà fait)
3. Allez dans **Mots de passe d'application**
4. Sélectionnez : 
   - App = **Mail**
   - Device = **Windows/Linux**
5. Cliquez **Générer** et copiez le mot de passe
6. Collez dans Vercel pour `EMAIL_PASS`

⚠️ **Important** : Utilisez le mot de passe généré, PAS votre mot de passe Google normal !

---

### ÉTAPE 4️ : Déployer

1. Cliquez **Deploy**
2. Attendez 1-2 minutes ⏳
3. Vercel vous affiche l'URL de votre serveur :

```
https://recrut-ghostech.vercel.app
```

✅ **Notez cette URL** - vous en aurez besoin !

---

### ÉTAPE 5️ : Vérifier le déploiement

Testez que votre serveur fonctionne :

```bash
curl https://recrut-ghostech.vercel.app/api/health
# Doit afficher: {"status":"OK"}
```

Si vous obtenez `{"status":"OK"}`, c'est bon ! ✅

---

### ÉTAPE 6️ : Mettre à jour le frontend

Maintenant que votre backend est en ligne, mettez à jour le HTML.

Ouvrez `ghostech-recrutement.html` et trouvez cette ligne (environ ligne 1215) :

```javascript
const API_URL = 'http://localhost:3000';
```

Remplacez par :

```javascript
const API_URL = 'https://recrut-ghostech.vercel.app';
```

(Remplacez l'URL par celle que Vercel vous a donnée - devrait être `https://recrut-ghostech.vercel.app`)

**Sauvegardez le fichier.**

---

### ÉTAPE 7️ : Pousser sur GitHub

Faites un commit pour que tout soit syncronisé :

```bash
cd c:\Users\hp\Downloads\recrut_Ghostech
git add ghostech-recrutement.html
git commit -m "Update backend URL for Vercel deployment"
git push origin main
```

---

### ÉTAPE 8️ : Tester le formulaire

1. Ouvrez `ghostech-recrutement.html` dans votre navigateur
2. Remplissez le formulaire complet (4 étapes)
3. Cliquez **Envoyer ma candidature**
4. Vous devriez voir **✓ Candidature envoyée !**
5. Vérifiez vos emails :
   - **ghostech92@gmail.com** : Candidature complète avec tous les détails
   - **Votre email** : Email de confirmation simple

---

##  📧 Flux d'emails en production

```
Candidat remplit le formulaire
            ↓
Clique "Envoyer ma candidature"
            ↓
Backend Vercel reçoit les données
            ↓
Email 1 : Candidature complète (design Ghostech) → ghostech92@gmail.com
Email 2 : Confirmation simple (design Ghostech) → Mail du candidat
            ↓
Écran "✓ Candidature envoyée !" avec animation
```

---

##  🔧 Troubleshooting

###  ❌ "Build failed"
- Vérifiez que `backend/package.json` existe
- Vérifiez les **Logs** dans Vercel
- Attendez 2-3 min

###  ❌ "Can't connect to API"
- Vérifiez l'URL dans le HTML (doit être l'URL Vercel)
- Vérifiez que le déploiement est terminé (statut "Ready")
- Testez l'URL directement dans le navigateur

###  ❌ "Email not sent"
- Vérifiez **EMAIL_PASS** dans Vercel Environment Variables
- Vérifiez la vérification **2FA Gmail** activée
- Vérifiez que c'est un **mot de passe d'application** (pas le mot de passe Gmail)
- Regardez les **logs Vercel** pour les erreurs

###  ❌ "CORS error"
- Assurez-vous que la variable `PORT` est définie à `3000`
- Vérifiez que le backend accepte tous les domaines

---

##  ✅ Récapitulatif - Checklist

| Étape | Status |
|-------|--------|
| 1. Compte Vercel créé | ☐ |
| 2. Repo importé | ☐ |
| 3. Root Directory = `backend/` | ☐ |
| 4. Variables d'env ajoutées | ☐ |
| 5. EMAIL_PASS configuré | ☐ |
| 6. Déploiement terminé | ☐ |
| 7. URL obtenue | ☐ |
| 8. HTML mis à jour avec URL | ☐ |
| 9. Git push effectué | ☐ |
| 10. Formulaire testé ✓ | ☐ |

---

##  🎉 C'est fait !

Votre système de recrutement est **en production** !

- ✅ Formulaire de candidature en ligne
- ✅ Emails stylisés avec design Ghostech
- ✅ Backend Node.js sur Vercel (gratuit)
- ✅ Emails envoyés via Gmail SMTP
- ✅ Déploiement automatique à chaque push GitHub

**Questions ?** Consultez les logs Vercel ou testez avec `curl` :

```bash
curl https://recrut-ghostech.vercel.app/api/health
```

Devrait afficher : `{"status":"OK"}`

---

##  Après le déploiement

-  **Gratuit** : 500h/mois sur Render (plus que suffisant)
-  **Automatique** : Chaque push GitHub = redéploiement automatique
-  **Logs** : Consultables en temps réel dans Render
-  **HTTPS** : Inclus automatiquement
-  **Uptime** : 99.5%

---

##  Besoin d'aide ?

- **Render Docs** : https://render.com/docs
- **Node.js** : https://nodejs.org/
- **Gmail** : https://support.google.com/

---

**Ghostech © 2026**  Innover. Apprendre. Construire.
