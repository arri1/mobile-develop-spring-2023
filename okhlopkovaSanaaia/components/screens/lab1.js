import { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getFacts } from "../../store";

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

  const counter = useSelector((state) => state.counter.value);

  const facts = useSelector((state) => state.cat.facts);

  console.log('lab1',facts)

  useEffect(() => {
    dispatch(getFacts());
  }, []);

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
      <Text style={{ color: "white", fontSize: 24, marginTop: 20 }}>
        {counter}
      </Text>
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
    marginTop: 20,
    padding: 10,
    backgroundColor: "green",
    borderRadius: 10,
  },
});

export default Lab1;
