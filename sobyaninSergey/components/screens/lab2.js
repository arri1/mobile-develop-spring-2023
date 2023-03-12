import { useState, useEffect } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet } from "react-native";

var styles = StyleSheet.create({
  buttons: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 50,
    backgroundColor: "#007FFF",
    borderRadius: 100,
    marginTop: 10,
  },
  buttonsText: {
    fontWeight: "bold",
    color: "white",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    maxWidth: 250,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});

const Lab2 = () => {
  const [recourceType, setRecourceType] = useState("photos");
  const [index, setIndex] = useState("1");
  const [items, setItems] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${recourceType}/${index}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [recourceType]);

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            setIndex(Math.floor(Math.random() * 100) + 1);
            setRecourceType("photos");
          }}
          style={styles.buttons}
        >
          <Text style={styles.buttonsText}>PHOTOS</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setIndex(Math.floor(Math.random() * 100) + 1);
            setRecourceType("albums");
          }}
          style={styles.buttons}
        >
          <Text style={styles.buttonsText}>ALBUMS</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          marginTop: 10,
          fontWeight: "bold",
          fontStyle: "italic",
          color: "white",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          maxWidth: 250,
        }}
      >
        {recourceType} title: {JSON.stringify(items["title"])}
      </Text>
    </View>
  );
};

export default Lab2;
