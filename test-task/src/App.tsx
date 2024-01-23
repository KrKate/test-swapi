import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends React.Component {
  render() {
    return (
      <div className={styles.appContainer}>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
