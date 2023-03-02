import '../styles/globals.css'

import { ApolloProvider } from "@apollo/client"

import { client } from "../lib/apollo"

import type { AppProps } from 'next/app'

function getData() {
  const color = `COLOR-${Math.floor(Math.random() * 3)}`
  return color
}

export default function App({ Component, pageProps }: AppProps) {
  const color = getData()
  console.log("App", color)

  return <ApolloProvider client={client}>
    <div className={color}>
      <Component {...pageProps} color={color}/>
    </div>
  </ApolloProvider>
}
