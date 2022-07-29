import DefaultPage from 'components/DefaultPage'
import Tags from 'components/Tags'
import menu from 'data/menu.json'
import NotFound from 'pages/NotFound'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'

import styles from './Product.module.scss'

export default function Product() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = menu.find((item) => item.id === Number(id))
  if (!product) {
    return <NotFound />
  }
  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route
          index
          element={
            <>
              <button className={styles.back} onClick={() => navigate(-1)}>
                {'< Voltar'}
              </button>
              <section className={styles.container}>
                <h1 className={styles.title}>{product.title}</h1>
                <div className={styles.image}>
                  <img src={product.photo} alt={product.title} />
                  <div className={styles.content}>
                    <p className={styles.content__description}>
                      {product.description}
                    </p>
                  </div>
                  <Tags {...product} />
                </div>
              </section>
            </>
          }
        />
      </Route>
    </Routes>
  )
}
