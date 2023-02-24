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
}

interface ISocial {
  url: string
  type: string
}

interface ITechnologie {
  technologie: string
}

interface IProject {
    name: string
    slug: string
    image: IImage
}

interface IImage {
  url: string
}