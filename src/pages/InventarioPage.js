import Image from 'next/image';
import InventarioForm from '../components/InventarioForm';
import Table from '../components/Table';
import styles from '@/styles/InventarioPage.module.css';

import logoImage from '../assets/Autosan.png';

const InventarioPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.ctn_info}>
        <div className={styles.ctn_logo}>
          <Image src={logoImage} alt="Logo Autosan" width={240} height={120} />
        </div>
        <div>
          <div className={styles.ctn_order}>
            <h2>Orden de Servicio</h2>
            <h2>No. </h2>
            <h3>Cra 9 No. 14C -16 Santa Ana</h3>
            <h3>Cel: 312 564 1152</h3>
          </div>
        </div>
      </div>

      <div className={styles.table}>
        <Table />
      </div>

      <did>
        <div>
          <InventarioForm />
        </div>
        
      </did>
        

    </section>
  );
};

export default InventarioPage;