import { TouchableOpacity, View, Dimensions, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { sizeSlice } from "../../store";

const Lab1 = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const dispatch = useDispatch();
  const size = useSelector((state) => state.size.value);

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
          }
          dispatch(sizeSlice.actions.increment());
        }}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: "#556097",
        }}
      />
      <Text
        style={{
          marginTop: 10,
          fontWeight: "bold",
          fontStyle: "italic",
          color: "white",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          maxWidth: 250,
          fontSize: 16,
        }}
      >
        Размер круга: {size}
      </Text>
    </View>
  );
};

export default Lab1;
