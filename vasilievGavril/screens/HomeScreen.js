import React, { useMemo, useState, useEffect } from "react";
import {
  Modal,
  StyleSheet,
  Button,
  Text,
  Pressable,
  SafeAreaView,
  View,
  Image,
  Alert,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

function complexCompure(num) {
  console.log("complexCompute");
  let i = 0;
  while (i < 100000000) i++;
  return num * 2;
}

const HomeScreen = (props) => {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles2 = useMemo(
    () => ({
      color: colored ? "darkred" : "black",
    }),
    [colored]
  );

  const computed = useMemo(() => {
    return complexCompure(number);
  }, [number]);

  useEffect(() => {
    console.log("Styles changed");
  }, [styles2]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Это кошка?</Text>
      <Image style={styles.image_cat} source={require("../assets/cat.png")} />

      <Separator />

      <View style={styles.fixToText}>
        <Button
          title="да"
          onPress={() => Alert.alert("правильно, это кошка)")}
        />
        <Button
          title="нет"
          onPress={() => Alert.alert("неправильно, это кот)")}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles2}>Вычисляемое свойство: {computed}</Text>
        <Button
          title="Добавить"
          onPress={() => setNumber((prev) => prev + 1)}
        />
        <Button title="Убрать" onPress={() => setNumber((prev) => prev - 1)} />

        <Button title="Изменить" onPress={() => setColored((prev) => !prev)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },

  image_cat: {
    alignItems: "center",
    width: 160,
    height: 100,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default HomeScreen;
