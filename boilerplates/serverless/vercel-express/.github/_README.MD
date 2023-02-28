<h1 align="center">
  Express server boilerplate
</h1>

<p align="center">
  <a href="#information_source-description">Description</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#information_source-features">Features</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-edit-it">How to edit it?</a>
</p>

## :information_source: Description

This is express server boilerplate I use whenever I need to create servers.

## :information_source: Features

- [x] Tests seted up using jest and supertest;
- [x] List all available routes in `/api`;
- [x] Graceful shutdown seted up;
- [x] Error handling seted up;
- [x] Configutation files in a specific folder.

## :information_source: Technologies

This project uses the following technologies:

<div align="center" style="text-align: center;">
  <table>
    <tr>
      <th>Scope</th>
      <th>Technologies</th>
    </tr>
    <tr>
      <td>main</td>
      <td align="center">
        <a target="_blank" href="https://nodejs.org"><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"></a>
        <a target="_blank" href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"></a>
      </td>
    </tr>
    <tr>
      <td>secondary</td>
      <td align="center">
        <a target="_blank" href="https://expressjs.com/pt-br/"><img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"></a>
      </td>
    </tr>
    <tr>
      <td>tests</td>
      <td align="center">
        <a target="_blank" href="https://jestjs.io/"><img src="https://img.shields.io/badge/jest-black?style=for-the-badge&logo=jest&logoColor=white"></a>
        <a target="_blank" href="https://github.com/ladjs/supertest/"><img src="https://img.shields.io/badge/supertest-yellow?style=for-the-badge&logo=supertest&logoColor=white"></a>
      </td>
    </tr>
    <tr>
      <td>commit</td>
      <td align="center">
        <a target="_blank" href="https://github.com/conventional-changelog/commitlint"><img src="https://img.shields.io/badge/commitlint-red?style=for-the-badge&logo=commitlint&logoColor=white"></a>
        <a target="_blank" href="https://github.com/commitizen/cz-cli"><img src="https://img.shields.io/badge/commitizen-pink?style=for-the-badge&logo=conventionalcommits&logoColor=white"></a><br/>
        <a target="_blank" href="https://github.com/zorgick/commitizen-emoji"><img src="https://img.shields.io/badge/🔥 commitizen emoji-green?style=for-the-badge&logo=commitizen emoji&logoColor=white"></a>
        <a target="_blank" href="https://github.com/typicode/husky"><img src="https://img.shields.io/badge/🐶husky-yellow?style=for-the-badge&logo=husky&logoColor=white"></a>
      </td>
    </tr>
    <tr>
      <td>code style</td>
      <td align="center">
        <a target="_blank" href="https://eslint.org/"><img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white"></a>
        <a target="_blank" href="https://prettier.io/"><img src="https://img.shields.io/badge/prettier-blue?style=for-the-badge&logo=prettier&logoColor=white"></a>
        <a target="_blank" href="https://editorconfig.org/"><img src="https://img.shields.io/badge/editorconfig-gray?style=for-the-badge&logo=editorconfig&logoColor=white"></a>
      </td>
    </tr>
  </table>
</div>

## :information_source: How to edit it

To clone this repository and make changes in the source code, you'll need [Git](https://git-scm.com) and [Nodejs](https://nodejs.org/en/).

```bash
# Go into the repository
$ cd express-server-typescript-boilerplate

# Install dependencies
$ npm install

# Run the code in development mode
$ npm run dev
```

As this project uses `husky`, make sure to run the following command after initialize git in the folder: `npx husky install`. Only after this command husky will be able to validate the commit messages.

To run the compiled typescript code, make sure to build it first, as it follows:

```bash
# Compile the ts code to a production environment
$ npm run build

# Run the code in production mode
$ npm run start
```

---

Made with ♥ by Lucas Vieira.

Get it touch: [github](https://github.com/lucasvtiradentes) | [linkedin](https://www.linkedin.com/in/lucasvtiradentes) | lucasvtiradentes@gmail.com
