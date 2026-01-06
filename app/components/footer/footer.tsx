import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import classNames from "classnames";
import styles from "./footer.module.css";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={classNames(styles.footer, className)}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Fusion IT Works</h3>
            <p>
            ✨ "Specialized digital marketing services for new businesses. We help startups and growing brands build their online presence, attract customers directly, and accelerate growth."
            </p>
          </div>

          <div className={styles.section}>
            <h3>Quick Links</h3>
            <div className={styles.links}>
              <Link to="/" className={styles.link}>
                Home
              </Link>
              <Link to="/services" className={styles.link}>
                Services
              </Link>
              <Link to="/portfolio" className={styles.link}>
                Portfolio
              </Link>
              <Link to="/about" className={styles.link}>
                About Us
              </Link>
              <Link to="/contact" className={styles.link}>
                Contact
              </Link>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Contact Us</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Mail size={18} />
                <span>fusionitworks@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={18} />
                <span>123 Marketing Ave, Suite 100</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()}2026 Fusion IT Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
