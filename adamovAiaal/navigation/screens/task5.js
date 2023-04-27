import { useQuery } from "@apollo/client";
import {
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";

import GET_COUNTRIES from "../../apollo/query";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Task5 = (navigation) => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  return (
    <SafeAreaView>
      {loading && (
        <ActivityIndicator style={styles.loader} size="large" color="#694D4B" />
      )}
      {!loading && (
        <FlatList
          data={data.countries}
          renderItem={({ item }) => <Item title={item.name} />}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loader: {
    justifyContent: "center",
    paddingTop: "70%",
    flex: 1,
  },
  item: {
    backgroundColor: "#E1B1AD",
    borderRadius: 10,
    borderColor: "#694D4B",
    borderWidth: 3,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
    color: "#694D4B",
  },
});

export default Task5;
