import { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";

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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Button
          onPress={() => {
            setIndex(Math.floor(Math.random() * 100) + 1);
            setRecourceType("photos");
          }}
          title="photos"
        />
      </View>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Button
          onPress={() => {
            setIndex(Math.floor(Math.random() * 100) + 1);
            setRecourceType("albums");
          }}
          title="albums"
        />
      </View>
      <Text
        style={{
          marginTop: 10,
          fontWeight: "bold",
          fontStyle: "italic",
          color: "white",
        }}
      >
        {recourceType} title: {JSON.stringify(items["title"])}
      </Text>
    </View>
  );
};

export default Lab2;
