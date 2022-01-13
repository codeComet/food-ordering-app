import Image from "next/image";
import styles from "../../styles/FoodItem.module.css";

const FoodItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/img/1.jpg"
          alt="food"
          width={300}
          height={300}
          objectFit="contain"
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.foodInfo}>
          <h1>Food Name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            nesciunt quo vitae perspiciatis soluta id repudiandae facere magnam
            dolor sint.
          </p>
          <p>$10.00</p>
        </div>
        <div className={styles.buttonContainer}>
          <input type="number" />
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
