import React, { useState, useEffect } from "react";
import { Text, View, Image, Button, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

const Lab2 = ({ navigation }) => {
  const [facts, setFacts] = useState([]);

  const getFacts = async () => {
    axios
      .get(
        "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=3"
      )
      .then((responce) => {
        console.log(responce.data);
        setFacts(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getFacts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://images.vexels.com/media/users/3/182772/isolated/preview/233413fffff56ec1891220f8e964d401-silhouette-cat-cat.png",
        }}
        style={styles.image}
      />
      <Text style={{ fontSize: 36, fontWeight: "bold", textAlign: "center" }}>
        Random stuff
      </Text>
      <FlatList
        style={styles.list}
        data={facts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Text style={styles.text}>{item.text}</Text>}
      />
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
  list: {
    marginTop: 40,
    padding: 10,
    flex: 1,
  },
  text: {
    marginBottom: 20,
    fontSize: 20,
  },
  image: {
    width: 250,
    height: 250,
    alignContent: "center",
  },
});

export { Lab2 };
