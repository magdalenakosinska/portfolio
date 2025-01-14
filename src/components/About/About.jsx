import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Passionate about building responsive web applications with React
                and TypeScript, focusing on clean code and seamless user
                experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>API Integration</h3>
              <p>
                Experienced in integrating APIs to build dynamic, data-driven
                web applications, ensuring smooth communication between frontend
                and backend.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Cloud</h3>
              <p>
                Skilled in Azure cloud services, including deployment, scaling,
                and managing applications in the cloud for improved performance
                and reliability.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Low-code Developer</h3>
              <p>
                Proficient in designing low-code applications using platforms
                like Power Platform, while ensuring custom frontend solutions
                when needed.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
