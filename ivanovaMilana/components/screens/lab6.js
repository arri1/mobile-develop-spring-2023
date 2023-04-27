import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import { gql, useQuery } from "@apollo/client";
const Lab6 = () => {
  const QUERY = gql`
    query {
      characters(page: 1, filter: { name: "Rick" }) {
        results {
          id
          name
        }
      }
    }
  `;

  const { data, loading } = useQuery(QUERY);
  if (loading)
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Версии из Rick&Morty":</Text>
      {data.characters.results.map((item) => (
        <Text key={item.id} style={styles.text}>
          {item.name}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e2140",
  },
  header: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
    marginVertical: 5,
  },
});
export default Lab6;
