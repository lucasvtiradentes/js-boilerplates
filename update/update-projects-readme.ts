import { DynMarkdown, MarkdownTable, RowContent, getJson } from 'dyn-markdown'
import { existsSync } from 'node:fs'
import { join } from 'node:path'

import { Boilerplate, Icon, Command } from './types'

const GITHUB_USER = "https://github.com/lucasvtiradentes"
const BOILERPLATES_LINK = `${GITHUB_USER}/ts-boilerplates`
const BOILERMANAGER_LINK = `${GITHUB_USER}/boilermanager`

const boilerplatesJson = getJson('./boilerplates/boilerplates.json')
const iconsJson = getJson("./update/icons.json")

const getFeaturesStr = (arr: string[]) => arr.map((item, index) => `- [x] ${item}` + (index === arr.length - 1 ? "." : ";")).join('\n')
const getResourcesStr = (arr: string[]) => arr.map((item, index) => `- ${item}` + (index === arr.length - 1 ? "." : ";")).join('\n')

const getCommandsStr = (commands: Command[]) => {

  if (commands.length === 0){return ''}

  const finalStr = `### Available commands\n\nAfter download this project in your computer, go to the project folder and run these commands:\n\n`
  const cmds = commands.map(item => `# ${item.description}\n\$ ${item.command}\n`).join('\n')
  const commandsStr = '\`\`\`bash\n' + cmds + '\`\`\`\n'

  return finalStr + commandsStr
}

const getIconsStr = (arr: string[]) => {

  const curIcons = arr.filter(item => {
    const foundIcon = iconsJson.find((ic: Icon) => ic.name === item)
    if (!foundIcon){console.log(`please add ${item} icon on icons.json`)}
    return foundIcon
  }).map((item) => {
    const foundIcon: Icon = iconsJson.find((ic: Icon) => ic.name === item)
    return `      <a href="${foundIcon.default_link}"><img src="${foundIcon.image}"></a>`
  }).join('\n')

  return `\n${curIcons}\n    `
}

const getTechTable = (boiler: Boilerplate) => {
  const techTable = new MarkdownTable()
  techTable.setHeader([
    {
      content: 'Type'
    },
    {
      content: 'Techs'
    }
  ])

  techTable.addBodyRow([
    {
      content: 'Main',
      width: 150
    },
    {
      content: getIconsStr(boiler.app_techs),
      align: 'center',
      width: 400
    }
  ])

  techTable.addBodyRow([
    {
      content: 'Project',
      width: 150
    },
    {
      content: getIconsStr(boiler.project_techs),
      align: 'center',
      width: 400
    }
  ])

  return `<div align="center">\n${techTable.getTable()}\n</div>`

}

boilerplatesJson.forEach((boiler: Boilerplate) => {
  const boilerFolder = join(__dirname, '..', 'boilerplates', boiler.folder)
  const boilerReadme = join(boilerFolder, 'README.md')

  if (existsSync(boilerReadme)){
    const boilerMd = new DynMarkdown(boilerReadme)

    boilerMd.updateField('boilerplate_name', boiler.name.toUpperCase())
    boilerMd.updateField('boilerplate_app_features', getFeaturesStr(boiler.app_features))
    boilerMd.updateField('boilerplate_project_features', getFeaturesStr(boiler.project_features))
    boilerMd.updateField('boilerplate_project_download', `1. install [boilermanager](${BOILERMANAGER_LINK}) and select it from the boilerplate list everytime you want to use it (✅ recommended)\n2. download this folder by clicking [this link](https://download-directory.github.io/?url=${BOILERPLATES_LINK}/tree/master/boilerplates${boiler.folder})`)
    boilerMd.updateField('boilerplate_available_commands', getCommandsStr(boiler.commands))
    boilerMd.updateField('boilerplate_technologies_table', getTechTable(boiler))
    boilerMd.updateField('boilerplate_related', getResourcesStr(boiler.resources))
    boilerMd.updateField('footer', getFooterStr())

    boilerMd.saveFile()
  }

})

function getFooterStr(){
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
</div>`
}

// const boilerplatesMD = new DynMarkdown("./README.MD")
// const boilerplatesTable = new MarkdownTable()

// const header: RowContent[] = [
//   {
//     content: 'category',
//     width: 165
//   },
//   {
//     content: 'name',
//     width: 300
//   },
//   {
//     content: 'app techs',
//     width: 200
//   }
// ]
// boilerplatesTable.setHeader(header)

// const getIconsStr = (arr: string[]) => {

//   const curIcons = arr.filter(item => {
//     const foundIcon = iconsJson.find((ic: Icon) => ic.name === item)
//     if (!foundIcon){console.log(`please add ${item} icon on icons.json`)}
//     return foundIcon
//   }).map((item) => {
//     const foundIcon: Icon = iconsJson.find((ic: Icon) => ic.name === item)
//     return `      <a href="${foundIcon.default_link}"><img src="${foundIcon.image}"></a>`
//   }).join('\n')

//   return `\n${curIcons}\n    `
// }
// boilerplatesJson.forEach((boilerplateItem: Boilerplate) => {

//   boilerplatesTable.addBodyRow([
//     {
//       content: `\n      <a href="./boilerplates/${boilerplateItem.category}">${boilerplateItem.category}</a>\n    `
//     },
//     {
//       content: `\n      <a href="./boilerplates/${boilerplateItem.category}/${boilerplateItem.name}">${boilerplateItem.name}</a><br/><p>${boilerplateItem.description}</p>\n    `
//     },
//     {
//       content: getIconsStr(boilerplateItem.app_techs),
//       align: 'center'
//     }
//   ])
// })

// boilerplatesMD.updateField('boilerplates', boilerplatesTable.getTable('category'))
// boilerplatesMD.updateField('boilerplates_count', `NODEJS BOILERPLATES (${boilerplatesJson.length})`)

// boilerplatesMD.saveFile()
