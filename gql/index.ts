import { gql } from "@apollo/client"

const GET_ALL_AUTHORS = gql`
    query GetAuthors {
      authors {
        bio
        createdAt
        id
        name
        publishedAt
        slug
        updatedAt
        technologies (first: 100){
          technologie
        }
        projects {
          name
          slug
          image {
            url
          }
        }
        func
        trajectories {
          role
          start 
          finish
          description
          company {
            ... on Company {
              name
              url
            }
          }
        }
        projects {
          name
          slug
          image {
            url
          }
        }
      }
    }
  `

const GET_PROJECT = gql`
  query GetProject($slug: String) {
    project(where: {slug: $slug}) {
      demo
      description
      id
      name
      slug
      sourceCode
      tags
      image {
        url
      }
    }
  }
`

export { GET_ALL_AUTHORS, GET_PROJECT }
