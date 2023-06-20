import React from 'react'
import { useParams } from 'react-router'
import { useCharacter } from '../Hooks/useCharacter';

const Character = () => {

    const { id } = useParams();

    const { error, loading, data } = useCharacter(id);
    console.log({ error, loading, data });
    if (loading) return <div>loading ...</div>;
    if (error) return <div>{error}</div>;
  return (
      <div>
          <img src={data.character.image} width={750} height={750} alt={data.character.name} />
          <div>
              <h1>{data.character.name}</h1>
              <p>{data.character.gender}</p>
              <div>{data.character.episode.map((episode) => {
                  return (
                      <div>{episode.name} - <b>{ episode.episode}</b></div>
                  )
              })}</div>
          </div>

          
    </div>
  )
}

export default Character