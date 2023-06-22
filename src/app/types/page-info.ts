export type Tech = {
  name: string
  techIcon: {
    url: string
  }
}

export type Project = {
  name: string
  summary: string
  url: string
  projectPic: {
    url: string
  }
}

export type PageInfo = {
  technologies: Tech[]
  heroPicture: {
    url: string
  }
  abouttext: {
    text: string
  }
  aboutPicture: {
    url: string
  }
  projects: Project[]
}

export type PageData = {
  pageinfo: PageInfo
}
