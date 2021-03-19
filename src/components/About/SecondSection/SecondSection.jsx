import React from 'react';

import Bactericide from '../../../images/svg/bactericide.svg';
import Quality from '../../../images/svg/quality.svg';
import DayAndNight from '../../../images/svg/dayAndNight.svg';

import * as styles from './secondSection.module.css';

export const SecondSection = () => {
  return (
    <div className={styles.secondSection}>
      <div className={styles.item}>
        <Bactericide className={styles.icon} />
        <h2 className={styles.title}><span>современные</span> Технологии</h2>
        <p className={styles.description}>Также, мы проводим дезинфекцию любых помещений вне зависимости от размера как методом холодного тумана, так и обработкой облучателями открытого типа.</p>
      </div>
      <div className={styles.item}>
        <Quality className={styles.icon} />
        <h2 className={styles.title}><span>гарантия</span> качества</h2>
        <p className={styles.description}>Предоставляем весь необходимый для Роспотребнадзора пакет документов. Все применяемые препараты сертифицированы и одобрены к использованию на территории Российской Федерации.</p>
      </div>
      <div className={styles.item}>
        <DayAndNight className={styles.icon} />
        <h2 className={styles.title}><span>удобный</span> график</h2>
        <p className={styles.description}>Услуги нашей компании доступны для клиента 24/7, в любое удобное время: как в ночное время суток, так и в выходной день.</p>
      </div>
    </div>
  );
};
