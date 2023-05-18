import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import Image from 'next/image';

import logoImg from '../assets/Autosan.png';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logoImg} alt="Logo Autosan" width={300} height={150} />
      </div>
      <div className={styles.text}>
        <p>!El cuidado de su vehiculo, en manos expertas!</p>
      </div>
      <div className={styles.login}>
        <Link href={'/UserPage'}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
