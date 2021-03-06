import React from 'react';

import ImgOfSection from '../../../images/imgOfFirstScreen.png';
import VideoOfSection from '../../../images/videoInHome.mp4';
import { SliderAboutDesinfection } from './slider';
import styles from './styles/home.module.css';

const FirstSection = () => {
  return (
    <div className={styles.firstSection}>
      <div className={styles.titleAndDescription}>
        <h1 className={styles.title}><span>Дез</span>инфекция вашего помещения</h1>
        <p className={styles.description}>Компания Континентал Экосервис занимается дератизацией, дезинсекцией
        (уничтожение тараканов и иных насекомых, крыс, мышей), дезинфекцией помещений
             (уничтожение бактерий, грибков, вирусов, плесени).</p>
        <button className={styles.viewService}>Просмотреть услуги</button>
      </div>
      <SliderAboutDesinfection />
      <div className={styles.videoWrap}>
        <video
          loop
          autoPlay
          src={VideoOfSection}
          poster={ImgOfSection}
          className={styles.imgOfSection}
        />
      </div>
    </div>
  );
};

export { FirstSection };