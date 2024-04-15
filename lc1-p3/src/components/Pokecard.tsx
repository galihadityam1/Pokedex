import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Pokemon } from '@/Type';

export default function Pokecard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pokemon.image}
          alt={pokemon.name}
        />
        <CardContent>
          <div className='flex flex-row justify-between'>
            <Typography gutterBottom variant="h5" component="div">
              {pokemon.name}
            </Typography>
            <div>
              {pokemon.type}
            </div>
          </div>
          <Typography variant="body2" color="text.secondary">
            {pokemon.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}