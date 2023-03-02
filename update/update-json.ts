import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs"
import { platform } from 'node:os'
import { join } from "node:path"
import { Boilerplate } from './types'

const REPO_INFO_FILE = "repo.json"
const OS_DIVIDER = platform() === 'win32' ? '\\' : '/'
const FINAL_DIVIDER = '/'
const BOILERPLATES_FOLDER = join(__dirname, '..', 'boilerplates')
const BOILERPLATES_JSON = join(__dirname, '..', 'boilerplates', 'boilerplates.json')
const IGNORED_FOLDERS = [
  ".git",
  ".github",
  ".husky",
  ".vscode",
  "ignore",
  "node_modules",
  "dist",
  "build"
];

(() => {
  const validBoilerplates = getAllValidBoilerplatesFolders()
  const allUpdatedValues = getUpdatedBoilerplatesInfo(validBoilerplates)
  writeFileSync(BOILERPLATES_JSON, JSON.stringify(allUpdatedValues, null, 2));
  console.log("Updated boilerplates json content!")
})()

/* ========================================================================== */

function getAllValidBoilerplatesFolders(){
  const allSubfiles = getAllFolderSubfiles(BOILERPLATES_FOLDER, IGNORED_FOLDERS);
  const allBoilerplates = allSubfiles.filter((item: string) => item.split(OS_DIVIDER).length === 4 && item.search(REPO_INFO_FILE) > -1) // "package.json"
  return allBoilerplates
}

function getUpdatedBoilerplatesInfo(allBoilerplates: string[]){

  const allUpdatedValues = allBoilerplates.reduce((acc, value) => {
    const boilerplateInfoFile = join(BOILERPLATES_FOLDER, value)

    const boilerplateCompletePath = value.replace(`${OS_DIVIDER}${REPO_INFO_FILE}`, '').replace(new RegExp(OS_DIVIDER, "g"), FINAL_DIVIDER)
    const boilerplateCategory = boilerplateCompletePath.split(FINAL_DIVIDER)[1]
    const boilerplateName = boilerplateCompletePath.replace(boilerplateCategory, '').replace(new RegExp(OS_DIVIDER, "g"), '')
    const infoFileStats = statSync(boilerplateInfoFile)
    const infoFileContent = JSON.parse(readFileSync(boilerplateInfoFile, 'utf8'));

    const curValue = {
      name: boilerplateName,
      image: infoFileContent.image,
      description: infoFileContent.description,
      category: boilerplateCategory,
      folder: boilerplateCompletePath,
      lastUpdate: (infoFileStats.mtime.toISOString().split("T")[0]),
      app_features: infoFileContent.app_features,
      project_features: infoFileContent.project_features,
      commands: infoFileContent.commands,
      options: infoFileContent.options,
      resources: infoFileContent.resources,
      app_techs: infoFileContent.app_techs,
      project_techs: infoFileContent.project_techs
    }

    return [...acc, curValue]
  }, [] as Boilerplate[])

  return allUpdatedValues
}

function getAllFolderSubfiles(originalDir: string, ignoredFolders?: string[]) {

  function walk(dir: string): string[] {
    const subFiles = readdirSync(dir, {withFileTypes: true}).flatMap((file) => {
      if (!file.isDirectory()) {
        return join(dir, file.name);
      }
      const isIgnoredFolder = ignoredFolders ? ignoredFolders.find((item) => file.name.search(item) > -1) : false;
      return isIgnoredFolder ? "" : walk(join(dir, file.name));
    });
    return subFiles;
  }

  const files = walk(originalDir).filter((item) => item !== "").map((item) => item.replace(originalDir, ""));
  return files;
}
