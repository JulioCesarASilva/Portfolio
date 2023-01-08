import style from "../../../styles/Header.module.css"

export default function Header() {
    return <header className={style.header}>
        <nav className={`${style.item} ${style.nav}`}>
            <div><a href="#">Sobre</a></div>
            <div><a href="#">Contato</a></div>
        </nav>
        <div className={`${style.item} ${style.home}`}><a href="#">Julio Cesar</a></div>
        <div className={`${style.item}`}>
            <a href="#">I</a>
            <a href="#">I</a>
            <a href="#">I</a>
        </div>
    </header>
}