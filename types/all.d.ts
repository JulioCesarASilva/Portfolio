interface IAuthor {
  bio: string
  createdAt: string
  id: string
  name: string
  publishedAt: string | null
  slug: string
  func: string[]
  updatedAt: string
  socials: ISocial[]
  technologies: ITechnologie[]
  trajectories: ITrajectory[]
  projects: IProject[]
}

interface IProject {
  name: string
  slug: string
  image: IImage
}

interface ISocial {
  url: string
  type: string
}

interface ITechnologie {
  technologie: string
}

interface IProject {
  id: string
  name: string
  slug: string
  description: string
  demo: string
  sourceCode: string
  tags: string[]
  image: IImage
}

interface IImage {
  url: string
}

interface ITrajectory {
  role: string
  start: string
  finish: string
  description: string
  company: ICompany
}

interface ICompany {
  name: string
  url: string
}