import Image from "next/image";
import styles from "../../styles/FoodItem.module.css";

const FoodItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/img/1.jpg" alt="food" width={300} height={300} />
      </div>
    </div>
  );
};

export default FoodItem;
