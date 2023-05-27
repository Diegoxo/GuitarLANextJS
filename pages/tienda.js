import Layout from '../components/layout'
import Guitarra from '../components/guitarra'
import styles from '../styles/grid.module.css'

export default function Tienda({guitarras}) { // Se pueden usar guitarras, porque ya se han exportado en la funcion getStaticProps() 
  
 return (
    <Layout
      title = {'Tienda Virtual'}
      description = {'Tienda virtual, venta de guitarras, instrumentos, GuitarLA'}
    >
        <main className='contenedor'>
              <h1 className='heading'>Nuestra Collecion</h1>

              <div className={styles.grid}>
                {guitarras.map(guitarra => (
                    <Guitarra
                        key={guitarra.id}
                        guitarra={guitarra.attributes}
                    />
                ))}
              </div>
        </main>
    </Layout>
  )
}


export async function getStaticProps() { // Esto hace que la informacion no sea dinamica, se se hace un build y luego se cambian las guitarras, esto no actualiza las guitarras., habria que actualizarlas nuevamente.
  const respuesta = await fetch (`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data: guitarras} = await respuesta.json() // Estamos extrayendo data y la renombramos como guitarras
  return {
    props: {
      guitarras
    }
  }
}  // El getStaticProps() sirve para consultar una API.


// export async function getServerSideProps() { // Esto hace que la informacion no sea dinamica, se se hace un build y luego se cambian las guitarras, esto no actualiza las guitarras., habria que actualizarlas nuevamente.
//   const respuesta = await fetch (`${process.env.API_URL}/guitarras?populate=imagen`)
//   const {data: guitarras} = await respuesta.json() // Estamos extrayendo data y la renombramos como guitarras
//   return {
//     props: {
//       guitarras
//     }
//   }
// }  // El getStaticProps() sirve para consultar una API.
