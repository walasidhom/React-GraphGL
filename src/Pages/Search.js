import { gql, useLazyQuery } from '@apollo/client';
import React, { useState } from 'react'

const GET_CHARACTER_LOCATIONS = gql`
        query getCharacterLocations($name : String!){
            characters(filter:{name : $name}){
                results{
                    location {
                        name
                    }
                }
            }
        }
    `;

const Search = () => {
    const [name, setName] = useState('');
    const [getLocation, { loading, error, data, called }] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name
        }
    });
    
  return (
      <div>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={() => getLocation()}>Search</button>
          {loading && <div>loading...</div>}
          {error && <div>{error}</div>}
          {data && (
              <ul>
                  {data.characters.results.map((character) => {
                      return <li>{character.location.name}</li>
                  })}
              </ul>
          )}
    </div>
  )
}

export default Search