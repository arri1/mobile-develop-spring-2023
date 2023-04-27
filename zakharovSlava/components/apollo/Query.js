import { gql } from "@apollo/client";

export const CHARACTERS_QUERY = gql`
query GetCharacters{
    characters{
        results{
            name,
            status,
            species,
            gender,
            image
        }
    }
}
`;