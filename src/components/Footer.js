import React from 'react';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContent}>
        <p>Autor: Oscar Nuñez </p>
        <p>© 2023 Autosan. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
