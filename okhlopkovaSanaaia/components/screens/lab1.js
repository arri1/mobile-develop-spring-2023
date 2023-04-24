import { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";
import { counterSlice } from "../../store";

const getCats = () => {
  const cats = [];
  for (let i = 400; i < 419; i++) {
    cats.push(i);
  }
  for (let i = 420; i < 427; i++) {
    cats.push(i);
  }
  for (let i = 506; i < 512; i++) {
    cats.push(i);
  }
  return cats;
};

const Lab1 = () => {
  const cats = getCats();
  const [catIndex, setCatIndex] = useState(0);

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>HTTP Status Cats</Text>
      </View>
      <Image
        style={styles.image}
        source={{ uri: `https://http.cat/${cats[catIndex]}.jpg` }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const randomIndex = Math.floor(Math.random() * cats.length);
          setCatIndex(randomIndex);
        }}
      >
        <Text style={styles.text}>See another one!</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonBadge}
          onPress={() => {
            dispatch(counterSlice.actions.increment());
          }}
        >
          <Text style={styles.text}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonBadge}
          onPress={() => {
            dispatch(counterSlice.actions.decrement());
          }}
        >
          <Text style={styles.text}>-1</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    marginBottom: 20,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    alignSelf: "center",
  },
  image: {
    width: 300,
    height: 375,
  },
  button: {
    width: 230,
    height: 50,
    padding: 10,
    backgroundColor: "#1785e5",
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 30,
  },
  buttonBadge: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#1785e5",
    borderRadius: 50,
    marginHorizontal: 20,
  },
});

export default Lab1;
