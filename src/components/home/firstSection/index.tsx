import React from 'react';

// @ts-ignore
import ImgOfSection from '../../../images/imgOfFirstScreen.png';
import { SliderAboutDesinfection } from './slider';
// @ts-ignore
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
      <img src={ImgOfSection} className={styles.imgOfSection} alt="Дезинфекция вашего помещения" />
    </div>
  );
};

export { FirstSection };