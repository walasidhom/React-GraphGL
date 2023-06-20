import { useQuery, gql } from '@apollo/client';

//create query
const GET_CHARACTER = gql`
    query GET_CHARACTER($id:ID!){
        character( id : $id ){
            id
            name
            image
            gender
            episode
            {
                name
                episode
            }
        }
    }
    
`

export const useCharacter = (id) => {

    //use this query
    const { error, loading, data } = useQuery(GET_CHARACTER,
        {
            variables: {
                id
            }
        }
    );
    return { error, loading, data };

}