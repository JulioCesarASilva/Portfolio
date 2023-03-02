import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Header from "../../Components/Header"
import { GET_PROJECT } from "../../gql"
import { client } from "../../lib/apollo"
import { useEffect } from "react";

export default function Project({project}: {project: IProject}) {
  return <>
  {project && <><Head>
    <title>{project.name}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  <Header socials={(project.author as IAuthor).socials} name={(project.author as IAuthor).name}/>
  <main>
    <section>

    </section>
  </main></>}
</>
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.id
  
  const { data } = await client.query({ query: GET_PROJECT, variables: { slug } })

  return { props: { project: data.project } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { 
    paths: [], 
    fallback: true 
  }
}