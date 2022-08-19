import { ReactComponent as Logo } from 'assets/logo.svg'
import { Link } from 'react-router-dom'

import styles from './Menu.module.scss'

export default function Menu() {
  const routes = [
    {
      label: 'Início',
      to: '/',
    },
    {
      label: 'Produtos',
      to: '/produtos',
    },
    {
      label: 'Sobre',
      to: '/sobre',
    },
  ]
  return (
    <nav className={styles.menu}>
      <Logo className={styles.logo} />
      <ul className={styles.menu__list}>
        {routes.map((route, index) => (
          <li className={styles.menu__link} key={index}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
