# Help Bot

## Titre

Help Bot

![Image de preview](https://raw.githubusercontent.com/Eric-Philippe/Cril-Bot-main/master/Bot/docs/cril.png)

## Introduction

Suite de Bot pour différentes plateformes de communication, Discord, Webex...

### Date

2023-2024

### Tags

BOT

## Technologies

| Nom        |
| ---------- |
| TypeScript |
| PostgreSQL |
| CI/CD      |
| GitBook    |
| Python     |
| PlantUML   |

[Lien vers Git](https://github.com/Eric-Philippe/Cril-Bot-main)

## Contenu

#### Liste des projets référencés :

##### Cril Bot :

[GitHub](https://github.com/Eric-Philippe/Cril-Bot-main)

##### Kairos Reminder :

[GitHub](https://github.com/Eric-Philippe/Kairos-Bot-Reminder)

##### Jaguar Webex Bot :

[GitHub](https://github.com/Eric-Philippe/Jaguar-Webex-Bot)

### Cril bot

Cril Bot est un bot Discord dédié au centre des langues _(CRIL)_ de **l'IUT de Rangueil** [Toulouse] dans un contexte d'hybridation de la formation. Ce projet a été développé à l'aide de nombreuses réunions avec les responsables du centre des langues, afin de répondre au mieux à leurs besoins.

#### Fonctionnalités

- Gestion des activités et coaching en ligne
- Interface Google Sheets pour gérer les activités et les inscriptions
- Help Desk pour les étudiants
- Système d'entrée du serveur avec les dernières nouveautés de l'API Discord
- Des commandes de loisir pour les étudiants et les tuteurs (Tirage au sort, Sondage, Jeux, etc.)
- Cril/Place : Système de dessin collaboratif
- Système de modération et d'administration du serveur
- Système de logs pour les administrateurs

_Et bien plus encore..._

#### Interface communicante - Google Sheets

Cril bot communique avec un `Google Sheet` généré automatiquement à partir d'un modèle. Ce `Sheet` offre une interface simple et efficace pour faire l'intermédiaire entre les responsables du centre des langues et le bot. Il permet de gérer les activités et les inscriptions, et de générer des rapports **automatiquement**.

![Google Sheet](https://raw.githubusercontent.com/Eric-Philippe/Cril-Bot-main/master/Bot/docs/cril_sheet.png)

#### Documentation

La totalité de la documentation utilisateur est disponible à l'adresse suivante :

[Git Book](https://eric-p.gitbook.io/cril-bot-documentation/)

### Kairos Reminder

#### Contexte

Kairos Reminder est un bot permettant de créer des rappels pour recevoir des notifications à une date et une heure précises en se basant sur l'API de Discord. Est venu plus tard la possibilité de pouvoir suivre le temps passé sur des activités personnalisées, en ayant ensuite des graphiques et un Excel automatiquement générés.

##### Base de données

Ce projet a également était une opportunité de me concentrer sur le côté Base de données, en utilisant de nombreux outils pour développer une architecture robuste et performante. On y retrouve un `ORM (TypeORM)` pour toute la gestion de la communication avec la base de données. J'ai également pu designer la base à partir de `MCD` et `MLD`, en utilisant des outils comme _"Looping"_.

##### Modularité

Kairos est un bot modulaire, avec une architecture complète, permettant de facilement ajouter des fonctionnalités. Chacunes de ses fonctionnalités sont indépendantes les unes des autres, et peuvent être réutilisées dans d'autres projets, étant documentées et testées.

Exemple :

[UML Book](https://github.com/Eric-Philippe/Kairos-Bot-Reminder/blob/master/src/Book/UML_BOOK.plantuml)

_ou encore_

[UML Book Components](https://github.com/Eric-Philippe/Kairos-Bot-Reminder/blob/master/src/Book/UML_BOOK_COMPONENTS.plantuml)

#### Fonctionnalités

- Création de rappels personnels
- Création de rappels pour des serveurs (groupes)
- Création de rappels récurrents (Journalier, Jours hors week-end, Hebdomadaire, Mensuel, Annuel...)
- Gestion des différents fuseaux horaires
- Tracking du temps passé sur des activités personnalisées
- Différentes granularités pour l'entrée des activités (Catégorie, Activité, Tâche)
- Graphiques (Chart.js) (Bar, Line, Pie, Doughnut...)
- Excel automatiquement généré (xlsx)

![Excel](https://raw.githubusercontent.com/Eric-Philippe/Kairos-Bot-Reminder/master/img/excel.png)

![Pie Chart](https://raw.githubusercontent.com/Eric-Philippe/Kairos-Bot-Reminder/master/PolarAreaGraph.ex.png)

#### Publication

Kairos est mon premier Bot Discord, partagé au public. Il a été propulsé par différents sites (_Top.gg, Discord Bot List_...) et compte plus d'une **centaine d'utilisateurs** partout dans le monde.

#### Fiabilité

Ce bot a connu plusieurs refontes (Js à Ts ...), afin d'être le plus fiable possible pour pouvoir suggérer les rappels **24/7**. Cela est fait à l'aide de `pm2`, un gestionnaire de processus avancé pour les applications Node.js. On retrouve également une architecture complète semi-autonome, avec un système de logs et de gestion des erreurs, lui permettant de ne pas se bloquer en cas de problème pour continuer son processus.

Il est aussi déployé à l'aide de `CI/CD (GitHub Actions)` sur un serveur dédié, lui permettant d'être toujours à jour et de pouvoir être déployé en un clic.

![UML](https://raw.githubusercontent.com/Eric-Philippe/Kairos-Bot-Reminder/master/src/database/scripts/MCD_Img.png)

### Jaguar Webex Bot

#### Introduction

Jaguar est un bot Webex, réalisé au cours de mon alternance afin d'automatiser les tours de support. Chaque jour un équipier différent est désigné pour être le support de l'équipe, et Jaguar permet de gérer cela de manière automatique. Il gère également les congés, les absences, les jours fériés, et bien d'autres fonctionnalités.

Le bot profite de mon expérience avec les bots Discord, le support Webex étant plus restreint, il a fallu adapter les fonctionnalités en conséquence.

Il a été développé en `JavaScript` et profite d'une base de données `SQLite` pour stocker les informations.

Ce bot est un des premiers projets dans ma lancée à produire des applications qui puissent être facilement adoptées et réutilisées par d'autres équipes.
