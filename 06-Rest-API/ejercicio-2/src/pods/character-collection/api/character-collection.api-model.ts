export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
  bestSentence?: string;
}

// el server local solo devuelve count en info (la API real tambien trae pages, next y prev)
export interface CharacterCollectionResponseApi {
  info: {
    count: number;
  };
  results: CharacterEntityApi[];
}
