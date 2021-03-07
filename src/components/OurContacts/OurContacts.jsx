import React from 'react';

import * as styles from './ourContacts.module.css';

import { ModalNames } from '../ModalsProvider/const';
import { useModalsContext } from '../ModalsProvider/useModalsContext';

import InstagramSVG from '../../images/svg/instagram.svg';
import FacebookSVG from '../../images/svg/facebook.svg';
import WhatsappSVG from '../../images/svg/wa.svg';
import ViberSVG from '../../images/svg/viber.svg';
import TelegramSVG from '../../images/svg/telegram.svg';

export const OurContacts = () => {
  const { openModal } = useModalsContext();

  const handleOpenOrderServiceModal = () => openModal(ModalNames.ORDER_SERVICE);

  return (
    <div className={styles.ourContacts}>
      <div className={styles.socialLinks}>
        <a className={styles.link} href='/'>
          <span className={styles.linkWrap}>
            <InstagramSVG className={styles.linkIcon} />
            <span className={styles.linkText}>Instagram</span>
          </span>
        </a>
        <a className={styles.link} href='/'>
          <span className={styles.linkWrap}>
            <FacebookSVG className={styles.linkIcon} />
            <span className={styles.linkText}>Facebook</span>
          </span>
        </a>
        <a className={styles.link} href='/'>
          <span className={styles.linkWrap}>
            <WhatsappSVG className={styles.linkIcon} />
            <span className={styles.linkText}>Whatsapp</span>
          </span>
        </a>
        <a className={styles.link} href='/'>
          <span className={styles.linkWrap}>
            <ViberSVG className={styles.linkIcon} />
            <span className={styles.linkText}>Viber</span>
          </span>
        </a>
        <a className={styles.link} href='/'>
          <span className={styles.linkWrap}>
            <TelegramSVG className={styles.linkIcon} />
            <span className={styles.linkText}>Telegram</span>
          </span>
        </a>
      </div>
      <div className={styles.descriptions}>
        <h2 className={styles.title}><span>Наши</span> контакты</h2>
        <div className={styles.workTime}>
          <h4 className={styles.subTitle}>График работы</h4>
          <p className={styles.subDescription}>Пн - Пт <time>9:00 - 17:00</time></p>
        </div>
        <address className={styles.addresOfWork}>
          <h4 className={styles.subTitle}>Адрес</h4>
          <p className={styles.subDescription}>Москва, ул. Нижегородская, 29-33</p>
        </address>
        <div className={styles.technicalSupport}>
          <h4 className={styles.subTitle}>Поддержка</h4>
          <p className={styles.subDescription}>+7 (495) 227-56-56</p>
          <p className={styles.subDescription}>ecoservice@gmail.com</p>
        </div>
        <button className={styles.orderService} onClick={handleOpenOrderServiceModal}>заказать услугу</button>
      </div>
    </div>
  );
};
