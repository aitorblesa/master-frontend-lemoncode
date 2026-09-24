import axios from 'axios';
import { Character } from './character.api-model';

const characterUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await axios.get<Character>(`${characterUrl}/${id}`);
  return data;
};
