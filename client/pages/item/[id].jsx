import Image from "next/image";
import styles from "../../styles/FoodItem.module.css";

const FoodItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/img/1.jpg" alt="food" width={300} height={300} />
      </div>
      <div className={styles.infoContainer}>
        <h1>Food Name</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          numquam?
        </p>
        <p>$10.00</p>
      </div>
      <div className={styles.buttonContainer}>
        <input type="number" />
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default FoodItem;
