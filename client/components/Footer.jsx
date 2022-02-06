import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import restaurant from "../public/img/restaurant.jpg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerImg}>
        <Image src={restaurant} width={300} height={300} objectFit="contain" />
      </div>
      <div className={styles.footerText}>
        <div className={styles.location}>
          <h3 style={{ color: "white" }}>Where to find us</h3>
          <p></p>
        </div>
        <div className={styles.pages}>
          <h3 style={{ color: "white" }}>Blogs</h3>
        </div>
        <div className={styles.newsletter}>
          <h3 style={{ color: "white" }}>Subscribe to newsletter</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
