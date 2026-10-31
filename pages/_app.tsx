import { useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import Header from "../Components/Header";

import "../styles/globals.css";
import Footer from "../Components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (document) {
      document.body.setAttribute(
        "data-color",
        `COLOR-${Math.floor(Math.random() * 3)}`,
      );

      const interval = setInterval(() => {
        document.body.setAttribute(
          "data-color",
          `COLOR-${Math.floor(Math.random() * 3)}`,
        );
      }, 5 * 5000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
