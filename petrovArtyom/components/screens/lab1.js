import { useState } from "react";
import Lab2 from "../screens/lab2";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
} from "react-native";

const Lab1 = () => {
  const [listOfItems, setListOfItems] = useState([
    { text: "молоко", index: 10, key: "1" },
    { text: "сыр", index: 20, key: "2" },
    { text: "чай", index: 30, key: "3" },
    { text: "хлеб", index: 40, key: "4" },
  ]);

  const [text, setvalue] = useState("");
  const [asd, setasd] = useState(0);

  const onChange = (text) => {
    setvalue(text);
  };

  const addHandler = (text, index) => {
    setListOfItems((list) => {
      return [
        {
          text: text,
          index: index,
          key: Math.random().toString(36).substring(7),
        },
        ...list,
      ];
    });
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key != key);
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.head}>
        <Text style={styles.text}>Список товаров</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          placeholder="Название товара"
        />

        <View style={{ marginHorizontal: "20%" }}>
          <Button title="Добавить товар" onPress={() => addHandler(text, 10)} />
        </View>
      </View>
      <View style={{ height: 350 }}>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{ width: "70%" }}
                onPress={() => setasd(asd+item.index)}
              >
                <Text style={styles.listtext}>{item.text}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteHandler(item.key)}>
                <Text style={styles.listtext}>X</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={styles.head}><Text style={{textAlign: "center"}}>{asd}</Text></View>
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
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: "10%",
    width: "80%",
  },
});

export default Lab1;
