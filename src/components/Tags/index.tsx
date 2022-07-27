import classNames from 'classnames'
import { Product } from 'types/Product'
import styles from './Tags.module.scss'

export default function Tags({
  category,
  review,
  volume,
  ibu,
  price,
}: Product) {
  return (
    <div>
      <div className={styles.tags}>
        <div
          className={classNames({
            [styles.tags__type]: true,
            [styles[`tags__type__${category.tag}`]]: true,
          })}
        >
          {category.label}
        </div>
        <div className={styles.tags__review}>⭐{review}</div>
        <div className={styles.tags__volume}>{volume}ml</div>
        <div className={styles.tags__ibu}>{ibu}</div>
        <div className={styles.tags__value}>R${price}</div>
      </div>
    </div>
  )
}
