import Image from "next/image";
import styles from "../styles/Item.module.css";

const Item = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/img/1.jpg"
          alt="item"
          width={250}
          height={250}
          objectFit="contain"
        />
      </div>
      <div className={styles.description}>
        <h3>Beef Steak</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          explicabo!
        </p>
      </div>
    </div>
  );
};

export default Item;
