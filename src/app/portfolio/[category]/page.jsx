import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";
import Video from "public/videos/video.webm";
import Link from "next/link";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}><Link target="_blank" href="https://portfolio-six-pi-54.vercel.app/">
      <h1 className={styles.catTitle}>{params.category} <p className={styles.catTitlelink}>CLICK HERE FOR A LINK TO MY PORTFOLIO SITE</p></h1></Link>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
          <div className={styles.imgContainer}>
          {item.id === 4 ? (
            <video autoPlay muted loop className={styles.video}>
            <source src="/videos/video.webm" type="video/webm"/>
          </video>
          ) : (
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt=""
            />
          )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;