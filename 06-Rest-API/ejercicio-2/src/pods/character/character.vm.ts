export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  location: string;
  picture: string;
  episodeCount: number;
  bestSentence: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: '',
  location: '',
  picture: '',
  episodeCount: 0,
  bestSentence: '',
});
