import React from 'react';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles['app-container']}>
      <h1 className={styles['app-title']}>Your Wallet App</h1>
      <p className={styles['app-description']}>
        Welcome to your Wallet App. Start tracking your expenses!
      </p>
    </div>
  );
};

export default App;
