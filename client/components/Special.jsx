import styles from "../styles/Special.module.css";
import Item from "./Item";
import Carousel from "react-grid-carousel";

const Special = () => {
  return (
    <div className={styles.container}>
      <div className={styles.special_title}>
        <h2>Our Specials</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget
          consectetur nisl nisi eget.
        </p>
      </div>
      <div className={styles.special_container}>
        <Carousel cols={5} rows={1} gap={0} loop>
          <Carousel.Item>
            <div className={styles.special_item}>
              <Item />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.special_item}>
              <Item />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.special_item}>
              <Item />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.special_item}>
              <Item />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.special_item}>
              <Item />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.special_item}>
              <Item />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.special_item}>
              <Item />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Special;
