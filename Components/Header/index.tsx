import React, { useEffect, useMemo, useState } from "react";

import { List, X } from "phosphor-react";
import style from "../../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from 'next/router'

import { Icons } from "./icons"
import Head from "next/head";

function getData() {
  const color = `COLOR-${Math.floor(Math.random() * 5)}`
  return color
}

export default function Header({ home = false }: { home?: boolean }) {
  const [scroll, setScroll] = useState<boolean>();
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter()
  let aux = 0

  const updateColor = () => setTimeout(() => {
    const newColor = getData()
    window.document.body.setAttribute("data-color", newColor)
    localStorage.setItem("color", newColor)
    updateColor()
  }, 15 * 1000)

  useEffect(() => {
    if (aux > 0) return;
    window.addEventListener("scroll", () => handleNavigation());

    const localColor = localStorage.getItem("color");
    if (localColor) {
      window.document.body.setAttribute("data-color", localColor)
    } else {
      const newColor = getData()
      window.document.body.setAttribute("data-color", newColor)
      localStorage.setItem("color", newColor)
    }

    updateColor()
    aux = 1
  }, []);

  const handleNavigation = () => {
    const top = document.documentElement.scrollTop;
    if (top == 0) setScroll(false);
    else if (top > 0) setScroll(true);
  };

  const click = function (slug: string) {
    setOpen(false);
    console.log("OLA")
    const el = document.querySelector(slug)

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    } else if (slug == "inicio") router.push(`/`)
      else router.push(`/#${slug}`)
  };

  const createLinks = (slug: string, text: string)=> !home ? <a href={`#${slug}`}>{text}</a> : <Link href={`/#${slug}`}>{text}</Link>

  const Links = ({ className }: { className?: string }) => (
    <nav className={`${style.item} ${style.nav} ${className ? className : ""}`}>
      <div> {createLinks("sobre", "Sobre")} </div>
      <div> {createLinks("tecnologia", "Tecnologias")} </div>
      <div> {createLinks("trajetoria", "Trajetoria")} </div>
      <div> {createLinks("projetos", "Projetos")} </div>
      <div> {createLinks("contato", "Contato")} </div>
    </nav>
  );

  useEffect(() => {
    document.body.classList.toggle(style.isOpen);
  }, [open]);

  

  return ( <header className={`${style.header} ${scroll ? style.scrollOff : ""}`}>
        <div className={`${style["menu-mobile"]}`}>
          <List size={30} onClick={() => setOpen(true)} />
          {open && (
            <div className={`${style.menu} fade-in`}>
              <span>
                <X size={30} onClick={() => setOpen(false)} />
              </span>
              <Links />
              <Icons />
            </div>
          )}
        </div>
        <Links className={`${style["menu-desk"]}`} />
        <div className={`${style.item} ${style.home}`}>
          {!home ? <a href={`#inicio`}>Julio Cesar</a> : <Link href={`/#`}>Julio Cesar</Link>}
        </div>
        <Icons className={`${style["menu-desk"]}`} />
      </header>
    
  );
}
