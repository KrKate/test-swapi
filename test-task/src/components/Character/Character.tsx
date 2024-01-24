import React from 'react';
import styles from './Character.module.css';

export interface People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export interface CharacterProps {
  characterData: People;
}

class Character extends React.Component<CharacterProps> {
  render() {
    const { characterData } = this.props;
    return (
      <div className={styles.card}>
        <h1>{characterData.name}</h1>
        <ul>
          <li>
            <h4>Height: </h4> <span>{characterData.height}</span>
          </li>
          <li>
            <h4>Mass: </h4> <span>{characterData.mass}</span>
          </li>
          <li>
            <h4>Hair color: </h4>
            <span>{characterData.hair_color}</span>
          </li>
          <li>
            <h4>Skin color: </h4> <span>{characterData.skin_color}</span>
          </li>
          <li>
            <h4>Eye color: </h4>
            <span>{characterData.eye_color}</span>
          </li>
          <li>
            <h4>Birth year: </h4>
            <span>{characterData.birth_year}</span>
          </li>
          <li>
            <h4>Gender: </h4>
            <span>{characterData.gender}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Character;
