const image = `
  image {
    url
  }
`

const project = `
  name
  description
  demo
  tags
  sourceCode
  slug
  ${image}
`

const author = `
  bio
  createdAt
  id
  name
  description
  publishedAt
  slug
  updatedAt
  func
`

const technologie = `
  technologie
`

const trajectory = `
  role
  start 
  finish
  description
`

const company = `
  name
  url
`

const social = `
  url
  type
`


export { project, author, image, technologie, trajectory, company, social }
