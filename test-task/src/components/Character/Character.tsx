import React from 'react';

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
    return <h1>{characterData.name}</h1>;
  }
}

export default Character;
