import React from 'react';
import { Link } from 'gatsby';

import styles from './styles/expertise.module.css';

import OurErviceImg from '../../../images/ourErviceImg.jpg';

export const ExpertiseSection = () => {
  return (
    <div className={styles.ourErvice}>
      <div className={styles.ourErviceWrap}>
        <div className={styles.imgWrap}>
          <img src={OurErviceImg} className={styles.img} alt='наша  экспертиза' />
        </div>
       <div className={styles.titleAndDescription}>
       <h2 className={styles.title}><span>наша</span>  экспертиза</h2>
        <p className={styles.description}>Компания Континентал Экосервис занимается дератизацией,
        дезинсекцией (уничтожение тараканов и иных насекомых, крыс, мышей),
        дезинфекцией помещений (уничтожение бактерий, грибков, вирусов, плесени).
        Предлагаем свои услуги сетям супермаркетов, банкам, заведениям общественного питания,
        саунам, бассейнам, спортивным клубам, ресторанам, банкам, любым офисным помещениям, гостиницам.</p>
        <Link to='/services' className={styles.more}>Подробнее</Link>
       </div>
      </div>
    </div>
  );
};
