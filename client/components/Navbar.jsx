import React from "react";
import styles from "../styles/Navstyle.module.css";
import { BsTelephoneOutbound } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <>
        <div className={styles.nav}>
          <div className={styles.num_container}>
            <BsTelephoneOutbound
              style={{ margin: "5px 5px 0px 0px", color: "#fff" }}
            />{" "}
            <span className={styles.number}>123 456 665</span>
            <span className={styles.number}> To order</span>
          </div>
          <div className={styles.navitem}>
            <a href="#">Specials</a>
          </div>
          <div className={styles.navitem}>
            <a href="#">Menu</a>
          </div>
        </div>
      </>
      <div className={styles.logo}>
        <a href="/">Foodify</a>
      </div>
      <>
        <div className={styles.nav}>
          <div className={styles.navitem}>
            <a href="#">Products</a>
          </div>
          <div className={styles.navitem}>
            <a href="#">Blog</a>
          </div>
          <div className={styles.navitem}>
            <a href="#">Contact us</a>
          </div>
        </div>
      </>
    </div>
  );
};

export default Navbar;
