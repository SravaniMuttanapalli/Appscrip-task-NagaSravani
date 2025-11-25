import { useState } from "react";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  // Track if this product is wishlisted (clicked)
  const [wish, setWish] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={product.image} alt={product.alt} />
      </div>
      <div className={styles.meta}>
        <h4 className={styles.title}>{product.title}</h4>
        <div className={styles.row}>
          <div className={styles.price}>${product.price}</div>
          <button
            className={wish ? styles.likeFilled : styles.like}
            onClick={() => setWish((prev) => !prev)}
            aria-label={wish ? "Remove from wishlist" : "Add to wishlist"}
            type="button"
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  );
}
