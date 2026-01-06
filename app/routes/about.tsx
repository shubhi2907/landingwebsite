import { Target, Users, Award, TrendingUp } from "lucide-react";
import type { Route } from "./+types/about";
import { Navigation } from "~/components/navigation/navigation";
import { Footer } from "~/components/footer/footer";
import styles from "./about.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - Fusion IT Works" },
    {
      name: "description",
      content: "Learn about Fusion IT Works's mission to help Company succeed in the digital age.",
    },
  ];
}

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We focus on measurable outcomes that directly impact your bottom line, from increased direct bookings to improved online visibility.",
  },
  {
    icon: Users,
    title: "Marketing Expertise",
    description:
      "Our team specializes exclusively in the Marketing industry, understanding the unique challenges and opportunities companies face.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "We deliver premium digital marketing services that reflect the high standards of the Comapany brands we serve.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description:
      "We stay ahead of digital marketing trends to ensure our clients benefit from the latest strategies and technologies.",
  },
];

export default function About() {
  return (
    <div className={styles.page}>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>About Fusion IT Works</h1>
          <p className={styles.heroDescription}>
            Your trusted partner in  digital marketing, dedicated to driving growth and success for Company
            and  worldwide.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Our Story</h2>
              <p className={styles.text}>
                Fusion IT Works was founded with a singular vision: to help hotels and resorts thrive in the digital
                age. We recognized that the industry needed specialized digital marketing expertise that
                understood the unique challenges of driving direct bookings, managing online reputation, and competing
                in an increasingly digital marketplace.
              </p>
              <p className={styles.text}>
                Since our inception, we've worked with properties ranging from boutique hotels to large resort chains,
                helping them achieve remarkable growth in online visibility, guest engagement, and revenue. Our team
                combines deep hospitality industry knowledge with cutting-edge digital marketing expertise to deliver
                results that matter.
              </p>
              <p className={styles.text}>
                Today, we're proud to be a trusted partner to companies around the world, helping them navigate
                the complexities of digital marketing and achieve sustainable growth in an ever-evolving landscape.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Our Mission & Values</h2>
              <p className={styles.text}>
                Our mission is to empower hotels and resorts to maximize their digital potential, reduce dependence on
                third-party booking platforms, and build direct relationships with their guests. We believe in
                transparent partnerships, measurable results, and continuous innovation.
              </p>

              <div className={styles.valuesList}>
                {values.map((value) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={value.title} className={styles.valueCard}>
                      <div className={styles.valueHeader}>
                        <div className={styles.valueIcon}>
                          <IconComponent size={20} />
                        </div>
                        <h3 className={styles.valueTitle}>{value.title}</h3>
                      </div>
                      <p className={styles.valueDescription}>{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.stats}>
              <div className={styles.statCard}>
                <p className={styles.statNumber}>150+</p>
                <p className={styles.statLabel}>Hotels Served</p>
              </div>
              <div className={styles.statCard}>
                <p className={styles.statNumber}>$50M+</p>
                <p className={styles.statLabel}>Revenue Generated</p>
              </div>
              <div className={styles.statCard}>
                <p className={styles.statNumber}>98%</p>
                <p className={styles.statLabel}>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
