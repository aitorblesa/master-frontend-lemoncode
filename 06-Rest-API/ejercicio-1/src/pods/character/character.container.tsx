import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadCharacter = async () => {
    try {
      const apiCharacter = await api.getCharacter(id);
      setCharacter(mapCharacterFromApiToVm(apiCharacter));
    } catch (error) {
      console.error('Error loading character', error);
    }
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, [id]);

  const handleBack = () => {
    navigate(linkRoutes.characterCollection);
  };

  return <CharacterComponent character={character} onBack={handleBack} />;
};
