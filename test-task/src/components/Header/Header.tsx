import React from 'react';
import styles from './Header.module.css';
import Search from '../Search/Search';
interface HeaderProps {
  onSearch: (characterName: string) => void;
}
class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <header className={styles.header}>
        <Search onSearch={this.props.onSearch} />
      </header>
    );
  }
}

export default Header;
