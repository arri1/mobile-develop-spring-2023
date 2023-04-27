import React from "react";
import { View, Text } from "react-native";
import { ApolloClient, ApolloProvider, InMemoryCache, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const Lab6 = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :</Text>;

  return (
    <ApolloProvider client={client}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {data.locations.map((location) => (
          <View key={location.id}>
            <Text>{location.name}</Text>
            <Text>{location.description}</Text>
            <Text>{location.photo}</Text>
          </View>
        ))}
      </View>
    </ApolloProvider>
  );
};

export default Lab6;