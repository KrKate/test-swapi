import React from 'react';
import styles from './Main.module.css';
import Character, { People } from '../Character/Character';
interface MainProps {
  characterData: People[];
}
class Main extends React.Component<MainProps> {
  render() {
    const { characterData } = this.props;
    return (
      <main className={styles.main}>
        {characterData.map((character: People) => (
          <Character key={character.name} characterData={character} />
        ))}
      </main>
    );
  }
}

export default Main;
