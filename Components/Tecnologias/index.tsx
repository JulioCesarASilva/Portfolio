
import styles from "../../styles/Home.module.css";
import ImageTec from "./images";

export default function Tecnologias() {
    return <div className={`${styles["tech-slideshow"]}`}>
        <ImageTec />
        <ImageTec />
    </div>
}