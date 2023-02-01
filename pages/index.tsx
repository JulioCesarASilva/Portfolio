import Head from "next/head";
import Header from "../Components/Header";
import Particles from "../Components/Particles";
import TextAnimation from "../Components/TextAnimation";
import styles from "../styles/Home.module.css";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (document) {
      document.body.setAttribute(
        "data-color",
        `COLOR-${Math.floor(Math.random() * 3)}`
      );
    }
  }, []);
  return (
    <>
      <Head>
        <title>Julio Cesar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <section id="inicio" className={styles.particles}>
          <Particles />
          <div className={styles.info}>
            <h1>Julio Cesar</h1>

            <p>
              I&apos;m
              <TextAnimation />
            </p>
          </div>
        </section>
        <section id="sobre" style={{ height: "100vh", paddingTop: "70px" }}>
          OLA Mundo
        </section>
      </main>
    </>
  );
}
