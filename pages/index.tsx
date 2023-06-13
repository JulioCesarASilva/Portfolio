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
      <main>
        <SectionInicio func={author.func} name={author.name}/>
        <SectionSobre bio={author.bio}/>
        <SectionTecnologia technologies={author.technologies} />
        <SectionTrajetoria trajectories={author.trajectories}/>
        <SectionProjetos project={author.projects}/>
        <SectionContato />
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