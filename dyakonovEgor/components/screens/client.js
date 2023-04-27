import ApolloClient from "apollo-boost"

const client = new ApolloClient({
  uri: "https://www.googleapis.com/books/v1/volumes",
});

export default client;