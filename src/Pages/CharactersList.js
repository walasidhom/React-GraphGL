import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useCharacters } from '../Hooks/useCharacters';
import { Link } from 'react-router-dom';



const CharactersList = () => {

    // use our hook
    const { error, loading, data } = useCharacters();
    if (loading) return <div>loading ...</div>;
    if (error) return <div>{error}</div>;

    
  return (
      <div>{data.characters.results.map((character)=>{
          return(
          <Link to={`/${character.id}`}>
              <img src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
          </Link>
          )
      })}</div>
  )
}

export default CharactersList