const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// Middleware - CORS configuré pour accepter tous les origins
app.use(cors({
  origin: '*', // Accepte tous les origins (à restreindre en production)
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../')));

// Configuration email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Route pour envoyer une candidature
app.post('/api/submit-candidature', async (req, res) => {
  try {
    const data = req.body;
    console.log('📨 Candidature reçue :', data.nom, data.email);

    // Construire le corps du message
    const body = `
Nouvelle candidature Ghostech 🚀

━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 INFORMATIONS PERSONNELLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nom et Prénoms : ${data.nom}
Âge            : ${data.age}
Sexe           : ${data.sexe}
Ville          : ${data.ville}
WhatsApp       : ${data.whatsapp}
Email          : ${data.email}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
💼 POSTE SOUHAITÉ
━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.poste}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
🛠️ COMPÉTENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Technologies   : ${data.competences}
Niveau         : ${data.niveau}
Projets        : ${data.projets}
${data.projetsDetail ? 'Détails projets : ' + data.projetsDetail : ''}
Portfolio      : ${data.portfolio || 'Non renseigné'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔥 MOTIVATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pourquoi Ghostech ?
${data.motivation}

Apport à l'équipe :
${data.apport}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 DISPONIBILITÉ
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Travail à distance : ${data.remote}
Heures/semaine     : ${data.heures}
Engagement actif   : ${data.engagement}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ghostech – Innover. Apprendre. Construire.
    `.trim();

    // Envoyer l'email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || 'ghostech92@gmail.com',
      subject: `🚀 Candidature Ghostech – ${data.poste} – ${data.nom}`,
      text: body,
      html: `<pre>${body}</pre>`,
      replyTo: data.email,
    });

    // Envoyer un email de confirmation au candidat
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: '✅ Votre candidature Ghostech a été reçue',
      html: `
        <h2>Merci ${data.nom} ! 🎉</h2>
        <p>Votre candidature pour le poste de <strong>${data.poste}</strong> a bien été reçue.</p>
        <p>Notre équipe l'examinera attentivement et vous recontactera dans les meilleurs délais.</p>
        <hr style="border:none;border-top:2px solid #2aa8a2;margin:20px 0;">
        <p><strong>Ghostech</strong> – Innover. Apprendre. Construire.</p>
        <p><small>ghostech92@gmail.com</small></p>
      `,
    });

    console.log('✅ Email envoyé à:', process.env.RECIPIENT_EMAIL);
    console.log('✅ Confirmation envoyée à:', data.email);

    res.status(200).json({
      success: true,
      message: 'Candidature envoyée avec succès',
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi :', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'envoi de la candidature',
      error: error.message,
    });
  }
});

// Route de santé
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveur Ghostech lancé sur http://localhost:${PORT}`);
});
