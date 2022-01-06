import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/Hero.module.css";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import Image from "next/image";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const timeOut = useRef(null);
  const slider = [
    {
      image: "/img/2.jpg",
      alt: "image",
      label: "Food",
      title: "biryani",
      price: "$33",
    },
  ];
  const length = slider.length;

  //   useEffect(() => {
  //     const nextSlide = () => {
  //       setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  //     };
  //     timeOut.current = setTimeout(nextSlide, 3000);
  //     return function () {
  //       if (timeOut.current) {
  //         clearTimeout(timeOut.current);
  //       }
  //     };
  //   }, [current, length]);

  const nextSlide = () => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slider) || slider.length <= 0) return null;

  return (
    <div className={styles.HeroSection}>
      <div className={styles.HeroWrapper}>
        {slider.map((slide, idx) => {
          return (
            <div className={styles.HeroSlide} key={idx}>
              {idx === current && (
                <div className={styles.HeroSlider}>
                  <Image
                    className={styles.HeroImage}
                    src={slide.image}
                    alt={slide.alt}
                    width="100%"
                    height="100%"
                  />
                  <div className={styles.HeroContent}>
                    <h1>{slide.title}</h1>
                    <p>{slide.price}</p>
                    <button className="contact-btn">
                      {slide.label} <div className={styles.Arrow} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div className={styles.SliderButtons}>
          <IoArrowBack className={styles.PrevArrow} onClick={prevSlide} />
          <IoArrowForward className={styles.NextArrow} onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
