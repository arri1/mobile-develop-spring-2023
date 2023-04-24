import { useState, useEffect } from "react";
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
  const [index, setvalueChek] = useState("");
  const [sum, setsum] = useState(0);
  const [a, seta] = useState(5);

  const sumindex = (index) => {
    setsum(sum + index);
  };

  const onChange = (text) => {
    setvalue(text);
  };

  const onChangeChek = (index) => {
    setvalueChek(index);
  };

  useEffect(() => {
    seta(a + 1);
  }, [listOfItems]);

  const addHandler = (text, index) => {
    setListOfItems((list) => {
      return [
        {
          text: text,
          index: index,
          key: String(a),
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
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            placeholder="Товар"
          />
          <TextInput
            style={styles.input2}
            onChangeText={onChangeChek}
            placeholder="Цена"
          />
        </View>

        <View style={{ marginHorizontal: "20%" }}>
          <Button
            title="Добавить товар"
            onPress={() => addHandler(text, Number(index))}
          />
        </View>
      </View>
      <View style={{ height: 350 }}>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{ width: "70%" }}
                onPress={() => sumindex(item.index)}
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

      <View style={styles.head}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: 300 }}>
            <Text style={{ textAlign: "center", fontSize: 18 }}>{sum}</Text>
          </View>

          <Button title="Купить" onPress={() => setsum(0)} />
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
  input: {
    borderColor: "gray",

    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: "5%",
    width: "50%",
  },
  input2: {
    borderColor: "gray",

    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: "5%",
    width: "30%",
  },
});

export default Lab1;
