import Head from "next/head";
import Header from "../Components/Header";
import Particles from "../Components/Particles";
import TextAnimation from "../Components/TextAnimation";
import styles from "../styles/Home.module.css";

import { useEffect } from "react";
import Projects from "../Components/Projetos";
import Tecnologias from "../Components/Tecnologias";
import TimeLine from "../Components/TimeLine";
import { Icons } from "../Components/Header/icons";

import { gql, useQuery } from "@apollo/client"
import { GetServerSideProps } from "next";
import { client } from "../lib/apollo";
import { GET_ALL_AUTHORS } from "../gql";
import SectionInicio from "../Components/Sections/inicio";
import SectionSobre from "../Components/Sections/sobre";
import SectionTecnologia from "../Components/Sections/tecnologia";
import SectionContato from "../Components/Sections/contato";


export default function Home({author}: { author: IAuthor }) {
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
        <title>{author.name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header socials={author.socials} name={author.name}/>
      <main>
        <SectionInicio func={author.func} name={author.name}/>
        <SectionSobre bio={author.bio}/>
        <SectionTecnologia technologies={author.technologies} />
        <section id="trajetoria" className={`${styles.section}`}>
          <h2>Trajetória</h2>
          <TimeLine />
        </section>
        <section id="projetos" className={`${styles.section} ${styles.project}`}>
          <h2>Projetos</h2>
          <div>
            <Projects />
          </div>
        </section>
        <SectionContato  socials={author.socials}/>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { data } = await client.query({ query: GET_ALL_AUTHORS })

  return {
    props: {
      author: data.authors[0]
    }
  }
}