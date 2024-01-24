import React from 'react';
import styles from './Main.module.css';
import Character, { People } from '../Character/Character';
interface MainProps {
  characterData: People[];
  isLoading: boolean;
}
class Main extends React.Component<MainProps> {
  render() {
    const { characterData, isLoading } = this.props;
    return (
      <main className={styles.main}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          characterData.map((character: People) => (
            <Character key={character.name} characterData={character} />
          ))
        )}
      </main>
    );
  }
}

export default Main;
