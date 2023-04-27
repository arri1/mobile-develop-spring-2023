import { Text, FlatList, Pressable, StyleSheet, View } from "react-native";
import { useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "./Quert";

const HomeScreen = () => {
  const { data, loading } = useQuery(CONTINENT_QUERY);

  const ContinentItem = ({ continent }) => {
    const { name, code } = continent;

    return (
      <Pressable>
        <View>
          <Text style={styles.listtext}>{name}</Text>
        </View>
      </Pressable>
    );
  };

  if (loading) {
    return <Text>Загрузка данных...</Text>;
  }

  return (
    <FlatList
      data={data.continents}
      renderItem={({ item }) => <ContinentItem continent={item} />}
      keyExtractor={(item, index) => index}
    />
  );
};

const styles = StyleSheet.create({
  listtext: {
    padding: 20,
    fontSize: 18,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    marginTop: 20,
    width: "80%",
    marginLeft: "10%",
  },
});

export default HomeScreen;
