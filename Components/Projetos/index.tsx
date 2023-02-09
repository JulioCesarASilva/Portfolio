import Project from "./item";
import projectList from "./json";


export default function Projects() {
    return (
        <>
            {projectList.map((item, index)=> <Project key={index} {...item}/>)}
        </>
    )
}

