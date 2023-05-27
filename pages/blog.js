import Layout from '../components/layout'
import Post from '../components/post'
import styles from '../styles/grid.module.css'

export default function Blog({posts}) {
  return (
    <Layout
      title = {'Blog'}
      description = {'Blog de musica, venta de guitarras, concejos, GuitarLA'}
    >
        <main className='contenedor'>
          <h1 className='heading'>Blog</h1>
          <div className={styles.grid}>
            {posts?.map(post => (
              <Post
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </main>
    </Layout>
  )
}

export async function getStaticProps() { // Esto hace que la informacion no sea dinamica, se se hace un build y luego se cambian las guitarras, esto no actualiza las guitarras., habria que actualizarlas nuevamente.
  const respuesta = await fetch (`${process.env.API_URL}/posts?populate=imagen`)
  const {data: posts} = await respuesta.json() // Estamos extrayendo data y la renombramos como guitarras
  return {
    props: {
      posts
    }
  }
}  // El getStaticProps() sirve para consultar una API.
