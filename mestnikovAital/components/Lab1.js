import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";

const Lab1 = () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Use state example</Text>
        <Text style={styles.text}>Image №{count}</Text>
      </View>
      <Image
        style={styles.image}
        source={{ uri: `https://picsum.photos/${count + 200}` }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setCount(count + 1);
        }}
      >
        <Text style={styles.text}>Get image</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#720303",
    fontSize: 24,
    alignSelf: "center",
  },
  image: {
    marginTop: 10,
    width: 300,
    height: 300,
  },
  button: {
    marginTop: 10,
    marginBottom: 50,
    padding: 10,
    backgroundColor: "yellow",
    borderRadius: 10,
  },
});

export default Lab1;