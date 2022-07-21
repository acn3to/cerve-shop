import { Outlet } from 'react-router-dom'

import styles from './DefaultPage.module.scss'

export default function DefaultPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A sua loja virtual de cervejas artesanais importadas e nacionais.
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  )
}
