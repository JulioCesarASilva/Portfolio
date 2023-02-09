import style from "../../styles/Header.module.css";
import { LinkedinLogo, GithubLogo, WhatsappLogo } from "phosphor-react";

const Icons = ({ className }: { className?: string }) => (
  <div
    className={`${style.item} ${style.icons}  ${className ? className : ""}`}
  >
    <a href="https://www.linkedin.com/in/julio-cesar-113b07196/" target="_blank">
      <LinkedinLogo size={30} />
    </a>
    <a href="https://github.com/JulioCesarASilva" target="_blank">
      <GithubLogo size={30} />
    </a>
    <a href="https://wa.me/5516989994747" target="_blank">
      <WhatsappLogo size={30} />
    </a>
  </div>
);

export { Icons };
