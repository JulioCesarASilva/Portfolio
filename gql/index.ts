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
        socials {
          url
          type
        }
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

export { GET_ALL_AUTHORS }
