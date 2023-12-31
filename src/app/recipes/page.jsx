import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
async function getData() {
  const res = await fetch("https://www.sirmur.com/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    // throw new Error("Failed to fetch data");
    return notFound();
  }

  return res.json();
}

const Recipes = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainHeader}>World Class Cuisines and Pastries</h1>
      <h3 className={styles.mainSubheader}>Feel free to add as many different recipes as you want! </h3>
      {data.map((item) => (
        <Link href={`/recipes/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recipes;
