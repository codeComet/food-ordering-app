import Image from "next/image";
import styles from "../../styles/FoodItem.module.css";
import { HiPlus, HiMinus } from "react-icons/hi";

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
          <div className={styles.qty}>
            <HiPlus style={{ fontSize: "1.5rem", color: "limegreen" }} />
            <p>1</p>
            <HiMinus style={{ fontSize: "1.5rem", color: "red" }} />
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
