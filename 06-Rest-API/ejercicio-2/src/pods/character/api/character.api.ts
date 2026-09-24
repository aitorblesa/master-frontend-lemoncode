import axios from 'axios';
import { Character } from './character.api-model';

// ahora apunta al server local (vite hace proxy de /api a localhost:3000)
const characterUrl = '/api/character';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await axios.get<Character>(`${characterUrl}/${id}`);
  return data;
};

// el server hace un merge ({ ...c, ...character }) asi que no hace falta mandar el personaje entero
export const updateCharacter = async (
  character: Partial<Character>
): Promise<boolean> => {
  await axios.put(`${characterUrl}/${character.id}`, character);
  return true;
};
