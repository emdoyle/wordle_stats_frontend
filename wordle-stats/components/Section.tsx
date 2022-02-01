import React from "react";
import styles from "../styles/Home.module.css";

export const Section: React.FC<{ title: string; description: string }> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.section_left}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.section_right}>{children}</div>
    </div>
  );
};
