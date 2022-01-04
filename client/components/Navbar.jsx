import React from "react";
import styles from "../styles/Navstyle.module.css";
import { BsTelephoneOutbound } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h3>Foodify</h3>
      </div>
      <div className={styles.nav}>
        <div className={styles.navitem}>
          <BsTelephoneOutbound /> <span>123 456 665</span>
          <a href="#"> To order</a>
        </div>
        <div className={styles.navitem}>
          <a href="#">Home</a>
        </div>
        <div className={styles.navitem}>
          <a href="#">Home</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
