import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { searchCharacter } from './api/api';

class App extends React.Component {
  state = {
    CharacterData: [],
  };

  handleSearch = (characterName: string) => {
    searchCharacter(characterName)
      .then((data) => {
        this.setState({ CharacterData: data.results });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className={styles.appContainer}>
        <Header onSearch={this.handleSearch} />
        <Main characterData={this.state.CharacterData} />
      </div>
    );
  }
}

export default App;
