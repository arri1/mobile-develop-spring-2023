import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import { gql, useQuery } from "@apollo/client";

var styles = StyleSheet.create({
  header: {
    color: "white",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    maxWidth: 350,
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    marginTop: 5,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    maxWidth: 250,
    fontSize: 14,
  },
});

const ApolloExample = () => {
  const QUERY = gql`
    query {
      characters(page: 1, filter: { name: "Rick" }) {
        results {
          name
        }
      }
    }
  `;

  const { data, loading } = useQuery(QUERY);
  console.log(data);
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
      <Text style={styles.header}>Список версий Рика из "Рик и Морти":</Text>
      {data.characters.results.map((item) => (
        <Text key={item} style={styles.text}>
          {item.name}
        </Text>
      ))}
    </View>
  );
};

export default ApolloExample;
