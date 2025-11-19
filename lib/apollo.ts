import { ApolloClient, InMemoryCache } from "@apollo/client"

const GRAPHQL_API_URL = "https://api-sa-east-1.hygraph.com/v2/clehor7zq2c4j01uh84ckgkcb/master"

export const client = new ApolloClient({
  uri: GRAPHQL_API_URL,
  cache: new InMemoryCache()
})
