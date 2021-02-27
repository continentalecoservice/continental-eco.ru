import React, { FC } from 'react';
import { ModalsProvider } from '../components/modalsProvider';

const Layout: FC = ({ children }) => {
  return (
    <ModalsProvider>
      {children}
    </ModalsProvider>
  );
};

export default Layout;