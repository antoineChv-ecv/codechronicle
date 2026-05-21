---
title: "Déployer un Site Statique avec FTP"
summary: "Ce guide explique comment déployer un site statique en utilisant le protocole FTP."
tags: [FTP, déploiement, site statique]
---

# Déployer un Site Statique avec FTP

Dans cet article, nous allons explorer comment déployer un site statique sur un serveur web en utilisant le protocole FTP (File Transfer Protocol). Ce processus est essentiel pour rendre votre site accessible au public sur Internet.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants :

1. **Un site statique** : Vos fichiers HTML, CSS, JavaScript, images, etc.
2. **Un hébergement web** : Un compte d'hébergement qui prend en charge FTP.
3. **Un client FTP** : Un logiciel pour transférer vos fichiers via FTP. Par exemple, FileZilla ou WinSCP.
4. **Identifiants FTP** : Nom d'utilisateur et mot de passe fournis par votre hébergeur.

## Étape 1 : Préparer vos Fichiers

Organisez vos fichiers dans un dossier. Il est conseillé d'avoir une structure de dossier claire. Par exemple :

```
mon-site/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── scripts.js
└── images/
    └── image.png
```

## Étape 2 : Installer un Client FTP

Si vous ne l'avez pas encore fait, téléchargez et installez un client FTP de votre choix. FileZilla est populaire et facile à utiliser.

1. Allez sur le site officiel de [FileZilla](https://filezilla-project.org).
2. Téléchargez et installez la version appropriée pour votre système d’exploitation.

## Étape 3 : Connexion au Serveur FTP

1. Ouvrez votre client FTP.
2. Entrez les informations suivantes :
   - **Hôte** : l'adresse de votre serveur FTP (souvent sous la forme ftp.votre-domaine.com).
   - **Nom d'utilisateur** : votre identifiant FTP.
   - **Mot de passe** : le mot de passe associé à votre identifiant FTP.
   - **Port** : 21 (par défaut pour FTP).

3. Cliquez sur "Connexion". Si tout est correct, vous serez connecté à votre serveur.

## Étape 4 : Transférer les Fichiers

1. Localisez votre dossier contenant les fichiers du site statique sur le panneau gauche de votre client FTP.
2. Sur le panneau droit, naviguez vers le répertoire cible sur votre serveur où vous souhaitez déployer votre site (souvent le dossier `public_html` ou `www`).
3. Glissez et déposez vos fichiers et dossiers du panneau gauche vers le panneau droit pour les transférer.

## Étape 5 : Vérifier le Déploiement

Après le transfert, ouvrez un navigateur web et entrez votre nom de domaine. Vous devriez voir votre site statique s'afficher. Si vous voyez une erreur, vérifiez que tous les fichiers ont été transférés correctement et que leur structure est intacte.

## Étape 6 : Résoudre d’éventuels Problèmes

Si votre site ne s’affiche pas correctement, voici quelques vérifications :

- **Permissions de fichiers** : Assurez-vous que les fichiers et dossiers ont les bonnes permissions (644 pour les fichiers et 755 pour les dossiers).
- **Index de démarrage** : Vérifiez que votre fichier d'accueil s'appelle `index.html`.
- **Liens relatifs** : Assurez-vous que tous les chemins relatifs vers les fichiers CSS, JavaScript et images sont corrects.

## Conclusion

Déployer un site statique via FTP est un processus direct qui ne nécessite pas de compétences avancées en développement web. En suivant ces étapes, vous serez capable de rendre votre site accessible à tous en un rien de temps. N'hésitez pas à contacter votre hébergeur si vous rencontrez des difficultés lors du processus. Happy coding!