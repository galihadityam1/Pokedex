"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Pokemon } from '@/Type';
import { deletePokemon } from '@/app/actions/clientActions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Pokecard({ pokemon }: { pokemon: Pokemon }) {
  const router = useRouter()
  const handleDelete = async (event: any) => {
    // console.log(event);
    await deletePokemon({ id: event })
    router.refresh()
  }
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <Link href={`/pokemon/${pokemon.id}`}>
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
                <div className={pokemon.type === 'fire' ? 'text-red-500' : pokemon.type === 'grass' ? 'text-green-600' : pokemon.type === 'water' ? 'text-blue-500' : ''}>
                  {pokemon.type}
                </div>
              </div>
              <Typography variant="body2" color="text.secondary">
                {pokemon.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <div onClick={() => {
            handleDelete({ id: pokemon.id })
          }} className='bg-red-200 rounded'>
            <Button size="small">
              <div className='text-red-500'>
              DELETE

              </div>
            </Button>
          </div>
        </CardActions>
      </Card>
    </>
  );
}