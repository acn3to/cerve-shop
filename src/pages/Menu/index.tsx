import { ReactComponent as Logo } from 'assets/logo.svg'
import { useState } from 'react'

import Filters from './Filters'
import styles from './Menu.module.scss'
import Searcher from './Searcher/'
import Sorter from './Sorter'
import Items from './Items'

export default function Menu() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<number | null>(null)
  const [sorter, setSorter] = useState('')
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A sua loja virtual de cervejas artesanais importadas e nacionais.
        </div>
      </header>
      <section className={styles.search}>
        <h3 className={styles.search__title}>O que você procura?</h3>
        <Searcher search={search} setSearch={setSearch} />
        <div className={styles.search__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Sorter sorter={sorter} setSorter={setSorter} />
        </div>
        <Items />
      </section>
    </main>
  )
}
