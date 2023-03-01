<a name="TOC"></a>

<h3 align="center">
<!-- <DYNFIELD:boilerplate_name> -->
  AWS-LAMBDA-SERVERLESS
<!-- </DYNFIELD:boilerplate_name> -->
</h3>

<p align="center">
  <a href="#dart-features">Features</a> • <a href="#wrench-development">Development
</a> • <a href="#information_source-related">Related</a>
</p>

<a href="#"><img src="./.github/images/divider.png" /></a>

## :dart: Features</a><a href="#TOC"><img align="right" src="./.github/images/up_arrow.png" width="22"></a>

### Main features
<!-- <DYNFIELD:boilerplate_app_features> -->
- [x] uses serverless framework to handle aws lambda
- [x] uses typescript
- [x] automatically deploy in every github push
<!-- </DYNFIELD:boilerplate_app_features> -->

### Project features

<!-- <DYNFIELD:boilerplate_project_features> -->
- [x] [utility script](./scripts/github-issues.ts) to retrieve all project remote github repository issues
- [x] [utility script](./scripts/gitmoji-setup.ts) to setup easily gitmoji in [commitzen](https://github.com/commitizen/cz-cli) and [commitlint](https://github.com/conventional-changelog/commitlint).
<!-- </DYNFIELD:boilerplate_project_features> -->

## :wrench: Development<a href="#TOC"><img align="right" src="./.github/images/up_arrow.png" width="22"></a>

### How to use it?

To use this boilerplate you can either:

<!-- <DYNFIELD:boilerplate_project_download> -->
1. install [boilermanager](https://github.com/lucasvtiradentes/boilermanager) and select it from the boilerplate list everytime you want to use it (✅ recommended)
2. download this folder by clicking [this link](https://download-directory.github.io/?url=https://github.com/lucasvtiradentes/ts-boilerplates/tree/master/boilerplates/serverless-functions/aws-lambda-serverless)
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

This project uses the following thechnologies:

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
      <a href="https://aws.com/"><img src="https://img.shields.io/badge/aws-yellow?logo=amazonaws&logoColor=white"></a>
      <a href="https://serverless.com/"><img src="https://img.shields.io/badge/serverless-red?logo=serverless&logoColor=white"></a>
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

### Tips and tricks

- everytime you need to make an commit, you can run the `commit` package.json script, in order to show commitzen available options;
- before making a commit, you can run `script:issues` package.json script to actually see all open issues in the repository;
- if you want to change the commits convention (which uses gitmoji), you can run the `script:gitmoji` packge.json script, and select the desired option.

## :information_source: Related<a href="#TOC"><img align="right" src="./.github/images/up_arrow.png" width="22"></a>

<!-- <DYNFIELD:boilerplate_related> -->
- [Criando uma API com Serverless e Typescript na AWS](https://www.youtube.com/watch?v=i8F2gBEbH0o)
- [Deploying to AWS Lambda with Serverless + GitHub Actions (Modern CI/CD) | Serverless Saturday](https://www.youtube.com/watch?v=oFYFqOzJdqY)
- [How to Build a Basic App with TypeScript / Node.js + Deploy it to the Cloud (AWS Lambda) in 15 min](https://www.youtube.com/watch?v=NDOh2qEmSe8)
- [Install serverless](https://www.serverless.com/framework/docs/getting-started)
<!-- </DYNFIELD:boilerplate_related> -->

<a href="#"><img src="./.github/images/divider.png" /></a>

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

