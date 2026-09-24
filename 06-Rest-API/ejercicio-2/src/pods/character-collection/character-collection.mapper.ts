import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  // el id viene como number pero las rutas trabajan con string
  id: character.id.toString(),
  name: character.name,
  picture: character.image,
  status: character.status,
  species: character.species,
});
