
import styles from "../../styles/Home.module.css";
import ImageTec from "./images";

export default function Tecnologias({ technologies }: { technologies: ITechnologie[] }) {
    return <div className={`${styles["tech-slideshow"]}`}>
        <ImageTec technologies={technologies}/>
        <ImageTec technologies={technologies}/>
    </div>
}