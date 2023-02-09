import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function Project({link, label, image}: IProject) {
    return (
        <a className={`${styles["project-item"]}`} href={link} data-context="pages" data-identity="id:p6102b7e0ba10eda78c850b7e29e1dbb90dfa8d23b3b897746869a" data-hover-hint="galleryPageCover" data-hover-hint-id="p6102b7e0ba10eda78c850b7e29e1dbb90dfa8d23b3b897746869a">
            <div className={`${styles["project-container"]}`}>
              <div className={`${styles["cover-image-wrap"]}`}>
                <div className="cover-image">
                    <div  className={`${styles["cover"]}`}>
                      <Image src={image} width={640} height={457} alt={label} />
                    </div>
                </div>
              </div>
              <div className={`${styles["details-wrap"]}`}>
                <div className="details">
                  <div className="details-inner">
                      <div className={`${styles["details-title"]}`}>{label}</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
    )
}


