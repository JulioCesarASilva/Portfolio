import useAccentColor from "../hooks/useAccentColor";
import Head from "next/head";
import type { AppProps } from "next/app";

import Header from "../Components/Header";

import "../styles/globals.css";
import Footer from "../Components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  useAccentColor();

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
