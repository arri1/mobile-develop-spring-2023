import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StatusBar, StyleSheet } from "react-native";

const Lab2 = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  useEffect(() => {
    StatusBar.setBackgroundColor(backgroundColor);
  }, [backgroundColor]);

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor,
      }}
    >
      <TouchableOpacity
        onPress={() => handleColorChange("white")}
        style={styles.commonButton}
      >
        <Text style={styles.commonText}>White</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleColorChange("red")}
        style={styles.commonButton}
      >
        <Text style={styles.commonText}>Red</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleColorChange("green")}
        style={styles.commonButton}
      >
        <Text style={styles.commonText}>Green</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleColorChange("blue")}
        style={styles.commonButton}
      >
        <Text style={styles.commonText}>Blue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  commonButton: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    borderRadius: 4,
    backgroundColor: "pink",
    width: 200,
    height: 80,
  },
  commonText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Lab2;
