import { ReactComponent as Logo } from 'assets/logo.svg'
import styles from './Menu.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <Logo />
    </nav>
  )
}
