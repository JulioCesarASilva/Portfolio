import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Project({slug, name, image}: IProject) {
    return (
        <Link className={`${styles["project-item"]}`} href={"/project/" + slug} data-context="pages" data-identity="id:p6102b7e0ba10eda78c850b7e29e1dbb90dfa8d23b3b897746869a" data-hover-hint="galleryPageCover" data-hover-hint-id="p6102b7e0ba10eda78c850b7e29e1dbb90dfa8d23b3b897746869a">
            <div className={`${styles["project-container"]}`}>
              <div className={`${styles["cover-image-wrap"]}`}>
                <div className="cover-image">
                    <div  className={`${styles["cover"]}`}>
                      <Image src={image.url} width={640} height={457} alt={name} />
                    </div>
                </div>
              </div>
              <div className={`${styles["details-wrap"]}`}>
                <div className="details">
                  <div className="details-inner">
                      <div className={`${styles["details-title"]}`}>{name}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
    )
}


