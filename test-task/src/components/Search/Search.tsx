import React from 'react';
import styles from './Search.module.css';

class Search extends React.Component {
  render() {
    return (
      <form className={styles.searchContainer}>
        <input placeholder="Enter character name" type="text" />
        <button className={styles.searchButton}>Search</button>
      </form>
    );
  }
}
export default Search;
