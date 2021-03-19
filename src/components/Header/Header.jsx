import { Link } from 'gatsby';
import { Menu } from '../Menu';
import React from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import { ModalNames } from '../ModalsProvider/const';
import { useModalsContext } from '../ModalsProvider/useModalsContext';

import * as styles from './header.module.css';

import LogoSVG from '../../images/svg/logo.svg';
import { supportPhone } from '../../../content/meta/config';

const Header = () => {
  const { openModal } = useModalsContext();
  const isMobile = useIsMobile();

  const handleOpenOrderServiceModal = () => openModal(ModalNames.ORDER_SERVICE);
  const handleOpenContactModal = () => openModal(ModalNames.TO_CONTACT);

  return (
    <header className={styles.header}>
      <div>
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
                <a className={styles.mobile} href={`tel:${supportPhone}`}>{supportPhone}</a>
                <button className={styles.orderService} onClick={handleOpenOrderServiceModal}>Заказать услугу</button>
              </>
            )
        }
      </div>
    </header>
  );
};

export { Header };