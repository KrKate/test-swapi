import React from 'react';
import styles from './Search.module.css';

interface SearchProps {
  onSearch: (characterName: string) => void;
}

interface SearchState {
  searchValue: string;
}
class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (this.state.searchValue) {
      this.props.onSearch(this.state.searchValue);
    }
  };

  render() {
    const { searchValue } = this.state;
    const isSearchDisabled = searchValue === '';
    return (
      <form className={styles.searchContainer} onSubmit={this.handleSubmit}>
        <input
          placeholder="Enter character name"
          type="text"
          value={this.state.searchValue}
          onChange={this.handleChange}
        />
        <button
          className={styles.searchButton}
          type="submit"
          disabled={isSearchDisabled}
        >
          Search
        </button>
      </form>
    );
  }
}
export default Search;
