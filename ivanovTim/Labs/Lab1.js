import { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../store/Slice';

const colors = ["red", "green", "blue"];
const moreColors = ["pink", "cyan", "purple"];

const Lab1 = () => {
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);
  const [moreColorsIndex, setmoreColorsIndex] = useState(0);
  const count = useSelector((state) => state.Lab1.value);
  const dispatch = useDispatch();

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
            dispatch(increment());
          }}
          style={{
            marginTop: 10,
            borderRadius: 10,
            height: 50,
            backgroundColor: colors[(backgroundColorIndex + 1) % colors.length],
          }}
        />
        <Text style={{ color: "white", fontSize: 20, fontWeight: "800" }}>
          Change color
        </Text>
        <TouchableOpacity
          onPress={() => {
            setBackgroundColorIndex((backgroundColorIndex + 1) % colors.length);
          }}
          style={{
            marginTop: 10,
            borderRadius: 10,
            height: 50,
            backgroundColor: colors[(backgroundColorIndex + 1) % colors.length],
          }}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: moreColors[(moreColorsIndex)], fontSize: 20, fontWeight: "800" }}>
            Very useful button
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setmoreColorsIndex((moreColorsIndex + 1) % moreColors.length);
          }}
          style={{
            marginTop: 10,
            borderRadius: 10,
            height: 50,
            backgroundColor: "black",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Lab1;
