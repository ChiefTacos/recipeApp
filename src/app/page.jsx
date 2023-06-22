"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Boop dee doop dee doop
        </h1>
        <p className={styles.desc}>
          Lemme tell ya something
        </p>
        <Button url="/dashboard" text="Log In"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
