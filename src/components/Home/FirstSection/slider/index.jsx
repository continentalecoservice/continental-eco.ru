import { Link } from 'gatsby';
import React, { useRef } from 'react';
import Slider from "react-slick";

import Img1 from '../../../../images/slider/img1.jpg';
import ArrowLeftSVG from '../../../../images/svg/arrowLeft.svg';
import ArrowRightSVG from '../../../../images/svg/arrowRight.svg';

import * as styles from './sliderAboutDesinfection.module.css';

export const SliderAboutDesinfection = () => {
  const customSlider = useRef({});

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
        <Slider ref={slider => customSlider.current = slider}
          {...settings}
        >
          <div>
            <div className={styles.item}>
              <div className={styles.imgWrap}>
                <img className={styles.img} src={Img1} alt='img alt'/>
              </div>
              <div>
                <h2 className={styles.title}>Дезинфекция</h2>
                <p className={styles.description}>уничтожение бактерий, грибков, вирусов, плесени</p>
                <Link to='/services'className={styles.more}>Подробнее</Link>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.item}>
              <div className={styles.imgWrap}>
                <img className={styles.img} src={Img1} alt='img alt'/>
              </div>
              <div>
                <h2 className={styles.title}>Дезинфекция</h2>
                <p className={styles.description}>уничтожение бактерий, грибков, вирусов, плесени</p>
                <Link to='/services' className={styles.more}>Подробнее</Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className={styles.navigationOfSlider}>
        <button className={styles.navigationButton} onClick={previous}>
          <ArrowLeftSVG />
          <svg className={styles.arrowIcon} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <g fill="none" stroke="#2175FF" strokeWidth="1.5" strokeLinejoin="round" strokeMiterlimit="10">
              <circle className={styles.arrowIconCircle} cx="16" cy="16" r="15.12"></circle>
            </g>
          </svg>
        </button>
        <button className={styles.navigationButton} onClick={next}>
          <ArrowRightSVG />
          <svg className={styles.arrowIcon} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <g fill="none" stroke="#068dada" strokeWidth="1.5" strokeLinejoin="round" strokeMiterlimit="10">
              <circle className={styles.arrowIconCircle} cx="16" cy="16" r="15.12"></circle>
            </g>
          </svg>
        </button>
      </div>
    </div>
  )
};
