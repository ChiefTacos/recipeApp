"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Oranges from "public/oranges.svg";
import Button from "@/components/Button/Button";
import Video from "public/videos/video.webm";

export default function Home() {
  return (
    
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
        Explore and Share Global Recipes
        </h1>
        <p className={styles.desc}>
          Click below to get started!
        </p>
        <Button  url="/dashboard" text="Log In"/>
      </div>
      <div className={styles.item}>
        <Image src={Oranges} alt="" className={styles.img} />
        {/* <video autoPlay muted style={{ width: '500px', height: '500px' }}>
  <source src="/videos/video.webm" type="video/webm"/>
</video> */}
      </div>
    </div>
  );
}
