import React, { FC } from 'react';
import { ModalNames } from '../modalsProvider/const';
import { useModalsContext } from '../modalsProvider/useModalsContext';

import PhoneSVG from '../../images/svg/phone.svg';
import ViberSVG from '../../images/svg/viber.svg';
import WhatsappSVG from '../../images/svg/wa.svg';
import TelegramSVG from '../../images/svg/telegram.svg';
import MessengerSVG from '../../images/svg/messenger.svg';
import ChevronSVG from '../../images/svg/Pull-Up-Chevron.svg';

import * as styles from './contactModal.module.css';

type ContactModalTypes = {
  onCLose: () => void
}

export const ContactModal: FC<ContactModalTypes> = (
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
      <button className={styles.buttonClose} onClick={onCLose} >
        <ChevronSVG className={styles.chevronIcon} />
      </button>
      <ul className={styles.contactsList}>
        <li className={styles.contactItem}>
          <a
            href='tel:+74957556983'
            className={styles.contactLink}
          >
            <PhoneSVG className={styles.icon} />+7495 755 69 83</a>
        </li>
        <li className={styles.contactItem}>
          <a
            href='tel:+74957556983'
            className={styles.contactLink}
          >
            <ViberSVG className={styles.icon} />Viber</a>
        </li>
        <li className={styles.contactItem}>
          <a
            href='tel:+74957556983'
            className={styles.contactLink}
          >
            <WhatsappSVG className={styles.icon} />WhatsApp</a>
        </li>
        <li className={styles.contactItem}>
          <a
            href='tel:+74957556983'
            className={styles.contactLink}
          >
            <MessengerSVG className={styles.icon} />Messanger</a>
        </li>
        <li className={styles.contactItem}>
          <a
            href='tel:+74957556983'
            className={styles.contactLink}
          >
            <TelegramSVG className={styles.icon} />Telegram</a>
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