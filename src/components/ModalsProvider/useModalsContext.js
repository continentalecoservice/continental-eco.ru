import { useContext } from 'react';
import { ModalContext } from './const';

export const useModalsContext = () => {
  const context = useContext(ModalContext);

	if (context === undefined) {
		throw new Error('hook must be used within a ModalContext');
	}

	return context;
};
