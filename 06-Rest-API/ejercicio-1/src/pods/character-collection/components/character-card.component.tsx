import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from '../character-collection.vm';

interface Props {
  character: CharacterEntityVm;
  onShowDetail: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onShowDetail } = props;

  return (
    <Card>
      <CardHeader
        title={character.name}
        subheader={`${character.species} - ${character.status}`}
      />
      <CardMedia
        component="img"
        image={character.picture}
        alt={character.name}
        height="200"
      />
      <CardActions>
        <Button size="small" onClick={() => onShowDetail(character.id)}>
          Ver detalle
        </Button>
      </CardActions>
    </Card>
  );
};
