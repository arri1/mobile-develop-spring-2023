import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useState } from "react";
import { SketchPicker } from "react-color";

const Lab1 = () => {
  const [color, setColor] = useState("#ff0000");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Change color</Text>
      <SketchPicker
        color={color}
        onChangeComplete={(color) => {
          setColor(color.hex);
        }}
      />
      <View
        style={{
          marginTop: "20px",
          borderRadius: 1,
          overflow: "hidden",
          borderColor: "#000000",
          backgroundColor: color,
          height: "200px",
          width: "300px",
        }}
      >
        <Text style={styles.text}>Hello world!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C3B7B7",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000000",
    fontSize: 24,
    alignSelf: "center",
  },
});

export default Lab1;
