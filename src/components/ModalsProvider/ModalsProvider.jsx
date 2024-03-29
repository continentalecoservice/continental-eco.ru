import Modal from 'react-responsive-modal';
import React, { useCallback, useMemo, useReducer } from 'react';
import { initialModalsState, ModalNames, ModalContext } from './const';

import { ContactModal } from '../ContactModal';
import { ServiceModal } from '../ServiceModal';

import * as styles from './modalsProvider.module.css';

const modalsReducer = (state, { isOpen, modalName, data }) => {
  return {
    ...state,
    [modalName]: {
      isOpen,
      data,
    },
  };
};

const ModalsProvider = ({ children }) => {
  const [modalsState, dispatch] = useReducer(modalsReducer, initialModalsState);

  const openModal = useCallback((modalName, data = {}) => {
    dispatch({
      isOpen: true,
      modalName,
      data,
    });
  }, []);

  const closeModal = useCallback((modalName) => {
    dispatch({
      isOpen: false,
      modalName,
      data: {},
    });
  }, []);

  const providerValue = useMemo(() => ({
    openModal,
  }), [openModal]);

  const handleCloseOrderServiceModal = () => closeModal(ModalNames.ORDER_SERVICE);
  const handleCloseContactModal = () => closeModal(ModalNames.TO_CONTACT);

  return (
    <>
      <ModalContext.Provider value={providerValue}>
        {children}
        <Modal
          center
          classNames={{
            modal: styles.contactModalWrapper,
            modalAnimationIn: styles.customEnterModalAnimation,
            modalAnimationOut: styles.customLeaveModalAnimation,
          }}
          showCloseIcon={false}
          onClose={handleCloseContactModal}
          open={modalsState[ModalNames.TO_CONTACT].isOpen}
        >
          <ContactModal onCLose={handleCloseContactModal} />
        </Modal>
      </ModalContext.Provider>
      <Modal
        center
        classNames={{
          modal: styles.servicesModalWrapper,
          modalAnimationIn: styles.customEnterModalAnimation,
          modalAnimationOut: styles.customLeaveModalAnimation,
        }}
        showCloseIcon={false}
        onClose={handleCloseOrderServiceModal}
        open={modalsState[ModalNames.ORDER_SERVICE].isOpen}
      >
        <ServiceModal onClose={handleCloseOrderServiceModal}
        />
      </Modal>
    </>
  );
};

export { ModalsProvider };
