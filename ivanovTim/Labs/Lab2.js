import { useState, useEffect } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

const colors = ["black", "white"];
const diffColors = ["pink", "cyan", "purple"];

const Lab2 = () => {
  const [count, setCount] = useState(0);
  const [backgroundColorIndex] = useState(0);
  const [diffColorsIndex, setDiffColorsIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.warn(`You clicked ${count} times`);
    }, 1000);
  });
  
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors[backgroundColorIndex],
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View style={{ margin: 30 }}>
        <View style={{ alignItems: "baseline" }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "800" }}>
            Counter: {count}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setCount(count + 1);
          }}
          style={{
            marginTop: 10,
            borderRadius: 10,
            height: 50,
            backgroundColor: colors[(backgroundColorIndex + 1)],
          }}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: diffColors[(diffColorsIndex)], fontSize: 20, fontWeight: "800" }}>
            Very useful button
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setDiffColorsIndex((diffColorsIndex + 1) % diffColors.length);
          }}
          style={{
            marginTop: 10,
            borderRadius: 10,
            height: 50,
            backgroundColor: "white",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Lab2;
