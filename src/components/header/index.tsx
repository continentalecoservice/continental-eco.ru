import { Link } from 'gatsby';
import { Menu } from '../menu';
import React from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
// import { ModalNames } from '../modalsProvider/const';
// import { useModalsContext } from '../modalsProvider/useModalsContext';

import styles from './styles/header.module.css';

import LogoSVG from '../../images/svg/logo.svg';

const Header = () => {
  // const { openModal } = useModalsContext();
  const isMobile = useIsMobile();

  const handleOpenOrderServiceModal = () => console.log('click');

  const handleOpenContactModal = () => console.log('click');

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