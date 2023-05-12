import Head from 'next/head';
import CustomerPage from './CustomerPage';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inicio - Mi Taller Automotriz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>AUTOSAN</h1>
        <div className={styles.buttonsContainer}>
          <Link href={'/UserPage'} passHref>
            
              <div className={styles.buttonContainer}>
                <div className={styles.button}>Usuarios</div>
              </div>
            
            
          </Link>
          <Link href={'/CustomerPage'} passHref>
            
              <div className={styles.buttonContainer}>
                <div className={styles.button}>Clientes</div>
              </div>
            
            
          </Link>
          <Link href={'/VehiclePage'} passHref>
            
              <div className={styles.buttonContainer}>
                <div className={styles.button}>Vehiculos</div>
              </div>
            
            
          </Link>
        </div>
      </main>
    </div>
  );
}

