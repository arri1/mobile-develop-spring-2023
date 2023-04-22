import { gql } from "@apollo/client";

const GET_COUNTRIES = gql`
  query Query {
    countries {
      name
    }
  }
`;

export default GET_COUNTRIES;
