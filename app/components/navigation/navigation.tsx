import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import styles from "./navigation.module.css";
//Import Mixpanel SDK
import mixpanel from "mixpanel-browser";

// Create an instance of the Mixpanel object, your token is already added to this snippet
mixpanel.init('663eefe93c01d6d88eb56cd64c6cbaa3', {
  autocapture: true,
  record_sessions_percent: 100,
})

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
