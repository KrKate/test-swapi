import React from 'react';
import styles from './Header.module.css';
import Search from '../Search/Search';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <Search />
      </header>
    );
  }
}

export default Header;
