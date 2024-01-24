import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { searchCharacter } from './api/api';

class App extends React.Component {
  state = {
    CharacterData: [],
    isLoading: false,
  };

  componentDidMount() {
    const storedData = localStorage.getItem('CharacterData');
    if (storedData) {
      this.setState({ CharacterData: JSON.parse(storedData) });
    }
  }

  handleSearch = (characterName: string) => {
    this.setState({ isLoading: true });
    searchCharacter(characterName)
      .then((data) => {
        this.setState({ CharacterData: data.results, isLoading: false });
        localStorage.setItem('CharacterData', JSON.stringify(data.results));
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className={styles.appContainer}>
        <Header onSearch={this.handleSearch} />
        <Main
          characterData={this.state.CharacterData}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default App;
