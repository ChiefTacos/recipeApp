import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/personal" className={styles.item}>
          <span className={styles.title}>Personal Portfolio</span>
        </Link>
        
        <Link href="/portfolio/renders" className={styles.item}>
          <span className={styles.title}>3D Renders</span>
        </Link>
        
      </div>
    </div>
  );
};

export default Portfolio;