import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import Image from 'next/image';

import logoImage from '../assets/Autosan.jpg';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logoImage} alt="Logo Autosan" width={200} height={100} />
      </div>
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href={'/UserPage'}>Usuarios</Link>
        </li>
        <li>
          <Link href={'/CustomerPage'}>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
