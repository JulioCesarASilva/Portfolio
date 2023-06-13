import { useEffect } from "react";
import type { AppProps } from 'next/app';

import Header from "../Components/Header";

import { client } from "../lib/apollo"
import { ApolloProvider } from "@apollo/client"

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (document) {
      document.body.setAttribute(
        "data-color",
        `COLOR-${Math.floor(Math.random() * 3)}`
      );

      setInterval(()=> {
        document.body.setAttribute(
          "data-color",
          `COLOR-${Math.floor(Math.random() * 3)}`
        );
      }, 5 * 5000)
    }
  }, []);

  return <ApolloProvider client={client}>
    <Header />
    <Component {...pageProps} />
  </ApolloProvider>
}
