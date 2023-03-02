import React, { useEffect, useState } from "react";

import { List, X } from "phosphor-react";
import style from "../../styles/Header.module.css";
import Link from "next/link";

import { Icons } from "./icons"

export default function Header({ socials, name, home = false }: { socials: ISocial[], name: string, home?: boolean }) {
  const [scroll, setScroll] = useState<boolean>();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => handleNavigation());
  }, []);

  const handleNavigation = () => {
    const top = document.documentElement.scrollTop;
    if (top == 0) setScroll(false);
    else if (top > 0) setScroll(true);
  };
  const click = function (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (home) {
      e.preventDefault();
      setOpen(false);
      const link = (e.target as any).getAttribute("href").replace("/", "");
      document.querySelector(link == "#" ? "#inicio" : link).scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const Links = ({ className }: { className?: string }) => (
    <nav className={`${style.item} ${style.nav} ${className ? className : ""}`}>
      <div>
        <Link onClick={click} href={home ? "#sobre" : "/#sobre"}>
          Sobre
        </Link>
      </div>
      <div>
        <Link onClick={click} href={home ? "#tecnologia" : "/#tecnologia"}>
          Tecnologias
        </Link>
      </div>
      <div>
        <Link onClick={click} href={home ? "#trajetoria" : "/#trajetoria"}>
          Trajetória
        </Link>
      </div>
      <div>
        <Link onClick={click} href={home ? "#projetos" : "/#projetos"}>
          Projetos
        </Link>
      </div>
      <div>
        <Link onClick={click} href={home ? "#contato" : "/#contato"}>
          Contato
        </Link>
      </div>
    </nav>
  );

  useEffect(() => {
    document.body.classList.toggle(style.isOpen);
  }, [open]);


  return (
    <header
      className={`${style.header} ${scroll ? style.scrollOff : ""}`}
    >
      <div className={`${style["menu-mobile"]}`}>
        <List size={30} onClick={() => setOpen(true)} />
        {open && (
          <div className={`${style.menu} fade-in`}>
            <span>
              <X size={30} onClick={() => setOpen(false)} />
            </span>
            <Links />
            <Icons socials={socials} />
          </div>
        )}
      </div>
      <Links className={`${style["menu-desk"]}`} />
      <div className={`${style.item} ${style.home}`}>
        <Link onClick={click} className={`${style.title}`} href={home ? "#" : "/"}>
          {name}
        </Link>
      </div>
      <Icons socials={socials} className={`${style["menu-desk"]}`} />
    </header>
  );
}
