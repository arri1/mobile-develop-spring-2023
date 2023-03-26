import { useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { defaultMode, darkMode } from "../../features/darkmode/DarkModeSlice";
import { DARK_MODE } from "./DarkModeConstStates";

const DarkModeButton = () => {
  const [isDarkMode, SetIsDarkMode] = useState(false);
  const DarkModeHandler = () => {
    if (!isDarkMode) dispatch(darkMode());
    else dispatch(defaultMode());

    SetIsDarkMode(!isDarkMode);
  };

  const darkModeState = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Button
        title={darkModeState == DARK_MODE ? "Default mode" : "Dark mode"}
        onPress={DarkModeHandler}
        style={styles.button}
      />
    </View>
  );
};

export default DarkModeButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
