import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ToastProvider } from 'react-toast-notifications';
import { ModalsProvider } from '../components/ModalsProvider';
import { ServicesProvider } from '../components/Services/ServicesProvider';

import * as styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <ToastProvider>
      <ServicesProvider>
        <ModalsProvider>
          <Header />
          <main className={styles.offsetTop}>{children}</main>
          <Footer />
        </ModalsProvider>
      </ServicesProvider>
    </ToastProvider>
  );
};

export default Layout;