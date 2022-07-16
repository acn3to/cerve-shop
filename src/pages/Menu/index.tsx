import styles from "./Menu.module.scss"
import {ReactComponent as Logo} from "assets/logo.svg"
import Searcher from './Searcher/';
import { useState } from "react";
import Filters from "./Filters";

export default function Menu() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<number | null>(null)
   return (<main>
    <nav className={styles.menu}>
      <Logo/>
    </nav>
    <header className={styles.header}>
      <div className={styles.header__text}>A sua loja virtual de cervejas artesanais importadas e nacionais.</div>
    </header>
    <section className={styles.menu}>
      <h3 className={styles.menu__title}>O que você procura?</h3>
      <Searcher search={search} setSearch={setSearch}/>
      <div className={styles.menu__filters}>
        <Filters filter={filter} setFilter={setFilter}/>
      </div>
    </section>
   </main>)
}