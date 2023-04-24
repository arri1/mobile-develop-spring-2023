import React, { useState, useEffect } from "react";
import { Text, View, Button, FlatList, StyleSheet } from "react-native";
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
    <SafeAreaView style={{ flex: 1 }}>
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
  list: {
    marginTop: 40,
    padding: 10,
    flex: 1,
  },
  text: {
    marginBottom: 20,
    fontSize: 20,
  },
});

export { Lab2 };
