import styles from "../styles/Special.module.css";
import Item from "./Item";
import { Carousel } from "@trendyol-js/react-carousel";

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
        <Carousel
          show={4.5}
          slide={5}
          swiping={true}
          transition={1}
          useArrowKeys={true}
          rightArrow={false}
        >
          <div className={styles.special_item}>
            <Item />
          </div>
          <div className={styles.special_item}>
            <Item />
          </div>
          <div className={styles.special_item}>
            <Item />
          </div>
          <div className={styles.special_item}>
            <Item />
          </div>
          <div className={styles.special_item}>
            <Item />
          </div>
          <div className={styles.special_item}>
            <Item />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Special;
