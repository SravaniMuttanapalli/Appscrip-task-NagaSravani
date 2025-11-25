import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import FilterSidebar from "../components/FilterSidebar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products?limit=24");
  const data = await res.json();
  const products = data.map(p => ({
    id: p.id,
    title: p.title,
    price: p.price,
    description: p.description,
    image: p.image,
    alt: p.title.replace(/\s+/g, "-").toLowerCase()
  }));
  return { props: { products } };
}

export default function Home({ products }) {
  const [showSidebar, setShowSidebar] = useState(true);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Discover Our Products",
    "description": "A curated listing of products — bags, toys and accessories.",
    "hasPart": products.slice(0, 5).map(p => ({
      "@type": "Product",
      "name": p.title,
      "image": p.image,
      "description": p.description,
      "sku": String(p.id),
      "offers": {
        "@type": "Offer",
        "price": String(p.price),
        "priceCurrency": "USD"
      }
    }))
  };

  return (
    <>
      <Head>
        <title>Discover Our Products | Appscrip Task</title>
        <meta name="description" content="Discover our curated collection of bags, toys and accessories. Filter & sort to find products." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://your-deploy-url.com/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.pageTitle}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.lead}>Browse high quality, hand-picked products. Use filters to refine results.</p>
        <div className={styles.content}>
          {showSidebar ? (
            <aside className={styles.sidebar}>
              <FilterSidebar onHide={() => setShowSidebar(false)} />
            </aside>
          ) : (
            <button
              className={styles.showSidebarBtn}
              onClick={() => setShowSidebar(true)}
            >
              SHOW FILTER
            </button>
          )}
          <section className={styles.productsSection}>
            <div className={styles.toolbar}>
              <div className={styles.sort}>
                <label htmlFor="sort">Sort</label>
                <select id="sort" name="sort" defaultValue="recommended">
                  <option value="recommended">Recommended</option>
                  <option value="newest">Newest First</option>
                  <option value="popular">Popular</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="price-asc">Price: Low to High</option>
                </select>
              </div>
            </div>
            <ProductGrid products={products} />
          </section>
        </div>
      </main>
      {/* === Place footer at the bottom of your page === */}
      <Footer />
    </>
  );
}
