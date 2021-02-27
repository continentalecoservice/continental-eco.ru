import { Link } from 'gatsby';
import { Menu } from '../menu';
import React, { FC } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import { ModalNames } from '../modalsProvider/const';
import { useModalsContext } from '../modalsProvider/useModalsContext';

import styles from './styles/index.module.css';

/* @ts-ignore-next-line */
import LogoSVG from '../../images/svg/logo.svg';

const Header: FC = () => {
  const { openModal } = useModalsContext();
  const isMobile = useIsMobile();

  const handleOpenOrderServiceModal = () => openModal(ModalNames.ORDER_SERVICE);
  const handleOpenContactModal = () => openModal(ModalNames.TO_CONTACT);

  return (
    <header className={styles.header}>
      <div className={styles.leftBlock}>
        <Link to='/'>
          <LogoSVG className={styles.logoIcon} />
        </Link>
      </div>
      <div className={styles.rightBlock}>
        {
          isMobile
            ? (
              <>
                <button
                  className={styles.buttonContact}
                  onClick={handleOpenContactModal}
                >
                  Связаться
                </button>
                <Menu />
              </>
            )

            : (
              <>
                <Menu />
                <a className={styles.mobile} href='tel:+7495 755 69 83'>+7495 755 69 83</a>
                <button className={styles.orderService} onClick={handleOpenOrderServiceModal}>Заказать услугу</button>
              </>
            )
        }
      </div>
    </header>
  );
};

export { Header };