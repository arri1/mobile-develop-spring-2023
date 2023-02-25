import { useState } from "react";
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
    { text: "молоко", key: "1" },
  ]);

  const [text, setvalue] = useState("");

  const onChange = (text) => {
    setvalue(text);
  };

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
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
          placeholder="Добавление и Поиск"
        />

        <View style={{ marginHorizontal: "20%" }}>
          <Button title="Добавить товар" onPress={() => addHandler(text)} />
        </View>
      </View>
      <View style={{ height: 350 }}>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={{ width: "70%" }}>
                <Text style={styles.listtext}>{item.text}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteHandler(item.key)}>
                <Text style={styles.listtext}>X</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={styles.head}>
        <View></View>
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
