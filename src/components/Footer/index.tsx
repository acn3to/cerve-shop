import { ReactComponent as Logo } from 'assets/logo.svg'
import { FaDiscord, FaGithub, FaLinkedinIn, FaReact } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <ul className={styles.footer__social_list}>
          <li>
            <a
              href="https://www.linkedin.com/in/arnaldo-n3to/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className={styles.footer__social_list__linkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/acn3to"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className={styles.footer__social_list__github} />
            </a>
          </li>
          <li>
            <a
              href="https://discordapp.com/users/366398902846619649/"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord className={styles.footer__social_list__discord} />
            </a>
          </li>
          <li>
            <a
              href="mailto:costanetoow@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <SiGmail className={styles.footer__social_list__gmail} />
            </a>
          </li>
        </ul>
        <p className={styles.footer__text}>
          Desenvolvido com React <FaReact className={styles.icon} /> por{' '}
          <a
            className={styles.footer__link}
            href="https://github.com/acn3to"
            target="_blank"
            rel="noreferrer"
          >
            @acn3to
          </a>
        </p>
      </div>
      <Logo className={styles.logo} />
    </footer>
  )
}
