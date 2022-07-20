import menu from './items.json'
import Item from './Item'
import styles from './Items.module.scss'

export default function Itens() {
  return (
    <div className={styles.items}>
      {menu.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  )
}
