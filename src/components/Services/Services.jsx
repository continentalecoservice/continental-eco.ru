import React, { useCallback } from 'react';
import className from 'classnames';
import * as styles from './services.module.css';

import VirusSVG from '../../images/svg/virus.svg';
import RatSVG from '../../images/svg/rat.svg';
import BagSVG from '../../images/svg/bag.svg';

import { DeratizationContent } from './components/DeratizationContent';
import { DesinfectionContent } from './components/DesinfectionContent';
import { DisinsectionContent } from './components/DisinsectionContent';

import { ModalNames, useModalsContext } from '../ModalsProvider';
import { useServicesContext } from './hooks/useServicesContext';
import { ServiceNames } from './const.js';

export const Services = () => {
  const { openModal } = useModalsContext();
  const {  handleSectActiveSection, activeSection } = useServicesContext();

  const handleOpenModal = useCallback(() => openModal(ModalNames.ORDER_SERVICE), [openModal]);

  const classesDesinfectionItem = className(
    styles.item,
    {
      [styles.active]: activeSection.isDesinfection
    }
  );
  const classesDeratizationItem = className(
    styles.item,
    {
      [styles.active]: activeSection.isDeratization
    }
  );
  const classesDisinsectionItem = className(
    styles.item,
    {
      [styles.active]: activeSection.isDisinsection
    }
  );

  const handleSetActiveDesinfectionTab = () => {
    handleSectActiveSection(ServiceNames.Desinfection);
  };

  const handleSetActiveDeratizationTab = () => {
    handleSectActiveSection(ServiceNames.Deratization);
  };

  const handleSetActiveDisinsectionTab = () => {
    handleSectActiveSection(ServiceNames.Disinsection);
  };

  return (
    <div className={styles.services}>
      <ul className={styles.navigation}>
        <li className={classesDesinfectionItem}>
          <button onClick={handleSetActiveDesinfectionTab}>
            <h2 className={styles.itemTitle}><span>Де</span>зинфекция</h2>
            <p className={styles.itemDescription}>уничтожение бактерий, грибков, вирусов, плесени</p>
            <VirusSVG className={styles.itemIcon} />
          </button>
        </li>
        <li className={classesDeratizationItem}>
          <button onClick={handleSetActiveDeratizationTab}>
            <h2 className={styles.itemTitle}><span>Де</span>ратизация</h2>
            <p className={styles.itemDescription}>уничтожение бактерий, грибков, вирусов, плесени</p>
            <RatSVG className={styles.itemIcon} />
          </button>
        </li>
        <li className={classesDisinsectionItem}>
          <button onClick={handleSetActiveDisinsectionTab}>
            <h2 className={styles.itemTitle}><span>Де</span>зинсекция</h2>
            <p className={styles.itemDescription}>уничтожение бактерий, грибков, вирусов, плесени</p>
            <BagSVG className={styles.itemIcon} />
          </button>
        </li>
      </ul>

      <div className={styles.tabContent}>
        {activeSection.isDesinfection && (
          <DesinfectionContent handleOpenModal={handleOpenModal} />
        )}
        {activeSection.isDeratization && (
          <DeratizationContent handleOpenModal={handleOpenModal} />
        )}
        {activeSection.isDisinsection && (
          <DisinsectionContent handleOpenModal={handleOpenModal} />
        )}
      </div>
    </div>
  );
};
