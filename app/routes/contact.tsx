import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { Route } from "./+types/contact";
import { Navigation } from "~/components/navigation/navigation";
import { Footer } from "~/components/footer/footer";
import styles from "./contact.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us - Fusion IT Works" },
    {
      name: "description",
      content: "Get in touch with Fusion IT Works to discuss your company's digital marketing needs.",
    },
  ];
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Clear success message after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <div className={styles.page}>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroDescription}>
            Ready to elevate your hotel's digital presence? Let's start a conversation about your goals.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.formSection}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              {submitStatus === "success" && (
                <div className={styles.successMessage}>
                  Thank you for your message! We'll get back to you within 24 hours.
                </div>
              )}
              {submitStatus === "error" && (
                <div className={styles.errorMessage}>
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.input}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={styles.input}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.textarea}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoCard}>
                <h2 className={styles.infoTitle}>Contact Information</h2>
                <div className={styles.contactList}>
                  <div className={styles.contactItem}>
                    <Mail size={20} />
                    <div>
                      <strong>Email</strong>
                      <br />
                      Fusionitworks@gmail.com
                    </div>
                  </div>
                  <div className={styles.contactItem}>
                    <Phone size={20} />
                    <div>
                      <strong>Phone</strong>
                      <br />
                      +1 (555) 123-4567
                    </div>
                  </div>
                  <div className={styles.contactItem}>
                    <MapPin size={20} />
                    <div>
                      <strong>Address</strong>
                      <br />
                      123 Marketing Ave, Suite 100
                      <br />
                      New York, NY 10001
                    </div>
                  </div>
                  <div className={styles.contactItem}>
                    <Clock size={20} />
                    <div>
                      <strong>Business Hours</strong>
                      <br />
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                      <br />
                      Saturday - Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.infoCard}>
                <h2 className={styles.infoTitle}>What to Expect</h2>
                <p style={{ color: "var(--color-neutral-11)", lineHeight: "var(--font-lineheight-3)", margin: 0 }}>
                  When you reach out to us, we'll respond within 24 hours to schedule a consultation. During our initial
                  conversation, we'll discuss your hotel's unique challenges, goals, and how our digital marketing
                  services can help you achieve measurable results.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
