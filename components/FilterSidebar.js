import styles from "../styles/Home.module.css";
import { useState } from "react";

const filters = [
  { title: "IDEAL FOR", options: ["All", "Men", "Women", "Unisex"] },
  { title: "OCCASION", options: ["All", "Party", "Work", "Casual"] },
  { title: "WORK", options: ["All", "Embroidered", "Knitted"] },
  { title: "FABRIC", options: ["All", "Cotton", "Linen", "Silk"] },
  { title: "SEGMENT", options: ["All", "Premium", "Casual"] },
  { title: "SUITABLE FOR", options: ["All", "Summer", "Winter"] },
  { title: "RAW MATERIALS", options: ["All", "Cotton", "Synthetic"] },
  { title: "PATTERN", options: ["All", "Solid", "Striped", "Printed"] },
];

// NOTE: Accept onHide as a prop!
export default function FilterSidebar({ onHide }) {
  const [open, setOpen] = useState(filters.map(() => false));

  const toggle = idx =>
    setOpen(open.map((flag, i) => (i === idx ? !flag : flag)));

  return (
    <div className={styles.filterWrap}>
      {/* Figma-style filter top bar */}
      <div className={styles.sidebarTop}>
        <span className={styles.sidebarCount}>3425 ITEMS</span>
        <a
          className={styles.sidebarHide}
          href="#"
          onClick={e => {
            e.preventDefault();
            if (onHide) onHide(); // <-- This triggers hide in main page
          }}
        >
          HIDE FILTER
        </a>
      </div>
      <h3 className={styles.filterTitle}>Filters</h3>
      <div className={styles.filterAdvanced}>
        {/* Customizable checkbox */}
        <label className={styles.filterItem}>
          <input type="checkbox" /> CUSTOMIZABLE
        </label>
        {/* Accordion filter sections */}
        {filters.map((cat, idx) => (
          <div key={cat.title} className={styles.filterGroup}>
            <div
              className={styles.filterGroupTitle}
              onClick={() => toggle(idx)}
              style={{ cursor: "pointer", userSelect: "none" }}
            >
              {cat.title} {open[idx] ? "▲" : "▼"}
            </div>
            {open[idx] && (
              <div>
                <div className={styles.filterUnselect}>
                  <a href="#">Unselect all</a>
                </div>
                {cat.options.map(opt => (
                  <label key={opt} className={styles.filterItem}>
                    <input type="checkbox" /> {opt}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
