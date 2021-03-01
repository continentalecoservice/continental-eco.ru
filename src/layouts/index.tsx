import React, { FC } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { ModalsProvider } from '../components/modalsProvider';

const Layout: FC = ({ children }) => {
  return (
    <ToastProvider>
      <ModalsProvider>
        {children}
      </ModalsProvider>
    </ToastProvider>
  );
};

export default Layout;