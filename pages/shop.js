import styles from "../styles/Home.module.css"; // or your shop.module.css

export default function Shop() {
  // Include price with each product
  const products = [
    { id: 1, name: "LipStick", cost: 19, img: "/images/product1.jpg" },
    { id: 2, name: "Laptop", cost: 399, img: "/images/product2.jpg" },
    { id: 3, name: "Bottle", cost: 29, img: "/images/product3.jpg" },
    { id: 4, name: "Clothes", cost: 99, img: "/images/story2.jpg" }
  ];

  return (
    <main className={styles.shopMain}>
      <h1 className={styles.shopHeading}>DISCOVER OUR PRODUCTS</h1>
      <p className={styles.shopSubhead}>
        Browse high quality, hand-picked products. Use filters to refine results.
      </p>
      <div className={styles.productGrid}>
        {products.map(prod => (
          <div className={styles.productCard} key={prod.id}>
            <img src={prod.img} alt={prod.name} className={styles.productImage} />
            <div className={styles.productName}>{prod.name}</div>
            <div className={styles.productCost}>$ {prod.cost}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
