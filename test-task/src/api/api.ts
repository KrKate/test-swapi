export const searchCharacter = (characterName: string) => {
  return fetch(`https://swapi.dev/api/people/?search=${characterName.trim()}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
