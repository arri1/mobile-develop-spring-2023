import { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";

const Lab2 = () => {
  const [recourceType, setRecourceType] = useState("img");
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
      <Text>
        {recourceType} title: {JSON.stringify(items["title"])}
      </Text>
    </View>
  );
};

export default Lab2;