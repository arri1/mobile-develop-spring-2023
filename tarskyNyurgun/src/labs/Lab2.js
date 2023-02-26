import React from "react";
import { Text, View } from "react-native";

const Lab2 = ({ navigation }) => {
  return (
    <View>
      <Text
        onPress={() => navigation.navigate("Lab1")}
        style={{ fontSize: 26 }}
      >
        Lab1
      </Text>
    </View>
  );
};

export { Lab2 };
