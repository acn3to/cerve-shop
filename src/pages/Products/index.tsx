import { useState } from 'react'

import Filters from './Filters'
import Items from './Items'
import styles from './Products.module.scss'
import Searcher from './Searcher'
import Sorter from './Sorter'

export default function Products() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<number | null>(null)
  const [sorter, setSorter] = useState('')
  return (
    <section className={styles.search}>
      <h3 className={styles.search__title}>Produtos</h3>
      <Searcher search={search} setSearch={setSearch} />
      <div className={styles.search__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Sorter sorter={sorter} setSorter={setSorter} />
      </div>
      <Items search={search} filter={filter} sorter={sorter} />
    </section>
  )
}
