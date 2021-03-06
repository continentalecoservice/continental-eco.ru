import { createContext } from 'react';

export const ModalContext = createContext({});

export enum ModalNames {
	ORDER_SERVICE = 'orderService',
	TO_CONTACT = 'toContact',
}

export const initialModalsState = {
	[ModalNames.ORDER_SERVICE]: {
		isOpen: false,
	},
	[ModalNames.TO_CONTACT]: {
		isOpen: false,
	},
};

