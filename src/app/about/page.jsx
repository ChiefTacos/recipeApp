import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://i.ibb.co/71XXzMC/about-Page-Landscape.jpg"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Michael Murray</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting superb digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <br />
          <h1 className={styles.title}>Who Am I?</h1>
          <p className={styles.desc}>
          I am a young web developer with multiple years learning about graphic design, web development, and 3D design. Currently I’m studying Software Engineering at my local community college (CLC). I love to create interactive works of art that utilize all points of my imagination. I take pride in my creative endeavors; starting a YouTube channel young, diving in on my own into the fast-paced world of web development, and creating memorable works of art. 

            <br />
            <br />
            <h1 className={styles.title}></h1>
            After spending the last 6 months or so learning Blender and how much it has to offer as a tool for web developers, I am now focusing on creating full-stack applications running in a production environment. 
This current product you are currently using is a Recipe App that allows users to login and create recipes with their accounts hosted from my back-end. It utilizes the most recent version of NextJS and the latest version of React to make it much easier to focus on delivering a smooth and unique user-experience.

          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What I Do?</h1>
          <p className={styles.desc}>
            My passion is working in a fast-paced enviorment within the world of tech. I am working as a cook at a local restaurant while going to school full-time. For my free time I like to create websites that test my creativity and entice my imagination. 
            <br />
            <br /> 
            
            Going on I will look to gain my first client by making a website for the restaurant I work at. More importantly I am looking to intern somewhere to showcase my compelling work-ethic and technical skills. Hopefully I can get offered to work someplace I can stay or meet some good connections.
            <br />
            <br />
            Something else about me is I am a dual-citzien of The United States and Germany and am willing to relocate for an oppurtunity.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
