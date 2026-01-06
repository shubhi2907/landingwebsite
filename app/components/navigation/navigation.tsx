import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import styles from "./navigation.module.css";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
        Fusion IT Works
        </NavLink>
        <nav className={styles.nav}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}>
            Services
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}>
            Portfolio
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
