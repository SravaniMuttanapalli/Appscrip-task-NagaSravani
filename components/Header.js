import styles from "../styles/Home.module.css";
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiChevronDown } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Top bar with left icon, center logo, right actions */}
      <div className={styles.headerBar}>
        <FiMenu className={styles.menuIcon} />
        <div className={styles.logo}>LOGO</div>
        <div className={styles.headerActions}>
          <FiSearch />
          <FaHeart style={{ margin: "0 18px" }} />
          <FiShoppingCart />
          <FiUser />
          <span className={styles.lang}>
            ENG <FiChevronDown className={styles.langArrow} />
          </span>
        </div>
      </div>
      {/* Navigation bar - centered below logo */}
      <nav className={styles.navBar}>
        <Link href="/shop" legacyBehavior><a>SHOP</a></Link>
        <Link href="/skills" legacyBehavior><a>SKILLS</a></Link>
        <Link href="/stories" legacyBehavior><a>STORIES</a></Link>
        <Link href="/about" legacyBehavior><a>ABOUT</a></Link>
        <Link href="/contact" legacyBehavior><a>CONTACT US</a></Link>
      </nav>
    </header>
  );
}
