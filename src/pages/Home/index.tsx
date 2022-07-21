import menu from 'data/menu.json'
import styles from './Home.module.scss'

export default function Home() {
  let recommendedItems = [...menu]
  recommendedItems = recommendedItems
    .sort(() => 0.5 - Math.random())
    .splice(0, 3)

  return (
    <section>
      <h3 className={styles.title}>Recomendações do mestre cervejeiro</h3>
      <div className={styles.recommendeds}>
        {recommendedItems.map((item) => (
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recommended__button}>Ver mais</button>
          </div>
        ))}
      </div>
    </section>
  )
}
