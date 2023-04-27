import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
const bg_colors = ["#dbdbdb", "#151719"];
const text_color = ["black", "chocolate"];

const Lab2 = () => {
  const src1 =
    "https://i.pinimg.com/originals/4f/c9/81/4fc981a8d2c3d6eead0c3dfc27b5904a.gif";
  const src2 = "https://i.gifer.com/5NIq.gif";
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const [link, setLink] = useState(src1);
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);
  const getData = () => {
    if (dark) {
      setLink(src2);
      setBackgroundColorIndex(1);
    } else {
      setLink(src1);
      setBackgroundColorIndex(0);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <SafeAreaView
      style={{
        backgroundColor: bg_colors[backgroundColorIndex],
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: text_color[backgroundColorIndex],
          fontSize: 20,
          marginBottom: 10,
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        You changed bg {count} times
      </Text>
      <ImageBackground
        source={{ uri: `${link}` }}
        style={{ width: "100%", height: "80%" }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setDark(!dark);
            setCount(count + 1);
          }}
        >
          <Text
            style={{
              color: text_color[backgroundColorIndex],
              fontSize: 20,
              marginBottom: 5,
              alignSelf: "center",
            }}
          >
            Change background
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#efc751",
    fontSize: 20,
    marginBottom: 20,
    alignSelf: "center",
  },
  button: {
    position: "absolute",
    bottom: 0,
    left: 80,
    marginBottom: 2,
    padding: 10,
    backgroundColor: "yellow",
    borderRadius: 10,
  },
});

export default Lab2;
