import React from "react";
import { View } from "react-native";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Lab5 = () => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <Counter />
      </Provider>
    </View>
  );
};

export default Lab5;
