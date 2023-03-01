export type Command = {
  description: string;
  command: string;
}

export type RepoInfo = {
  description: string
  app_features: string[]
  project_features: string[]
  commands: Command[]
  app_techs: string[]
  project_techs: string[]
  resources: string[]
}

type AditionalInfo = {
  name: string
  category: string;
  folder: string;
  lastUpdate: string;
}

export type Boilerplate = RepoInfo & AditionalInfo

export type Icon = {
  name: string;
  image: string;
  default_link: string;
}
