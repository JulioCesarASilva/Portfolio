import Head from "next/head";
import Header from "../Components/Header";
import styles from "../styles/Home.module.css";

import { useEffect } from "react";
import TimeLine from "../Components/TimeLine";

import { GetServerSideProps } from "next";
import { client } from "../lib/apollo";
import { GET_ALL_AUTHORS } from "../gql";
import SectionInicio from "../Components/Sections/inicio";
import SectionSobre from "../Components/Sections/sobre";
import SectionTecnologia from "../Components/Sections/tecnologia";
import SectionContato from "../Components/Sections/contato";
import SectionProjetos from "../Components/Sections/projetos";
import SectionTrajetoria from "../Components/Sections/trajetoria";


export default function Home({author}: { author: IAuthor }) {
  return (
    <>
      <Head>
        <title>{author.name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header home={true} socials={author.socials} name={author.name}/>
      <main>
        <SectionInicio func={author.func} name={author.name}/>
        <SectionSobre bio={author.bio}/>
        <SectionTecnologia technologies={author.technologies} />
        <SectionTrajetoria trajectories={author.trajectories}/>
        <SectionProjetos project={author.projects}/>
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