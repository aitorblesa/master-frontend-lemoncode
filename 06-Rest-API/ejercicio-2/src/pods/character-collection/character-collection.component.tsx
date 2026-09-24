import * as React from 'react';
import Typography from '@mui/material/Typography';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  onShowDetail: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onShowDetail } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h4">Personajes de Rick & Morty</Typography>

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onShowDetail={onShowDetail} />
          </li>
        ))}
      </ul>
    </div>
  );
};
