import { DynMarkdown, getJson, MarkdownTable, RowContent } from "dyn-markdown";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { BoilerplateInfo, Icon, RepositoryInfo } from "./types";

const BOILERPLATES_FOLDER = 'boilerplates';
const BOILERPLATES_INFO_FILE = 'boilerplates.json';
const REPOSITORY_INFO_FILE = 'repo.json';

(() => {

  const boilerplatesJson = getJson(`./${BOILERPLATES_FOLDER}/${BOILERPLATES_INFO_FILE}`);
  const iconsJson = getJson("./update/icons.json");

  const boilerplatesMD = new DynMarkdown("./README.MD");
  const boilerplatesTable = getBoilerplatesTable(boilerplatesJson, iconsJson)

  boilerplatesMD.updateField("boilerplates", boilerplatesTable);
  boilerplatesMD.updateField("boilerplates_count", `NODEJS BOILERPLATES (${boilerplatesJson.length})`);

  boilerplatesMD.saveFile();
})();

function getBoilerplatesTable(boilerplatesJson: BoilerplateInfo[], iconsJson: Icon[]){
  const boilerplatesTable = new MarkdownTable();

  const header: RowContent[] = [
    {
      content: "category",
      width: 165
    },
    {
      content: "name",
      width: 300
    },
    {
      content: "app techs",
      width: 200
    }
  ];
  boilerplatesTable.setHeader(header);

  const getIconsStr = (arr: string[]) => {
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
  };

  boilerplatesJson.forEach((boilerplateItem) => {

    const boilerFolder = `${boilerplateItem.category}/${boilerplateItem.name}`
    const boilerPath = join(__dirname, '..', BOILERPLATES_FOLDER, boilerFolder)
    const boilerRepoInfo = join(boilerPath, REPOSITORY_INFO_FILE)

    if (existsSync(boilerRepoInfo)){
      const repoInfo: RepositoryInfo = getJson(boilerRepoInfo);

      boilerplatesTable.addBodyRow([
        {
          content: `\n      <a href="./${BOILERPLATES_FOLDER}/${boilerplateItem.category}">${boilerplateItem.category}</a>\n    `
        },
        {
          content: `\n      <a href="./${BOILERPLATES_FOLDER}/${boilerplateItem.category}/${boilerplateItem.name}">${boilerplateItem.name}</a><br/><p>${repoInfo.description}</p>\n    `
        },
        {
          content: getIconsStr(repoInfo.app_techs),
          align: "center"
        }
      ]);
    }

  });

  return boilerplatesTable.getTable("category")
}