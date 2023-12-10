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

const socials = [
  {
    "url": "https://www.linkedin.com/in/julio-cesar-113b07196/",
    "type": "Linkedin"
  },
  {
    "url": "https://github.com/JulioCesarASilva",
    "type": "Github"
  },
  {
    "url": "https://wa.me/5516989994747",
    "type": "Whatsapp"
  }
]

const Icons = ({ className }: { className?: string }) => (
  <div
    className={`${style.item} ${style.icons}  ${className ? className : ""}`}
  >
    {socials.map((item, index)=> {
      return (
        <a href={item.url} key={index} target="_blank" rel="noreferrer">
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
