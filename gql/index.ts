const GET_ALL_AUTHORS = `
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
        projects(first: 1000) {
          name
          slug
          description
          tags
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
      }
    }
  `;

const GET_PROJECT = `
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
`;

const GET_ALL_PROJECTS_SLUGS = `
  query GetAllProjectsSlugs {
    projects(first: 1000) {
      slug
    }
  }
`;

export { GET_ALL_AUTHORS, GET_PROJECT, GET_ALL_PROJECTS_SLUGS };
