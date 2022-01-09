import styles from "../styles/Menu.module.css";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Our</h1>
        <span>Menu</span>
      </div>
      <div className={styles.menu}>
        <div className={styles.menuItem}>
          <div className={styles.menuItemTitle}>
            <h2>Breakfast</h2>
          </div>
          <div className={styles.menuItemList}>
            <div className={styles.breakfastItem}>
              <Image
                src="/img/8.png"
                alt="breakfast1"
                width={120}
                height={120}
                objectFit="contain"
              />
              <div className={styles.breakfastItemDesc}>
                <h3>Grilled Beef with potatoes</h3>
                <p>Meat, Potatoes, Rice, Tomatoe</p>
              </div>
              <div className={styles.price}>
                <p>$19</p>
              </div>
            </div>
            <div className={styles.breakfastItem}>
              <Image
                src="/img/7.png"
                alt="breakfast1"
                width={120}
                height={120}
                objectFit="contain"
              />
              <div className={styles.breakfastItemDesc}>
                <h3>Grilled Beef with potatoes</h3>
                <p>Meat, Potatoes, Rice, Tomatoe</p>
              </div>
              <div className={styles.price}>
                <p>$19</p>
              </div>
            </div>
            <div className={styles.breakfastItem}>
              <Image
                src="/img/6.png"
                alt="breakfast1"
                width={120}
                height={120}
                objectFit="contain"
              />
              <div className={styles.breakfastItemDesc}>
                <h3>Grilled Beef with potatoes</h3>
                <p>Meat, Potatoes, Rice, Tomatoe</p>
              </div>
              <div className={styles.price}>
                <p>$19</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.menuItemTitle}>
            <h2>Lunch</h2>
          </div>
          <div className={styles.menuItemList}>
            <div className={styles.breakfastItem}>
              <Image
                src="/img/8.png"
                alt="breakfast1"
                width={120}
                height={120}
                objectFit="contain"
              />
              <div className={styles.breakfastItemDesc}>
                <h3>Grilled Beef with potatoes</h3>
                <p>Meat, Potatoes, Rice, Tomatoe</p>
              </div>
              <div className={styles.price}>
                <p>$19</p>
              </div>
            </div>
            <div className={styles.breakfastItem}>
              <Image
                src="/img/7.png"
                alt="breakfast1"
                width={120}
                height={120}
                objectFit="contain"
              />
              <div className={styles.breakfastItemDesc}>
                <h3>Grilled Beef with potatoes</h3>
                <p>Meat, Potatoes, Rice, Tomatoe</p>
              </div>
              <div className={styles.price}>
                <p>$19</p>
              </div>
            </div>
            <div className={styles.breakfastItem}>
              <Image
                src="/img/6.png"
                alt="breakfast1"
                width={120}
                height={120}
                objectFit="contain"
              />
              <div className={styles.breakfastItemDesc}>
                <h3>Grilled Beef with potatoes</h3>
                <p>Meat, Potatoes, Rice, Tomatoe</p>
              </div>
              <div className={styles.price}>
                <p>$19</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.menuItemTitle}>
            <h2>Dinner</h2>
          </div>
          <div className={styles.menuItemList}>
            <div className={styles.breakfastItem}>
              <Image
                src="/img/8.png"
                alt="breakfast1"
                width={120}
                height={120}
                objectFit="contain"
              />
              <div className={styles.breakfastItemDesc}>
                <h3>Grilled Beef with potatoes</h3>
                <p>Meat, Potatoes, Rice, Tomatoe</p>
              </div>
              <div className={styles.price}>
                <p>$19</p>
              </div>
            </div>
            <div className={styles.breakfastItem}>
              <Image
                src="/img/7.png"
                alt="breakfast1"
                width={120}
                height={120}
                objectFit="contain"
              />
              <div className={styles.breakfastItemDesc}>
                <h3>Grilled Beef with potatoes</h3>
                <p>Meat, Potatoes, Rice, Tomatoe</p>
              </div>
              <div className={styles.price}>
                <p>$19</p>
              </div>
            </div>
            <div className={styles.breakfastItem}>
              <Image
                src="/img/6.png"
                alt="breakfast1"
                width={120}
                height={120}
                objectFit="contain"
              />
              <div className={styles.breakfastItemDesc}>
                <h3>Grilled Beef with potatoes</h3>
                <p>Meat, Potatoes, Rice, Tomatoe</p>
              </div>
              <div className={styles.price}>
                <p>$19</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
