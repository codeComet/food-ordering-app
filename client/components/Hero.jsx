import styles from "../styles/Hero.module.css";
import { useState } from "react";
import Image from "next/image";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Hero = () => {
  const [slide, setSlide] = useState(0);
  const images = ["/img/10.png", "/img/11.png", "/img/12.png", "/img/13.png"];

  const handleArrowClick = (direction) => {
    if (direction == "l") {
      setSlide(slide !== 0 ? slide - 1 : 3);
    } else {
      setSlide(slide !== 3 ? slide + 1 : 0);
    }
  };
  //console.log(slide);
  return (
    <div className={styles.container}>
      <div className={styles.arrow}>
        <BsFillArrowLeftCircleFill
          style={{ marginRight: "10px" }}
          onClick={() => handleArrowClick("l")}
        />
        <BsFillArrowRightCircleFill onClick={() => handleArrowClick("r")} />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translate(${-100 * slide}vw)` }}
      >
        {images.map((image, index) => (
          <div className={styles.imgContainer} key={index}>
            <Image src={image} layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
