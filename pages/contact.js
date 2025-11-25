import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <main className={styles.contactMain}>
      <h1 className={styles.contactHeading}>Contact Us</h1>
      <div className={styles.contactGrid}>
        {/* Contact Details */}
        <section className={styles.contactDetails}>
          <div>
            <span className={styles.contactLabel}>Email:</span>
            customercare@mettamuse.com
          </div>
          <div>
            <span className={styles.contactLabel}>Phone:</span>
            +44 221 133 5360
          </div>
          <div>
            <span className={styles.contactLabel}>Address:</span>
            2nd Floor, Metta muse, USA
          </div>
          <div className={styles.contactExtraNote}>
            We're here to help — expect a response within 24 hours on working days.
          </div>
        </section>

        {/* Contact Form */}
        <section className={styles.contactFormSection}>
          <h2 className={styles.contactSubHead}>Send Us a Message</h2>
          <form className={styles.contactForm}>
            <input className={styles.contactInput} type="text" placeholder="Your Name" />
            <input className={styles.contactInput} type="email" placeholder="Your Email" />
            <textarea className={styles.contactMessage} placeholder="Your message" rows={4}></textarea>
            <button className={styles.contactSubmitBtn} type="submit">Submit</button>
          </form>
        </section>
      </div>
    </main>
  );
}
