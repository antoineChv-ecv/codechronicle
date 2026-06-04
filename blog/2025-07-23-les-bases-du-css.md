---
title: "Les bases du CSS"
summary: "Découvrez les fondamentaux du CSS pour styliser vos pages web."
tags: [CSS, design, développement web]
---

# Les bases du CSS

CSS, ou Cascading Style Sheets, est un langage de style conçu pour décrire la présentation d’un document écrit en HTML ou XML. Apprendre les bases du CSS est essentiel pour quiconque souhaite créer des sites web esthétiques et fonctionnels. Cet article aborde les aspects fondamentaux du CSS, y compris sa syntaxe, ses sélecteurs, ses propriétés et sa mise en œuvre.

## 1. La syntaxe du CSS

La syntaxe CSS se compose de sélecteurs et de règles. Une règle CSS se présente sous la forme suivante :

```css
sélecteur {
    propriété: valeur;
}
```

### Exemple :

```css
h1 {
    color: blue;
    font-size: 24px;
}
```

Dans cet exemple, le sélecteur `h1` cible tous les éléments `<h1>` du document, appliquant une couleur de texte bleue et une taille de police de 24 pixels.

## 2. Sélecteurs CSS

Les sélecteurs permettent de cibler des éléments spécifiques dans le document HTML. Voici quelques types de sélecteurs courants :

- **Sélecteur de type** : cible tous les éléments d'un certain type (ex. `p`, `div`).
- **Sélecteur de classe** : commence par un point (`.`) et cible tous les éléments ayant une classe donnée (ex. `.ma-classe`).
- **Sélecteur d'ID** : commence par un dièse (`#`) et cible un élément unique avec un ID spécifié (ex. `#mon-id`).
- **Sélecteur d'attribut** : cible les éléments basés sur la présence ou la valeur d'un attribut spécifié (ex. `input[type="text"]`).

## 3. Propriétés CSS

Les propriétés CSS sont les attributs que vous pouvez appliquer aux sélecteurs. Voici quelques propriétés couramment utilisées :

- **color** : définit la couleur du texte.
- **background-color** : définit la couleur d'arrière-plan d'un élément.
- **font-size** : spécifie la taille de la police.
- **margin** : crée de l'espace autour des éléments.
- **padding** : crée de l'espace à l'intérieur des éléments.

### Exemple :

```css
body {
    background-color: lightgray;
    font-family: Arial, sans-serif;
}

p {
    color: darkgreen;
    margin: 20px;
}
```

## 4. Mise en œuvre du CSS

Il existe trois manières d’intégrer le CSS dans un document HTML :

1. **CSS en ligne** : en utilisant l'attribut `style` directement dans une balise HTML.

```html
<p style="color: red;">Texte rouge</p>
```

2. **CSS interne** : en plaçant le CSS dans une balise `<style>` dans l’en-tête du document.

```html
<head>
    <style>
        body {
            background-color: lightgray;
        }
    </style>
</head>
```

3. **CSS externe** : en liant un fichier CSS externe à votre document HTML.

```html
<link rel="stylesheet" href="styles.css">
```

## Conclusion

Le CSS est un outil puissant qui permet de transformer des pages web de documents bruts en créations visuellement attrayantes. En maîtrisant les bases du CSS, vous pourrez mieux contrôler l'apparence et la présentation de vos projets web. Pratiquez ces concepts, explorez davantage, et laissez libre cours à votre créativité dans le design web.