@echo off
chcp 65001 > nul
color 0A
cls

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║                   GHOSTECH - SETUP                         ║
echo ║          Formulaire de Recrutement - Backend              ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

:: Vérifier si Node.js est installé
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo  Node.js n'est pas installé ou n'est pas dans le PATH
    echo Téléchargez-le sur https://nodejs.org/
    pause
    exit /b 1
)

echo  Node.js trouvé: 
node --version
echo.

:: Accéder au dossier backend
echo  Accès au dossier backend...
cd backend

:: Vérifier si node_modules existe
if not exist "node_modules" (
    echo.
    echo  Installation des dépendances...
    call npm install
    if %ERRORLEVEL% neq 0 (
        echo  Erreur lors de l'installation des dépendances
        pause
        exit /b 1
    )
    echo  Dépendances installées
) else (
    echo  Dépendances déjà installées
)

echo.

:: Vérifier si .env existe
if not exist ".env" (
    echo  Fichier .env manquant !
    echo.
    echo  Création du fichier .env depuis .env.example...
    if exist ".env.example" (
        copy .env.example .env > nul
        echo  Fichier .env créé
        echo.
        echo ⚠️  IMPORTANT: Modifiez le fichier .env avec vos identifiants Gmail
        echo Voir: https://myaccount.google.com/security
        echo.
        pause
        start notepad .env
    ) else (
        echo  Fichier .env.example introuvable
        pause
        exit /b 1
    )
) else (
    echo  Fichier .env trouvé
)

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║            Démarrage du serveur Ghostech                  ║
echo ║         Le serveur s'exécutera sur http://localhost:3000   ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

call npm run dev
pause
