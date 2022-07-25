import Tags from 'components/Tags'
import { Product } from 'types/Product'

import styles from './Item.module.scss'

export default function Item(props: Product) {
  const { title, description, photo } = props
  return (
    <div className={styles.item}>
      <div className={styles.items__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Tags {...props} />
      </div>
    </div>
  )
}
