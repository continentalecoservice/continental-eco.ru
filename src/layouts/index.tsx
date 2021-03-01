import React, { FC } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { Header } from '../components/header';
import { ModalsProvider } from '../components/modalsProvider';

import styles from './styles/layout.module.css';

const Layout: FC = ({ children }) => {
  return (
    <ToastProvider>
      <ModalsProvider>
        <Header />
        <main className={styles.offsetTop}>{children}</main>
      </ModalsProvider>
    </ToastProvider>
  );
};

export default Layout;