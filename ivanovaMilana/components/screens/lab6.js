import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";
import { gql, useQuery } from "@apollo/client";
import * as Font from "expo-font";
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

  const { data, loading, refetch } = useQuery(QUERY);
  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refetch} />
      }
    >
      <Text style={styles.header}>Версии из Rick&Morty:</Text>
      {data?.characters.results.map((item) => (
        <Text key={item.id} style={styles.text}>
          {item.name}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#97ce4c",
  },
  headerBox: {
    backgroundColor: "#f5c518",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#393e4d",
  },
  text: {
    fontSize: 18,
    color: "#fff",
    marginVertical: 5,
  },
});
export default Lab6;
