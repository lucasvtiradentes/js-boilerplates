export type BoilerplateCommand = {
  description: string;
  command: string;
}
export type BoilerplateImage = {
  src: string;
  width: string;
  height: string;
}

export type RepoInfo = {
  description: string
  image: BoilerplateImage
  app_features: string[]
  project_features: string[]
  commands: BoilerplateCommand[]
  resources: string[]
  app_techs: string[]
  project_techs: string[]
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
