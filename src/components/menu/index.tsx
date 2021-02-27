import { Link } from 'gatsby';
import React, { FC, useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

/* @ts-ignore-next-line */
import BurgerSVG from '../../images/svg/burger.svg';
/* @ts-ignore-next-line */
import BurgerOpenSVG from '../../images/svg/burger-open.svg';

import { useIsMobile } from '../hooks/useIsMobile';
import { ModalNames } from '../modalsProvider/const';
import { useModalsContext } from '../modalsProvider/useModalsContext';

import styles from './styles/index.module.css';

const Menu: FC = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const isMobile = useIsMobile();
  const { openModal } = useModalsContext();

  const handleOpenContactModal = () => {
    handleCloseMobileMenu();
    openModal(ModalNames.TO_CONTACT);
  };
  const handleOpenOrderServiceModal = () => {
    handleCloseMobileMenu();
    openModal(ModalNames.ORDER_SERVICE)
  };

  const handleOpenMobileMenu = () => setIsOpenMobileMenu(true);
  const handleCloseMobileMenu = () => setIsOpenMobileMenu(false);

  if (isMobile) {
    return (
      <>
        <button
          className={styles.buttonOpenMenu}
          onClick={handleOpenMobileMenu}
        >
          <BurgerSVG className={styles.burgerIcon} />
        </button>

        <div className={`${styles.mobileMenuWrap} ${isOpenMobileMenu && styles.open}`}>
          <button
            className={styles.buttonCloseMenu}
            onClick={handleCloseMobileMenu}
          >
            <BurgerOpenSVG className={styles.burgerIcon} />
          </button>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link className={styles.menuLink} to='/about'>О нас</Link>
            </li>
            <li className={styles.menuItem}>
              <Link className={styles.menuLink} to='/service'>Услуги</Link>
            </li>
            <li className={styles.menuItem}>
              <AnchorLink stripHash to="/#contacts" className={styles.menuLink} title="Контакты">
                Контакты
            </AnchorLink>
            </li>
          </ul>
          <button className={styles.orderServiceMobile} onClick={handleOpenOrderServiceModal}>Заказать услугу</button>
          <button className={styles.toContactMobile} onClick={handleOpenContactModal}>Связаться</button>
        </div>
      </>
    )
  }

  return (
    <nav>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} to='/about'>О нас</Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} to='/service'>Услуги</Link>
        </li>
        <li className={styles.menuItem}>
          <AnchorLink stripHash to="/#contacts" className={styles.menuLink} title="Контакты">
            Контакты
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );
};

export { Menu };