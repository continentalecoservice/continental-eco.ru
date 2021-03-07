import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ModalsProvider } from '../components/modalsProvider';

import * as styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <ToastProvider>
      <ModalsProvider>
        <Header />
        <main className={styles.offsetTop}>{children}</main>
        <Footer />
      </ModalsProvider>
    </ToastProvider>
  );
};

export default Layout;