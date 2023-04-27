import React, { useState, useMemo } from "react";
import { View, TouchableOpacity, Text } from "react-native";

const Lab3 = () => {
  const [count, setCount] = useState(0);

  const memoizedCount = useMemo(() => {
    return count * 2;
  }, [count]);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 50 }}>{memoizedCount}</Text>
      {count >= 10 ? (
        <Text
          style={{
            color: "green",
            fontSize: 20,
            fontWeight: "bold",
            letterSpacing: 0.25,
          }}
        >
          Goal reached!
        </Text>
      ) : null}
      <TouchableOpacity
        onPress={handleIncrement}
        style={{
          backgroundColor: "green",
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            letterSpacing: 0.25,
          }}
        >
          Increment
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleDecrement}
        style={{
          backgroundColor: "red",
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            letterSpacing: 0.25,
          }}
        >
          Decrement
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Lab3;