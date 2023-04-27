import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { Button } from "react-native";

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        I {props.name}, and I {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        style={styles.commonButton}
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Give me some food!" : "Thank you very much!"}
      />
    </View>
  );
};

const lab1 = () => {
  return (
    <>
      <Cat name="Andrew" />
    </>
  );
};

const styles = StyleSheet.create({
  commonButton: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    borderRadius: 1,
    backgroundColor: "blue",
    width: 100,
    height: 80,
  },
});

export default lab1;