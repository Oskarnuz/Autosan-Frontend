import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inicio - Mi Taller Automotriz</title>
      </Head>
      <main>
        <Navbar/>
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

          <Link href={'/InventarioPage'} passHref>
            
              <div className={styles.buttonContainer}>
                <div className={styles.button}>Inventario</div>
              </div>
            
          </Link>
        </div>
      </main>
    </div>
  );
}

