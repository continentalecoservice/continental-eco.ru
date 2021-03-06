import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
// import { ModalsProvider } from '../components/modalsProvider';

import styles from './styles/layout.module.css';

const Layout = ({ children }) => {
  return (
    <ToastProvider>
      {/* <ModalsProvider> */}
        <Header />
        <main className={styles.offsetTop}>{children}</main>
        <Footer />
      {/* </ModalsProvider> */}
    </ToastProvider>
  );
};

export default Layout;