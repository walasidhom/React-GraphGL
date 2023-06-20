import { useQuery, gql } from '@apollo/client';

//create query
const GET_CHARACTERS = gql`
    query{
        characters{
            results{
                id
                name
                image
            }
        }
    }
`

export const useCharacters = () => {

    //use this query
    const { error, loading, data } = useQuery(GET_CHARACTERS);
    return { error, loading, data };

}