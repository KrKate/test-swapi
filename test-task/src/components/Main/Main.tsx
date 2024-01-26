import React from 'react';
import styles from './Main.module.css';
import Character, { People } from '../Character/Character';
import helloIMG from '../../assets/hello.png';
interface MainProps {
  characterData: People[];
  isLoading: boolean;
  isSearchStarted: boolean;
}

enum Message {
  welcomeMessage = "You haven't searched for anything yet. Let's start!",
  loadingMessage = 'Loading...',
  noResultMessage = 'No character found!',
}
class Main extends React.Component<MainProps> {
  componentDidUpdate(prevProps: MainProps) {
    const { characterData } = this.props;
    const storedData = localStorage.getItem('CharacterData');
    if (characterData !== prevProps.characterData) {
      localStorage.setItem('CharacterData', JSON.stringify(characterData));
    }
    if (storedData && characterData.length === 0) {
      localStorage.removeItem('CharacterData');
    }
  }

  render() {
    const { characterData, isLoading, isSearchStarted } = this.props;
    const storedData = localStorage.getItem('characterData');
    let parsedData: People[] = [];
    if (storedData) {
      parsedData = JSON.parse(storedData);
    }
    return (
      <main className={styles.main}>
        {isLoading ? (
          <div>{Message.loadingMessage}</div>
        ) : characterData.length || parsedData.length ? (
          (characterData.length ? characterData : parsedData).map(
            (character: People) => (
              <Character key={character.name} characterData={character} />
            )
          )
        ) : isSearchStarted || storedData ? (
          <div>{Message.noResultMessage}</div>
        ) : (
          <div className={styles.welcomeWrapper}>
            <h2>{Message.welcomeMessage}</h2>
            <img src={helloIMG} alt="helloIMG" />
          </div>
        )}
      </main>
    );
  }
}

export default Main;
