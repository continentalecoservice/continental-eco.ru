import React from 'react';
import { Link } from 'gatsby';
import { ServiceNames } from '../../Services/const';
import { useServicesContext } from '../../Services/hooks/useServicesContext';

import VirusSVG from '../../../images/svg/virus.svg';
import RatSVG from '../../../images/svg/rat.svg';
import BagSVG from '../../../images/svg/bag.svg';
import ArrowSVG from '../../../images/svg/right.svg';

import * as styles from './ourServices.module.css';

export const OurServices = () => {
  const {  handleSectActiveSection } = useServicesContext();

  const handleSetActiveDesinfectionTab = () => handleSectActiveSection(ServiceNames.Desinfection);
  const handleSetActiveDeratizationTab = () => handleSectActiveSection(ServiceNames.Deratization);
  const handleSetActiveDisinsectionTab = () => handleSectActiveSection(ServiceNames.Disinsection);

  return (
    <div className={styles.ourServices}>
      <h2 className={styles.title}><span>наши</span>  Услуги</h2>
      <p className={styles.description}>Комплексное предоставление лучших услуг</p>

      <div className={styles.servicesItems}>
        <Link to='/services' onClick={handleSetActiveDesinfectionTab} className={styles.item}>
          <h3 className={styles.servicesTitle}><span>Де</span>зинфекция</h3>
          <p className={styles.servicesDescription}>Предлагаем свои услуги сетям супермаркетов,
           банкам, заведениям общественного питания, саунам, бассейнам, спортив.</p>
          <span className={styles.linkToDetail}>Подробнее <ArrowSVG className={styles.arrowIcon} /></span>
          <div className={styles.itemIconWrap}>
            <VirusSVG className={styles.itemIcon} />
          </div>
        </Link>
        <Link to='/services' onClick={handleSetActiveDeratizationTab} className={styles.item}>
          <h3 className={styles.servicesTitle}><span>Де</span>ратизация</h3>
          <p className={styles.servicesDescription}>Предлагаем свои услуги сетям супермаркетов,
          банкам, заведениям общественного питания, саунам, бассейнам, спортив.</p>
          <span className={styles.linkToDetail}>Подробнее <ArrowSVG className={styles.arrowIcon} /></span>
          <div className={styles.itemIconWrap}>
            <RatSVG className={styles.itemIcon} />
          </div>
        </Link>
        <Link to='/services' onClick={handleSetActiveDisinsectionTab} className={styles.item}>
          <h3 className={styles.servicesTitle}><span>Де</span>зинсекция</h3>
          <p className={styles.servicesDescription}>Предлагаем свои услуги сетям супермаркетов,
           банкам, заведениям общественного питания, саунам, бассейнам, спортив.</p>
          <span className={styles.linkToDetail}>Подробнее <ArrowSVG className={styles.arrowIcon} /></span>
          <div className={styles.itemIconWrap}>
            <BagSVG className={styles.itemIcon} />
          </div>
        </Link>
      </div>
    </div>
  );
};
