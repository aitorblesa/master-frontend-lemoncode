import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  id: character.id.toString(),
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: character.origin?.name,
  location: character.location?.name,
  picture: character.image,
  // solo necesito saber cuantos episodios, no las urls
  episodeCount: character.episode?.length ?? 0,
  // si todavia no tiene frase viene undefined
  bestSentence: character.bestSentence ?? '',
});

// solo mando el id y el campo que se puede editar
export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): Partial<apiModel.Character> => ({
  id: Number(character.id),
  bestSentence: character.bestSentence,
});
