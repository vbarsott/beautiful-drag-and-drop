# My Beautiful DND Example

Tasks list with Drag and Drop example using React and react-beautiful-dnd

## Initialize react:

- Install initial react package: `npx create-react-app yourname`
- Clean up extra files
- Include information on .gitignore (ex: exclude docs folder)
- Run react: `npm start`

## Install modules:

- Install the router: `npm install react-beautiful-dnd`

## Install and setup Bootstrap and Sass:

- Install Bootstrap: `npm install bootstrap`
- Install sass: `npm install sass`
- Create directories inside src folder:
  - styles
    - css
    - scss
- Create styles.scss file (inside scss folder)
- Import inside App.js: `import './styles/scss/styles.scss';`
- Include script on package.json:
  `"scripts": { "sass": "sass src/styles/scss:src/styles/css --watch --no-source-map" }`
- Run sass: `npm run sass`
