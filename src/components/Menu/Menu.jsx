import { Link } from 'gatsby';
import React, { useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import BurgerSVG from '../../images/svg/burger.svg';
import { ModalNames } from '../ModalsProvider/const';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import BurgerOpenSVG from '../../images/svg/burger-open.svg';
import { useModalsContext } from '../ModalsProvider/useModalsContext';

import * as styles from './menu.module.css';

const Menu = () => {
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

  const listOfMenu = () => {
    return (
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link onClick={handleCloseMobileMenu} className={styles.menuLink} to='/about'>О нас</Link>
        </li>
        <li className={styles.menuItem}>
          <Link onClick={handleCloseMobileMenu} className={styles.menuLink} to='/services'>Услуги</Link>
        </li>
        <li className={styles.menuItem}>
          <AnchorLink onAnchorLinkClick={handleCloseMobileMenu} stripHash to="/#contacts" className={styles.menuLink} title="Контакты">
            Контакты
          </AnchorLink>
        </li>
      </ul>
    )
  }

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
          {listOfMenu()}
          <button className={styles.orderServiceMobile} onClick={handleOpenOrderServiceModal}>Заказать услугу</button>
          <button className={styles.toContactMobile} onClick={handleOpenContactModal}>Связаться</button>
        </div>
      </>
    )
  }

  return (
    <nav>
      {listOfMenu()}
    </nav>
  );
};

export { Menu };