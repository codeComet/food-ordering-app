import styles from "../styles/Special.module.css";
import Item from "./Item";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

SwiperCore.use([Pagination]);

const Special = () => {
  return (
    <div className={styles.container}>
      <div className={styles.special_title}>
        <h2>Our Specials</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc.
        </p>
      </div>
      <div className={styles.special_container}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 4.5,
              spaceBetween: 60,
            },
          }}
          className={styles.swiper}
        >
          <SwiperSlide>
            <div className={styles.special_item}>
              <Item />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.special_item}>
              <Item />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.special_item}>
              <Item />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.special_item}>
              <Item />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.special_item}>
              <Item />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.special_item}>
              <Item />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.soon_container}>
              <p>More are coming soon</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Special;
