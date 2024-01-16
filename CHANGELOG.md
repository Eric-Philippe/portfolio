# Changelog

All notable changes to this project will be documented in this file.

## [1.1] -- Coming Soon

### Major updates

- The CI now includes a test to check if there is no dead link in the markdown files
- The two portfolios are now completly independant, using lazy loading to load the right portfolio
- Added in consequence a `Tetris Loading` animation to the website
- Added a Software Page to the PhotoPortfolio
- Added a Albums Section to the PhotoPortfolio

### Minor updates

- The DevPortfolio saw a small refactor of the quick access select on phone

## [1.0] -- 2024-15-01

### Major updates

- All the texts for the dev projects are now written !
- The Dev Portfolio Page is now complete !

## [0.4.1] -- 2024-14-01

### Major updates

- AGAIN, new refactoring of the Markdown Parser
- - I made a whole new repository for the Markdown Parser, in order to make it more modular and easier to use.
- - It's written in Julia and the CI has been updated to work with it.

### Minor updates

- Add a Dockerfile to build the website in a container
- The Techs tags are now colored with the color of the language
- We have now a pointer cursor on hover on the projects

## [0.4] -- 2024-11-01

### Major updates

- Major Refactoring of the Markdown Parser
- - I wrote my own Markdown Parser, in order to avoid overcomplicated algorithms or limiting the possibilities of the Markdown syntax.

- The Project Consult page is now here !

- New "Mentions Légales" Page

- Minor updates on the Dev Portfolio Page
- - Add a sub-header to the Dev Portfolio Page in order to reach the different sections more easily

### Minor updates

- Light clean and refactor of some parts of the code
- - Cut the Head component into smaller components (Head, Header)
- - Clean the code and comments

## [0.3] -- 2024-09-01

### Major updates

- This portfolio will be simultaneously a Dev Portfolio and a Photography Portfolio
- Add a Photography Page with a SUPER FANCY 3D CAMERA MODEL and a full Setup Section
- Add a Setup Section to the PhotoPortfolio

## [0.2] -- 2024-08-01

### Major additions

- System to feed Markdown files to the Website, allowing to create new projects without touching the code

- Add a CI/CD pipeline to build the sections, and the website and publish it on github pages

- Complete the Dev Portfolio Page with the Skills section, About section and the Contact section

### Minor additions

- Add few projets files like AUTHORS, LICENSE, TODO, etc.

## [0.1] -- 2024-06-01

### Added

- Initial features
- - First glance at the Dev Portfolio Page, Head Page, Projects Section
