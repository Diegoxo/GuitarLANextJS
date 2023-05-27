import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title = {'Nosotros'}
      description = {'Sobre nosotros, guitarLA, tienda de musica.'}
    >
        <main className='contenedor'>
          <h1 className='heading'>Nosotros</h1>

          <div className={styles.contenido}>
            <Image src = "/img/nosotros.jpg" width={1000} height={80} alt="Imagen sobre nosotros"/>

            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate, arcu quis tincidunt lacinia, arcu neque dictum metus, nec blandit orci tellus dapibus ligula. Nunc vel metus egestas, bibendum augue eu, interdum velit. Proin suscipit, nibh in maximus pellentesque, ligula purus placerat arcu, non bibendum mauris nisi nec leo. Fusce id metus porttitor, rhoncus ante at.</p>

              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum mattis risus felis, ut sodales velit sagittis dignissim. In hac habitasse platea dictumst. Sed sed dignissim massa. Maecenas lacinia felis tellus, non ultrices odio euismod a. Nam posuere purus magna, eget  </p>
            </div>
          </div>
        </main>
    </Layout>
  )
}
