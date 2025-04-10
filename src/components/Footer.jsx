import React from 'react';
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <p>© 2025 Rooted</p>
      </div>
      <div className={styles.column}>
        <p>Kontakt:</p>
        <p>+45 42 37 30 35</p>
        <p>rooted.contact@gmail.com</p>
        <p>Møllevej 37b, Aarhus C 8000</p>
      </div>
      <div className={styles.column}>
        <p>Telefontider:</p>
        <p>Man-Ons: 11-14</p>
        <p>Tor-Fre: 12-14</p>
        <p>Lør-Søn: Lukket</p>
      </div>
    </footer>
  );
}