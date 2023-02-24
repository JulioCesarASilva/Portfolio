import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/clehor7zq2c4j01uh84ckgkcb/master",
  cache: new InMemoryCache()
})
