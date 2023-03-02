<a name="TOC"></a>

<h3 align="center">
<!-- <DYNFIELD:boilerplate_name> -->
  ELECTRON-BASIC
<!-- </DYNFIELD:boilerplate_name> -->
</h3>

<p align="center">
  <a href="#dart-features">Features</a> • <a href="#wrench-development">Development
</a> • <a href="#information_source-related">Related</a>
</p>

<!-- <DYNFIELD:boilerplate_image> -->
<div align="center"><img width="350"  src="./.github/images/app-img.png"></div>
<!-- </DYNFIELD:boilerplate_image> -->

<div align="center"><a href="#"><img src="./.github/images/divider.png" /></a></div>

## :dart: Features</a><a href="#TOC"><img align="right" src="./.github/images/up_arrow.png" width="22"></a>

### Main features
<!-- <DYNFIELD:boilerplate_app_features> -->
- [x] [electron](https://github.com/electron/electron) basic application;
- [x] tests-friendly with [jest](https://github.com/facebook/jest).
<!-- </DYNFIELD:boilerplate_app_features> -->

### Project features

<!-- <DYNFIELD:boilerplate_project_features> -->
- [x] easily test your api responses through a [server_routes.http](./tools/server_routes.http) and [rest client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) vscode extension;
- [x] everytime you need to make a commit, you can run the `commit` package.json script, in order to show all commitizen available options;
- [x] everytime you run `commit` script, the `precommit` script will run the [github-issues.ts](./scripts/github-issues.ts) file in order to display all available issues in the project remote github repository;
- [x] if you want to change the available commits types, you can edit the [gitmoji-setup.ts](./scripts/gitmoji-setup.ts) file and run the `script:gitmoji` packge.json script, which will produce the configs ready to replace in the [.czrc](./.czrc) and [commitlint.config.js](./commitlint.config.js) files.
<!-- </DYNFIELD:boilerplate_project_features> -->

<div align="center"><a href="#"><img src="./.github/images/divider.png" /></a></div>

## :wrench: Development<a href="#TOC"><img align="right" src="./.github/images/up_arrow.png" width="22"></a>

### How to use it?

To use this boilerplate you can either:

<!-- <DYNFIELD:boilerplate_project_download> -->
1. install [boilermanager](https://github.com/lucasvtiradentes/boilermanager) and select it from the boilerplate list everytime you want to use it (✅ recommended)
2. download this folder by clicking [this link](https://download-directory.github.io/?url=https://github.com/lucasvtiradentes/boilermanager-boilerplates/tree/master/boilerplates/desktop-app/electron-basic)
<!-- </DYNFIELD:boilerplate_project_download> -->

<!-- <DYNFIELD:boilerplate_available_commands> -->
### Available commands

After download this project in your computer, go to the project folder and run these commands:

```bash
# Install dependencies
$ npm install

# Run the project in development mode
$ npm run dev

# Compiles the code into production mode
$ npm run build

# Run the project in production mode
$ npm run start
```

<!-- </DYNFIELD:boilerplate_available_commands> -->

### Used technologies

This project uses the following technologies:

<!-- <DYNFIELD:boilerplate_technologies_table> -->
<div align="center">
<table>
  <tr>
    <th>Type</th>
    <th>Techs</th>
  </tr>
  <tr>
    <td width="150">Main</td>
    <td align="center" width="400">
      <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/node.js-339933?logo=nodedotjs&logoColor=white"></a>
      <a href="https://typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white"></a>
      <a href="https://www.electronjs.org/"><img src="https://img.shields.io/badge/electron-%2320232a.svg?logo=electron&logoColor=%2361DAFB"></a>
      <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"><img src="https://img.shields.io/badge/html-%23E34F26.svg?logo=html5&logoColor=white"></a>
      <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"><img src="https://img.shields.io/badge/css-%231572B6.svg?logo=css3&logoColor=white"></a>
      <a href="https://jestjs.io/"><img src="https://img.shields.io/badge/jest-black?logo=jest&logoColor=white"></a>
    </td>
  </tr>
  <tr>
    <td width="150">Project</td>
    <td align="center" width="400">
      <a href="https://code.visualstudio.com/"><img src="https://img.shields.io/badge/vscode-blue?logo=visualstudiocode&logoColor=white"></a>
      <a href="https://github.com/typicode/husky"><img src="https://img.shields.io/badge/🐶%20husky-yellow?logo=husky&logoColor=white"></a>
      <a href="https://github.com/conventional-changelog/commitlint"><img src="https://img.shields.io/badge/commitlint-red?logo=commitlint&logoColor=white"></a>
      <a href="https://github.com/commitizen/cz-cli"><img src="https://img.shields.io/badge/commitizen-pink?logo=conventionalcommits&logoColor=white"></a>
      <a href="https://editorconfig.org/"><img src="https://img.shields.io/badge/Editor%20Config-E0EFEF?logo=editorconfig&logoColor=000"></a>
      <a href="https://prettier.io/"><img src="https://img.shields.io/badge/prettier-blue?logo=prettier&logoColor=white"></a>
      <a href="https://eslint.org/"><img src="https://img.shields.io/badge/ESLint-4B3263?logo=eslint&logoColor=white"></a>
      <a href="https://github.com/okonet/lint-staged"><img src="https://img.shields.io/badge/🚫%20lint%20staged-yellow?&logoColor=white"></a>
    </td>
  </tr>
</table>
</div>
<!-- </DYNFIELD:boilerplate_technologies_table> -->

## :information_source: Related<a href="#TOC"><img align="right" src="./.github/images/up_arrow.png" width="22"></a>

<!-- <DYNFIELD:boilerplate_related> -->
- [electron documentation](https://www.electronjs.org/pt/).
<!-- </DYNFIELD:boilerplate_related> -->

<div align="center"><a href="#"><img src="./.github/images/divider.png" /></a></div>

<br>

<!-- <DYNFIELD:footer> -->

  <div align="center">
    <p>
      <a target="_blank" href="https://www.linkedin.com/in/lucasvtiradentes/"><img src="https://img.shields.io/badge/-linkedin-blue?logo=Linkedin&logoColor=white" alt="LinkedIn"></a>
      <a target="_blank" href="mailto:lucasvtiradentes@gmail.com"><img src="https://img.shields.io/badge/gmail-red?logo=gmail&logoColor=white" alt="Gmail"></a>
      <a target="_blank" href="https://discord.com/users/262326726892191744"><img src="https://img.shields.io/badge/discord-5865F2?logo=discord&logoColor=white" alt="Discord"></a>
      <a target="_blank" href="https://github.com/lucasvtiradentes/"><img src="https://img.shields.io/badge/github-gray?logo=github&logoColor=white" alt="Github"></a>
    </p>
    <p>Made with ❤️ by <b>Lucas Vieira</b></p>
    <p>👉 See also all <a href="https://github.com/lucasvtiradentes/lucasvtiradentes/blob/master/portfolio/PROJECTS.md#TOC">my projects</a></p>
    <p>👉 See also all <a href="https://github.com/lucasvtiradentes/my-tutorials/blob/master/README.md#TOC">my articles</a></p>
  </div>
<!-- </DYNFIELD:footer> -->

