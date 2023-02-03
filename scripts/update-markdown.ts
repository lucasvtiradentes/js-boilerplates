import { DynMarkdown, MarkdownTable, RowContent, getJson } from 'dyn-markdown'

type Boilerplate = {
  name: string;
  category: string;
  folder: string;
  version: string;
  description: string;
  lastUpdate: string;
}

const REPOSITORY_URL = `https://github.com/lucasvtiradentes/ts-boilerplates/tree/master/`
// boilerplates/react

const boilerplatesMD = new DynMarkdown("./README.MD")
const boilerplatesJson = getJson('./boilerplates/boilerplates.json')
const boilerplatesTable = new MarkdownTable()

const header: RowContent[] = [
  {
    content: 'category',
    width: 165
  },
  {
    content: 'name',
    width: 200
  },
  {
    content: 'description'
  },
  {
    content: 'last update',
    width: 130,
    align: 'center'
  }
]
boilerplatesTable.setHeader(header)

boilerplatesJson.forEach((boilerplateItem: Boilerplate) => {

  boilerplatesTable.addBodyRow([
    {
      content: `<a href="./boilerplates/${boilerplateItem.category}">${boilerplateItem.category}</a>`
    },
    {
      content: `<a href="./boilerplates/${boilerplateItem.category}/${boilerplateItem.name}">${boilerplateItem.name}</a>`
    },
    {
      content: boilerplateItem.description
    },
    {
      content: boilerplateItem.lastUpdate
    }
  ])
})

boilerplatesMD.updateField('boilerplates', boilerplatesTable.getTable('category'))
boilerplatesMD.saveFile()