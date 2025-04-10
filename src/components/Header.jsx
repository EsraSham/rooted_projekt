import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">
          <img src="./logo.webp" alt="Logo" className={styles.logo} />
        </Link>

        <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
          <Link to="/services" className={styles.link}>Services</Link>
          <Link to="/content" className={styles.link}>Content</Link>
          <Link to="/omos" className={styles.link}>Om os</Link>
          <Link to="/kontakt" className={styles.link}>Kontakt</Link>
        </div>

        <div className={styles.burger} onClick={toggleMenu}>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
        </div>
      </nav>
    </header>
  );
}
