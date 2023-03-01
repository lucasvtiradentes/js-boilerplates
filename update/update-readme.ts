import { DynMarkdown, MarkdownTable, RowContent, getJson } from 'dyn-markdown'

import { Boilerplate, Icon } from './types'

const boilerplatesJson = getJson('./boilerplates/boilerplates.json')
const iconsJson = getJson("./update/icons.json")

const boilerplatesMD = new DynMarkdown("./README.MD")
const boilerplatesTable = new MarkdownTable()

const header: RowContent[] = [
  {
    content: 'category',
    width: 165
  },
  {
    content: 'name',
    width: 300
  },
  {
    content: 'app techs',
    width: 200
  }
]
boilerplatesTable.setHeader(header)

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

boilerplatesJson.forEach((boilerplateItem: Boilerplate) => {

  boilerplatesTable.addBodyRow([
    {
      content: `\n      <a href="./boilerplates/${boilerplateItem.category}">${boilerplateItem.category}</a>\n    `
    },
    {
      content: `\n      <a href="./boilerplates/${boilerplateItem.category}/${boilerplateItem.name}">${boilerplateItem.name}</a><br/><p>${boilerplateItem.description}</p>\n    `
    },
    {
      content: getIconsStr(boilerplateItem.app_techs),
      align: 'center'
    }
  ])
})

boilerplatesMD.updateField('boilerplates', boilerplatesTable.getTable('category'))
boilerplatesMD.updateField('boilerplates_count', `NODEJS BOILERPLATES (${boilerplatesJson.length})`)

boilerplatesMD.saveFile()
