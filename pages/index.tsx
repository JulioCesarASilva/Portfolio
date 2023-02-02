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
        <section id="sobre" className={`${styles.section}`}>
          <h2>Sobre Mim</h2>
          <div>
            Sou um desenvolvedor web altamente capacitado e apaixonado por criar soluções digitais inovadoras. Tenho ampla experiência em desenvolvimento de aplicativos e sites, incluindo a implementação de recursos avançados como animações, integrações com APIs e otimização para motores de busca.
            <br/>
            Durante minha carreira, desenvolvi habilidades em diversas tecnologias de desenvolvimento web, incluindo HTML, CSS, JavaScript e frameworks como React e Angular. Além disso, trabalhei em projetos de equipe, o que me permitiu desenvolver minhas habilidades de comunicação e colaboração.
            <br/>
            Acredito que minha experiência e habilidades fazem de mim um candidato forte para o mercado de desenvolvimento web. Estou ansioso para continuar aplicando meus conhecimentos em novos projetos e desafios, e sempre buscando oportunidades de aprendizado para me tornar um desenvolvedor ainda mais eficaz.
            <br/>
            Minha meta é criar soluções digitais que possam ajudar a melhorar a vida das pessoas e tornar o mundo um lugar melhor. Estou sempre buscando novos desafios e oportunidades para crescer profissionalmente e alcançar meus objetivos.
          </div>
        </section>
        <section id="tecnologia" className={`${styles.section}`}>
          <h2>Tecnologias</h2>
          <div>Bla...  Bla... Bla...</div>
        </section>
        <section id="tragetoria" className={`${styles.section}`}>
          <h2>Tragetoria</h2>
          <div>Bla...  Bla... Bla...</div>
        </section>
        <section id="projetos" className={`${styles.section}`}>
          <h2>Projetos</h2>
          <div>Bla...  Bla... Bla...</div>
        </section>
        <section id="contato" className={`${styles.section}`}>
          <h2>Contato</h2>
          <div>Bla...  Bla... Bla...</div>
        </section>
      </main>
    </>
  );
}
