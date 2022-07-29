import ourHome from 'assets/our_home.png'
import menu from 'data/menu.json'
import { useNavigate } from 'react-router-dom'
import stylesTheme from 'styles/Theme.module.scss'
import { Product } from 'types/Product'

import styles from './Home.module.scss'

export default function Home() {
  let recommendedItems = [...menu]
  recommendedItems = recommendedItems
    .sort(() => 0.5 - Math.random())
    .splice(0, 3)

  const navigate = useNavigate()

  function redirectToDetails(product: Product) {
    navigate(`/produto/${product.id}`, { state: { product }, replace: true })
  }

  return (
    <section>
      <h3 className={stylesTheme.title}>Recomendações do mestre cervejeiro</h3>
      <div className={styles.recommendeds}>
        {recommendedItems.map((item) => (
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recommended__button}
              onClick={() => redirectToDetails(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTheme.title}> Nossa casa </h3>
      <div className={styles.ourHome}>
        <img src={ourHome} alt="Imagem de um bar" />
        <div className={styles.ourHome__address}>
          Alameda Tabajara, 6 <br /> <br /> Salvador - BA
        </div>
      </div>
    </section>
  )
}
