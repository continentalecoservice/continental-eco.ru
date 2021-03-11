import React from 'react';
import Img1 from '../../../images/about/img1.jpg';
import Img2 from '../../../images/about/img2.jpg';
import Img3 from '../../../images/about/img3.jpg';

import * as styles from './firstSection.module.css';

export const FirstSection = () => {
  return (
    <div className={styles.firstSection}>
      <div className={styles.firstSectionWrap}>
        <div className={styles.descriptionWrap}>
          <h1 className={styles.title}><span>О</span> Нас</h1>
          <p className={styles.description}>Компания Continental Ecoservice уже более 5-ти лет успешно
            предоставляет услуги по уничтожению всех видов вредных насекомых и грызунов. </p>
        </div>
        <div className={styles.galery}>
          <img src={Img1} alt='img' className={styles.smallImg} />
          <img src={Img2} alt='img' className={styles.bigImg} />
          <img src={Img3} alt='img' className={styles.smallImg} />
        </div>
      </div>
    </div>
  );
};
