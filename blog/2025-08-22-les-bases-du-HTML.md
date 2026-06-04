---
title: "Les bases du HTML"
summary: "Une introduction aux concepts fondamentaux du HTML pour les débutants."
tags: [HTML, web development, beginners]
---

# Les bases du HTML

HTML, ou HyperText Markup Language, est le langage standard utilisé pour créer des pages web. Il structure le contenu des sites internet et permet d'intégrer des éléments variés comme du texte, des images, des liens et des vidéos. Dans cet article, nous allons explorer les concepts fondamentaux du HTML, ses éléments de base et comment ils fonctionnent ensemble.

## Qu'est-ce que le HTML ?

HTML est un langage de balisage qui utilise des balises pour organiser le contenu. Il définit la structure des pages web, permettant aux navigateurs de rendre le contenu de manière appropriée. Chaque page web est généralement un document HTML qui peut être visualisé dans un navigateur.

## La structure de base d'un document HTML

Un document HTML typique possède la structure suivante :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titre de la page</title>
</head>
<body>
    <h1>Bienvenue sur ma page web</h1>
    <p>Ceci est un paragraphe d'exemple.</p>
</body>
</html>
```

### Explication des éléments

1. `<!DOCTYPE html>` : Cette déclaration informe le navigateur que le document est en HTML5.
2. `<html lang="fr">` : L'élément `<html>` est la racine de la page, et l'attribut `lang` spécifie la langue du contenu.
3. `<head>` : Cette section contient des informations sur le document, comme le titre et les métadonnées.
4. `<meta charset="UTF-8">` : Définit l'encodage des caractères utilisé dans le document.
5. `<title>` : Définit le titre de la page affiché dans l'onglet du navigateur.
6. `<body>` : Contient le contenu visible de la page, comme les titres, paragraphes, images, etc.

## Les éléments HTML courants

Voici quelques éléments HTML que vous rencontrerez fréquemment :

- **Titres** : Utilisez `<h1>` à `<h6>` pour les titres, où `<h1>` est le plus important.
- **Paragraphes** : Le texte normal se trouve dans des balises `<p>`.
- **Liens** : Créez des hyperliens avec la balise `<a>` (ancre), par exemple : `<a href="https://example.com">Visitez notre site</a>`.
- **Images** : Ajoutez des images avec la balise `<img>` : `<img src="image.jpg" alt="Description de l'image">`.
- **Listes** : Créez des listes ordonnées avec `<ol>` ou des listes non ordonnées avec `<ul>`, et utilisez `<li>` pour chaque élément de la liste.

## Comment créer une page web simple

Voici comment créer une page web simple avec quelques éléments de base :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma première page web</title>
</head>
<body>
    <h1>Mon site personnel</h1>
    <p>Bonjour et bienvenue sur ma page web !</p>
    <h2>À propos de moi</h2>
    <p>Je suis un développeur web en herbe.</p>
    <h2>Mes intérêts</h2>
    <ul>
        <li>Programmation</li>
        <li>Design</li>
        <li>Technologie</li>
    </ul>
    <h2>Contact</h2>
    <p>Vous pouvez me trouver sur <a href="https://twitter.com" target="_blank">Twitter</a>.</p>
</body>
</html>
```

## Conclusion

Apprendre HTML est une étape essentielle pour quiconque souhaite se lancer dans le développement web. C'est un langage puissant qui permet de créer des contenus riches et interactifs. En maîtrisant les bases, vous poserez une fondation solide pour explorer d'autres technologies web, telles que CSS et JavaScript. Avec cette introduction, vous êtes désormais prêt à commencer à créer vos propres pages web !