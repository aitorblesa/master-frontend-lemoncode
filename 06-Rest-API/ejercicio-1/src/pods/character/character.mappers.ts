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
});
