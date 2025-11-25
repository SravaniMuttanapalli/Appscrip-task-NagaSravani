import { useState } from "react";
import styles from "../styles/Home.module.css";

const SORT_OPTIONS = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE : HIGH TO LOW",
  "PRICE : LOW TO HIGH",
];

export function SortDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(SORT_OPTIONS[0]);

  return (
    <div className={styles.sortDropdown}>
      <div className={styles.sortLabel} onClick={() => setOpen(!open)}>
        {selected} ▼
      </div>
      {open && (
        <div className={styles.sortMenu}>
          {SORT_OPTIONS.map(option => (
            <div
              key={option}
              className={styles.sortOption}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              style={{
                fontWeight: selected === option ? "bold" : "normal",
                position: "relative",
              }}
            >
              {selected === option && <span className={styles.checkmark}>✔ </span>}
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
