
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import World from "public/favicon-32x32.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <span>2023</span>
        <Image src={World} alt="" className={styles.img} />
        <span>Michael Murray</span>
      </div>
    </div>
  );
};

export default Footer;
