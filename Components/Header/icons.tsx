import style from "../../styles/Header.module.css";
import { LinkedinLogo, GithubLogo, WhatsappLogo } from "phosphor-react";

const icon = {
  "Linkedin": <LinkedinLogo size={30} />,
  "Github": <GithubLogo size={30} />,
  "Whatsapp": <WhatsappLogo size={30} />,
} as {
  "Linkedin": JSX.Element;
  "Github": JSX.Element;
  "Whatsapp": JSX.Element;
}

const Icons = ({ className, socials }: { className?: string, socials: ISocial[]}) => (
  <div
    className={`${style.item} ${style.icons}  ${className ? className : ""}`}
  >
    {socials.map((item, index)=> {
      return (
        <a href={item.url} key={index} target="_blank">
          {
            // @ts-ignore
            icon[item.type] 
          }
        </a>
      )
      
    })}
  </div>
);

export { Icons };
