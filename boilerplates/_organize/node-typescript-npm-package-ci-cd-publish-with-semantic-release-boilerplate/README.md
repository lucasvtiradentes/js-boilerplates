<h1 align="center">
    node typescript npm package ci cd publish with semantic version
</h1>

<p align="center">
  <a href="#information_source-description">Description</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#information_source-features">Features</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-edit-it">How to edit it?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-publish-it">How to publish it?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use-it">How to use it?</a>
</p>

## :information_source: Description

This is a boilerplate to automatically deploy a npm package through github actions and semantic release.

## :information_source: Features

- [x] automatically deploy a npm package;
- [x] automatically generate tags, releases;
- [x] automatically project versioning.

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
      </td>
    </tr>
    <tr>
      <td>secondary</td>
      <td align="center">
        <a target="_blank" href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"></a>
      </td>
    </tr>
    <tr>
      <td>dev tools</td>
      <td align="center">
        <a target="_blank" href="https://editorconfig.org/"><img src="https://img.shields.io/badge/editorconfig-gray?style=for-the-badge&logo=editorconfig&logoColor=white"></a>
        <a target="_blank" href="https://eslint.org/"><img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white"></a>
        <a target="_blank" href="https://eslint.org/"><img src="https://img.shields.io/badge/prettier-blue?style=for-the-badge&logo=prettier&logoColor=white"></a>
        <a target="_blank" href="https://github.com/typicode/husky"><img src="https://img.shields.io/badge/🐶husky-yellow?style=for-the-badge&logo=husky&logoColor=white"></a>
        <a target="_blank" href="https://github.com/conventional-changelog/commitlint"><img src="https://img.shields.io/badge/commitlint-red?style=for-the-badge&logo=commitlint&logoColor=white"></a>
        <a target="_blank" href="https://github.com/commitizen/cz-cli"><img src="https://img.shields.io/badge/commitizen-pink?style=for-the-badge&logo=conventionalcommits&logoColor=white"></a>
      </td>
    </tr>
  </table>
</div>

## :information_source: How to edit it

To clone this repository and make changes in the source code, you'll need [Git](https://git-scm.com) and [Nodejs](https://nodejs.org/en/).

```bash
# Install dependencies
$ npm install

# Run the code in devlopment mode
$ npm run dev
```

As this project uses `husky`, make sure to run the following command after initialize git in the folder: `npx husky install`. Only after this command husky will be able to check commit messages validation.

## :information_source: How to publish it

The first step is to change the package `name` and the `repository` keys in the `package.json` file to the name you want the package to be.

Second, go to NPM and create a `TOKEN` for automation, as its shown in the following link:

- [How to generate NPM token tutorial](https://docs.npmjs.com/creating-and-viewing-access-tokens)

Third, create a github repository and setup a github secret containing the `NPM TOKEN` in order to github publish it directly.

- [How to create github secret tutorial](https://github.com/Azure/actions-workflow-samples/blob/master/assets/create-secrets-for-GitHub-workflows.md)
- Name it as `NPM_TOKEN`

After, edit the code and make the changes you want to and push it to the github as it follows:

```bash
# Add the files to the commit
$ git add .

# Write a commit message
$ git commit -m "your commit message"

# Pushes the code into github
$ git push origin master
```

Finally, the github actions will take place and publish the package.

## :information_source: How to use it

To use it install it as a npm normal package:

```bash
# Install the package
$ npm install your_package_name
```

and use it in your js/ts files, as it is shown in the examples folder files.

---

Made with ♥ by Lucas Vieira.

Get it touch: [github](https://github.com/lucasvtiradentes) | [linkedin](https://www.linkedin.com/in/lucasvtiradentes) | lucasvtiradentes@gmail.com
