import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Magdalena</h1>
        <p className={styles.description}>
          I'm a frontend developer with experience in React and Typescript.
          Reach out if you would like to learn more!
        </p>
        <a href="mailto:mxkosinska@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="assets/hero/realpic.png"
        alt="hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};