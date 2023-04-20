import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState, useMemo } from "react";

const Lab3 = () => {
  const [data, setData] = useState(0);

  const [listOfItems, setListOfItems] = useState([
    { text: "молоко", index: 10, key: "1" },
    { text: "сыр", index: 20, key: "2" },
    { text: "чай", index: 30, key: "3" },
    { text: "хлеб", index: 40, key: "4" },
  ]);

  const BigFunMem = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return 0;
  }, []);

  const Fun = () => {
    for (let i = 0; i < 1000000000; i++) {}
    return 0;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.head}>
        <Text style={styles.text}>Список товаров</Text>
      </View>
      <View style={{ height: 460 }}>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{ width: "50%" }}
                onPress={() => setData(data + item.index + Fun())}
              >
                <Text style={styles.listtext}>{item.text}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: "50%" }}
                onPress={() => setData(data + item.index + BigFunMem)}
              >
                <Text style={styles.listtext}>{item.text}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={styles.head}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: 300 }}>
            <Text style={{ textAlign: "center", fontSize: 18 }}>{data}</Text>
          </View>
          <Button title="Отмена" onPress={() => setData(0)} />
        </View>
      </View>
    </SafeAreaView>
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
  listtext2: {
    padding: 1,
    fontSize: 18,
    borderRadius: 5,

    marginTop: 20,
    width: "80%",
    marginLeft: "10%",
  },
  input: {
    borderColor: "gray",

    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: "5%",
    width: "35%",
  },
});

export default Lab3;
