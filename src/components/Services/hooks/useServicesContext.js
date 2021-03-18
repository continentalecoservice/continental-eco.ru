import { useContext } from 'react';
import { ServiceContext } from '../const';

export const useServicesContext = () => {
  const context = useContext(ServiceContext);

	if (context === undefined) {
		throw new Error('hook must be used within a ServiceContext');
	}

	return context;
};
