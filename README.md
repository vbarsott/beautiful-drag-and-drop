# Guide Notes

## Link to the project

https://beautifuldraganddrop.vanessabarsotti.com/

## Description

This is a simple example of a the drag and drop feature developed with React and react-beautiful-dnd for a list of songs to be sorted showing that not only the songs can be dragged around, but the also columns.
https://www.npmjs.com/package/react-beautiful-dnd

## If cloning the project:

- git clone https://github.com/vbarsott/beautiful-drag-and-drop.git
- npm install
- npm run dev

## If creating from scratch:

- Run: `npx create-react-app beautiful-drag-and-drop`
- Clean up extra files
- Include information on .gitignore (ex: exclude docs folder)
- Start: `npm start`
- Code: start coding

## Install modules:

### Router

- Router: `npm i react-router-dom`
- Beautiful DND: `npm install react-beautiful-dnd`
  PS: for installation conflicts, install as: `npm install --legacy-peer-deps react-beautiful-dnd`

### Styling

- Sass: `npm i sass --save-dev`
- Import inside App.js: `import './styles/css/styles.css';`
- Include script on package.json:
  `"scripts": { "sass": "sass src/styles/scss:src/styles/css --watch --no-source-map" }`
- Run sass: `npm run sass`
- Create directories inside src folder:
  - styles
    - css
    - scss => styles.scss file
- Bootstrap: `npm i bootstrap`
- React Bootstrap: `npm i react-bootstrap`
- React icons: `npm i react-icons`

## Setup to run all together:

- Install: `npm i concurrently --save-dev`
- Include script on package.json (DON'T DELETE WHAT WAS INSTALLED BEFORE):
  `"scripts": { "dev": "concurrently --kill-others \"npm start\" \"npm run sass\"" }`
- Run dev: `npm run dev`
