#!/bin/bash

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}"
echo "╔════════════════════════════════════════════════════════════╗"
echo "║                   GHOSTECH - SETUP                         ║"
echo "║          Formulaire de Recrutement - Backend              ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo -e "${NC}"
echo

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo -e "${RED} Node.js n'est pas installé${NC}"
    echo "Téléchargez-le sur https://nodejs.org/"
    exit 1
fi

echo -e "${GREEN} Node.js trouvé:${NC}"
node --version
echo

# Accéder au dossier backend
echo -e "${BLUE} Accès au dossier backend...${NC}"
cd backend

# Vérifier si node_modules existe
if [ ! -d "node_modules" ]; then
    echo
    echo -e "${BLUE} Installation des dépendances...${NC}"
    npm install
    if [ $? -ne 0 ]; then
        echo -e "${RED} Erreur lors de l'installation des dépendances${NC}"
        exit 1
    fi
    echo -e "${GREEN} Dépendances installées${NC}"
else
    echo -e "${GREEN} Dépendances déjà installées${NC}"
fi

echo

# Vérifier si .env existe
if [ ! -f ".env" ]; then
    echo -e "${RED} Fichier .env manquant !${NC}"
    echo
    echo -e "${BLUE} Création du fichier .env depuis .env.example...${NC}"
    if [ -f ".env.example" ]; then
        cp .env.example .env
        echo -e "${GREEN} Fichier .env créé${NC}"
        echo
        echo -e "${YELLOW}⚠️  IMPORTANT: Modifiez le fichier .env avec vos identifiants Gmail${NC}"
        echo "Voir: https://myaccount.google.com/security"
        echo
        nano .env
    else
        echo -e "${RED} Fichier .env.example introuvable${NC}"
        exit 1
    fi
else
    echo -e "${GREEN} Fichier .env trouvé${NC}"
fi

echo
echo -e "${BLUE}"
echo "╔════════════════════════════════════════════════════════════╗"
echo "║            Démarrage du serveur Ghostech                  ║"
echo "║         Le serveur s'exécutera sur http://localhost:3000   ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo -e "${NC}"
echo

npm run dev
