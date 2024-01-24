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
          <li>Height: {characterData.height}</li>
          <li>Mass: {characterData.mass}</li>
          <li>Hair color: {characterData.hair_color}</li>
          <li>Skin color: {characterData.skin_color}</li>
          <li>Eye color: {characterData.eye_color}</li>
          <li>Birth year: {characterData.birth_year}</li>
          <li>Gender: {characterData.gender}</li>
        </ul>
      </div>
    );
  }
}

export default Character;
