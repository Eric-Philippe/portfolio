# Julia Markdown Joy

## Titre

Julia Markdown Joy

## Introduction

"JuliaMarkdownJoy" - Outil versatile en Julia pour analyser des fichiers Markdown en JSON, extraire des champs spécifiques, et convertir le tout en HTML

[Lien GitHub](https://github.com/Eric-Philippe/JuliaMarkdownJoy)

### Technologies

| Nom      |
| -------- |
| Julia    |
| Markdown |
| CI/CD    |
| Git      |
| Python   |

## Date

Janvier 2024

##### Tags

TOOL

![Image de preview](https://raw.githubusercontent.com/Eric-Philippe/JuliaMarkdownJoy/main/img/julia.png)

## Contenu

### Présentation

"JuliaMarkdownJoy" est un outil versatile en codé en `Julia` permettant d'analyser des fichiers Markdown en `JSON`, d'extraire des champs spécifiques, et de convertir le tout en `HTML`. Il profite d'une intégration continue avec `GitHub Actions`, afin de garantir un déploiement **rapide** et **fiable**.

Également, il profite d'une configuration facile dans des fichiers JSON permettant de cibler des champs spécifiques à extraire.

```
{
  "fields": [
    {
      "find_property_": "title",
      "after_a_": "title",
      "named_": ["Titre", "Title"]
    },
    {
      "find_property_": "shortDesc",
      "after_a_": "title",
      "named_": ["Résumé", "Aperçu", "Intro", "Introduction", "Présentation"]
    },
    {
      "find_property_": "techs",
      "after_a_": "title",
      "named_": ["Technologies", "Technos", "Techs", "Tools"],
      "format": "array"
    },
    {
      "find_property_": "gitLink",
      "after_a_": "link",
      "named_": ["Lien GitHub", "Lien Git", "Lien vers Git"]
    },
    {
      "find_property_": "date",
      "after_a_": "title",
      "named_": ["Date", "Création", "Créé", "Créé le", "Date de création"]
    },
    {
      "find_property_": "tag",
      "after_a_": "title",
      "named_": ["Tag", "Tags", "Catégorie"],
      "format": "uppercase"
    },
    {
      "find_property_": "previewImg",
      "after_a_": "image",
      "named_": [
        "Image",
        "Image de prévisualisation",
        "Image de preview",
        "Preview",
        "Preview image"
      ]
    },
    {
      "find_property_": "content",
      "after_a_": "title",
      "named_": [
        "Contenu",
        "Contenu du projet",
        "Description",
        "Description du projet"
      ],
      "take_everything_after_": true
    }
  ]
}

```

### Performance

Julia Markdown Joy permet de parser plus de `100_000` fichiers markdown en `JSON` en moins de `3` secondes !

### Contexte

Ce projet a été réalisé dans le cadre de mon développement de mon portfolio. Il me permet de générer des fichiers `JSON` à partir de fichiers `Markdown`, afin de les utiliser dans mon portfolio. Il me permet également de mettre en pratique mes compétences en développement et de me concentrer particulièrement sur **l'automatisation**.

### Fun Fact

Vous consultez actuellement le rendu d'un fichier `Markdown` généré par **"JuliaMarkdownJoy"** !

### Fonctionnalités

L'application présente les sections suivantes :

- Parser : Analyse des fichiers Markdown en JSON
- Extractor : Extraction de champs spécifiques
- Converter : Conversion en HTML

### Développement

> Pourquoi Julia ?

Julia est un langage de programmation dynamique, performant et polyvalent. Il est particulièrement adapté à la manipulation de données, et est utilisé dans de nombreux domaines, notamment la finance, la science et l'ingénierie. Il est également très apprécié pour son écosystème de packages, qui permettent d'étendre ses fonctionnalités.

### Utilisation

```bash
> julia JuliaMarkdownJoy/src/run.jl extract -i _projects/ -c _projects/config.json  -o data.json

🎉 10 Markdown files extracted successfully in data.json !
```
