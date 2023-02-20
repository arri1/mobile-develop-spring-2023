import { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";

const Lab2 = () => {
  const [recourceType, setRecourceType] = useState("");
  const [index, setIndex] = useState("1");
  const [items, setItems] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${recourceType}/${index}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [recourceType]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        
      }}
    >
      <Button
        onPress={() => {
          setRecourceType("photos");
          setIndex(Math.floor(Math.random() * 100) + 1);
        }}
        title="photos"
      />
      <Button
        onPress={() => {
          setRecourceType("albums");
          setIndex(Math.floor(Math.random() * 100) + 1);
        }}
        title="albums"
      />
      <Text></Text>
      <Text>{recourceType} title: {JSON.stringify(items["title"])}</Text>
    </View>
  );
};

export default Lab2;
