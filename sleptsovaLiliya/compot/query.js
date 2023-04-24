import { gql } from "@apollo/client";

export const CONTINENT_QUERY = gql`
    query ExampleQuery {
        countries {
            awsRegion,
            capital,
            code,
            currencies,
            currency,
            emoji,
            emojiU,
            name,
            native,
            phone,
            phones
        }
    }
`;