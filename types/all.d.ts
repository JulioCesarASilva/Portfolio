interface IAuthor {
  __typename: string
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
  __typename: string
  name: string
  slug: string
  image: IImage
  description: string
  demo: string | null
  tags: string[]
  sourceCode: string
  author: IAuthor | undefined
}

interface ISocial {
  __typename: string
  url: string
  type: string
}

interface ITechnologie {
  __typename: string
  technologie: string
}

interface IImage {
  __typename: string
  url: string
}

interface ITrajectory {
  __typename: string
  role: string
  start: string
  finish: string
  description: string
  company: ICompany
}

interface ICompany {
  __typename: string
  name: string
  url: string
}