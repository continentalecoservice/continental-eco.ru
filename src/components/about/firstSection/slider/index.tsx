import React, { useRef } from 'react';
// @ts-ignore
import Slider from "react-slick";

import Img1 from '../../../../images/slider/img1.jpg';
import ArrowLeftSVG from '../../../../images/svg/arrowLeft.svg';
import ArrowRightSVG from '../../../../images/svg/arrowRight.svg';
import styles from './styles/slider.module.css';

type SliderAboutDesinfectionType = {
  current: {
    slickNext: () => void
    slickPrev: () => void
  }
}
export const SliderAboutDesinfection = () => {
  // @ts-ignore
  const customSlider: SliderAboutDesinfectionType = useRef({});

  const settings = {
    speed: 500,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const next = () => {
    customSlider.current.slickNext();
  }
  const previous = () => {
    customSlider.current.slickPrev();
  }

  return (
    <div className={styles.sliderWrap}>
      <div className={styles.sliderItemsWrap}>
       {/* @ts-ignore */}
        <Slider ref={slider => customSlider.current = slider}
          {...settings}
        >
          <div>
            <div className={styles.item}>
              <div className={styles.imgWrap}>
                <img className={styles.img} src={Img1} />
              </div>
              <div>
                <h2 className={styles.title}>Дезинфекция</h2>
                <p className={styles.description}>уничтожение бактерий, грибков, вирусов, плесени</p>
                <a className={styles.more}>Подробнее</a>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.item}>
              <div className={styles.imgWrap}>
                <img className={styles.img} src={Img1} />
              </div>
              <div>
                <h2 className={styles.title}>Дезинфекция</h2>
                <p className={styles.description}>уничтожение бактерий, грибков, вирусов, плесени</p>
                <a className={styles.more}>Подробнее</a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className={styles.navigationOfSlider}>
        <button className={styles.navigationButton} onClick={previous}>
          <ArrowLeftSVG />
        </button>
        <button className={styles.navigationButton} onClick={next}>
          <ArrowRightSVG />
        </button>
      </div>
    </div>
  )
};
