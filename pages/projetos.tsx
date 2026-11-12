import SEO from "../Components/SEO";
import Link from "next/link";
import type { GetServerSideProps } from "next";
import SectionProjetos from "../Components/Sections/projetos";
import { GET_ALL_AUTHORS } from "../gql";
import { queryGraphQL } from "../lib/graphql";
import styles from "../styles/Home.module.css";

export default function Projetos({ author }: { author: IAuthor }) {
  return (
    <>
      <SEO
        title={`Projetos | ${author.name}`}
        description={`Conheça os projetos de ${author.name}: aplicações web, soluções de e-commerce e as tecnologias utilizadas em cada trabalho.`}
        path="/projetos"
      />
      <main>
        <div className={styles["projects-back"]}>
          <Link href="/#projetos">← Voltar para o início</Link>
        </div>
        <SectionProjetos project={author.projects} fullPage />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await queryGraphQL<{ authors: IAuthor[] }>(GET_ALL_AUTHORS);
  if (!data.authors[0]) return { notFound: true };
  return { props: { author: data.authors[0] } };
};
