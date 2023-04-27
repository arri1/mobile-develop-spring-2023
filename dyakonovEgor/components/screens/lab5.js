import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import { gql, useQuery } from "@apollo/client";
const Lab5 = () => {
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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e2140",
      }}
    >
      <Text style={styles.header}>Версии из Rick$Morty":</Text>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#0066CC",
    borderRadius: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0066CC",
  },
  loadingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0066CC",
    marginBottom: 10,
  },
});
export default Lab5;
