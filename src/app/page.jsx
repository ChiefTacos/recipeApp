"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero02.jpeg";
import Button from "@/components/Button/Button";
import Link from "next/link"; 

// import Video from "public/videos/video.webm";

export default function Home() {
  return (
    
    <div className={styles.container}>
      <div className={styles.item}>
      <Link href="/recipes/">
        <h1 className={styles.title}>
        
        
      
        Explore and 
        Share 🔥 Recipes
        </h1>
</Link>        
        <p className={styles.desc}>
          Click below to get started!
        </p>
        <Button  url="/dashboard" text="Log In"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img}  />
        
      </div>
    </div>
  );
}
