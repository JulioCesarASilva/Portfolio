import style from "../../styles/Header.module.css";
import Icon from "../Icons";

const Icons = ({ className }: { className?: string }) => (
  <div
    className={`${style.item} ${style.icons}  ${className ? className : ""}`}
  >
    <a
      aria-label="LinkedIn"
      href="https://www.linkedin.com/in/julio-cesar-113b07196"
      target="_blank"
      rel="noreferrer"
    >
      <Icon name="linkedin" />
    </a>
    <a
      aria-label="GitHub"
      href="https://github.com/JulioCesarASilva"
      target="_blank"
      rel="noreferrer"
    >
      <Icon name="github" />
    </a>
    <a
      aria-label="WhatsApp"
      href="https://wa.me/5516989994747"
      target="_blank"
      rel="noreferrer"
    >
      <Icon name="whatsapp" />
    </a>
  </div>
);

export { Icons };
