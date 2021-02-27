import { useContext } from 'react';
import { ProviderValue } from './types';
import { ModalContext } from './const';

export const useModalsContext = () => {
	const context = useContext(ModalContext);

	if (context === undefined) {
		throw new Error('hook must be used within a ModalContext');
	}

	return context as ProviderValue;
};
