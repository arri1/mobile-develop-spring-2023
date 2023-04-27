import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { increment, decrement } from "../features/counter/counterSlice.js";
import { useDispatch, useSelector } from "react-redux";

const SomeState = () => {
  const [incrementState, setIncrementState] = useState(0);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <View style={styles.buttons}>
      <Text style={styles.title}>{counter}</Text>
      <Button onPress={() => dispatch(increment())} title={"Click me"} />
      <Button
        style={styles.donttouch}
        onPress={() => dispatch(decrement())}
        title={"Don't click me"}
      />
    </View>
  );
};

const Lab4 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/ab/Diamond_JE3_BE3.png/revision/latest/thumbnail/width/360/height/360?cb=20200325185152",
        }}
        style={styles.image}
      />
      <SomeState />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    alignContent: "center",
  },

  title: {
    textAlign: "center",
    color: "#FF0000",
    fontWeight: "bold",
    fontSize: 50,
    marginTop: 50,
    paddingBottom: 50,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  buttons: {
    marginBottom: 30,
  },

  donttouch: {
    marginBottom: 50,
  },
});

export { Lab4 };
