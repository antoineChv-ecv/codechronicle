---
title: "Les bases de GitHub"
summary: "Une introduction aux concepts fondamentaux de GitHub pour les développeurs débutants."
tags: [Git, GitHub, versioning]
---

# Les bases de GitHub

GitHub est une plateforme de développement collaboratif qui utilise Git, un système de contrôle de version. Dans cet article, nous allons explorer les concepts fondamentaux de GitHub, y compris les dépôts, les commits, et les pull requests.

## Qu'est-ce que GitHub ?

GitHub est un service de hosting basé sur le cloud qui permet aux développeurs de stocker et de gérer leurs projets. GitHub facilite également la collaboration grâce à des fonctionnalités robustes telles que le suivi des problèmes, les demandes de tirage (pull requests), et la possibilité de travailler sur différentes branches.

## Création d'un dépôt

Un dépôt est l'endroit où votre projet est stocké. Pour créer un nouveau dépôt :

1. Connectez-vous à votre compte GitHub.
2. Cliquez sur le bouton "New repository".
3. Remplissez les champs requis : nom du dépôt, description (facultative), et sélectionnez si le dépôt doit être public ou privé.
4. Cliquez sur "Create repository".

## Cloner un dépôt

Pour travailler sur un projet localement, vous devez cloner le dépôt :

```bash
git clone <URL_DU_DEPOT>
```

Cela crée une copie locale de votre dépôt sur votre machine.

## Effectuer des modifications et commits

Après avoir apporté des modifications à vos fichiers, vous devez les enregistrer avec un commit :

1. Ajoutez les fichiers modifiés à la zone de staging :
   ```bash
   git add <fichier>
   ```

2. Faites un commit de vos modifications :
   ```bash
   git commit -m "Message de votre commit"
   ```

Le message de commit doit être descriptif de ce que vous avez changé.

## Pousser des modifications

Après avoir committé vos changements, vous devez les envoyer vers GitHub :

```bash
git push origin <branche>
```

Assurez-vous de remplacer `<branche>` par la branche sur laquelle vous travaillez, souvent `main` ou `master`.

## Pull Requests

Les demandes de tirage (pull requests) sont utilisées pour demander la fusion de vos modifications dans une autre branche, généralement la branche principale. Pour créer une pull request :

1. Accédez à votre dépôt sur GitHub.
2. Cliquez sur l’onglet “Pull requests”.
3. Cliquez sur “New pull request”.
4. Sélectionnez la branche source et la branche cible.
5. Cliquez sur “Create pull request” et ajoutez une description.

## Conclusion

GitHub est un outil puissant pour gérer vos projets et collaborer avec d'autres développeurs. En comprenant les bases comme les dépôts, les commits et les pull requests, vous pourrez commencer à utiliser GitHub de manière efficace et bénéficier de ses nombreuses fonctionnalités.