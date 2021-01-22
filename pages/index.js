import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Open Gym</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={ styles.title }>
          <Link href='/pages/contact-us'>
            Open Gym 
               </Link>

        </h1>

        <p className={styles.code}>
       WORKOUTSIDE
        </p>

        <div className={ styles.grid }>
          <a href="" className={styles.card}>
            <h3>  &rarr;</h3>
            <p> </p>
          </a>

        

           <a href="" className={styles.card}>
            <h3> &rarr;</h3>
            <p></p>
          </a>

           <a href="" className={styles.card}>
            <h3> &rarr;</h3>
            <p></p>
          </a>

     

       
       
        </div>
      </main>

      <footer className={styles.footer}>
    
      </footer>
    </div>
  )
}
