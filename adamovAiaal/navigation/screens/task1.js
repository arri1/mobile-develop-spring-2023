import { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

const colors = ["pink", "grey", "green", "khaki"];

const Task1 = (navigation) => {
  const [count, setCount] = useState(0);
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors[backgroundColorIndex],
        justifyContent: "center",
        flex: 1,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "800" }}>
          {count}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            setCount(count - 1);
          }}
          style={{
            paddingHorizontal: 8,
            paddingVertical: 10,
            borderRadius: 10,
            minWidth: "50%",
            alignItems: "center",
            backgroundColor: colors[(backgroundColorIndex + 1) % colors.length],
          }}
        >
          <Text style={{ color: "white" }}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCount(count + 1);
          }}
          style={{
            paddingHorizontal: 8,
            paddingVertical: 10,
            borderRadius: 10,
            minWidth: "50%",
            alignItems: "center",
            backgroundColor: colors[(backgroundColorIndex + 1) % colors.length],
          }}
        >
          <Text style={{ color: "white" }}>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setBackgroundColorIndex((backgroundColorIndex + 1) % colors.length);
          }}
          style={{
            marginTop: 10,
            borderRadius: 10,
            height: 40,
            backgroundColor: colors[(backgroundColorIndex + 1) % colors.length],
          }}
        ></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Task1;
