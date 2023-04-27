import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import HomeScreen from "./HomeScreen";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
});

const Lab6 = () => {
  return (
    <ApolloProvider client={client}>
      <View style={styles.head}>
        <Text style={styles.text}>Список стран</Text>
      </View>
      <View style={{ height: 500 }}>
        <HomeScreen />
      </View>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  head: {
    paddingTop: 11,
    height: 50,
    backgroundColor: "silver",
  },
  text: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});

export default Lab6;
