import '../styles/globals.css'

import { ApolloProvider } from "@apollo/client"

import { client } from "../lib/apollo"

import type { AppProps } from 'next/app'
import Header from '../Components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}>
      <Header home={pageProps.dangerousAsPath == "/"}/>
      <Component {...pageProps}/>
  </ApolloProvider>
}
