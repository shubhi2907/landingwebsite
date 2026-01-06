import { Search, Share2, FileText, Layout, Mail, Target, Check } from "lucide-react";
import type { Route } from "./+types/services";
import { Navigation } from "~/components/navigation/navigation";
import { Footer } from "~/components/footer/footer";
import { services } from "~/data/services";
import styles from "./services.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Services - Fusion IT Works" },
    {
      name: "description",
      content:
        "Comprehensive digital marketing services for hotels and resorts including SEO, social media, content marketing, and more.",
    },
  ];
}

const iconMap = {
  Search,
  Share2,
  FileText,
  Layout,
  Mail,
  Target,
};

export default function Services() {
  return (
    <div className={styles.page}>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Our Services</h1>
          <p className={styles.heroDescription}>
            Specialized digital marketing solutions designed to help hotels and resorts thrive in the digital age.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.servicesGrid}>
              {services.map((service) => {
                const IconComponent = iconMap[service.icon as keyof typeof iconMap];
                return (
                  <div key={service.id} className={styles.serviceCard}>
                    <div className={styles.serviceHeader}>
                      <div className={styles.serviceIcon}>
                        <IconComponent size={28} />
                      </div>
                      <div className={styles.serviceInfo}>
                        <h2 className={styles.serviceTitle}>{service.title}</h2>
                        <p className={styles.serviceDescription}>{service.description}</p>
                      </div>
                    </div>
                    <ul className={styles.featuresList}>
                      {service.features.map((feature, index) => (
                        <li key={index} className={styles.featureItem}>
                          <Check size={20} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
