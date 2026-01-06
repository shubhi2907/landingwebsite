import { TrendingUp } from "lucide-react";
import type { Route } from "./+types/portfolio";
import { Navigation } from "~/components/navigation/navigation";
import { Footer } from "~/components/footer/footer";
import { portfolioItems } from "~/data/portfolio";
import styles from "./portfolio.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio - Fusion IT Works" },
    {
      name: "description",
      content: "Explore our successful digital marketing campaigns and case studies for New Fusion IT Works.",
    },
  ];
}

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Our Portfolio</h1>
          <p className={styles.heroDescription}>
            Discover how we've helped Business achieve remarkable results through strategic digital marketing.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.portfolioGrid}>
              {portfolioItems.map((item) => (
                <div key={item.id} className={styles.portfolioCard}>
                  <div className={styles.imageContainer}>
                    <img src={item.image} alt={item.title} className={styles.image} />
                    <span className={styles.category}>{item.category}</span>
                  </div>
                  <div className={styles.cardContent}>
                    <p className={styles.client}>{item.client}</p>
                    <h2 className={styles.title}>{item.title}</h2>
                    <p className={styles.description}>{item.description}</p>
                    <ul className={styles.results}>
                      {item.results.map((result, index) => (
                        <li key={index} className={styles.resultItem}>
                          <TrendingUp size={16} />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
