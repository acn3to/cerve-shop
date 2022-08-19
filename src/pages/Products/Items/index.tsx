import menu from 'data/menu.json'
import { useEffect, useState } from 'react'
import { Menu } from 'types/Product'

import Item from './Item'
import styles from './Items.module.scss'

interface Props {
  search: string
  filter: number | null
  sorter: string
}

export default function Items(props: Props) {
  const [list, setList] = useState(menu)
  const { search, filter, sorter } = props

  function testSearch(title: string) {
    const regex = new RegExp(search, 'i')
    return regex.test(title)
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id
    return true
  }

  function sort(newList: Menu) {
    switch (sorter) {
    case 'a_z':
      return newList.sort((a, b) => (a.title > b.title ? 1 : -1))
    case 'reviews':
      return newList.sort((a, b) => (a.review > b.review ? 1 : -1))
    case 'price':
      return newList.sort((a, b) => (a.price > b.price ? 1 : -1))
    default:
      return newList
    }
  }

  useEffect(() => {
    const newList = menu.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id),
    )
    setList(sort(newList))
  }, [search, filter, sorter])

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  )
}
