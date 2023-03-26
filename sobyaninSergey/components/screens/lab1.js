import { useState } from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";
import { useDispatch } from "react-redux";
import { sizeSlice } from "../../store";

const Lab1 = () => {
  const [size, setSize] = useState(100);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e2140",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          if (size > windowWidth || size > windowHeight) {
            dispatch(sizeSlice.actions.decrement());
            return setSize(100);
          }
          dispatch(sizeSlice.actions.increment());
          return setSize(size + 50);
        }}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: "#556097",
        }}
      />
    </View>
  );
};

export default Lab1;
