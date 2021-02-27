import React, { FC } from 'react';

import styles from './styles/ContactModal.module.css';

import ChevronSVG from '../../images/svg/Pull-Up-Chevron.svg';
/* @ts-ignore-next-line */
import PhoneSVG from '../../images/svg/phone.svg';
/* @ts-ignore-next-line */
import ViberSVG from '../../images/svg/viber.svg';
/* @ts-ignore-next-line */
import WhatsappSVG from '../../images/svg/wa.svg';
/* @ts-ignore-next-line */
import MessengerSVG from '../../images/svg/messenger.svg';
/* @ts-ignore-next-line */
import TelegramSVG from '../../images/svg/telegram.svg';

import { useModalsContext } from '../modalsProvider/useModalsContext';
import { ModalNames } from '../modalsProvider/const';

type ContactModalTypes = {
  onCLoseModal: () => void
}

const ContactModal: FC<ContactModalTypes> = (
  {
    onCLoseModal
  }
) => {
  const { openModal } = useModalsContext();

  const handleOpenOrderServiceModal = () => {
    openModal(ModalNames.ORDER_SERVICE);
  };

  return (
    <div className={styles.ContactModal}>
      <button className={styles.buttonClose} onClick={onCLoseModal} >
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

export { ContactModal };