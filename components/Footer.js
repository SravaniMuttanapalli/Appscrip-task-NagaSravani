import styles from "../styles/Home.module.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Block: Newsletter and Contact/Currency */}
      <div className={styles.footerTopBar}>
        {/* Newsletter Section */}
        <div>
          <div className={styles.footerLabel}>BE THE FIRST TO KNOW</div>
          <div className={styles.footerDesc}>Sign up for updates from metta muse.</div>
          <form style={{ display: 'flex', gap: '0' }}>
            <input className={styles.newsInput} type="email" placeholder="Enter your e-mail..." />
            <button type="submit" className={styles.newsBtn}>Subscribe</button>
          </form>
        </div>
        {/* Contact/Currency Section */}
        <div>
          <div className={styles.footerLabel}>CONTACT US</div>
          <div className={styles.contactValue}>+44 221 133 5360</div>
          <div className={styles.contactValue}>customercare@mettamuse.com</div>
          <div className={styles.footerLabel} style={{marginTop: '16px'}}>CURRENCY</div>
          <div className={styles.currencyRow}>
            <span>
              <img 
                src="/images/usa-flag.png" 
                alt="USD"
                className={styles.flagIcon}
              />
              <span className={styles.dot}>•</span>
              <span className={styles.currencyCode}>USD</span>
            </span>
          </div>
          <div className={styles.currencyDesc}>
            Transactions will be completed in Euros and a currency reference is available on hover.
          </div>
        </div>
      </div>
      <hr className={styles.footerDivider} />

      {/* Main Columns: About, Quick Links, Social/Payment */}
      <div className={styles.footerMainRow}>
        <div className={styles.footerCol}>
          <div className={styles.footerLogo}>Metta muse</div>
          <Link href="/about" legacyBehavior><a>About Us</a></Link>
          <Link href="/stories" legacyBehavior><a>Stories</a></Link>
          <Link href="/shop" legacyBehavior><a>Shop</a></Link>
          <Link href="/skills" legacyBehavior><a>Skills</a></Link>
          <Link href="/contact" legacyBehavior><a>Contact Us</a></Link>
        </div>
        <div className={styles.footerCol}>
          <div className={styles.footerLabel}>QUICK LINKS</div>
          <a href="#">Orders & Shipping</a>
          <a href="#">Payment & Pricing</a>
          <a href="#">Return & Refunds</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className={styles.footerCol}>
          <div className={styles.footerLabel}>FOLLOW US</div>
          <div className={styles.footerSocials}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
          <div className={styles.footerLabel} style={{ marginTop: "16px" }}>metta muse ACCEPTS</div>
          <div className={styles.footerPayments}>
            <span role="img" aria-label="Visa">💳</span>
            <span role="img" aria-label="MasterCard">💳</span>
            <span role="img" aria-label="Amex">💳</span>
            <span role="img" aria-label="PayPal">🅿️</span>
            <span role="img" aria-label="Apple Pay">🍎</span>
            <span role="img" aria-label="Google Pay">🅖</span>
            <span role="img" aria-label="Bitcoin">₿</span>
            <span role="img" aria-label="UPI">💠</span>
          </div>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <div>© {new Date().getFullYear()} metta muse. All rights reserved</div>
      </div>
    </footer>
  );
}
