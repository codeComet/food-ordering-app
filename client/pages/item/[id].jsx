import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/FoodItem.module.css";
import { HiPlus, HiMinus } from "react-icons/hi";

const FoodItem = () => {
  const [count, setCount] = useState(1);
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(0);
  const food = {
    name: "BBQ Chicken Burger",
    price: {
      size: [10, 17, 30],
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, ipsam?",
    extras: ["Extra cheese", "Extra bacon", "Extra Sauce"],
  };

  useEffect(() => {
    if (count <= 1) setCount(1);
    if (count >= 10) setCount(10);
    setPrice(count * food.price.size[size]);
  }, [count]);

  const handleSizeClick = (index) => {
    setSize(index);
    setPrice(count * food.price.size[index]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/img/6.png"
          alt="food"
          width={300}
          height={300}
          objectFit="contain"
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.foodInfo}>
          <h1>{food.name}</h1>
          <p>{food.description}</p>
          <p>${price}</p>
        </div>
        <div className={styles.foodSize}>
          <div className={styles.size}>
            <p className={styles.extrasText}>Size</p>
            <div className={styles.sizeContainer}>
              <div
                className={styles.sizeItem}
                onClick={() => handleSizeClick(0)}
              >
                <p>Regular</p>
              </div>
              <div
                className={styles.sizeItem}
                onClick={() => handleSizeClick(1)}
              >
                <p>Premium</p>
              </div>
              <div
                className={styles.sizeItem}
                onClick={() => handleSizeClick(2)}
              >
                <p>Mega</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addOns}>
          <p className={styles.extrasText}>Add-ons (charges applicable)</p>
          <div className={styles.addOnsContainer}>
            {food.extras.map((item, index) => (
              <div className={styles.addOnItem} key={index}>
                <input type="checkbox" id={item} name={item} />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.qtyContainer}>
            <div className={styles.qty}>
              <HiMinus
                style={{ fontSize: "1.5rem", color: "red", cursor: "pointer" }}
                onClick={() => {
                  setCount(count - 1);
                }}
              />
              <p>{count}</p>
              <HiPlus
                style={{
                  fontSize: "1.5rem",
                  color: "limegreen",
                  cursor: "pointer",
                }}
                onClick={() => setCount(count + 1)}
              />
            </div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
