<a name="TOC"></a>

<H3 align="center">
  NEXTJS TAILWIND WITH AUTHENTICATION BOILERPLATE
</H1>

<div align="center">
  <a href=""><img src="https://img.shields.io/badge/made%20with-node-1f425f?logo=node.js&.svg" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://badgen.net/badge/icon/typescript?icon=typescript&label"></a>
  <a href="https://git-scm.com/"><img src="https://badgen.net/badge/icon/git?icon=git&label"></a>
  <a href="https://github.com/"><img src="https://badgen.net/badge/icon/github?icon=github&label"></a>
  <br>
  <a href="https://github.com/commitizen/cz-cli"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square" alt="commitzen" /></a>
  <a href="https://gitmoji.dev"><img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji" /></a>
</div>

<p align="center">
  <a href="#dart-features">Features</a> • <a href="#warning-requirements">Requirements</a> • <a href="#bulb-usage">Usage</a> • <a href="#wrench-development">Development</a> • <a href="#family-community">Community</a>
</p>

<details>
  <summary align="center"><span>see <b>table of content</b></span></summary>
  <p align="center">
    <ul>
      <li><a href="#dart-features">Features</a></li>
      <li><a href="#warning-requirements">Requirements</a></li>
      <li>
        <a href="#bulb-usage">Usage</a>
        <ul>
          <li><a href="#installation">Installation</a></li>
          <li><a href="#tips-and-tricks">Tips and tricks</a></li>
        </ul>
      </li>
      <li>
        <a href="#wrench-development">Development</a>
        <ul>
          <li><a href="#development-setup">Development setup</a></li>
          <li><a href="#folders-and-files-structure">Folders and files structure</a></li>
          <li><a href="#used-technologies">Used technologies</a></li>
          <li><a href="#code-style">Code style</a></li>
          <li><a href="#commit-messages-style">Commit messages style</a></li>
          <li><a href="#tests">Tests</a></li>
        </ul>
      </li>
      <li>
        <a href="#family-community">Community</a>
        <ul>
          <li><a href="#contributing">Contributing</a></li>
          <li><a href="#feedback">Feedback</a></li>
          <li><a href="#acknowledgements">Acknowledgements</a></li>
        </ul>
      </li>
    </ul>
  </p>
</details>

<a href="#"><img src="./images/divider.png" /></a>

## :trumpet: Overview<a href="#TOC"><img align="right" src="./images/up_arrow.png" width="22"></a>

This is a basic nodejs template to start your projects with.

## :dart: Features<a href="#TOC"><img align="right" src="./images/up_arrow.png" width="22"></a>

&nbsp;&nbsp;&nbsp;✔️ code formating and liting with **prettier**, **eslint** and **lintstaged**;<br>
&nbsp;&nbsp;&nbsp;✔️ commits linting setted up with **commitlint**, **commitzen** and **gitmoji** convention;<br>
&nbsp;&nbsp;&nbsp;✔️ useful git hooks setted up with **husky**;<br>
&nbsp;&nbsp;&nbsp;✔️ github deployment ready with ci-cd, docs and issue and pr templates;<br>
&nbsp;&nbsp;&nbsp;✔️ tests setted up with **jest**;<br>
&nbsp;&nbsp;&nbsp;✔️ useful scripts to help you out in your project developement.<br>

## :warning: Requirements<a href="#TOC"><img align="right" src="./images/up_arrow.png" width="22"></a>

In order to use this project in your computer, you need to have the following items:

- [nodejs](https://nodejs.org/en/): To actually run the project.

If you want to make changes to the source code, it is recommended to also install the following items:

- [git](https://git-scm.com/): To work with version controlling;
- [vscode](https://code.visualstudio.com/): Useful for editing the code. You can choose a similar editor as you wish.

## :bulb: Usage<a href="#TOC"><img align="right" src="./images/up_arrow.png" width="22"></a>

### Installation

To use this boilerplate you can either:

1. install [boilermanager](https://github.com/ts-boilerplate-land/boilermanager) and select it from the boilerplate list everytime you want to use it (✅ recommended).
2. download this folder by clicking [this link](https://download-directory.github.io/?url=https://github.com/lucasvtiradentes/boilermanager-boilerplates/tree/master/backend-projects/express-react-boilerplate).

### Tips and tricks

- if you want to change the commits convention (which uses gitmoji), you can run the `scripts:commits` packge.json script, and select the desired option;
- everytime you need to make an commit, you can run the `commit` package.json script, in orther to show commitzen available options;
- before making a commit, you can actually run `scripts:issues` package.json script to see all open issues in the repository.

<a href="#"><img src="./images/divider.png" /></a>

## :wrench: Development<a href="#TOC"><img align="right" src="./images/up_arrow.png" width="22"></a>

### Development setup

After download it, go to the project folder and run these commands:

```bash
# Install dependencies
$ npm install

# Run the typescript code in development mode
$ npm run dev
```


### Folders and files structure

The project has the following folder strucure:

```plain
|-- .github         # contains CI-CD workflows, github templates, DOCS and images.
|-- .husky          # contains git hooks configurations files.
|-- dist            # (dev only) build folder
|-- node_modules    # (dev only) dependencies folder
|-- scripts         # scripts to help development
|-- src             # application source code
```

and the filles present in root folder are the following:

```plain
# IGNORED FILES
.eslintignore   # eslint ignored items
.gitignore      # git ignored items
.prettierignore # prettier ignored items

# COMMIT LINTING
.commitlintrc   # commitlint settings
.czrc           # commitizen settings

# SOURCE CODE LINTING
.eslintrc       # eslint settings
.prettierrc     # prettier settings
.editorconfig   # editorconfig settings
.lintstagedrc   # lintstaged settings

# OTHER FILES
jest.config.js  # jest test settings
.package.json   # project specifications
.tsconfig.json  # typescript settings
```

### Technologies

<div align="center">
  <table>
    <tr>
      <th>Scope</th>
      <th>Subject</th>
      <th>Technologies</th>
    </tr>
    <tr>
      <td rowspan="1">Main</td>
      <td>Main</td>
      <td align="center">
        <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white"></a>
        <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white"></a>
      </td>
    </tr>
    <tr>
      <td rowspan="3">Setup</td>
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
      <td>Other</td>
      <td align="center">
        <a href="https://editorconfig.org/"><img src="https://img.shields.io/badge/Editor%20Config-E0EFEF?logo=editorconfig&logoColor=000"></a>
        <a target="_blank" href="https://github.com/typicode/husky"><img src="https://img.shields.io/badge/🐶%20husky-green?logo=husky&logoColor=white"></a>
        <a target="_blank" href="https://github.com/okonet/lint-staged"><img src="https://img.shields.io/badge/🚫%20lint%20staged-yellow?&logoColor=white"></a>
      </td>
    </tr>
  </table>
</div>

And also this project used the following packages:

```plain
# DEV DEPENDENCIES (skiped @types/*)

- @commitlint/cli                  # commitlint cli tool
- @jest/globals                    # types for jest;
- @typescript-eslint/eslint-plugin # eslint typescript plugin;
- @typescript-eslint/parser        # eslint typescript plugin;
- commitizen                       # commit messages using pre-set of options;
- commitizen-emoji                 # preset of options to commitzen using gitmoji;
- commitlint                       # commit messages validation
- commitlint-config-gitmoji        # preset of settings to commitlint using gitmoji;
- eslint                           # linting source code;
- eslint-config-prettier           # integration between eslint and prettier;
- eslint-plugin-prettier           # integration between eslint and prettier;
- husky                            # automation of git hooks;
- jest                             # test library
- lint-staged                      # lint only changed files, instead of the entire project;
- prettier                         # code formatting;
- rimraf                           # deletes folder cross-platform tool
- ts-jest                          # typescript runner for tests
- ts-node                          # typescript runner;
- typescript                       # javascript superset tool;
```

### Code style

There's not a named convention used in this project (like [airbnb](https://github.com/airbnb/javascript), for instance), instead we specified he settings we like the most in prettier. You can check these settings in the [.prettierrc](../.prettierrc) file.

### Commit messages style

This project uses the best of two main conventions to commit messages validation:

- [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/): it's powerfull messages structure;
- [gitmoji](https://gitmoji.dev/): it's beutiful and visual way to display commits.

So a typically valid commit message has this pattern:

> 🔧 config: add lint-staged to the project (#2)

Also, in order to have this integration working correctly, I buld a [script](../scripts/update-commits-configs.ts) that we can specify only allowed types and it take care to update both commitizen and commitlint settings.

<a href="#"><img src="./images/divider.png" /></a>

## :family: Community<a href="#TOC"><img align="right" src="./images/up_arrow.png" width="22"></a>

## Contributing

If you are a typescript developer, we would kind and happy accept your help:

- The best way to get started is to select any issue from the [`good-first-issue` label](https://github.com/lucasvtiradentes/boilermanager-boilerplates/labels/good%20first%20issue);
- If you would like to contribute, please review our [Contributing Guide](./CONTRIBUTING.md) for all relevant details.

Another ways to positivily impact this project is to:

- **:star: Star this repository**: my goal is to impact the maximum number of developers around the world;
- ✍️ **Fix english mistakes** I might have made in this project, may it be in the DOCS or even in the code (I'm a portuguese natural speaker);
- [:heart: Say thanks](https://saythanks.io/to/lucasvtiradentes): kind words have a huge impact in anyone's life;
- [💰 Donate](https://github.com/lucasvtiradentes): if you want to support my work even more, consider make a small donation. I would be really happy!

## Feedback

Any questions or suggestions? You are welcome to discuss it on:

- [Github discussions](https://github.com/ts-boilerplate-land/boilermanager/discussions)
- [Gitter](https://gitter.im/ts_boilerplate_land/community)
- [Email](mailto:lucasvtiradentes@gmail.com)

## Acknowledgements

This project is an idea of [@lucasvtiradentes](https://github.com/lucasvtiradentes) to `return some value to the world` after years of consuming a lot of useful tools provided by this `amazing open source community`.
