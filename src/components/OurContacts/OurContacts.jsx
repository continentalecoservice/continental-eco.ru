import React from 'react';

import * as styles from './ourContacts.module.css';

import { ModalNames } from '../ModalsProvider/const';
import { useModalsContext } from '../ModalsProvider/useModalsContext';

import InstagramSVG from '../../images/svg/instagram.svg';
import FacebookSVG from '../../images/svg/facebook.svg';
import WhatsappSVG from '../../images/svg/wa.svg';
import ViberSVG from '../../images/svg/viber.svg';
import { address, socialLinks, supportEmail, supportPhone, workTime, registratioInformation } from '../../../content/meta/config';

export const OurContacts = () => {
  const { openModal } = useModalsContext();

  const handleOpenOrderServiceModal = () => openModal(ModalNames.ORDER_SERVICE);

  return (
    <div className={styles.ourContacts} id='contacts'>
      <div className={styles.socialLinks}>
        <a className={styles.link} href={`tel:${socialLinks.instagram}`}>
          <span className={styles.linkWrap}>
            <InstagramSVG className={styles.linkIcon} />
          </span>
          <span className={styles.linkText}>Instagram</span>
        </a>
        <a
          target='_blank'
          rel="noreferrer"
          className={styles.link}
          href={`tel:${socialLinks.facebook}`}
        >
          <span className={styles.linkWrap}>
            <FacebookSVG className={styles.linkIcon} />
          </span>
          <span className={styles.linkText}>Facebook</span>
        </a>
        <a
          target='_blank'
          rel="noreferrer"
          className={styles.link}
          href={socialLinks.whatsApp}
        >
          <span className={styles.linkWrap}>
            <WhatsappSVG className={styles.linkIcon} />
          </span>
          <span className={styles.linkText}>Whatsapp</span>
        </a>
        <a
          target='_blank'
          rel="noreferrer"
          className={styles.link}
          href={socialLinks.viber}
        >
          <span className={styles.linkWrap}>
            <ViberSVG className={styles.linkIcon} />
          </span>
          <span className={styles.linkText}>Viber</span>
        </a>
      </div>
      <div className={styles.descriptions}>
        <h2 className={styles.title}><span>Наши</span> контакты</h2>
        <div className={styles.workTime}>
          <h4 className={styles.subTitle}>График работы</h4>
          <p className={styles.subDescription}>Пн - Вс <time>{workTime}</time></p>
        </div>
        <address className={styles.addresOfWork}>
          <h4 className={styles.subTitle}>Адрес</h4>
          <p className={styles.subDescription}>{address}</p>
        </address>
        <div className={styles.technicalSupport}>
          <h4 className={styles.subTitle}>Поддержка</h4>
          <p className={styles.subDescription}>{supportPhone}</p>
          <p className={`${styles.subDescription} ${styles.supportEmail}`}>{supportEmail}</p>
          <p className={styles.smallDescription}>{registratioInformation.name}</p>
          <p className={styles.smallDescription}>{registratioInformation.number}</p>
          <p className={styles.smallDescription}>{registratioInformation.dateOfRegistery}</p>
          <p className={styles.smallDescription}>{registratioInformation.registrationAuthority}</p>
        </div>
        <button className={styles.orderService} onClick={handleOpenOrderServiceModal}>заказать услугу</button>
      </div>
    </div>
  );
};
