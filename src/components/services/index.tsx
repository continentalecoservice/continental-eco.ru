import React, { useState } from 'react';
import className from 'classnames';
import styles from './styles/services.module.css';

import VirusSVG from '../../images/svg/virus.svg';
import RatSVG from '../../images/svg/rat.svg';
import BagSVG from '../../images/svg/bag.svg';
import { DeratizationContent } from './components/deratizationContent';
import { DesinfectionContent } from './components/desinfectionContent';
import { DisinsectionContent } from './components/disinsectionContent';

export const Services = () => {
  const [activeItem, setActiveItem] = useState({
    isDesinfection: true,
    isDeratization: false,
    isDisinsection: false,
  });

  const classesDesinfectionItem = className(
    styles.item,
    {
      [styles.active]: activeItem.isDesinfection
    }
  );
  const classesDeratizationItem = className(
    styles.item,
    {
      [styles.active]: activeItem.isDeratization
    }
  );
  const classesDisinsectionItem = className(
    styles.item,
    {
      [styles.active]: activeItem.isDisinsection
    }
  );

  const handleSetActiveDesinfectionTab = () => {
    const active = {
      isDesinfection: true,
      isDeratization: false,
      isDisinsection: false,
    };
    setActiveItem(active);
  };

  const handleSetActiveDeratizationTab = () => {
    const active = {
      isDesinfection: false,
      isDeratization: true,
      isDisinsection: false,
    };
    setActiveItem(active);
  };

  const handleSetActiveDisinsectionTab = () => {
    const active = {
      isDesinfection: false,
      isDeratization: false,
      isDisinsection: true,
    };
    setActiveItem(active);
  };

  return (
    <div className={styles.services}>
      <ul className={styles.navigation}>
        <li className={classesDesinfectionItem} onClick={handleSetActiveDesinfectionTab}>
          <h2 className={styles.itemTitle}><span>Де</span>зинфекция</h2>
          <p className={styles.itemDescription}>уничтожение бактерий, грибков, вирусов, плесени</p>
          <VirusSVG className={styles.itemIcon} />
        </li>
        <li className={classesDeratizationItem} onClick={handleSetActiveDeratizationTab}>
          <h2 className={styles.itemTitle}><span>Де</span>ратизация</h2>
          <p className={styles.itemDescription}>уничтожение бактерий, грибков, вирусов, плесени</p>
          <RatSVG className={styles.itemIcon} />
        </li>
        <li className={classesDisinsectionItem} onClick={handleSetActiveDisinsectionTab}>
          <h2 className={styles.itemTitle}><span>Де</span>зинсекция</h2>
          <p className={styles.itemDescription}>уничтожение бактерий, грибков, вирусов, плесени</p>
          <BagSVG className={styles.itemIcon} />
        </li>
      </ul>

      <div className={styles.tabContent}>
        {activeItem.isDesinfection && (
          <DesinfectionContent />
        )}
        {activeItem.isDeratization && (
          <DeratizationContent />
        )}
        {activeItem.isDisinsection && (
          <DisinsectionContent />
        )}
      </div>
    </div>
  );
};
