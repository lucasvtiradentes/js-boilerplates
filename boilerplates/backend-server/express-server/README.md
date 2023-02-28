<a name="TOC"></a>

<h3 align="center">
  EXPRESS SERVER
</h3>

<div align="center">
  <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/made%20with-node-1f425f?logo=node.js&.svg" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://badgen.net/badge/icon/typescript?icon=typescript&label"></a>
  <a href="https://github.com/"><img src="https://badgen.net/badge/icon/github?icon=github&label"></a>
</div>

<p align="center">
  <a href="#dart-features">Features</a> • <a href="#warning-requirements">Requirements</a> • <a href="#bulb-usage">Usage</a> • <a href="#wrench-development">Development
</a> • <a href="#information_source-related">Related</a>
</p>

<a href="#"><img src="./.github/images/divider.png" /></a>

## :dart: Features</a><a href="#TOC"><img align="right" src="./.github/images/up_arrow.png" width="22"></a>

- [x] [express](https://github.com/expressjs/express) server backend;
- [x] [util function](./src/server/utils/show-all-server-endpoints.ts) where you can view all available routes;
- [x] [util function](./src/utils/handle-events.ts) to add graceful shutdown and error handling;
- [x] tests-friendly with [jest](https://github.com/facebook/jest) and [supertest](https://github.com/ladjs/supertest);
<br>

In addition, the project itself has these resources:
- [x] easily test your api responses through a [server_routes.http](./tools/server_routes.http) and [REST CLIENT](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) vscode extension;
- [x] commit linting with: [commitizen](https://github.com/commitizen/cz-cli), [commitlint](https://github.com/conventional-changelog/commitlint);
- [x] code formatting with: [prettier](https://github.com/prettier/prettier), [eslint](https://github.com/eslint/eslint), [lint estaged](https://github.com/okonet/lint-staged) and [editorconfig](https://editorconfig.org/);
- [x] git hooks to automate tasks with [husky](https://github.com/typicode/husky);
- [x] [utility script](./scripts/github-issues.ts) to retrieve all project remote github repository issues;
- [x] [utility script](./scripts/gitmoji-setup.ts) to setup easily gitmoji in [commitzen](https://github.com/commitizen/cz-cli) and [commitlint](https://github.com/conventional-changelog/commitlint).


## :warning: Requirements<a href="#TOC"><img align="right" src="./.github/images/up_arrow.png" width="22"></a>

In order to use this project in your computer, you need to have the following items:

- [nodejs](https://nodejs.org/en/): To actually run the project.

If you want to make changes to the source code, it is recommended to also install the following items:

- [git](https://git-scm.com/): To work with version controlling;
- [vscode](https://code.visualstudio.com/): Useful for editing the code. You can choose a similar editor as you wish.

## :bulb: Usage<a href="#TOC"><img align="right" src="./.github/images/up_arrow.png" width="22"></a>

### Installation

To use this boilerplate you can either:

1. install [boilermanager](https://github.com/ts-boilerplate-land/boilermanager) and select it from the boilerplate list everytime you want to use it (✅ recommended).
2. download this folder by clicking [this link](https://download-directory.github.io/?url=https://github.com/lucasvtiradentes/boilermanager-boilerplates/tree/master/backend-projects/express-react-boilerplate).
3. clone this repository with the following command:

```bash
# clone this repository
$ git clone #
```

### Tips and tricks

- everytime you need to make an commit, you can run the `commit` package.json script, in order to show commitzen available options;
- before making a commit, you can run `scripts:issues` package.json script to actually see all open issues in the repository.
- if you want to change the commits convention (which uses gitmoji), you can run the `scripts:gitmoji` packge.json script, and select the desired option;

## :wrench: Development<a href="#TOC"><img align="right" src="./.github/images/up_arrow.png" width="22"></a>

### Development setup

After download this project in your computer, go to the project folder and run these commands:

```bash
# Install dependencies
$ npm install

# Run in development mode:
$ npm run dev
```

### Used technologies

This project uses the following thechnologies:

<div align="center">
  <table>
    <tr>
      <th>Scope</th>
      <th>Subject</th>
      <th>Technologies</th>
    </tr>
    <tr>
      <td colspan="1">Project</td>
      <td>Main</td>
      <td align="center">
        <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/node.js-339933?logo=nodedotjs&logoColor=white"></a>
        <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-007ACC?logo=typescript&logoColor=white"></a>
        <a target="_blank" href="https://expressjs.com/pt-br/"><img src="https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB"></a>
      </td>
    </tr>
    <tr>
      <td rowspan="4">Setup</td>
      <td>Code linting</td>
      <td align="center">
        <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/prettier-1A2C34?logo=prettier&logoColor=F7BA3E"></a>
        <a href="https://github.com/eslint/eslint"><img src="https://img.shields.io/badge/eslint-3A33D1?logo=eslint&logoColor=white"></a>
      </td>
    </tr>
    <tr>
      <!-- <td rowspan="2">Setup</td> -->
      <td>Commit linting</td>
      <td align="center">
      <a target="_blank" href="https://github.com/conventional-changelog/commitlint"><img src="https://img.shields.io/badge/commitlint-red?logo=commitlint&logoColor=white"></a>
      <a target="_blank" href="https://github.com/commitizen/cz-cli"><img src="https://img.shields.io/badge/commitizen-pink?logo=conventionalcommits&logoColor=white"></a>
      <a href="https://gitmoji.dev"><img
    src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square"
    alt="Gitmoji"/></a>
      </td>
    </tr>
    <tr>
      <!-- <td rowspan="2">Setup</td> -->
      <td>Tests</td>
      <td align="center">
        <a target="_blank" href="https://jestjs.io/"><img src="https://img.shields.io/badge/jest-black?logo=jest&logoColor=white"></a>
        <a target="_blank" href="https://github.com/ladjs/supertest/"><img src="https://img.shields.io/badge/supertest-yellow?logo=supertest&logoColor=white"></a>
      </td>
    </tr>
    <tr>
      <!-- <td rowspan="2">Setup</td> -->
      <td>Other</td>
      <td align="center">
        <a href="https://editorconfig.org/"><img src="https://img.shields.io/badge/editor%20Config-E0EFEF?logo=editorconfig&logoColor=000"></a>
        <a target="_blank" href="https://github.com/typicode/husky"><img src="https://img.shields.io/badge/🐶%20husky-green?logo=husky&logoColor=white"></a>
        <a target="_blank" href="https://github.com/okonet/lint-staged"><img src="https://img.shields.io/badge/🚫%20lint%20staged-yellow?&logoColor=white"></a>
      </td>
    </tr>
  </table>
</div>

## :information_source: Related<a href="#TOC"><img align="right" src="./.github/images/up_arrow.png" width="22"></a>

- [Express documentation](https://expressjs.com/pt-br/)
- [How to graceful shutdown a nodejs express server](https://www.youtube.com/watch?v=Z82mZV2Ye38)

<a href="#"><img src="./.github/images/divider.png" /></a>

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
