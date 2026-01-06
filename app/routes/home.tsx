import { Link } from "react-router";
import { Search, Share2, FileText, Layout, Mail, Target } from "lucide-react";
import type { Route } from "./+types/home";
import { Navigation } from "~/components/navigation/navigation";
import { Footer } from "~/components/footer/footer";
import { Button } from "~/components/ui/button/button";
import { testimonials } from "~/data/testimonials";
import styles from "./home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Fusion IT Works - Digital Marketing for New Businesses" },
    {
      name: "description",
      content:
        "Specialized digital marketing services for New Businesses. Drive direct Conversions and grow your online presence.",
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

const services = [
  {
    icon: "Search",
    title: "SEO",
    description: "Boost your Business visibility in search results and attract more direct bookings.",
  },
  {
    icon: "Share2",
    title: "Social Media",
    description: "Engage guests and build your brand presence across social platforms.",
  },
  {
    icon: "FileText",
    title: "Content Marketing",
    description: "Tell your Business unique story through high-quality content.",
  },
  {
    icon: "Layout",
    title: "Web Design",
    description: "Create stunning, conversion-optimized websites for your property.",
  },
  {
    icon: "Mail",
    title: "Email Marketing",
    description: "Nurture guest relationships and drive repeat bookings.",
  },
  {
    icon: "Target",
    title: "PPC Advertising",
    description: "Maximize ROI with targeted advertising campaigns.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Navigation />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Digital Marketing for the New Business Industry</h1>
            <p className={styles.heroDescription}>
              We help New Business grow their online presence, drive direct bookings, and maximize revenue through
              specialized digital marketing strategies.
            </p>
            <div className={styles.heroCta}>
              <Button asChild size="lg">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className={styles.servicesOverview}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Our Services</h2>
              <p className={styles.sectionDescription}>
                Comprehensive digital marketing solutions designed specifically for all industry.
              </p>
            </div>
            <div className={styles.servicesGrid}>
              {services.map((service) => {
                const IconComponent = iconMap[service.icon as keyof typeof iconMap];
                return (
                  <div key={service.title} className={styles.serviceCard}>
                    <div className={styles.serviceIcon}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
              <p className={styles.sectionDescription}>
                Trusted by leading Business to deliver exceptional results.
              </p>
            </div>
            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={styles.testimonialCard}>
                  <p className={styles.quote}>"{testimonial.quote}"</p>
                  <div className={styles.author}>
                    <img src={testimonial.avatar} alt={testimonial.author} className={styles.avatar} />
                    <div className={styles.authorInfo}>
                      <p className={styles.authorName}>{testimonial.author}</p>
                      <p className={styles.authorPosition}>
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Ready to Grow Your Business Online Presence?</h2>
            <p className={styles.ctaDescription}>
              Let's discuss how we can help you achieve your digital marketing goals and drive more direct Conversions.
            </p>
            <Link to="/contact" className={styles.ctaButton}>
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
