import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { GET_PROJECT } from "../../gql"
import { client } from "../../lib/apollo"
import Image from "next/image";
import Link from "next/link";

export default function Project({ project }: { project: IProject }) {
  console.log("project", project)

  return <>
    {project && <><Head>
      <title>{project.name}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
      <main>
        <section>
          <Image width={640} height={457} src={project.image.url} alt={project.name} />
          <h1>{project.name}</h1>
          <div>{project.tags.map((el) => <span>{el}</span>)}</div>
          <div>
            {project.demo && <Link href={project.demo} target="_blanck">Demo</Link>}
            {project.sourceCode && <Link href={project.sourceCode} target="_blanck">Source Code</Link>}
          </div>
          <div>
            {project.description}
          </div>
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