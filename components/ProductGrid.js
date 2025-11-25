import styles from "../styles/Home.module.css";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className={styles.grid}>
      {products.map(item => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
