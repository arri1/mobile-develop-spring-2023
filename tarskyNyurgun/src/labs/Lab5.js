import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import { gql, useQuery } from "@apollo/client";

const Lab5 = ({ navigation }) => {
  const query = gql`
    query {
      characters(page: 1, filter: { name: "a" }) {
        results {
          id
          name
        }
      }
    }
  `;

  const { data, loading } = useQuery(query);
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
        alignItems: "center",
      }}
    >
      {data.characters.results.map((item) => (
        <Text key={item.id} style={{ fontSize: 25 }}>
          {item.name}
        </Text>
      ))}
    </View>
  );
};

export { Lab5 };
