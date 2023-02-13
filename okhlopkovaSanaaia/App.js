import { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from "react-native";

const getCats = () => {
  let cats = [];
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

const App = () => {
  const cats = getCats();
  const [catIndex, setCatIndex] = useState(0);

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
          let randomIndex = Math.floor(Math.random() * cats.length);
          setCatIndex(randomIndex);
        }}
      >
        <Text style={styles.text}>See another one!</Text>
      </TouchableOpacity>
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

export default App;
