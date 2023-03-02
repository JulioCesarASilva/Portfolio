import { gql } from "@apollo/client"
import {project, author, technologie, trajectory, company, social} from "./props"

const GET_ALL_AUTHORS = gql`
    query GetAuthors {
      authors {
        ${author}
        socials {
          ${social}
        }
        technologies (first: 100){
          ${technologie}
        }
        trajectories {
          ${trajectory}
          company {
            ... on Company {
              ${company}
            }
          }
        }
        projects {
          ${project}
        }
      }
    }
  `

const GET_PROJECT = gql`
query GetProject($slug: String) {
  project(where: {slug: $slug}) {
    ${project}
    author {
      ${author}
      socials {
        ${social}
      }
    }
  }
}
`

export { GET_ALL_AUTHORS, GET_PROJECT }
