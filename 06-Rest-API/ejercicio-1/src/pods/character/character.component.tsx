import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onBack: () => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onBack } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h4">{character.name}</Typography>

      {character.picture && (
        <img src={character.picture} alt={character.name} width={200} />
      )}

      <p>
        <strong>Estado:</strong> {character.status}
      </p>
      <p>
        <strong>Especie:</strong> {character.species}
      </p>
      {/* type muchas veces viene vacio, solo lo pinto si tiene algo */}
      {character.type && (
        <p>
          <strong>Tipo:</strong> {character.type}
        </p>
      )}
      <p>
        <strong>Género:</strong> {character.gender}
      </p>
      <p>
        <strong>Origen:</strong> {character.origin}
      </p>
      <p>
        <strong>Ubicación:</strong> {character.location}
      </p>
      <p>
        <strong>Episodios:</strong> {character.episodeCount}
      </p>

      <Button variant="contained" onClick={onBack}>
        Volver
      </Button>
    </div>
  );
};
