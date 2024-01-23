import React from 'react';
import styles from './Header.module.css';
import Search from '../Search/Search';
import { searchCharacter } from '../../api/api';

class Header extends React.Component {
  handleSearch = (characterName: string) => {
    searchCharacter(characterName)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <header className={styles.header}>
        <Search onSearch={this.handleSearch} />
      </header>
    );
  }
}

export default Header;
