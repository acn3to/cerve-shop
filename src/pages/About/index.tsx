import beer1 from 'assets/about/beer1.png'
import beer2 from 'assets/about/beer2.png'

import styles from './About.module.scss'

const images = [beer1, beer2]

export default function About() {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Sobre</h3>
      <div className={styles.about}>
        <div className={styles.about__text}>
          <p>
            Prazer, somos a Cerve Shop uma loja especializada no comércio de
            cervejas especiais. Oferecemos o maior portfólio de cervejas do
            Brasil. São mais de 1000 opções de rótulos das melhores cervejas
            artesanais, kits promocionais, cervejas importadas e souvenirs
            exclusivos.
          </p>
          <p>
            Mais do que tudo, nossa missão é tornar o dia dos apaixonados por
            cerveja, cada vez mais aromático, saboroso e divertido.
          </p>
          <p>
            Sei que agora você deve estar pensando “Quero comprar cerveja
            artesanal”, então não perca tempo e confira os melhores rótulos de
            cervejas nacionais e importadas.
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {images.map((image, index) => (
          <div key={index} className={styles.images__image}>
            <img src={image} alt="Imagem de cerveja" />
          </div>
        ))}
      </div>
    </section>
  )
}
