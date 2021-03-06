import { ModalNames } from './const';

export type ModalsReducerAction = {
	isOpen: boolean;
	modalName: string;
	data: Record<string, unknown>;
};

export type ModalsState = {
	[key in ModalNames]: {
		isOpen: boolean;
		data?: {
		};
	};
};

export type ProviderValue = {
	openModal: (modalName: ModalNames, modalData?: Record<string, unknown>) => void;
}
