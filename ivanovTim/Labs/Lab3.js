import { useState, useMemo } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

const Lab3 = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const memoCount = useMemo(() => {
    const result = countA + countB;
    return result;
  }, [countA, countB]);
  
  return (
    <SafeAreaView
      style={{
        backgroundColor: "grey",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View style={{ margin: 30 }}>

        <View style={{ alignItems: "baseline" }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "800" }}>
            A = {countA}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setCountA(countA + 1);
          }}
          style={{
            marginTop: 10,
            borderRadius: 10,
            height: 50,
            backgroundColor: "white",
          }}
        />

        <View style={{ alignItems: "baseline" }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "800" }}>
            B = {countB}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setCountB(countB + 1);
          }}
          style={{
            marginTop: 10,
            borderRadius: 10,
            height: 50,
            backgroundColor: "white",
          }}
        />

        <View style={{ alignItems: "baseline" }}>
          <Text style={{ color: "white", fontSize: 50, fontWeight: "800" }}>Sum = {memoCount}</Text>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Lab3;
