import axios from 'axios';
import {
  CharacterCollectionResponseApi,
  CharacterEntityApi,
} from './character-collection.api-model';

// ahora apunta al server local (vite hace proxy de /api a localhost:3000)
const characterUrl = '/api/character';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const { data } = await axios.get<CharacterCollectionResponseApi>(
    characterUrl
  );
  return data.results;
};
