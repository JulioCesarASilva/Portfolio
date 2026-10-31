import React, { useEffect, useState } from "react";

import Icon from "../Icons";
import style from "../../styles/Header.module.css";
import global from "../../styles/Global.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

import { Icons } from "./icons";

function NavigationLinks({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <nav className={`${style.item} ${style.nav} ${className ? className : ""}`}>
      <div>
        <Link onClick={onNavigate} href="/#sobre">
          Sobre
        </Link>
      </div>
      <div>
        <Link onClick={onNavigate} href="/#tecnologia">
          Tecnologias
        </Link>
      </div>
      <div>
        <Link onClick={onNavigate} href="/#trajetoria">
          Trajetória
        </Link>
      </div>
      <div>
        <Link onClick={onNavigate} href="/#projetos">
          Projetos
        </Link>
      </div>
      <div>
        <Link onClick={onNavigate} href="/#contato">
          Contato
        </Link>
      </div>
    </nav>
  );
}

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const handleNavigation = () => setScroll(window.scrollY > 0);
    handleNavigation();
    window.addEventListener("scroll", handleNavigation, { passive: true });
    return () => window.removeEventListener("scroll", handleNavigation);
  }, []);

  const click = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;
    setOpen(false);
    const hash = event.currentTarget.hash;
    const section =
      router.pathname === "/"
        ? document.getElementById(hash.slice(1) || "inicio")
        : null;
    if (section) {
      event.preventDefault();
      section.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    }
  };

  useEffect(() => {
    document.body.classList.toggle(style.isOpen, open);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove(style.isOpen);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className={`${style.header} ${scroll ? style.scrollOff : ""}`}>
      <div className={global.container}>
        <div className={`${style["menu-mobile"]}`}>
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" />
          </button>
          {open && (
            <div id="mobile-menu" className={`${style.menu} fade-in`}>
              <span>
                <button
                  autoFocus
                  type="button"
                  aria-label="Fechar menu"
                  onClick={() => setOpen(false)}
                >
                  <Icon name="close" />
                </button>
              </span>
              <NavigationLinks onNavigate={click} />
              <Icons />
            </div>
          )}
        </div>
        <NavigationLinks
          onNavigate={click}
          className={`${style["menu-desk"]}`}
        />
        <div className={`${style.item} ${style.home}`}>
          <Link onClick={click} className={`${style.title}`} href="/#">
            Julio Cesar
          </Link>
        </div>
        <Icons className={`${style["menu-desk"]}`} />
      </div>
    </header>
  );
}
