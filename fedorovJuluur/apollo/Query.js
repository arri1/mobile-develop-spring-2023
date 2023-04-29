import { gql } from "@apollo/client";

export const CONTINENT_QUERY = gql`
query testQuery {
    countries {
        awsRegion,
        capital,
        code,
        emoji,
        name,
    }
}
`;