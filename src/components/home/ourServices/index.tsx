import { Link } from 'gatsby';
import React from 'react';

import VirusSVG from '../../../images/svg/virus.svg';
import RatSVG from '../../../images/svg/rat.svg';
import BagSVG from '../../../images/svg/bag.svg';
import ArrowSVG from '../../../images/svg/right.svg';
import styles from './styles/ourServices.module.css';

export const OurServices = () => {
  return (
    <div className={styles.ourServices}>
      <h2 className={styles.title}><span>наши</span>  Услуги</h2>
      <p className={styles.description}>Комплексное предоставление лучших услуг</p>

      <div className={styles.servicesItems}>
        <div className={styles.item}>
          <h3 className={styles.servicesTitle}><span>Де</span>зинфекция</h3>
          <p className={styles.servicesDescription}>Предлагаем свои услуги сетям супермаркетов,
           банкам, заведениям общественного питания, саунам, бассейнам, спортив.</p>
          <Link to='/services' className={styles.linkToDetail}>Подробнее <ArrowSVG className={styles.arrowIcon} /></Link>
          <div className={styles.itemIconWrap}>
            <VirusSVG className={styles.itemIcon} />
          </div>
        </div>
        <div className={styles.item}>
          <h3 className={styles.servicesTitle}><span>Де</span>ратизация</h3>
          <p className={styles.servicesDescription}>Предлагаем свои услуги сетям супермаркетов,
          банкам, заведениям общественного питания, саунам, бассейнам, спортив.</p>
          <Link to='/services' className={styles.linkToDetail}>Подробнее <ArrowSVG className={styles.arrowIcon} /></Link>
          <div className={styles.itemIconWrap}>
            <RatSVG className={styles.itemIcon} />
          </div>
        </div>
        <div className={styles.item}>
          <h3 className={styles.servicesTitle}><span>Де</span>зинсекция</h3>
          <p className={styles.servicesDescription}>Предлагаем свои услуги сетям супермаркетов,
           банкам, заведениям общественного питания, саунам, бассейнам, спортив.</p>
          <Link to='/services' className={styles.linkToDetail}>Подробнее <ArrowSVG className={styles.arrowIcon} /></Link>
          <div className={styles.itemIconWrap}>
            <BagSVG className={styles.itemIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};
