import React from 'react';

import Rostelekom from '../../../images/about/rostelokom.jpg';
import Yes from '../../../images/about/yes.jpg';
import MyDocs from '../../../images/about/myDocs.jpg';
import Uruk from '../../../images/about/uruk.jpg';
import Krulatskui from '../../../images/about/krulatskui.jpg';
import Ozon from '../../../images/about/Ozon.png';
import Medsvc from '../../../images/about/mo-medsvc.png';

import * as styles from './thirdSection.module.css';

export const ThirdSection = () => {
  return (
    <div className={styles.thirdSection}>
      <h2 className={styles.title}><span>Нам</span> Доверяют</h2>
      <p className={styles.description}>Выбирая Continental Ecoservice Вы отдаете предпочтение качеству!</p>
      <ul className={styles.emblemItems}>
        <li className={styles.item}>
          <img src={Rostelekom} className={styles.img} alt='Rostelekom' />
        </li>
        <li className={styles.item}>
          <img src={Yes} className={styles.img} alt='Rostelekom' />
        </li>
        <li className={styles.item}>
          <img src={MyDocs} className={styles.img} alt='Rostelekom' />
        </li>
        <li className={styles.item}>
          <img src={Uruk} className={styles.img} alt='Rostelekom' />
        </li>
        <li className={styles.item}>
          <img src={Krulatskui} className={styles.img} alt='Rostelekom' />
        </li>
        <li className={`${styles.item} ${styles.spaseToTop}`}>
          <img src={Ozon} className={`${styles.img} ${styles.ozon}`} alt='Ozon' />
        </li>
        <li className={`${styles.item} ${styles.spaseToTop}`}>
          <img src={Medsvc} className={`${styles.img} ${styles.medsvc}`} alt='Medsvc' />
        </li>
      </ul>
    </div>
  );
};
