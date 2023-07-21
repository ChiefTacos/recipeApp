import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Email from "@/components/Email/Email";

export const metadata = {
  title: "sirmur Contact Information",
  description: "Email me to get in touch!",
};

const Contact = async () =>{
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Connect</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/face.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <Email />
      </div>
    </div>
  );
};

export default Contact;
