import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
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
    }
  }
`;

const apollo = () => {
  const { loading, error, data, refetch } = useQuery(GET_LOCATIONS);

  const handleRefresh = () => {
    refetch();
  }

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :</Text>;

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        {data.locations.map((location) => (
          <TouchableOpacity key={location.id} style={styles.item}>
            <Image source={{ uri: location.photo }} style={styles.photo} />
            <View style={styles.details}>
              <Text style={styles.name}>{location.name}</Text>
              <Text style={styles.description}>{location.description || "No description available"}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.button} onPress={handleRefresh}>
          <Text style={styles.buttonText}>Refresh</Text>
        </TouchableOpacity>
      </View>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#87cefa",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#777",
  },
  button: {
    backgroundColor: "#87cefa",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default apollo;
