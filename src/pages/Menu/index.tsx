import styles from "./Menu.module.scss"
import {ReactComponent as Logo} from "assets/logo.svg"

export default function Menu() {
   return (<main>
    <nav className={styles.menu}>
      <Logo/>
    </nav>
    <header className={styles.header}>
      <div className={styles.header__text}>A sua loja virtual de cervejas artesanais importadas e nacionais.</div>
    </header>
   </main>)
}