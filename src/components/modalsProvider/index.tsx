import Modal from 'react-responsive-modal';
import { ServiceModal } from '../ServiceModal';
import React, { useCallback, useMemo, useReducer } from 'react';
import { ContactModal } from '../ContactModal/ContactModal';
import { initialModalsState, ModalNames, ModalContext } from './const';
import { ModalsReducerAction, ModalsState, ProviderValue } from './types';

// @ts-ignore
import styles from './styles/index.module.css';

const modalsReducer = (state: ModalsState, { isOpen, modalName, data }: ModalsReducerAction) => {
  return {
    ...state,
    [modalName]: {
      isOpen,
      data,
    },
  };
};

const ModalsProvider = ({ children }: any) => {
  const [modalsState, dispatch] = useReducer(modalsReducer, initialModalsState);

  const openModal = useCallback((modalName, data: Record<string, unknown> = {}) => {
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

  const providerValue = useMemo<ProviderValue>(() => ({
    openModal,
  }), [openModal]);

  const handleCloseOrderServiceModal = () => closeModal(ModalNames.ORDER_SERVICE);
  const handleCloseContactModal = () => closeModal(ModalNames.TO_CONTACT);

  return (
    <>
      <ModalContext.Provider value={providerValue}>
        {children}
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
        <ServiceModal
          onClose={handleCloseOrderServiceModal}
        />
      </Modal>
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
        <ContactModal onCLoseModal={handleCloseContactModal} />
      </Modal>
    </>
  );
};

export { ModalsProvider };
