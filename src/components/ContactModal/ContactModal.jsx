import React from 'react';
import { ModalNames } from '../ModalsProvider/const';
import { useModalsContext } from '../ModalsProvider/useModalsContext';

import PhoneSVG from '../../images/svg/phone.svg';
import ViberSVG from '../../images/svg/viber.svg';
import WhatsappSVG from '../../images/svg/wa.svg';
import MessengerSVG from '../../images/svg/messenger.svg';
import ChevronSVG from '../../images/svg/Pull-Up-Chevron.svg';

import * as styles from './contactModal.module.css';
import { socialLinks, supportPhone } from '../../../content/meta/config';
import { Seo } from '../Seo';

export const ContactModal = (
  {
    onCLose
  }
) => {
  const { openModal } = useModalsContext();

  const handleOpenOrderServiceModal = () => {
    openModal(ModalNames.ORDER_SERVICE);
  };

  return (
    <div className={styles.ContactModal}>
      <Seo postTitle='Контакти' />
      <button className={styles.buttonClose} onClick={onCLose} >
        <ChevronSVG />
      </button>
      <ul className={styles.contactsList}>
        <li className={styles.contactItem}>
          <a
            target='_blank'
            rel="noreferrer"
            href={`tel:${supportPhone}`}
            className={styles.contactLink}
          >
            <PhoneSVG className={styles.icon} />{supportPhone}</a>
        </li>
        <li className={styles.contactItem}>
          <a
            target='_blank'
            rel="noreferrer"
            href={socialLinks.viber}
            className={styles.contactLink}
          >
            <ViberSVG className={styles.icon} />Viber</a>
        </li>
        <li className={styles.contactItem}>
          <a
            target='_blank'
            rel="noreferrer"
            href={socialLinks.whatsApp}
            className={styles.contactLink}
          >
            <WhatsappSVG className={styles.icon} />WhatsApp</a>
        </li>
        <li className={styles.contactItem}>
          <a
            target='_blank'
            rel="noreferrer"
            href={`tel:${socialLinks.facebook}`}
            className={styles.contactLink}
          >
            <MessengerSVG className={styles.icon} />Messanger</a>
        </li>
      </ul>
      <button
        className={styles.orderServiceButton}
        onClick={handleOpenOrderServiceModal}
      >
        Заказать услугу
      </button>
    </div>
  );
};