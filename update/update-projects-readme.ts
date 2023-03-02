import { DynMarkdown, getJson, MarkdownTable } from "dyn-markdown";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { BoilerplateInfo, Icon, RepositoryInfo } from "./types";

const GITHUB_USER = "https://github.com/lucasvtiradentes";
const BOILERPLATES_LINK = `${GITHUB_USER}/boilermanager-boilerplates`;
const BOILERMANAGER_LINK = `${GITHUB_USER}/boilermanager`;
const BOILERPLATES_FOLDER = 'boilerplates';
const BOILERPLATES_INFO_FILE = 'boilerplates.json';
const REPOSITORY_INFO_FILE = 'repo.json';

(() => {
  const boilerplatesJson = getJson(`./${BOILERPLATES_FOLDER}/${BOILERPLATES_INFO_FILE}`);
  const iconsJson = getJson("./update/icons.json");

  boilerplatesJson.forEach((boiler: BoilerplateInfo) => {

    const boilerFolder = `${boiler.category}/${boiler.name}`
    const boilerPath = join(__dirname, '..', BOILERPLATES_FOLDER, boilerFolder)
    const boilerReadme = join(boilerPath, 'README.md')
    const boilerRepoInfo = join(boilerPath, REPOSITORY_INFO_FILE)

    if (existsSync(boilerRepoInfo) && existsSync(boilerReadme)){
      const boilerMd = new DynMarkdown(boilerReadme)
      const repoInfo: RepositoryInfo = getJson(boilerRepoInfo);

      boilerMd.updateField('boilerplate_name', boiler.name.toUpperCase())
      boilerMd.updateField('boilerplate_image', getBoilerImage(repoInfo.image))
      boilerMd.updateField('boilerplate_app_features', getFeaturesStr(repoInfo.app_features))
      boilerMd.updateField('boilerplate_project_features', getFeaturesStr(repoInfo.project_features))
      boilerMd.updateField('boilerplate_project_download', `1. install [boilermanager](${BOILERMANAGER_LINK}) and select it from the boilerplate list everytime you want to use it (✅ recommended)\n2. download this folder by clicking [this link](https://download-directory.github.io/?url=${BOILERPLATES_LINK}/tree/master/${BOILERPLATES_FOLDER}/${boilerFolder})`)
      boilerMd.updateField('boilerplate_available_commands', getCommandsStr(repoInfo.commands))
      boilerMd.updateField('boilerplate_technologies_table', getTechTable(repoInfo, iconsJson))
      boilerMd.updateField('boilerplate_related', getResourcesStr(repoInfo.resources))
      boilerMd.updateField('footer', getFooterStr())

      boilerMd.saveFile()
    }

  })

  return;

})();

function getFeaturesStr(arr: string[]) {
  return arr
    .map(
      (item, index) => `- [x] ${item}` + (index === arr.length - 1 ? "." : ";")
    )
    .join("\n");
}

function getResourcesStr(arr: string[]) {
  return arr
    .map((item, index) => `- ${item}` + (index === arr.length - 1 ? "." : ";"))
    .join("\n");
}

function getCommandsStr(commands: RepositoryInfo['commands']) {
  if (commands.length === 0) {
    return "";
  }

  const finalStr = `### Available commands\n\nAfter download this project in your computer, go to the project folder and run these commands:\n\n`;
  const cmds = commands
    .map((item) => `# ${item.description}\n\$ ${item.command}\n`)
    .join("\n");
  const commandsStr = "```bash\n" + cmds + "```\n";

  return finalStr + commandsStr;
}

function getIconsStr(arr: string[], iconsJson: Icon[]) {
  const curIcons = arr
    .filter((item) => {
      const foundIcon = iconsJson.find((ic: Icon) => ic.name === item);
      if (!foundIcon) {
        console.log(`please add ${item} icon on icons.json`);
      }
      return foundIcon;
    })
    .map((item) => {
      const foundIcon = iconsJson.find((ic: Icon) => ic.name === item);
      return foundIcon ? `      <a href="${foundIcon.default_link}"><img src="${foundIcon.image}"></a>` : '';
    })
    .join("\n");

  return `\n${curIcons}\n    `;
}

function getTechTable(repoInfo: RepositoryInfo, iconsJson: Icon[]) {
  const techTable = new MarkdownTable();
  techTable.setHeader([
    {
      content: "Type"
    },
    {
      content: "Techs"
    }
  ]);

  techTable.addBodyRow([
    {
      content: "Main",
      width: 150
    },
    {
      content: getIconsStr(repoInfo.app_techs, iconsJson),
      align: "center",
      width: 400
    }
  ]);

  techTable.addBodyRow([
    {
      content: "Project",
      width: 150
    },
    {
      content: getIconsStr(repoInfo.project_techs, iconsJson),
      align: "center",
      width: 400
    }
  ]);

  return `<div align="center">\n${techTable.getTable()}\n</div>`;
}

function getBoilerImage(image: RepositoryInfo['image']) {
  return image.src === ""
    ? ""
    : `<div align="center"><img ${
        image.width !== "" ? `width="${image.width}"` : ""
      } ${image.height !== "" ? `height="${image.height}"` : ""} src="${
        image.src
      }"></div>`;
}

function getFooterStr() {
  return `
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
  </div>`;
}
